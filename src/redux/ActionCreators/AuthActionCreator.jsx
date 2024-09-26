import { fetchOneUserByLogin, login } from "../../http/authApi.js";
import { API_ERROR, LOGIN } from "../../utils/actionCreator_consts";

export const loginActionCreator = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const loginThunkCreator = (username, password) => {
  return (dispatch) => {
    return login({ username, password })  // Return the promise for better chaining in the test
      .then((user) => {
        dispatch(loginActionCreator(user));
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || 'Unknown error'; // Safeguard against undefined errors
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
