import { $host } from "./http";
import { jwtDecode } from "jwt-decode";

export const login = async ({ username, password }) => {
  const { data } = await $host.post("api/auth/login", {
    username,
    password,
  });

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return jwtDecode(data.accessToken);
};

export const signup = async ({
  username,
  password,
  repeatedPassword,
  firstname,
  lastname,
  age,
}) => {
  const { data } = await $host.post("api/auth/signup", {
    username,
    password,
    repeatedPassword,
    firstname,
    lastname,
    age,
  });
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return jwtDecode(data.accessToken);
};

export const logout = async () => {
  const { data } = await $host.post("api/auth/logout");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  return data;
};

export const checkAuth = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  const { data } = await $host.post("api/auth/refresh", {
    token: refreshToken,
  });


  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return jwtDecode(data.accessToken);
};
