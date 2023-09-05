document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  let tasks = [];

  numberOfTasks = 0;

  tasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ];

  numberOfTasks = tasks.length;

  // Display list of tasks
  function renderTasks() {
    const tasksDiv = document.getElementById("tasks");
    tasksDiv.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerText = task;
      tasksDiv.appendChild(li);
    });
  }

  // Display items left
  function renderNumberOfTasks() {
    document.getElementById(
      "numberOfTasks"
    ).innerText = `${numberOfTasks} items left`;
  }

  // Add task
  function addTaskToList() {
    const newTaskInput = document.getElementById("newTask");
    const newTaskValue = newTaskInput.value;
    tasks.push(newTaskValue);
    newTaskInput.value = "";
    renderTasks();
    numberOfTasks += 1;
    renderNumberOfTasks();
  }

  // Event listener for "submit" button
  const submitButton = document.getElementById("addTask");
  submitButton.addEventListener("click", addTaskToList);

  // Init program
  renderTasks();
  renderNumberOfTasks();
});
