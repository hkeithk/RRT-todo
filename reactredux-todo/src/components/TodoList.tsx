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
  console.log(todos);
  return (
    <ul>
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
        <li>No todo items!</li>
      )}
    </ul>
  );
};

export default TodoList;

// export default connect<StateProps, {}, OwnProps>(mapStateToProps)(TodoList);
