import { users } from "../../db";
import { API_ERROR, LOGIN } from "../../utils/AC_consts";

export const loginAC = (username, password) => {
  const findUser = users.find((el) => {
    return el.username === username && el.password === password;
  });

  if (findUser === undefined) {
    return {
      type: API_ERROR,
      message: "User with this data not found",
    };
  }

  return {
    type: LOGIN,
    user: { username, password },
  };
};
