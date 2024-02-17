import './App.css';
import './React-Components/Header';
import Header from './React-Components/Header';
import Sortcloth from './React-Components/SortCloth';
import { useEffect, useState } from 'react';

const API_URL = 'https://fakestoreapi.com';

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
      const data = await response.json();
      setItems(data);
      setFilteredItems(data); // Initially display all items
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleCategoryChange = (selectedCategory) => {
    // Filter items based on selected category
    setCategory(selectedCategory);
    if (selectedCategory === 'men') {
      setFilteredItems(items.filter(item => item.category === 'men'));
    } else if (selectedCategory === 'women') {
      setFilteredItems(items.filter(item => item.category === 'women'));
    } else {
      setFilteredItems(items);
    }
  };


  return (
    <>
      <div className='NavBar'>
        <header>
          <Header />
        </header>
        <Sortcloth />
      </div>

      <div className="item-cards">{filteredItems.map(item => (<ItemCard key={item.id} item={item} />))}
      </div>
    </>
  );
}


const Navbar = ({ onCategoryChange }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onCategoryChange('men')}>Men</li>
        <li onClick={() => onCategoryChange('women')}>Women</li>
      </ul>
    </nav>
  );
};
const SortDivisionArea = () => {
  return (
    <div>
      {/* Sorting options */}
    </div>
  );
};
const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      {/* Additional item details */}
    </div>
  );
};
export default App;
