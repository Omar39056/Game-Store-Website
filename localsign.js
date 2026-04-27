// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstname = document.getElementById("signupFirstname").value;
    const surname = document.getElementById("signupSurname").value;
    const email = document.getElementById("signupEmail").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username]) {
      showMessage("User already exists");
    } else if (Object.values(users).some(user => user.email === email)) {
      showMessage("Email already exists");
    } else {
      users[username] = {
        password: password,
        email: email,
        firstname: firstname,
        surname: surname
      };
      localStorage.setItem("users", JSON.stringify(users));
      showMessage("Signup successful! You can now login.");
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username] && users[username].password === password) {
      showMessage("Login Successful!");
      // Optionally store a session
      localStorage.setItem("loggedInUser", username);
    } else {
      showMessage("Invalid Username Or Password");
    }
  });
}

function showMessage(msg) {
  const msgBox = document.getElementById("message");
  if (msgBox) {
    msgBox.innerText = msg;
  } else {
    alert(msg); // fallback
 }
}