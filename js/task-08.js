const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", hadlerForm);

function hadlerForm(evt) {
  evt.preventDefault();
  //   console.dir(evt.currentTarget.elements);
  const { email, password } = evt.currentTarget.elements;
  //   console.log(email.value);
  //   console.log(password.value);
  if (email.value === "" || password.value === "") {
    const message = "Будь-ласка, заповніть всі поля форми";
    alert(message);
  }

  function getValueForm(email, password) {
    return {
      email: email.value,
      password: password.value,
    };
  }

  getValueForm(email, password);
  console.log(getValueForm(email, password));
  form.reset();
}
