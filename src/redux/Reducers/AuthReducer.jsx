import {
  API_ERROR,
  CLEAR_API_ERROR,
  LOGIN,
  LOGOUT,
} from "../../utils/ActionCreator_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  errors: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        currentLogin: action.user,
        isAuth: true,
        errors: {},
      };
    }

    case LOGOUT: {
      return {
        currentLogin: null,
        isAuth: false,
        errors: {},
      };
    }

    case API_ERROR: {
      return {
        ...state,
        errors: action.errors,
        isAuth: false,
      };
    }

    case CLEAR_API_ERROR: {
      return {
        ...state,
        errors: {},
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
