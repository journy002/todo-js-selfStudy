const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos = [];

const removeEle = (e) => {
  const target = e.target.value;
  const pNode = target.parentNode;
  pNode.remove();
  todos.filter((todo) => todo.id !== pNode.id);
};

const paintTodo = (value) => {
  const li = document.createElement("li");
  li.id = value.id;
  const span = document.createElement("span");
  span.innerText = `${value.text}`;
  const btn = document.createElement("button");
  btn.innerText = "x";
  btn.addEventListener("click", removeEle);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
};

const handleTodos = (e) => {
  e.preventDefault();

  const val = todoInput.value;
  const newObj = {
    id: Date.now(),
    text: val,
  };

  todoInput.value = "";
  todos.push(newObj);
  paintTodo(newObj);
};

todoForm.addEventListener("submit", handleTodos);
