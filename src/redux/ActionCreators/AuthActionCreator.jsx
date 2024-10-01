import { login } from "../../http/authApi.js";
import { API_ERROR, LOGIN } from "../../utils/ActionCreator_consts.js";

export const loginActionCreator = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const loginThunkCreator = (username, password) => {
  return (dispatch) => {
    return login({ username, password })
      .then((user) => {
        dispatch(loginActionCreator(user));
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "Unknown error";
        dispatch(apiErrorActionCreator(errorMessage));
      });
  };
};

export const apiErrorActionCreator = (msg) => {
  return {
    type: API_ERROR,
    message: msg,
  };
};
