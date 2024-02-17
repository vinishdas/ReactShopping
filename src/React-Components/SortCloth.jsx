import exampleImage from './images/352137_sort_icon.svg';
import './SortCloth.css';
import shoppingCart from './images/shopping-cart-outline-svgrepo-com (1).svg'

function Sortcloth(){
    return(
        <>
        <div className='Sort-List'>
        <img className='sortcloth' src={exampleImage}></img>
        <span>sort</span>
        <img  className='sortcloth' id='cart' src={shoppingCart} alt="none" />
      </div>
        </>
    );
}
export default Sortcloth