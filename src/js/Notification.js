import classNames from "classnames";
import { formatCurrency } from "./utils";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render(type, price) {
    const template = `
<div class="notification type-${type.toLowerCase()} ${classNames({"is-danger" : type === Notification.types.HAWAIIAN})}">
  <button class="delete"></button>
  🍕 <span class="type">${type.toLowerCase()}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;

    this.container.querySelector('.delete').addEventListener('click', ()=>{
      this.empty()
    })
  }

  empty() {
    this.container.innerHTML = "";
  }
}
