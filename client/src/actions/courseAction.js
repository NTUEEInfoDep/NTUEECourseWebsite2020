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
      }
      dispatch({ type: LOADING_END });
    } catch (e) {
      // redirect to error page
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
        const json = await res.json();
        dispatch({
          type: GET_COURSE_SELECTION,
          payload: {
            name: json.name,
            grade: json.type,
            selected: json.selected.map((el) => el.name),
            unselected: json.unselected.map((el) => el.name),
          },
        });
      } else {
        // redirect to login
      }
      dispatch({ type: LOADING_END });
    } catch (e) {
      // redirect to error page
    }
  };
};

export const updateCourseSelection = (selection) => ({
  type: UPDATE_SELECTION,
  payload: selection,
});
