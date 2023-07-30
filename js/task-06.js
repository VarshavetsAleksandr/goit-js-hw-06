const input = document.querySelector("#validation-input");

const numberChar = Number(input.attributes["data-length"].nodeValue);

input.addEventListener("blur", handlerInput);

function handlerInput(evt) {
  if (evt.currentTarget.value.length === numberChar) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
