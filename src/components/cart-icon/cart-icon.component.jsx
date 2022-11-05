import { useContext } from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleHidden} />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
