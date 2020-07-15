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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: GET_ALL_COURSE,
      // payload for example
      payload: {
        1: [
          {
            name: "電路學",
            courseID: "4567",
          },
        ],
        2: [
          {
            name: "電子學",
            courseID: "12345",
          },
          {
            name: "電詞學",
            courseID: "8787878",
          },
        ],
        3: [
          {
            name: "演算法",
            courseID: "7122",
          },
        ],
        4: [
          {
            name: "電子學實驗",
            courseID: "12345",
          },
          {
            name: "十選二實驗",
            courseID: "03734301",
          },
        ],
      },
    });
    dispatch({ type: LOADING_END });
  };
};

export const getCourseSelection = () => {
  return async (dispatch) => {
    // fetch api to get a user's course selection
    dispatch({ type: LOADING_START });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: GET_COURSE_SELECTION,
      // payload for example
      payload: {
        name: "電子學",
        grade: 2,
        selected: ["嵌入是", "生醫"],
        unselected: ["電力", "電子", "微波"],
      },
    });
    dispatch({ type: LOADING_END });
  };
};

export const updateCourseSelection = (selection) => ({
  type: UPDATE_SELECTION,
  payload: selection,
});
