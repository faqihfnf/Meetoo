//* function dark mode
let toggleBtn = document.querySelector("#toggle-darkmode");
let darkMode = localStorage.getItem("dark-mode");
const body = document.body;

const enableDarkMode = () => {
  toggleBtn.classList.replace("uil-sun", "uil-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("uil-moon", "uil-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  let darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  Object.keys(tasks).forEach((laneId) => {
    const lane = document.getElementById(laneId);

    tasks[laneId].forEach((taskText) => {
      const newTask = createTaskElement(taskText);
      lane.appendChild(newTask);
    });
  });
};

const saveTasksToLocalStorage = () => {
  const lanes = document.querySelectorAll(".swim-lane");
  const tasks = {};

  lanes.forEach((lane) => {
    const laneId = lane.id;
    const taskElements = lane.querySelectorAll(".task");

    tasks[laneId] = Array.from(taskElements).map((task) => task.innerText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createTaskElement = (text) => {
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = text;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
    saveTasksToLocalStorage();
  });

  return newTask;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = createTaskElement(value);
  todoLane.appendChild(newTask);

  input.value = "";
  saveTasksToLocalStorage();
});

// ... (kode drag and drop)
