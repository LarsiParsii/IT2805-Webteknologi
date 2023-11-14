const addButton = document.getElementById("new-todo__add-button");
const newTodoText = document.getElementById("new-todo__text");
const todoList = document.getElementById("todo__list");
const progress = document.getElementById("progress");
const completedCountSpan = document.getElementById("progress__completed");
const totalSpan = document.getElementById("progress__total");

const tasks = [];
let completedCount = 0;
// Hide the list and progress output by default
todoList.style.display = "none";
progress.style.display = "none";

completedCountSpan.innerText = completedCount;
totalSpan.innerText = tasks.length;

const addTask = () => {
  // Add the element to the "tasks" array.
  const taskObject = {
    text: newTodoText.value,
    timestamp: Date.now()
  }
  tasks.push(taskObject);
  
  // Add the element to the DOM
  const elementToAdd = `
  <li class="todo__list-item">
    <label>
      <input type="checkbox">
      ${taskObject.text}
    </label>
  </li>
  `
  todoList.insertAdjacentHTML('afterbegin', elementToAdd);
}

addButton.addEventListener('click', () => {
  if (newTodoText.value != "") {
    addTask();
    newTodoText.value = "";
    todoList.style.display = "block";
    progress.style.display = "flex";
    totalSpan.innerText = tasks.length;
  }
})

// Event delegation (since items are added dynamically)
todoList.addEventListener('click', (e) => {
  const target = e.target.closest("input[type=checkbox]");
  if (target) {
    const isChecked = target.checked;
    const listItemStyle = target.parentElement.style;
    if (isChecked) {
      listItemStyle.textDecoration = "line-through"
      completedCount++;
    } else {
      listItemStyle.textDecoration = "none"
      completedCount--;
    }
    completedCountSpan.innerText = completedCount;
  }
})

// Make the neter key click the button
newTodoText.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addButton.click();
  }
});