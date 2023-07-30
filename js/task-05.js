const elements = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", handlerInputName);

function handlerInputName(evt) {
  elements.output.textContent = evt.currentTarget.value;

  if (evt.currentTarget.value === "") {
    elements.output.textContent = "Anonymous";
  }
}
