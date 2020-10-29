import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from 'redux/actions';

export interface Todo {
  text: string;
  completed: boolean;
}
export interface TodoState {
  todos: Array<Todo>;
}

export interface AppState {
  //   visibilityFilter: string;
  todoList: Array<Todo>;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  index: number;
}

export interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction;
