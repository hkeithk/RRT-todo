import React from 'react';
import { Todo } from 'types';
import { TodoItem } from 'components/TodoItem';

// typing connect requires a state, dispatch, and own props. Connected

interface Props {
  todos: Array<Todo>;
  filter: string;
  deleteTodo: (id: number) => void;
  toggleVisibility: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo, toggleVisibility, filter }) => {
  const filteredList = (filter: string): Array<Todo> => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((todo: any) => todo.completed);
      case 'SHOW_INCOMPLETE':
        return todos.filter((todo: Todo) => todo.completed === false);
      default:
        return todos;
    }
  };

  const values = filteredList(filter);

  return (
    <div>
      {values && Object.keys(values).length > 0 ? (
        (values || []).map((todo: Todo) => (
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
