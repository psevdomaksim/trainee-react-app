import { users } from "../../db";
import { API_ERROR, LOGIN } from "../../utils/ActionCreator_consts";

export const loginActionCreator = (username, password) => {
  const findUser = users.find((el) => {
    return el.username === username && el.password === password;
  });

  if (findUser === undefined) {
    return apiErrorActionCreator("User with this data not found");
  }

  return {
    type: LOGIN,
    user: { username, password },
  };
};

export const apiErrorActionCreator = (msg) => {
  return {
    type: API_ERROR,
    message: msg,
  };
};
