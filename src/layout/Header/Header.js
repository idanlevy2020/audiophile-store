import "./Header.css";
import {useState, useContext} from 'react';
import {StoreContext} from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Header() {
   const value=useContext(StoreContext);
   const countItemsCart=value.countItemsCart;
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

    console.log('responsive:',responsive);
   
   return (
      <div className="Header">
         <div className="Header-container flex-row">
            <div className="ToggleBarAndTitle flex-row">
               <a className="iconToggleBar" onClick={toggleResponsive}>
                  <i className="fa fa-bars"></i>
               </a>
               <h2 className="displayNone">audiophile</h2>
            </div>
            <h2>audiophile</h2>
            <div className="NavBar-option-row displayNone">
               <NavBar links={links} flex={"flex-row"}/>
            </div>
            <div className='shoppingCart'>
               <Link to={"/shoppingCart"}>
                  <button className="shoppingCartBtn" title="Shopping Cart">
                     <img src="/icons/white-24dp/outline_shopping_cart_white_24dp.png" alt="shoppingCart" />
                     <span className="badge">{countItemsCart}</span>
                  </button>
               </Link>
            </div>
         </div>
         <div className="NavBar-option-column">
            {(responsive)&&<NavBar links={links} flex={"flex-column"}/>}
         </div>
      </div>
   );
}

export default Header;