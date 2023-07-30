// знаходимо всі елементи з класом та виводимо у консоль
const number = document.querySelectorAll(".item");
console.log(`Number of categories: ${number.length}`);

number.forEach(function (item) {
  // отримуємо назву категорії за допомогою textContent першого дочірнього єлементу <li class="item">
  const categoryName = item.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  // отримуємо отримаємо кількість елементів за допомогою childElementCount останього дочірнього єлементу <li class="item">
  const elementsNumber = item.lastElementChild.childElementCount;
  console.log(`Elements: ${elementsNumber}`);
});
