 import './Header.css';

function Header (){
return(

 <>
  <div class="logo">UrbanHunt</div>
        <nav>
            <ul>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </nav>
        <div class="search-login">
            <div class="search">
                <input type="text" placeholder="Search" className='input'></input>
            </div>
            <button class="login-btn">Login</button>
        </div>
 
 </>
);
}
export default Header