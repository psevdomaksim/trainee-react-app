import { checkAuth, login, logout, signup } from "../../http/authApi.js";
import { API_ERROR, CLEAR_API_ERROR, LOGIN, LOGOUT } from "../../utils/ActionCreator_consts.js";

export const loginActionCreator = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const logoutActionCreator = () => {
  return {
    type: LOGOUT,
  };
};

export const apiErrorActionCreator = (errors) => {
 
  return {
    type: API_ERROR,
    errors: errors,
  };
};

export const clearApiErrorActionCreator = () => {
  return {
    type: CLEAR_API_ERROR,
  };
};

export const loginThunkCreator = (username, password) => {
  return (dispatch) => {
    return login({ username, password })
      .then((user) => {
        dispatch(loginActionCreator(user));
      })
      .catch((err) => {
        dispatch(apiErrorActionCreator(err.response?.data?.errors));
      });
  };
};

export const setLoginThunkCreator = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      checkAuth()
        .then((user) => {
          dispatch(loginActionCreator(user));
        })
        .catch((err) => {
          dispatch(apiErrorActionCreator(err.response?.data?.errors));
        });
    }
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    return logout().then(() => {
      dispatch(logoutActionCreator());
    });
  };
};



export const signupThunkCreator = (username, password, repeatedPassword, firstname, lastname, age) => {
  return (dispatch) => {
    return signup({ username, password, repeatedPassword, firstname, lastname, age })
      .then((user) => {
        dispatch(loginActionCreator(user));
      })
      .catch((err) => {
        dispatch(apiErrorActionCreator(err.response?.data?.errors));
      });
  };
};
