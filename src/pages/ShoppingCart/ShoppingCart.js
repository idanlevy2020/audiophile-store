import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import Button from "../../components/Button/Button";
import { useHistory } from 'react-router-dom';

function ShoppingCart() {
   const value=useContext(StoreContext);
   const cartLength=value.cart.length;
   let history = useHistory();
   return (
      <div className="ShoppingCart">
         <div className="title">
            <h1>Your Shopping Cart</h1>
         </div>
         <button className="GoBackBtn" onClick={history.goBack}>Go Back</button>
         <div>{(cartLength===0) && <MessegeForCartEmpty />}</div>
         <div>{(cartLength > 0) && <ShoppingCartItems />}</div>
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

function ShoppingCartItems() {
   const value=useContext(StoreContext);
   const cart=value.cart;
   const countItemsCart=value.countItemsCart;
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


function ShowItemsInCart(props) {
   const value=useContext(StoreContext);
   const addtoCart=value.addtoCart;
   const subOneItemFromCart=value.subOneItemFromCart;
   const removeFromCart=value.removeFromCart;
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



export default ShoppingCart;
