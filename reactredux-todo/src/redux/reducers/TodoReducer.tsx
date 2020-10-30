import { ADD_TODO } from 'redux/actions';
import { TodoActionTypes, TodoState } from 'types';

//reducers show how the state changes in response to an action
//reducers must remain PURE, no side Effects, no api calls, no mutations, just calculations

const initialState: TodoState = {
  todos: [],
};

function todoApp(state: TodoState = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { text: action.text, completed: false, id: action.id }],
      };
    default:
      return state;
  }
}

export default todoApp;
