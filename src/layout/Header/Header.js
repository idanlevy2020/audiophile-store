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
         <div className="Header-part1 flex-row">
            <div className="ToggleBarAndTitle flex-row">
               <a className='iconToggleBar responsive' onClick={toggleResponsive}>
                  <i className="fa fa-bars"></i>
               </a>
               <h2>audiophile</h2>
            </div>
            <h2 className="responsive">audiophile</h2>
            <div className="topnav">
               <NavBar links={links}/>
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
         <div className="Header-part2 responsive">
            {(responsive)&&<NavBar links={links}/>}
         </div>
      </div>
   );
}

export default Header;