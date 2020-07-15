import {
  LOGIN,
  LOGOUT,
  GET_INITIAL_STATE,
  LOADING_START,
  LOADING_END,
  INITIALIZED,
} from "../constants/actionTypes";

export const getInitialState = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_START });
    try {
      const res = await fetch("/api/session", {
        method: "GET",
      });
      if (res.ok) {
        const json = await res.json();
        dispatch({
          type: GET_INITIAL_STATE,
          payload: { studentID: json.userID, isLogin: true },
        });
      } else {
        // type login fail
        // redirect to login
        // window.location = "/login";
      }
      dispatch({ type: INITIALIZED });
      dispatch({ type: LOADING_END });
    } catch (e) {
      // redirect to error page
      window.location = "/";
    }
  };
};

export const login = ({ id, password }) => {
  return async (dispatch) => {
    // fetch api to check login
    try {
      const res = await fetch("/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `userID=${id}&password=${password}`,
        credentials: "include",
      });
      if (res.ok) {
        const json = await res.json();
        dispatch({
          type: LOGIN,
          payload: {
            isLogin: true,
            studentID: json.userID,
          },
        });
      } else {
        // dispatch sign in fail
        window.location = "/";
      }
    } catch (e) {
      // redirect error page
      window.location = "/";
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    // fetch api to logout
    try {
      await fetch("/api/session", {
        method: "DELETE",
      });
      dispatch({ type: LOGOUT });
    } catch (e) {
      // redirect error page
      window.location = "/";
    }
  };
};
