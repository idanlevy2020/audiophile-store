import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import {useState , useContext} from "react";
import {CartContext} from '../../application/App'
import Button from "../../components/Button/Button";
import { useHistory } from 'react-router-dom';

function ShoppingCart() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart] = useContext(CartContext);
   const [totalPrice, setTotalPrice] = useState(0);
   console.log('in ShoppingCart cart.length',cart.length);
   let history = useHistory();
   return (
      <div className="ShoppingCart">
         <div className="title">
            <h1>Your Shopping Cart</h1>
         </div>
         <button className="GoBackBtn" onClick={history.goBack}>Go Back</button>
         <div>{(cart.length===0) && <MessegeForCartEmpty />}</div>
         <div>{(cart.length > 0) && <ShoppingCartItems />}</div>
      </div>
   );
}

function MessegeForCartEmpty() {
   return (
      <div className="MessegeForCartEmpty page">
         <img src="images/shoppingcart/shopingcart.jpg" alt="ShoppingBagCart" />
         <p> Your shopping cart is empty</p>
         <Link to={"/"}>
            <Button size="small" variant="contained" bgcolor="orange">Continue Shopping</Button>
         </Link>
      </div>
   );
}


function ShowItemsInCart(props) {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart] = useContext(CartContext);
   return (
      <div className="ShowItemsInCart flex-row" key={props.i}>
         {props.item.image}
         <h3>{props.item.name}</h3>
         <h3>${props.item.price}</h3>
         <h3>Count ({props.item.count})</h3>
         <h3>price total: ${props.item.price*props.item.count}</h3>
         <Button bgcolor="black" variant="contained" size="small" onClick={() => subOneItemFromCart(props.item)}> - </Button>
         <Button bgcolor="black" variant="contained" size="small" onClick={() => addtoCart(props.item,1)}> + </Button>
         <Button bgcolor="black" variant="contained" size="small" onClick={() => removeFromCart(props.item)}> Remove </Button>
      </div>
   );
}


function ShoppingCartItems() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart] = useContext(CartContext);
   return (
      <div className="ShoppingCartItems flex-column">
            <h2> cart ({cart.length}) total items ({countItemsCart})</h2>
            <div className="products-cart-list">
               {cart.map((item,i) => {
                  return (
                     <ShowItemsInCart key={i} item={item} />
                  );
               })}
            </div>
            <div className="container-btnCheckout flex-row">
               <Link to={"/checkout"}>
                  <Button bgcolor="orange" variant="contained" size="small"> CHECKOUT </Button> 
               </Link>
            </div>
      </div>
   );
}


export default ShoppingCart;
