import "../pages.css";
import "./ShoppingCart.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

function ShoppingCart() {
   return (
      <div className="ShoppingCart">
         <div className="title">
            <h1>Your Shopping Bag</h1>
         </div>
         <ShoppingCartMain />
      </div>
   );
}

function ShoppingCartMain() {
   return (
      <div className="ShoppingCartMain page">
         <img src="images/shoppingcart/shopingcart.jpg" alt="ShoppingBagCart" />
         <p> Your shopping bag is empty</p>
         <Link to={"/"}><Button size="small" variant="contained" bgcolor="orange">Continue Shopping</Button></Link>
      </div>
   );
}

export default ShoppingCart;
