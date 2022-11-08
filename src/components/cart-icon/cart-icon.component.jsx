import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsCount } from "../../store/cart/cart.selector";
import { toggleCartHidden } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const toggleHidden = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleHidden} />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
