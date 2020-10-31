import { combineReducers } from 'redux';
import TodoReducer from 'redux/reducers/TodoReducer';
import VisibilityFilterReducer from 'redux/reducers/VisibilityFilterReducer';

export default combineReducers({ todoState: TodoReducer, visibilityState: VisibilityFilterReducer });
