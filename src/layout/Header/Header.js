import "./Header.css";
import {useState, useContext} from 'react';
import {StoreContext} from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
// import Button from "../../components/Button/Button";
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
      if (responsive) setResponsive(false);
      else setResponsive(true);
   }

   return (
      <div className="Header">
         <div className="Header-container">
            <div className="Header-part1 flex-row">
               <div className="topnav-responsive-and-logo flex-row">
                  <div className="topnav-responsive">
                     <button className="topnavBtn" onClick={toggleResponsive}>&#9776;</button>
                  </div>
                  <Link to={"/"} className="logo displayNone">audiophile</Link>  
               </div>
               <Link to={"/"} className="logo">audiophile</Link>            
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
            {(responsive)&&<div className="Header-part2 topnav-content-responsive"> 
               <NavBar links={links} flex={"flex-column"}/>
            </div>}
         </div>
      </div>
   );
}

export default Header;