import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";

import {
  ProductCardContainer,
  ProductFooterContainer,
  ProductNameContainer,
  ProductPriceContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooterContainer>
        <ProductNameContainer>{name}</ProductNameContainer>
        <ProductPriceContainer>{price}</ProductPriceContainer>
      </ProductFooterContainer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
