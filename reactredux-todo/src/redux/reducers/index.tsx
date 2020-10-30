import { combineReducers } from 'redux';
import TodoReducer from 'redux/reducers/TodoReducer';

export default combineReducers({ todoState: TodoReducer });
