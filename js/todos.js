const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos = [];

const removeEle = (e) => {
  const target = e.target;
  const pNode = target.parentNode;
  pNode.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(pNode));
};

function paintTodo(value) {
  const li = document.createElement("li");
  li.id = value.id;
  const span = document.createElement("span");
  span.innerText = `${value.text}`;
  const remBtn = document.createElement("button");
  remBtn.innerText = `x`;
  remBtn.addEventListener("click", removeEle);

  li.appendChild(span);
  li.appendChild(remBtn);
  todoList.appendChild(li);
}

function handleTodos(e) {
  e.preventDefault();
  const val = todoInput.value;
  todoInput.value = "";
  const newObj = {
    id: Date.now(),
    text: val,
  };

  todos.push(newObj);
  paintTodo(newObj);
}

todoForm.addEventListener("submit", handleTodos);
