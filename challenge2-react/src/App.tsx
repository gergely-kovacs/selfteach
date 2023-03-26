import { useReducer } from "react";
import "./App.css";
import Cart from "./Cart";
import { cartReducer } from "./cart-reducer";
import Menu from "./Menu";
import { MenuItem } from "./menu-items";

function App() {
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, [] as MenuItem[]);

  return (
    <div className="wrapper menu">
      <Menu cartItems={cartItems} dispatchCartAction={dispatchCartAction}></Menu>
      <Cart cartItems={cartItems} dispatchCartAction={dispatchCartAction}></Cart>
    </div>
  );
}

export default App;
