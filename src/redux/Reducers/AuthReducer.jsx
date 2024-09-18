import { API_ERROR, LOGIN } from "../../utils/AC_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      state = {
        ...state,
        currentLogin: action.user,
        isAuth: true,
      };
      return state;
    }

    case API_ERROR: {
      state = {
        ...state,
        errorMessage: action.message,
      };
      return state;
    }

    default:
      return state;
  }
};

export default AuthReducer;
