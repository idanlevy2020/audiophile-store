import "./ShoppingCart.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from '../../application/App'

function ShoppingCart() {
   const [products,cart,addtoCart] = useContext(CartContext);
   console.log('in ShoppingCart cart.length',cart.length);
   return (
      <div className="ShoppingCart">
         <div className="title">
            <h1>Your Shopping Cart</h1>
         </div>
         <div>{(cart.length===0) && <MessegeForCartEmpty />}</div>
         <div>{(cart.length > 0) && <ShoppingCartItems cart={cart} />}</div>
      </div>
   );
}

function MessegeForCartEmpty() {
   return (
      <div className="MessegeForCartEmpty page">
         <img src="images/shoppingcart/shopingcart.jpg" alt="ShoppingBagCart" />
         <p> Your shopping cart is empty</p>
         <Link to={"/"}><Button size="small" variant="contained" bgcolor="orange">Continue Shopping</Button></Link>
      </div>
   );
}


function ShowItemsInCart(props) {
   return (
      <div className="ShowItemsInCart flex-row" key={props.i}>
         {props.img}
         <div className="flex-column">
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
         </div>
         <h2>${props.price}</h2>
      </div>
   );
}


function ShoppingCartItems(props) {
   let cart=props.cart;
   return (
      <div className="ShoppingCartItems">
            <div className="products">
            {cart.map((item,i) => {
               return (
                  <ShowItemsInCart key={i} img={item.image} name={item.name} desc={item.desc} price={item.price} />
               );
            })}
            </div>
            <Link to={"/checkout"}>
               <Button bgcolor="orange" variant="contained" size="small"> CHECKOUT </Button> 
            </Link>
      </div>
   );
}


export default ShoppingCart;
