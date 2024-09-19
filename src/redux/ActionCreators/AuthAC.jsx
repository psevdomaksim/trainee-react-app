import { users } from "../../db";
import { API_ERROR, LOGIN } from "../../utils/AC_consts";

export const loginAC = (username, password) => {
  const findUser = users.find((el) => {
    return el.username === username && el.password === password;
  });

  if (findUser === undefined) {
    return apiErrorAC("User with this data not found");
  }

  return {
    type: LOGIN,
    user: { username, password },
  };
};

export const apiErrorAC = (msg) => {
  return {
    type: API_ERROR,
    message: msg,
  };
};
