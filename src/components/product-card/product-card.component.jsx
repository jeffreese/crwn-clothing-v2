import { useDispatch } from "react-redux";

import { addItem } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  ProductFooterContainer,
  ProductNameContainer,
  ProductPriceContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItem(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooterContainer>
        <ProductNameContainer>{name}</ProductNameContainer>
        <ProductPriceContainer>{price}</ProductPriceContainer>
      </ProductFooterContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
