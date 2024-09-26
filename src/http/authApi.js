import { $host } from "./http";

export const login = async (userData) => {
  const { data } = await $host({
    method: "POST",
    url: `/login`,
    data: userData,
  });
  return data;
};
