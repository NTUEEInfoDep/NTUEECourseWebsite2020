// Reducer that control session (login, logout)
import { LOGIN, LOGOUT, GET_INITIAL_STATE } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_INITIAL_STATE: {
      return {
        ...state,
        studentID: action.payload.studentID,
        isLogin: action.payload.studentID,
      };
    }
    case LOGIN: {
      return {
        ...state,
        isLogin: action.payload.isLogin,
        sessionID: action.payload.sessionID,
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
