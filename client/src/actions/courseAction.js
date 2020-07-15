import {
  GET_ALL_COURSE,
  GET_COURSE_SELECTION,
  UPDATE_SELECTION,
  LOADING_START,
  LOADING_END,
} from "../constants/actionTypes";

export const getAllCourse = () => {
  return async (dispatch) => {
    // fetch api to get all course
    dispatch({ type: LOADING_START });
    try {
      const res = await fetch("/api/courses", { method: "GET" });
      if (res.ok) {
        const json = await res.json();
        dispatch({
          type: GET_ALL_COURSE,
          // payload for example
          payload: json,
        });
      } else {
        // redirect to login page
        window.location = "/";
      }
      dispatch({ type: LOADING_END });
    } catch (e) {
      // redirect to error page
      window.location = "/";
    }
  };
};

export const getCourseSelection = (id) => {
  return async (dispatch) => {
    // fetch api to get a user's course selection
    dispatch({ type: LOADING_START });
    try {
      const res = await fetch(`/api/selections/${id}`, { method: "GET" });
      if (res.ok) {
        const { name, type, selected, unselected } = await res.json();
        dispatch({
          type: GET_COURSE_SELECTION,
          payload: {
            name,
            grade: type,
            selected,
            unselected,
          },
        });
      } else {
        // redirect to login
        window.location = "/";
      }
      dispatch({ type: LOADING_END });
    } catch (e) {
      // redirect to error page
      window.location = "/";
    }
  };
};

export const updateCourseSelection = (selection) => ({
  type: UPDATE_SELECTION,
  payload: selection,
});

export const saveSelection = (courseID, selected) => {
  return async () => {
    try {
      const res = await fetch(`/api/selections/${courseID}`, {
        method: "PUT",
        body: JSON.stringify(selected),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        // saved
      } else {
        // redirect to error page
        window.location = "/";
      }
    } catch (e) {
      // redirect to error page
      window.location = "/";
    }
  };
};
