// Reducer that control student course selection
import {
  SAVE_SELECTION,
  GET_COURSE_SELECTION,
  UPDATE_SELECTION,
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_SELECTION: {
      const { name, grade, selected, unselected } = action.payload;
      return {
        ...state,
        name,
        grade,
        selected: [...selected],
        unselected: [...unselected],
      };
    }
    case SAVE_SELECTION: {
      const { name, grade, selected, unselected } = action.payload;
      return {
        ...state,
        name,
        grade,
        selected: [...selected],
        unselected: [...unselected],
      };
    }
    case UPDATE_SELECTION: {
      return {
        ...state,
        selected: [...action.payload.selected],
        unselected: [...action.payload.unselected],
      };
    }
    default:
      return state;
  }
};
