import './App.css';
import './React-Components/Header';
import Header from './React-Components/Header';
import Sortcloth from './React-Components/SortCloth';



function App() {
  return (
    <div className='NavBar'>
      <header>
        <Header />
      </header>
      <Sortcloth />
    </div>
  );
}

export default App;
