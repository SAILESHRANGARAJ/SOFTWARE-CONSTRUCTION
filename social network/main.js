function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  if(user) {
    localStorage.setItem("user", user);
    window.location.href = "feed.html";
  }
}

function signupUser(event) {
  event.preventDefault();
  const newUser = document.getElementById('new-username').value;
  if(newUser) {
    localStorage.setItem("user", newUser);
    window.location.href = "feed.html";
  }
}
