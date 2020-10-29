import React from 'react';
import './App.css';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Todolist</h1>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
