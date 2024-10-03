import { $host } from "./http";
import { jwtDecode } from "jwt-decode";

export const login = async ({ username, password }) => {
  const { data } = await $host.post("api/auth/login", {
    username,
    password,
  });

  localStorage.setItem("token", data.accessToken);
  return jwtDecode(data.accessToken);
};

export const signup = async (
{  username,
  password,
  repeatedPassword,
  firstname,
  lastname,
  age}
) => {
  const { data } = await $host.post("api/auth/signup", {
    username,
    password,
    repeatedPassword,
    firstname,
    lastname,
    age,
  });
  localStorage.setItem("token", data.accessToken);
  return jwtDecode(data.accessToken);
};

export const logout = async () => {
  await $host.post("/api/auth/logout");
  localStorage.removeItem("token");
};

export const checkAuth = async () => {
  const { data } = await $host.post("api/auth/refresh");
  localStorage.setItem("token", data.accessToken);
  return jwtDecode(data.accessToken);
};
