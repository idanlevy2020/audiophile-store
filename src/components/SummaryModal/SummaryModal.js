import React from 'react'
import './SummaryModal.css';
import {useContext} from "react";
import {CartContext} from '../../application/App'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export default function SummaryModal(props) {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice] = useContext(CartContext);
   return (
      <div className="SummaryModal">
         <button className="close" onClick={()=>props.setModalIsOpen(false)}>&times;</button>
         <h2>cart ({cart.length})</h2>
         <div className="items">
               {cart.map((item,i) => {
                  return (
                     <div className="item flex-row" key={i}>
                        {item.image}
                        <div className="itemDetails flex-column">
                           <span className="itemName">{item.name}</span>
                           <span className="itemPrice">${item.price}</span>
                        </div>
                        <p className="itemCount">{item.count}</p> 
                     </div>
                  );
               })}
            </div>
            <div className="price">
               <p>TOTAL:</p>
               <h3>${totalPrice}</h3>
            </div>
            <Link to={"/checkout"}>
               <Button bgcolor="orange" variant="contained" size="small"> CHECKOUT</Button>
            </Link>
      </div>
   )
}
