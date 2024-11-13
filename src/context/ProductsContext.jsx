/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, createContext } from "react";
import { products as data } from "../productList";

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => setProductList(data), []);

  function addNewProduct(name, weight, price) {
    setProductList([
      {
        id: productList.length, //Se tiene que crear una funcion para id random
        name: name,
        weight: weight,
        price: price,
      },
      ...productList,
    ]);
  }

  function deleteProduct(productId) {
    setProductList(productList.filter((item) => item.id !== productId));
  }

  return (
    <ProductsContext.Provider
      value={{
        productList: productList,
        addNewProduct: addNewProduct,
        deleteProduct: deleteProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
