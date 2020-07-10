// Reducer that control student course selection
import {
    SAVE_SELECTION
} from '../constants/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case SAVE_SELECTION: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
}