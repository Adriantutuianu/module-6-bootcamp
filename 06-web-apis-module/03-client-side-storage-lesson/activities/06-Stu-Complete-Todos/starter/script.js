const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

todoList.addEventListener("click", function (event) {
  var clickedTodo = event.target;

  var todoIndex = clickedTodo.getAttribute("data-index");

  console.log(todoIndex);

  todos.splice(todoIndex, 1);
  console.log(todos);
  renderTodos();
});
