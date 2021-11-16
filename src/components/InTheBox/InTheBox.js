import "./InTheBox.css"
import React from 'react'
import {useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";

function InTheBox() {
   const value=useContext(StoreContext);
   const cartLength=value.cart.length;
   return (
      <div className="InTheBox">
         <h1>IN THE BOX</h1>
         <div>{(cartLength===0) && <MessegeCartEmpty />}</div>
         <div>{(cartLength > 0) && <ShowItemsCart />}
      </div>
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

function ShowItemsCart() {
   const value=useContext(StoreContext);
   const cart=value.cart;
   return (
      <div className="ShowItemsCart flex-row">
            <div className="products">
               {cart.map((item,i) => {
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

export default InTheBox;
