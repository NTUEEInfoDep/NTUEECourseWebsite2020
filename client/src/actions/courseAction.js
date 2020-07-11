import {
    GET_ALL_COURSE
} from '../constants/actionTypes';

export const getAllCourse = () => {
    return (dispatch) => {
        // fetch api to save selection
        setTimeout(() => {
            dispatch({
                type: GET_ALL_COURSE
            })
        }, 500);
    };
};