/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export function ProductCard({prod}){

  const { deleteProduct } = useContext(ProductsContext)
   
  return(
    <div className="bg-gray-800 text-white p-4 rounded-md hover:bg-gray-700">               
      <p className="text-xl capitalize">{prod.name} <br/>Peso: {prod.weight}Kg <br/>Precio: ${prod.price}</p>          
      <div>
        <button 
          className="bg-red-800 px-2 py-1 rounded mt-4 hover:bg-red-500" 
          onClick={()=> deleteProduct(prod.id)}>
            Eliminar
        </button>
      </div>  
    </div>  
  )
}

ProductCard.propTypes = {

  prod: PropTypes.object

}

export default ProductCard