import "./Header.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Header(props) {
   const links = [
      { path: "/", text: "HOME" },
      { path: "/headphones", text: "HEADPHONES" },
      { path: "/speakers", text: "SPEAKERS" },
      { path: "/earphones", text: "EARPHONES" },
   ];
   
   return (
      <div className="Header">
         <div className="Header-container flex-row">
            <h2>Audiophile</h2>
            <NavBar links={links} flex={"flex-row"} />
            <Link to={"/shoppingCart"}>
               <button className="shoppingCartBtn" title="Shopping Cart">
                  <img src="/icons/white-24dp/outline_shopping_cart_white_24dp.png" alt="shoppingCart" />
                  <span className="badge">{props.countItemsCart}</span>
               </button>
            </Link>
         </div>
      </div>
   );
}

export default Header;
