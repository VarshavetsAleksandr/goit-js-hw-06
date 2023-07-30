// через об'єкт як на уроці.
const elements = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  currentValue: document.querySelector("#value"),
};

elements.btnDecrement.addEventListener("click", handlerDecrementClik);
elements.btnIncrement.addEventListener("click", handlerIncrementClik);

let counterValue = 0;
function handlerDecrementClik() {
  counterValue -= 1;
  elements.currentValue.textContent = `${counterValue}`;
}

function handlerIncrementClik() {
  counterValue += 1;
  elements.currentValue.textContent = `${counterValue}`;
}

// Через константи

// const btnDecrement = document.querySelector('[data-action="decrement"]');
// const btnIncrement = document.querySelector('[data-action="increment"]');
// const currentValue = document.querySelector("#value");

// btnDecrement.addEventListener("click", handlerDecrementClik);
// btnIncrement.addEventListener("click", handlerIncrementClik);

// let counterValue = 0;
// function handlerDecrementClik() {
//   counterValue -= 1;
//   currentValue.textContent = `${counterValue}`;
// }

// function handlerIncrementClik() {
//   counterValue += 1;
//   currentValue.textContent = `${counterValue}`;
// }
