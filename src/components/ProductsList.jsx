/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard"

export function ProductList(){   

  const { productList } = useContext(ProductsContext)

  if(productList.length === 0) { return <h2 className="text-2xl font-bold text-white my-6 text-center">Inventario Vacio</h2>}


  return(
    <div className="grid grid-cols-4 gap-2 my-5">
      {productList.map((prod) =>       
        <ProductCard prod={prod} key={prod.id}></ProductCard>
      )}
    </div>
  ) 
}

export default ProductList