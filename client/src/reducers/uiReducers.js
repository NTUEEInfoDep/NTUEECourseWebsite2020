import {
  LOADING_START,
  LOADING_END,
  SELECT_GRADE,
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOADING_END: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SELECT_GRADE: {
      return {
        ...state,
        selectedGrade: action.payload.selectedGrade,
      };
    }
    default:
      return state;
  }
};
