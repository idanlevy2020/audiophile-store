import React from 'react'
import './Summary.css';
import {useContext, useState} from "react";
import {CartContext} from '../../application/App'
import { Button } from "..//Button/Button";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";

export default function Summary() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice] = useContext(CartContext);
   const [modalIsOpen2, setModalIsOpen2] = useState(false);
   // console.log('modalIsOpen:',modalIsOpen);
   const shipping=50;
   const vat=totalPrice*0.17;
   const grandTotalPrice=totalPrice+shipping+vat;
   const continuePayBtn = <Button size="small" variant="contained" bgcolor="orange" onClick={function(){
      setModalIsOpen2(true)
   }}> CONTINUE AND PAY </Button>;
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
            {continuePayBtn}
            {(modalIsOpen2)&&<Modal setModalIsOpen={setModalIsOpen2} />}
      </div>
   )
}


function Modal(props){
   return(
      <div className="Modal">
         <CheckoutModal setModalIsOpen={props.setModalIsOpen} />
      </div>
   );
}
