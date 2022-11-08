import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartHidden = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN);

export const addItem = (item) => createAction(CART_ACTION_TYPES.ADD_ITEM, item);

export const removeItem = (item) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM, item);

export const clearItemFromCart = (item) =>
  createAction(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, item);
