/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export function TotalInfoCard() {

  const  data =  useContext(ProductsContext)

  const productList = data.productList
  
  const [totalProducts, setTotalProducts] = useState(0)
  const [pesoTotal, setPesoTotal] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(0)

  useEffect(()=> {
    setTotalProducts(productList.length);
    setPesoTotal(productList.reduce((acc, current) => acc + current.weight ,0));
    setPrecioTotal(productList.reduce((acc, current) => acc + current.price ,0));
    applyRulesPrecioTotal()
  }, [productList]);  

  const applyRulesPrecioTotal = ()=>{
 
    let valorTotalInventario = precioTotal

    if(productList.length > 10){ 
      setPrecioTotal(valorTotalInventario - (20*precioTotal/100))
      alert('Se te hará un descuento del 20% por tener mas de 10 productos');
    }   
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="bg-gray-800 text-white p-4 rounded-md text-xl font-bold text-center">
        <h3>TOTAL PRODUCTOS EN INVENTARIO:  {totalProducts}</h3>
        <h3>Peso Total: {pesoTotal} Kg</h3>
        <h2>Precio Total: ${precioTotal}</h2>
      </div>
    </div>
  )
}

export default TotalInfoCard