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
         <div className="ShoppingCartContent">
            <button className="GoBackBtn" onClick={history.goBack}>Go Back</button>
            <h1>Your Shopping Cart</h1>
            {(cartLength===0) && <MessegeForCartEmpty />}
            {(cartLength > 0) && <ShoppingCartItems />}
         </div>
      </div>
   );
}

function MessegeForCartEmpty() {
   return (
      <div className="MessegeForCartEmpty page">
         <img src="images/shoppingcart/shopingcart.jpg" alt="ShoppingBagCart" />
         <p> Your Shopping Cart is Empty</p>
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
         <img src={props.item.imagePathMobile} alt={props.item.name} />
         <div className="ShowItemsInCart-content flex-column">
            <p className="itemName">{props.item.name}</p>
            <p>${props.item.price}</p>
            <div className="buttonsCountContainer flex-row">
               <button onClick={() => subOneItemFromCart(props.item)}> - </button>
               <p>{props.item.count}</p>
               <button onClick={() => addtoCart(props.item,1)}> + </button>
            </div>
            <p>price total: ${props.item.price*props.item.count}</p>
         </div>
         <button className="removeBtn" onClick={() => removeFromCart(props.item)}> X </button>
      </div>
   );
}



export default ShoppingCart;
