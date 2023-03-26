import check from "./assets/check.svg";
import { CartAction, CartActionType } from "./cart-reducer";
import { MenuItem, menuItems } from "./menu-items";

function Menu({
  cartItems,
  dispatchCartAction,
}: {
  cartItems: MenuItem[];
  dispatchCartAction: React.Dispatch<CartAction>;
}) {
  const cartItemNames = cartItems.map((item) => item.name);

  const items = menuItems.map((item) => {
    return (
      <li key={item.name}>
        <div className="plate">
          <img src={item.image} alt={item.alt} className="plate" />
        </div>
        <div className="content">
          <p className="menu-item">{item.name}</p>
          <p className="price">${item.price / 100}</p>
          <button
            className="in-cart"
            onClick={() =>
              !cartItemNames.includes(item.name) &&
              dispatchCartAction({ type: CartActionType.ADD_TO_CART, value: item })
            }
          >
            {cartItemNames.includes(item.name) && <img src={check} alt="Check" />}
            {cartItemNames.includes(item.name) ? "In Cart" : "Add to cart"}
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul id="menu" className="menu">
        {items}
      </ul>
    </div>
  );
}

export default Menu;
