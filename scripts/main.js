// 🚀 Завдання TODO APP

// Функціонал:

// додавання задач
// видалення задач
// список задач
// якщо input порожній → показати alert
// задачі повинні додаватися через JS

// використай:

// createElement
// append
// remove
// insertAdjacentHTML або innerHTML

const inputElement = document.querySelector(".todo-input");

const addButtonElement = document.querySelector(".todo-add-button");

const listElement = document.querySelector(".todo-list");

addButtonElement.addEventListener("click", () => {
  const value = inputElement.value.trim();

  if (!value) {
    alert("Enter your task, please!");
    return;
  }

  const liElement = document.createElement("li");
  liElement.classList.add("todo-list-item");
  listElement.append(liElement);

  liElement.textContent = value;

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.textContent = "Delete";
  deleteButtonElement.classList.add("todo-delete-button");
  liElement.append(deleteButtonElement);

  deleteButtonElement.addEventListener("click", () => {
    liElement.remove();
  });

  inputElement.value = "";
});
