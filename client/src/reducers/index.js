import {
    combineReducers
} from 'redux';
import session from './sessionReducers';
import course from './courseReducers';

export default combineReducers({
    session,
    course
});