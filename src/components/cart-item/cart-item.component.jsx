import {
  CartItemsContainer,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemsContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemsContainer>
  );
};

export default CartItem;
