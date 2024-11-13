/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export function ProductForm (){

  const { addNewProduct } = useContext(ProductsContext)

  const [name, setName] = useState(null);
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState(null);

  const nameBtn = useRef(null);
  const weightBtn = useRef(null);
  const priceBtn = useRef(null);
    

  const assignProductName = (e)=> { setName(e.target.value) }
  const assignProductWeight = (e)=> { setWeight(parseInt(e.target.value)) }
  const assignProductPrice = (e)=> { setPrice(parseInt(e.target.value)) }

  function saveProduct() {
    if(name && weight && price !== null){
      addNewProduct(name, weight, price);
      onClear();
    }else { alert('¡Falta ingresar datos del producto!') }
  }

  const onClear = ()=>{
    nameBtn.current.value = '';
    weightBtn.current.value = '';
    priceBtn.current.value = '';
    setName(null);
    setWeight(null);
    setPrice(null);
  }

  return (
    <>
      <div className="mx-auto max-w-lg">
        <div className="bg-gray-800 rounded-md p-4">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Ingresa Datos del Producto</h2>
          <input 
            ref={nameBtn} 
            type='text' 
            placeholder='Nombre' 
            onChange={assignProductName}
            autoFocus
            maxLength={20}
            className="bg-slate-300 p-3 w-full mb-2 rounded-md">
          </input>
          <input 
            ref={weightBtn} 
            type='number' 
            placeholder='Peso' 
            onChange={assignProductWeight}
            className="bg-slate-300 p-3 w-full mb-2 rounded-md">                      
          </input>
          <input 
            ref={priceBtn} 
            type='number' 
            placeholder='Precio' 
            onChange={assignProductPrice}
            className="bg-slate-300 p-3 w-full mb-2 rounded-md">
          </input>
          <div className="flex justify-between">
            <button 
              className='bg-indigo-600 mt-2  px-2 py-1 rounded-md text-white hover:bg-indigo-400 ' 
              onClick={saveProduct}>
                Guardar
            </button>
            <button 
              className='bg-slate-300 rounded-md text-gray-800 mt-2 px-2 py-1 hover:bg-slate-600 hover:text-white' 
              onClick={onClear}>
                Limpiar
            </button>   
          </div>                             
        </div>    
      </div>           
    </>
  )
}

export default ProductForm