import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO } from 'redux/actions';

export interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

//--------- State Types -------------
export interface AppState {
  //   visibilityFilter: string;
  todoState: TodoState;
  visibilityState: VisibilityState;
}

export interface TodoState {
  todos: Array<Todo>;
}

export interface VisibilityState {
  filter: string;
}

// --------- Action Types---------
export interface AddTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
