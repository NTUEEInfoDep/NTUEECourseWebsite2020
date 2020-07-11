// Reducer that control student course selection
import { GET_ALL_COURSE } from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COURSE: {
      return [...state];
    }
    default:
      return state;
  }
};
