// Reducer that control session (login, logout)
import {
  LOGIN,
  LOGOUT,
  GET_INITIAL_STATE,
  INITIALIZED,
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_INITIAL_STATE: {
      return {
        ...state,
        studentID: action.payload.studentID,
        isLogin: action.payload.isLogin,
      };
    }
    case INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    case LOGIN: {
      return {
        ...state,
        isLogin: action.payload.isLogin,
        studentID: action.payload.studentID,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLogin: false,
        sessionID: "",
        studentID: "",
      };
    }
    default:
      return state;
  }
};
