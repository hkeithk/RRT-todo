import React from 'react';

interface Props {
  text: string;
  deleteTodo: () => void;
  toggleVisibility: () => void;
  // deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ text, deleteTodo, toggleVisibility }) => (
  <li>
    {text}
    <button onClick={toggleVisibility}>Toggle</button>
    <button onClick={deleteTodo}>delete</button>
  </li>
);

export default TodoItem;
