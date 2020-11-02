import React from 'react';
import 'css/todoitem.css';

interface Props {
  text: string;
  completed: boolean;
  deleteTodo: () => void;
  toggleVisibility: () => void;
}

export const TodoItem: React.FC<Props> = ({ text, deleteTodo, toggleVisibility, completed }) => (
  <div className='item-container'>
    <p
      className='text'
      onClick={toggleVisibility}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </p>
    <button className='button' onClick={deleteTodo}>
      delete
    </button>
  </div>
);

export default TodoItem;
