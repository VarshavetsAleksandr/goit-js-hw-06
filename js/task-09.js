function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
btn.addEventListener("click", handlerClickBtn);
function handlerClickBtn() {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = currentColor.textContent;
}
