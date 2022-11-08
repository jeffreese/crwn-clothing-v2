import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  let newCartItems = null;
  if (existingCartItem) {
    newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  let newCartItems = null;
  if (existingCartItem.quantity === 1) {
    newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );
  } else {
    newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
  );
};
