/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductsList';
import { TotalInfoCard } from './components/TotalInfoCard';

function App() {
  return (
    <section className="bg-gradient-to-r from-indigo-950 to-zinc-900 h-screen font-serif">
      <div className="container mx-auto p-5">
        <ProductForm></ProductForm>
        <ProductList></ProductList>
        <TotalInfoCard></TotalInfoCard>       
      </div>
    </section>
  )
}

export default App;
