import { API_ERROR, LOGIN } from "../../utils/ActionCreator_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        currentLogin: action.user,
        isAuth: true,
        errorMessage: "", 
      };
    }

    case API_ERROR: {
      return {
        ...state,
        errorMessage: action.message, 
        isAuth: false, 
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
