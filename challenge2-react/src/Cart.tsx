import { isEmpty } from "lodash";
import { CartAction } from "./cart-reducer";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";
import { MenuItem } from "./menu-items";

function Cart({
  cartItems,
  dispatchCartAction,
}: {
  cartItems: MenuItem[];
  dispatchCartAction: React.Dispatch<CartAction>;
}) {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      <CartItems cartItems={cartItems} dispatchCartAction={dispatchCartAction}></CartItems>
      {!isEmpty(cartItems) && <CartTotals cartItems={cartItems}></CartTotals>}
    </div>
  );
}

export default Cart;
