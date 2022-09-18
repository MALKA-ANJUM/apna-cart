import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const productList = [
    {
      price: 99999,
      name: "iphone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "samsung",
      quantity: 0,
    },
    {
      price: 999,
      name: "jio next",
      quantity: 0,
    }
  ]

  const [list, setList] = useState(productList)
  const incrementQuantity = (index) => {
    let newList =[...list]
    newList[index].quantity++
    setList(newList)
  }
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={this.incrementQuantity()} />
      </main>
      <Footer />
    </>
  );
}

export default App;
