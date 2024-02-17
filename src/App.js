import './App.css';
import './Header';
import Header from './Header';
import Sortcloth from './SortCloth';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
 
const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);


  useEffect(() => {
    // Fetch data from API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  const handleCategoryClick = category => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };


  const handleSearch = term => {
    setSearchTerm(term);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = product => {
    setCart(prevCart => [...prevCart, product]);
  };


  return (
    <>
      <div className='NavBar'>
        <header>
          <Header />
        </header>
        <Sortcloth />
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} />


    </>
  );
}




export default App;
