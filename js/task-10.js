function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  number: document.querySelector('[type="number"]'),
  btnCreat: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  list: document.querySelector("#boxes"),
};

elements.btnCreat.addEventListener("click", createBoxes);
elements.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = +elements.number.value;
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + i * 10;
    const str = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesArray.push(str);
  }
  // видаляємо попередньо додані елементи, при натисканні кнопки Create
  elements.list.innerHTML = "";
  // додаємо нові елементи
  elements.list.insertAdjacentHTML("beforeend", boxesArray.join(""));
}

function destroyBoxes() {
  elements.list.innerHTML = "";
}

// function createBoxes() {
//   // console.log(elements.number.value);
//   const amount = +elements.number.value;
//   const boxesArray = [];
//   for (let i = 0; i < amount; i += 1) {
//     const boxSize = 30 + i * 10;
//     const box = document.createElement("div");
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesArray.push(box);
//   }
//   elements.list.append(...boxesArray);
// }

// function destroyBoxes() {
//   elements.list.innerHTML = "";
// }
