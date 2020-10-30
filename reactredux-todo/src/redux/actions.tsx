import { TodoActionTypes } from 'types';
//Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE',
};

//Action Creators

let nextTodoId = 0;

export function addTodo(text: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    text,
    id: nextTodoId++,
  };
}

export function setVisibilityFilter(filter: string) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  id: id,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id: id,
});
