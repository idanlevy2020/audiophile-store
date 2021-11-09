import "./Header.css";
import {useState} from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


// checkout
// cart

function Header(props) {

   const links = [
      { path: "/", text: "HOME" },
      { path: "/headphones", text: "HEADPHONES" },
      { path: "/speakers", text: "SPEAKERS" },
      { path: "/earphones", text: "EARPHONES" },
   ];

   // set a variable 'responsive' to false. Update it using 'setResponsive'
   const [responsive, setResponsive] = useState(false);

   const toggleResponsive = () => {
      //take current value of responsive and flip it
      setResponsive(prev => !prev);
    }
   
   return (
      <div className="Header">
         <div className="Header-container flex-row">
            <div className="flex-row">
               <a className='icon' onClick={toggleResponsive}>
                  <i className="fa fa-bars"></i>
               </a>
               <h2>audiophile</h2>
               <div className={responsive ? 'shoppingCart responsive' : 'shoppingCart'}>
                  <Link to={"/shoppingCart"}>
                     <button className="shoppingCartBtn" title="Shopping Cart">
                        <img src="/icons/white-24dp/outline_shopping_cart_white_24dp.png" alt="shoppingCart" />
                        <span className="badge">{props.countItemsCart}</span>
                     </button>
                  </Link>
               </div>
            </div>
            <div className={responsive ? 'topnav responsive' : 'topnav'}>
               <NavBar links={links}/>
            </div>
            <Link to={"/shoppingCart"}>
               <button className="shoppingCartBtn" title="Shopping Cart">
                  <img src="/icons/white-24dp/outline_shopping_cart_white_24dp.png" alt="shoppingCart" />
                  <span className="badge">{props.countItemsCart}</span>
               </button>
            </Link>
            {/* <div className={responsive ? 'topnav responsive' : 'topnav'}>
               <NavBar links={links}/>
            </div> */}
         </div>
      </div>
   );
}

export default Header;
