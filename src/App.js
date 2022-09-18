import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const product = [
    {
      price: 99999,
      product: "iphone",
      quantity: 0,
    },
    {
      price: 9999,
      product: "samsung",
      quantity: 0,
    },
    {
      price: 999,
      product: "jio next",
      quantity: 0,
    }
  ]
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
