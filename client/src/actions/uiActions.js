import {
  LOADING_START,
  LOADING_END,
  SELECT_GRADE,
  LOGIN_ERROR,
} from "../constants/actionTypes";

export const loadingStart = () => ({ type: LOADING_START });
export const loadingEnd = () => ({ type: LOADING_END });
export const selectGrade = (selectedGrade) => ({
  type: SELECT_GRADE,
  payload: {
    selectedGrade,
  },
});
export const setLoginError = (loginError) => ({
  type: LOGIN_ERROR,
  payload: { loginError },
});
