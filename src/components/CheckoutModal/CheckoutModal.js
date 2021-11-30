import React from 'react'
import './CheckoutModal.css';
import {useState , useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function CheckoutModal(props) {
   const value=useContext(StoreContext);
   const cart=value.cart;
   const totalPrice=value.totalPrice;
   const shipping=50;
   const vat=Math.round(totalPrice*0.17);
   const grandTotalPrice=totalPrice+shipping+vat;
   const firstItem=cart[0];
   const otherItems=cart.slice(1,cart.length)
   const [buttonHidden, setButtonHidden] = useState(true);
   return (
      <div className="CheckoutModal">
         <button className="close" onClick={()=>props.setModalIsOpen(false)}>&times;</button>
         <div className="checkMarkBox">
            <p className="checkMark">✓</p>
         </div>
         <h1 className="mainTitle"> THANK YOU FOR YOUR ORDER </h1>
         <h3 className="subTitle">You will receive an email confirmation shortly.</h3>
         <div className="items">
            <div>{(firstItem!==undefined) && <CheckoutModalItems item={firstItem} />}</div>
            {(cart.length===1) && <p> and 0 other item(s) </p>}
            {(cart.length>1) && (buttonHidden) && <Button bgcolor="" variant="outlined" size="small" onClick={()=>setButtonHidden(false)}> and {cart.length-1} other item(s) </Button>}
            {(!buttonHidden)&& otherItems.map((item,i) => {
                     return (
                        <CheckoutModalItems key={i} item={item}  />
                     );
               })}
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
         <img src={props.item.imagePathMobile} alt={props.item.name} />
         <div className="itemDetails flex-column">
            <span className="itemName">{props.item.name}</span>
            <span className="itemPrice">${props.item.price}</span>
         </div>
         <p className="itemCount">X{props.item.count}</p> 
      </div>
   );
}

export default CheckoutModal;




