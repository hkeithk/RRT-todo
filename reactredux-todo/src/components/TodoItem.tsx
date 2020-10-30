import React from 'react';
import 'css/todoitem.css';

interface Props {
  text: string;
  deleteTodo: () => void;
  toggleVisibility: () => void;
  // deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ text, deleteTodo, toggleVisibility }) => (
  <div className='item-container'>
    <p className='text'>{text}</p>
    <button className='button' onClick={toggleVisibility}>
      Toggle
    </button>
    <button className='button' onClick={deleteTodo}>
      delete
    </button>
  </div>
);

export default TodoItem;
