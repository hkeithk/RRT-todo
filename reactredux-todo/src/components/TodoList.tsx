import React from 'react';
import { Todo } from 'types';
import { TodoItem } from 'components/TodoItem';

// typing connect requires a state, dispatch, and own props. Connected

interface Props {
  todos: Array<Todo>;
  deleteTodo: (id: number) => void;
  toggleVisibility: (id: number) => void;
}
// type AllProps = StateProps | DispatchProps | OwnProps;
// {(todos || []).map((todo: Todo)

const TodoList: React.FC<Props> = ({ todos, deleteTodo, toggleVisibility }) => {
  return (
    <div>
      {todos && Object.keys(todos).length > 0 ? (
        (todos || []).map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleVisibility={() => toggleVisibility(todo.id)}
            {...todo}
          />
        ))
      ) : (
        <p>Yay! You have no Todo items!</p>
      )}
    </div>
  );
};

export default TodoList;

// export default connect<StateProps, {}, OwnProps>(mapStateToProps)(TodoList);
