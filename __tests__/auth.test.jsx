import React from "react";
import Login from "../src/pages/Login/Login";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { login } from "../src/http/authApi";
import { MemoryRouter } from "react-router-dom";

const thunk = require("redux-thunk").thunk;

// Create a mock store with thunk middleware
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Mock the login API function
jest.mock("../src/http/authApi", () => ({
  login: jest.fn(),
}));

describe("Login Component", () => {
  let store;

  beforeEach(() => {
    // Initialize the mock store before each test
    store = mockStore({
      authPage: { errorMessage: "" },
    });
    store.clearActions(); // Clear any previous actions
  });

  test("should dispatch login success action on successful login", async () => {
    // Mock successful login response
    const mockUser = { username: "john" };
    login.mockResolvedValue(mockUser); // Mocking the login function to resolve with a user object

    // Render the Login component wrapped in the Provider

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "john" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });

    // Simulate clicking the login button
    fireEvent.click(screen.getByTestId("login-button"));

    // Wait for the dispatch actions to be resolved
    const actions = await store.getActions(); // Ensure to await if using async actions

    expect(actions).toEqual(
      expect.arrayContaining([
        { type: "LOGIN", user: mockUser }, // Expect the login success action
      ])
    );
  });

  test("should dispatch API_ERROR action on failed login", async () => {
    const errorMessage = "Invalid credentials";

    // Mock the rejected login response
    login.mockRejectedValueOnce({
      response: {
        data: { errors: { username: errorMessage, password: errorMessage } },
      },
    });

    // Render the Login component

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByTestId("login-button"));

    // Wait for the dispatch actions to be resolved
    await new Promise((resolve) => setTimeout(resolve, 0)); // Ensure all promises in the dispatch chain are resolved

    const actions = store.getActions(); // Fetch dispatched actions after resolving the promises

    // Check that the error action is dispatched with the correct message
    expect(actions).toEqual(
      expect.arrayContaining([
        {
          type: "API_ERROR",
          errors: { username: errorMessage, password: errorMessage },
        },
      ])
    );
  });
});
