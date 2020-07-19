import {
  LOADING_START,
  LOADING_END,
  SELECT_GRADE,
  LOGIN_ERROR,
  SYSTEM_NOTOPEN,
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOADING_END: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SELECT_GRADE: {
      return {
        ...state,
        selectedGrade: action.payload.selectedGrade,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload.loginError,
      };
    }
    case SYSTEM_NOTOPEN: {
      return {
        ...state,
        systemNotOpen: true,
      };
    }
    default:
      return state;
  }
};
