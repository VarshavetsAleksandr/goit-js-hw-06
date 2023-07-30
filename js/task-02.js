const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// знаходимо список по ідентифікатору #ingredients
const list = document.querySelector("#ingredients");

function createLiElement(array) {
  // перебираємо масив ingredients за допомогою методу array.map;
  // отримуємо масив елементів <li class = "item">element</li>
  const item = array.map((element) => {
    const li = document.createElement("li");
    // додаємо текстовий контент до елементу = ітеруємий елемент масиву ingredients;
    li.textContent = element;
    // додаємо клас "item" до елементу <li></li>
    li.classList.add("item");
    return li;
  });
  list.append(...item);
}

createLiElement(ingredients);
