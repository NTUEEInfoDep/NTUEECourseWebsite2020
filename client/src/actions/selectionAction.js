import {
    SAVE_SELECTION
} from '../constants/actionTypes';

export default () => {
    return (dispatch) => {
        // fetch api to save selection
        dispatch({
            type: SAVE_SELECTION,
            payload: {

            }
        })
    }
}