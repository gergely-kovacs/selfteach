import { MenuItem } from "./menu-items";

function CartTotals({ cartItems }: { cartItems: MenuItem[] }) {
  const subtotal = cartItems.reduce((subtotal, item) => {
    return subtotal + (item.count * item.price) / 100;
  }, 0);
  const TAX_RATE = 0.0975;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">${subtotal.toFixed(2)}</div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">${tax.toFixed(2)}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">${total.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartTotals;
