import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} product={cartItem} />
        ))}
      </div>
      <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
