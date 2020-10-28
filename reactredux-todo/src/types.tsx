import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from 'redux/actions'

export interface Todo{
    text: string;
    completed: boolean;
}

export interface AppState{
    visibilityFilter: string;
    todo: Array<Todo>;
}

export interface AddTodoAction{
    type: typeof ADD_TODO;
}
