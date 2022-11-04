import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    setProducts(SHOP_DATA);
    // fetch("https://fakestoreapi.com/products")
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
