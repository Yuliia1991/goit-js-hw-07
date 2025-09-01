const formEl = document.querySelector(".login-form");

formEl.addEventListener('sumbit', function(event)) {

  event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    
    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    
    const formData = {
      email: email,
      password: password
};
}
