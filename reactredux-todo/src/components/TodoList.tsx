import React from 'react';
import { connect } from 'react-redux';
import { Todo, AppState } from 'types';

// typing connect requires a state, dispatch, and own props. Connected

interface StateProps {
  todoList: Array<Todo>;
  // deleteTodo: (id: number) => void;
}

// type AllProps = StateProps | DispatchProps | OwnProps;

const TodoList = (props: StateProps) => {
  console.log(props.todoList);
  return (
    <div>
      {props.todoList && props.todoList.length ? (
        props.todoList.map((todo: Todo, index: number) => <p key={index}>{todo.text}</p>)
      ) : (
        <p>Your Todolist is empty!</p>
      )}
    </div>
  );
};

//selects which part of redux state you want, and returns that part, called everytime store changes,
//like useSelector. first argument is redux state, second is ownProps
const mapStateToProps = (state: AppState): StateProps => {
  return { todoList: state.todoList };
};

export default connect<StateProps, null, {}, AppState>(mapStateToProps)(TodoList);
// export default connect<StateProps, {}, OwnProps>(mapStateToProps)(TodoList);
