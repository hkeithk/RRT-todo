import React from 'react';
import AddTodo from 'components/AddTodo';
import VisibleTodoList from 'containers/VisibleTodos';
import FilterOptions from 'containers/FilterOptions';
import 'css/app.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todolist</h1>
        <div className='main-body'>
          <AddTodo />
          <FilterOptions />
          <VisibleTodoList />
        </div>
      </header>
    </div>
  );
};

export default App;
