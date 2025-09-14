const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerGetInfo);

function handlerGetInfo(event) {
  event.preventDefault();

  const getEmail = form.elements.email.value.trim();
  const getPassword = form.elements.password.value.trim();

  if (!getEmail || !getPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: getEmail,
    password: getPassword,
  };
   console.log(data);

  form.reset();
}