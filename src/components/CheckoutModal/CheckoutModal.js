import React from 'react'
import './CheckoutModal.css';
import {useContext} from "react";
import {CartContext} from '../../application/App'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function CheckoutModal(props) {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice] = useContext(CartContext);
   const shipping=50;
   const vat=totalPrice*0.17;
   const grandTotalPrice=totalPrice+shipping+vat;
   const firstItem=cart[0];
   console.log('cart',cart);
   return (
      <div className="CheckoutModal">
         <button className="close" onClick={()=>props.setModalIsOpen(false)}>&times;</button>
         <div className="checkMarkBox">
            <p className="checkMark">✓</p>
         </div>
         <h1 className="mainTitle"> THANK YOU FOR YOUR ORDER </h1>
         <h3 className="subTitle">You will receive an email confirmation shortly.</h3>
         <div className="items">
            <div>{(firstItem!=undefined) && <CheckoutModalItems firstItem={firstItem} />}</div>
            {(cart.length>0) && <p> and {cart.length-1} other item(s) </p>}
         </div>
         <div className="grandTotalprice">
            <p>GRAND TOTAL:</p>
            <h3>${grandTotalPrice}</h3>
         </div>
         <Link to={"/"}>
            <Button bgcolor="orange" variant="contained" size="medium"> BACK TO HOME</Button>
         </Link>
      </div>
   );
}

function CheckoutModalItems(props) {
   return (
      <div className="CheckoutModalItems item flex-row">
         {props.firstItem.image}
         <div className="itemDetails flex-column">
            <span className="itemName">{props.firstItem.name}</span>
            <span className="itemPrice">${props.firstItem.price}</span>
         </div>
         <p className="itemCount">X{props.firstItem.count}</p> 
      </div>
   );
}

export default CheckoutModal;




