// selector
const todoInput = document.getElementById("newTask");
const todoBtn = document.getElementById("addItem");
const todoList = document.getElementById("todo");
const todoLi = document.createElement("li");
const filterDown = document.getElementById("two");
const filterUp = document.getElementById("three");
const completedTasksHolder = document.getElementById("completed");



const addTodo = (Event) => {
  Event.preventDefault();
  // creat li
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("ListItem");
  todoList.appendChild(todoLi);
  // 
  // add todo to localStorage
  saveLocalTodos(todoInput.value);
  getLocalTodos();
  // // check mark btn
  // const completeBtn = document.createElement("button");
  // completeBtn.innerHTML = '<i class="fa fa-check"></i>';
  // completeBtn.classList.add("complete-check");
  // todoLi.appendChild(completeBtn);
  // // trash btn
  // const trashBtn = document.createElement("button");
  // trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
  // trashBtn.classList.add("delete-check");
  // todoLi.appendChild(trashBtn);
  // clear to do Input
  todoInput.value = "";
};
// delete
const deleteCheck = (Event) => {
  // console.log(Event.target);
  const item = Event.target;
  // delete todo
  if (item.classList[0] === "delete-check") {
    const todo = item.parentElement;
    // animate
    todo.classList.add("fall");
    removeLocalTodos(todo);
    // done animate will do remove
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
};
// done
const completeCheck = (Event) => {
  // console.log(Event.target);
  const item = Event.target;
  //
  if (item.classList[0] === "complete-check") {
    const todo = item.parentElement;
    completedTasksHolder.appendChild(todo);
  }
};
//
//
// filter

const sortUP = document.getElementById("two");
const sortUpfc = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  saveLocalAllTodos(todos);
  getLocalTodos();
};

const sortDown = document.getElementById("three");
const sortDwnfc = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.sort((a, b) => {
    return a < b ? 1 : -1;
  });
  saveLocalAllTodos(todos);
  getLocalTodos();
};






const saveLocalAllTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};


//
//
//
// local Storeage
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todoList.innerHTML = "";
  todos.forEach((todo) => {
    // creat li
    const todoLi = document.createElement("li");
    todoLi.innerText = todo;
    todoLi.classList.add("todo");
    todoList.appendChild(todoLi);
    // check mark btn
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.classList.add("complete-check");
    todoLi.appendChild(completeBtn);
    // trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    trashBtn.classList.add("delete-check");
    todoLi.appendChild(trashBtn);
  });
};



const removeLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Event Listeners
document.addEventListener("DOMContentLoaded", getLocalTodos);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
completedTasksHolder.addEventListener("click", deleteCheck);
todoList.addEventListener("click", completeCheck);
sortUP.addEventListener("click",sortUpfc);
sortDown.addEventListener("click",sortDwnfc);
