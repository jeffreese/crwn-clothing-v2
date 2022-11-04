import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, cartTotal, clearItemFromCart, addItemToCart, removeItem } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>

        {cartItems.map((cartItem) => {
          const { id, imageUrl, name, quantity, price } = cartItem;

          return (
            <div className="checkout-item" key={id}>
              <div className="image-container">
                <img src={imageUrl} alt="item" />
              </div>
              <span className="name">{name}</span>
              <div className="quantity-container">
                <span
                  className="quantity-down"
                  onClick={() => removeItem(cartItem)}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="quantity-up"
                  onClick={() => addItemToCart(cartItem)}
                >
                  +
                </span>
              </div>
              <span className="price">{price}</span>
              <div
                className="remove-button"
                onClick={() => clearItemFromCart(cartItem)}
              >
                X
              </div>
            </div>
          );
        })}

        <div className="total">
          <span>TOTAL: ${cartTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
