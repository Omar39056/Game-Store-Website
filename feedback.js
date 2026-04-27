const theme = localStorage.getItem("theme");
const form = document.querySelector('.feedback-form');
const body = document.body;


if (theme === "dark") {
      form.classList.remove("feedback-form");
      form.classList.add("dfeedback-form");
} else{
      form.classList.remove("dfeedback-form");
      form.classList.add("feedback-form");}


