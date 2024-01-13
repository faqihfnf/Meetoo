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
