import {
  GET_ALL_COURSE,
  GET_COURSE_SELECTION,
  UPDATE_SELECTION,
} from "../constants/actionTypes";

export const getAllCourse = () => {
  return (dispatch) => {
    // fetch api to get all course
    setTimeout(() => {
      dispatch({
        type: GET_ALL_COURSE,
        // payload for example
        payload: [
          {
            name: "電子學",
            courseID: "86103",
            grade: 2,
          },
          {
            name: "演算法",
            courseID: "86104",
            grade: 3,
          },
          {
            name: "電子學實驗",
            courseID: "86106",
            grade: 2,
          },
          {
            name: "幾桶",
            courseID: "86100",
            grade: 2,
          },
          {
            name: "光電實驗",
            courseID: "8610324",
            grade: 4,
          },
          {
            name: "電路學實驗",
            courseID: "862",
            grade: 1,
          },
        ],
      });
    }, 500);
  };
};

export const getCourseSelection = () => {
  return (dispatch) => {
    // fetch api to get a user's course selection
    setTimeout(() => {
      dispatch({
        type: GET_COURSE_SELECTION,
        // payload for example
        payload: {
          name: "電子學",
          grade: 2,
          selected: ["鍾爸", "呂帥", "紅雲", "宗南", "李鴻毅", "冠中"],
          unselected: ["子程", "好棒", "跟鬼一樣", "好屌"],
        },
      });
    }, 500);
  };
};

export const updateCourseSelection = (selection) => ({
  type: UPDATE_SELECTION,
  payload: selection,
});
