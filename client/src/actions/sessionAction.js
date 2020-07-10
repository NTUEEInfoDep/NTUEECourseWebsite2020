import {
    LOGIN,
    LOGOUT
} from '../constants/actionTypes';

export const login = ({
    id,
    password
}) => {
    return (dispatch) => { // return a function since this is async function
        // fetch api to check login
        setTimeout(() => {
            dispatch({
                type: LOGIN,
                payload: {
                    isLogin: true,
                    sessionID: 'abcdefg'
                }
            })
        }, 1000);
    }
};

export const logout = (sessionID) => {
    return (dispatch) => {
        // fetch api to logout
        setTimeout(() => {
            dispatch({
                type: LOGOUT,
                payload: {
                    isLogin: false,
                    sessionID: ''
                }
            })
        }, 1000);
    }
}