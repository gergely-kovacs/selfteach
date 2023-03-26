import "./style.css";
import { menuItems } from "./menu-items";

addEventListener("DOMContentLoaded", () => {
  const menuList = menuItems.map((item) => {
    return `<li>
      <div class="plate">
        <img src="/${item.image}" alt="${item.alt}" class="plate">
      </div>
      <div class="content">
        <p class="menu-item">${item.name}</p>
        <p class="price">$${item.price / 100}</p>
        <button data-name="${item.name}" class="add">Add to Cart</button>
      </div>
    </li>`;
  });

  document.getElementById("menu")?.insertAdjacentHTML("beforeend", menuList.join("\n"));

  document.querySelectorAll(".add").forEach((button) => {
    if (button instanceof HTMLElement) {
      button.addEventListener("click", () => {
        if (button.dataset.name) {
          makeASD(button.dataset.name);
        }
      });
    }
  });
});

function makeASD(herpo: string) {
  console.log(herpo);
}
