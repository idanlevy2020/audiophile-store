import "../pages.css";
import './Checkout.css';
import React from 'react';
import Summary from "../../components/Summary/Summary";

function Checkout() {
   return (
      <div className="Checkout">
         <div className="page checkout-part1">
         <h1 className="checkout-title">CHECKOUT</h1>
            <form className="flex-row" onSubmit={(e) => e.preventDefault()}>
               <div className="checkout-part1">
                  <div className="col">
                     <h3 className="subtitle">BILLIG DETAILS</h3>
                     <div className="box">
                        <label htmlFor="fname"> Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                     </div>
                     <div className="box">
                        <label htmlFor="email"> Email Address</label>
                        <input type="text" id="email" name="email" placeholder="john@example.com"/>                    
                     </div>
                     <div className="box">
                        <label htmlFor="phone"> Phone Number</label>
                        <input type="text" id="phone" name="phone" placeholder="+1 202-555-0136"/>
                     </div>
                  </div>
                  <div className="col">
                     <h3 className="subtitle">SHIPPING INFO</h3>
                     <div className="box">
                        <label htmlFor="adr"> Your Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                     </div>
                     <div className="box">
                        <label htmlFor="zip"> Zip Code</label>
                        <input type="text" id="zip" name="zip" placeholder="10001"/>                 
                     </div>
                     <div className="box">
                        <label htmlFor="city"> City</label>
                        <input type="text" id="city" name="city" placeholder="New York"/>
                     </div>
                     <div className="box">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" placeholder="United States"/>
                     </div>
                  </div>
               </div>
               <div className="checkout-part2">
                  <div className="col">
                     <h3 className="subtitle">PAYMENT DETAILS</h3>
                     <div className="box"> 
                        <label htmlFor="fname">Accepted Cards</label>
                        <div className="icon-container">
                           <i className="fa fa-cc-visa" style={{color: "navy"}}></i>
                           <i className="fa fa-cc-amex" style={{color: "blue"}}></i>
                           <i className="fa fa-cc-mastercard" style={{color: "red"}}></i>
                           <i className="fa fa-cc-discover" style={{color: "orange"}}></i>
                        </div>
                     </div>
                     <div className="box">
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>             
                     </div>
                     <div className="box">
                        <label htmlFor="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                     </div>
                     <div className="box">
                        <label htmlFor="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                     </div>
                     <div className="box">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2026"/>
                     </div>
                     <div className="box">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
                     </div>
                  </div>
               </div>
               <div className="checkout-part3">
                  <Summary />
               </div>  
            </form>  
         </div>  
      </div>
   )
}

export default Checkout;
