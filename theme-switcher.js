const toggleButton = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "Switch to Light Mode";

  const elements = document.getElementsByClassName('settings-box');
  for (let el of elements) {
    el.classList.replace('settings-box', 'dsettings-box');
  }
} else {
  document.body.classList.add("light-mode");

  const elements = document.getElementsByClassName('dsettings-box');
  for (let el of elements) {
    el.classList.replace('dsettings-box', 'settings-box');
  }
}

function switchTheme() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "Switch to Dark Mode";

    const elements = document.getElementsByClassName('dsettings-box');
    for (let el of elements) {
      el.classList.replace('dsettings-box', 'settings-box');
    }
  } else {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "Switch to Light Mode";

    const elements = document.getElementsByClassName('settings-box');
    for (let el of elements) {
      el.classList.replace('settings-box', 'dsettings-box');
    }
  }
}
