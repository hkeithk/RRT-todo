import React from 'react';
import './App.css';
import AddTodo from 'components/AddTodo'

function App() {
  return (
    <div className="App">
      <header >
        <h1>Todolist</h1>
        <AddTodo/>
      </header>
    </div>
  );
}

export default App;
