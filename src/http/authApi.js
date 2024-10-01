import { $host } from "./http";

export const login = async ({username,password}) => {
  const { data } = await $host.post("api/login", {
    username,
    password,
  });
  return data;
};
