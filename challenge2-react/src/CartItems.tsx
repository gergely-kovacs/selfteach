import { isEmpty } from "lodash";
import chevron from "./assets/chevron.svg";
import { CartAction, CartActionType } from "./cart-reducer";
import { MenuItem } from "./menu-items";

function CartItems({
  cartItems,
  dispatchCartAction,
}: {
  cartItems: MenuItem[];
  dispatchCartAction: React.Dispatch<CartAction>;
}) {
  if (isEmpty(cartItems)) {
    return <p className="empty">Your cart is empty.</p>;
  }

  const itemList = cartItems.map((item) => (
    <li key={item.name}>
      <div className="plate">
        <img src={item.image} alt={item.alt} className="plate" />
        <div className="quantity">{item.count}</div>
      </div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">${item.price / 100}</p>
      </div>
      <div className="quantity__wrapper">
        <button
          className="decrease"
          onClick={() => dispatchCartAction({ type: CartActionType.REMOVE_FROM_CART, value: item })}
        >
          <img src={chevron} />
        </button>
        <div className="quantity">{item.count}</div>
        <button
          className="increase"
          onClick={() => dispatchCartAction({ type: CartActionType.ADD_TO_CART, value: item })}
        >
          <img src={chevron} />
        </button>
      </div>
      <div className="subtotal">${(item.count * item.price) / 100}</div>
    </li>
  ));
  return <ul className="cart-summary">{itemList}</ul>;
}

export default CartItems;
