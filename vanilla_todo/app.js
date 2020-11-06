//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions

function addTodo(event) {
  event.preventDefault();
  console.log('hello');

  //create the todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create LI element and add text and style
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement('button');
  //innerHTML allows you to create a icon to this button w/ a string
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //append this item to the list
  todoList.appendChild(todoDiv);

  //clear the todo input after submit
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  console.log(item.classList);

  //delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    //only remove the todo item until the transition is done
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  //Checkmark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(event) {
  const todos = todolist.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'incomplete':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }

        break;
    }
  });
}
