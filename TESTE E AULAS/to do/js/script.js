// seleção de elementos
const todoform = document.querySelector("#todo-form"); // shift e alt para baixo
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//funções
const saveTodo = (text) => {
  // criar uma div e um h3
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  //criando o botoes
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = "&#10003;";
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = "&#128393;";
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = "&#120;";
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus(); //foco no input
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoform.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const upDateTodo = (editTartefa) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = editTartefa;
    }
  });
};

// Eventos
todoform.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  // pega o elemento clicado
  const targetEL = e.target;
  const parentEL = targetEL.closest("div"); //selecionar a div + proxima
  let todoTitle;

  // verificar se existe a div e se contem h3
  if (parentEL && parentEL.querySelector("h3")) {
    // adiconar o titulo
    todoTitle = parentEL.querySelector("h3").innerText;
  }

  // verifica se contem a class
  if (targetEL.classList.contains("finish-todo")) {
    parentEL.classList.toggle("done"); // add ou remove a class
  }

  if (targetEL.classList.contains("remove-todo")) {
    parentEL.remove();
  }

  if (targetEL.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    upDateTodo(editInputValue);
  }
  toggleForms();
});
