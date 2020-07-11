import {
    combineReducers
} from 'redux';
import session from './sessionReducers';
import selection from './selectionReducers';
import course from './courseReducers';

export default combineReducers({
    session,
    course,
    selection
});