import { MenuItem } from "./menu-items";

export const CartActionType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
} as const;

export type CartAction = { value: MenuItem; type: keyof typeof CartActionType };

export function cartReducer(state: MenuItem[], action: CartAction) {
  const cartItemNames = state.map((item) => item.name);

  if (action.type === CartActionType.ADD_TO_CART) {
    if (!cartItemNames.includes(action.value.name)) {
      return [...state, { ...action.value, count: action.value.count + 1 }];
    }

    const otherItems = state.filter((item) => item.name !== action.value.name);
    const currentItem = state.find((item) => item.name === action.value.name) as MenuItem;
    return [...otherItems, { ...currentItem, count: currentItem.count + 1 }];
  }

  if (action.type === CartActionType.REMOVE_FROM_CART) {
    if (!cartItemNames.includes(action.value.name)) {
      return state;
    }

    const otherItems = state.filter((item) => item.name !== action.value.name);
    const currentItem = state.find((item) => item.name === action.value.name) as MenuItem;
    if (currentItem.count === 1) {
      return otherItems;
    }

    return [...otherItems, { ...currentItem, count: currentItem.count - 1 }];
  }

  throw Error(`Unrecognized action in cartReducer: ${JSON.stringify(action)}`);
}
