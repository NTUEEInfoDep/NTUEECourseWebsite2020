import {
  LOGIN,
  LOGOUT,
  GET_INITIAL_STATE,
  INITIALIZED,
  LOGIN_ERROR,
  SYSTEM_NOTOPEN,
} from "../constants/actionTypes";

export const getInitialState = () => {
  return async (dispatch) => {
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
      } else if (res.status === 403) {
        // redirect to login (403) (login fail)
      } else if (res.status === 503) {
        // redirect to unavailable page (503)
        dispatch({ type: SYSTEM_NOTOPEN });
      }
      dispatch({ type: INITIALIZED });
    } catch (e) {
      // redirect to server error page
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
      } else if (res.status === 503) {
        // redirect to unavailable
        dispatch({ type: SYSTEM_NOTOPEN });
      } else {
        // dispatch sign in fail
        dispatch({ type: LOGIN_ERROR, payload: { loginError: true } });
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
