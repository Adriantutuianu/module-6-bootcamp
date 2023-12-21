const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function toDoRender() {
  todoList.textContent = "";
  todoCountSpan.textContent = todos.length;

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    var li = document.createElement("li");

    li.textContent = todo;

    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoData = todoInput.value;

  todos.push(todoData);

  todoInput.value = "";

  toDoRender();
});
