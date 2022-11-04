import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => null,
  cartItems: [],
  addItem: () => null,
  removeItem: () => null,
  clearItemFromCart: () => null,
  cartItemsCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const itemCount = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );
    setCartItemsCount(itemCount);

    const total = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const toggleHidden = () => setHidden(!hidden);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItem = (item) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const value = {
    hidden,
    toggleHidden,
    cartItems,
    addItemToCart,
    removeItem,
    clearItemFromCart,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
