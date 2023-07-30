const elements = {
  fontSizeSwitch: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
elements.fontSizeSwitch.addEventListener("input", handlerSizeChange);

function handlerSizeChange(evt) {
  elements.text.style.fontSize = `${evt.currentTarget.value}px`;
}
