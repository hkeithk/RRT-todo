//@ts-nocheck
import React from 'react';
import './App.css';
import AddTodo from 'components/AddTodo';

import VisibleTodoList from 'containers/VisibleTodos';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header>
        <h1>Todolist</h1>
        <AddTodo />
        <VisibleTodoList />
        {/* <TodoList /> */}
      </header>
    </div>
  );
};

export default App;
