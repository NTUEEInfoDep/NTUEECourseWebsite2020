import {
  LOGIN,
  LOGOUT,
  GET_INITIAL_STATE,
  LOADING_START,
  LOADING_END,
} from "../constants/actionTypes";

export const getInitialState = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_START });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: GET_INITIAL_STATE,
      payload: { studentID: "", isLogin: false },
    });
    dispatch({ type: LOADING_END });
  };
};

export const login = ({ id, password }) => {
  return (dispatch) => {
    // return a function since this is async function
    // fetch api to check login
    setTimeout(() => {
      dispatch({
        type: LOGIN,
        payload: {
          isLogin: true,
          sessionID: "abcdefg",
          studentID: "b07901016",
        },
      });
    }, 1000);
  };
};

export const logout = () => {
  return (dispatch) => {
    // fetch api to logout
    setTimeout(() => {
      dispatch({
        type: LOGOUT,
      });
    }, 1000);
  };
};
