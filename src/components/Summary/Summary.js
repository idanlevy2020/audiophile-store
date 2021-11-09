import React from 'react'
import './Summary.css';
import {useContext} from "react";
import {CartContext} from '../../application/App'
import { Button } from "..//Button/Button";

export default function Summary() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice] = useContext(CartContext);
   const shipping=50;
   const vat=totalPrice*0.17;
   const grandTotalPrice=totalPrice+shipping+vat;
   return (
      <div className="Summary">
         <h3>SUMMARY</h3>
         <div className="items">
               {cart.map((item,i) => {
                  return (
                     <div className="item flex-row" key={i}>
                        {item.image}
                        <div className="itemDetails flex-column">
                           <span className="itemName">{item.name}</span>
                           <span>${item.price}</span>
                        </div>
                        <p className="itemCount">x{item.count}</p> 
                     </div>
                  );
               })}
            </div>
            <div className="price">
               <p>TOTAL:</p>
               <h3>${totalPrice}</h3>
            </div>
            <div className="price">
               <p>SHIPPING:</p>
               <h3>${shipping}</h3>
            </div>
            <div className="price">
               <p>VAT:</p>
               <h3>${vat}</h3>
            </div>
            <div className="price">
               <p>GRAND TOTAL:</p>
               <h3>${grandTotalPrice}</h3>
            </div>

            <button className="paymentBtn"> CONTINUE AND PAY </button>
            {/* <Button bgcolor="orange" variant="contained" size="large"> CONTINUE AND PAY</Button> */}
      </div>
   )
}
