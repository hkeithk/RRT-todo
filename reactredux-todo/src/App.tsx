import React from 'react';
import AddTodo from 'components/AddTodo';
import 'css/app.css';

import VisibleTodoList from 'containers/VisibleTodos';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todolist</h1>
        <div className='main-body'>
          <AddTodo />
          <VisibleTodoList />
        </div>
      </header>
    </div>
  );
};

export default App;
