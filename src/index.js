document.addEventListener("DOMContentLoaded", () => {
// grab all necessary DOM elements

// form and relevant input fields
const newTaskForm = document.getElementById("create-task-form");
const newTaskDesc = document.getElementById("new-task-description");

// ul where new tasks will live on the DOM
const newTasks = document.getElementById("tasks");

// attach event listeners 
newTaskForm.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
  event.preventDefault();
// stop form from trying to submit
  const newTaskDesc = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDesc.value;

  appendNewTask(newTask); 
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
