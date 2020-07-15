import {
  LOADING_START,
  LOADING_END,
  SELECT_GRADE,
} from "../constants/actionTypes";

export const loadingStart = () => ({ type: LOADING_START });
export const loadingEnd = () => ({ type: LOADING_END });
export const selectGrade = (selectedGrade) => ({
  type: SELECT_GRADE,
  payload: {
    selectedGrade,
  },
});
