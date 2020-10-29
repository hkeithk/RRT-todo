import React from 'react';
import { connect } from 'react-redux';
import { Todo, AppState } from 'types';

// typing connect requires a state, dispatch, and own props

interface Props {
  todoList: Array<Todo>;
  // deleteTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todoList }) => {
  console.log(todoList);
  return (
    <div>
      {todoList && todoList.length ? (
        todoList.map((todo: Todo, index: number) => {
          return <p key={index}>{todo}</p>;
        })
      ) : (
        <p>Your Todolist is empty!</p>
      )}
    </div>
  );
};

//selects which part of redux state you want, and returns that part, called everytime store changes,
//like useSelector. first argument is redux state, second is ownProps
const mapStateToProps = (state: AppState): Props => {
  return { todoList: state.todoList };
};

export default connect<Props, null, {}, AppState>(mapStateToProps)(TodoList);
// export default connect<StateProps, {}, OwnProps>(mapStateToProps)(TodoList);
