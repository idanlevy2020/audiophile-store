import "./InTheBox.css"
import React from 'react'
import {useContext} from "react";
import {CartContext} from '../../application/App'

export default function InTheBox() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart] = useContext(CartContext);
   return (
      <div className="InTheBox">
         <h1>IN THE BOX</h1>
         <div>{(cart.length===0) && <MessegeCartEmpty />}</div>
         <div>{(cart.length > 0) && <ShowItemsCart cart={cart} />}</div>
   </div>  
   )
}


function MessegeCartEmpty() {
   return (
      <div className="MessegeForCartEmpty">
         <p> Your shopping bag is empty </p>
      </div>
   );
}

function ShowItemsCart(props) {
   return (
      <div className="ShowItemsCart flex-row">
            <div className="products">
               {props.cart.map((item,i) => {
                  return (
                     <div key={i}>
                        <p><span>{item.count}x</span> {item.name}</p>
                     </div>
                  );
               })}
            </div>
      </div>
   );
}
