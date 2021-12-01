import "../pages.css";
import './Checkout.css';
import { useState } from "react";
import React from 'react';
import Summary from "../../components/Summary/Summary";

function Checkout() {
   const [formDetails, setFormDetails] = useState({
         name : '',
         email : '',
         phone : '',
         address:'',
         zip:'',
         city:'',
         country:'',
         cardname : '',
         cardnumber: '',
         expmonth: '',
         expyear:'',
         cvv:'',
   });

   function handleChange(obj){
      let copyObj={...formDetails};
      const key=Object.keys(obj);
      const value=Object.values(obj)[0];
      copyObj[key]=value;
      setFormDetails(copyObj);
   }

   let flagFormFilled = !Object.values(formDetails).some(value => value === '');

   return (
      <div className="Checkout">
         <div className="page-content">
            <div className="checkout-part1">
            <h1 className="checkout-title">CHECKOUT</h1>
               <form className="flex-row" onSubmit={(e) => e.preventDefault()}>
                  <div className="checkout-part1">
                     <div className="col">
                        <h3 className="subtitle">BILLIG DETAILS</h3>
                        <div className="box">
                           <label htmlFor="name"> Name *</label>
                           <input type="text" id="name" name="name" placeholder="John M. Doe" onChange={(e)=> handleChange({name:e.target.value})} required/>  
                        </div>
                        <div className="box">
                           <label htmlFor="email"> Email Address *</label>
                           <input type="text" id="email" name="email" placeholder="john@example.com" onChange={e => handleChange({email:e.target.value})} required/>                    
                        </div>
                        <div className="box">
                           <label htmlFor="phone"> Phone Number *</label>
                           <input type="text" id="phone" name="phone" placeholder="+1 202-555-0136" onChange={e => handleChange({phone:e.target.value})} required/>  
                        </div>
                     </div>
                     <div className="col">
                        <h3 className="subtitle">SHIPPING INFO</h3>
                        <div className="box">
                           <label htmlFor="adr"> Your Address *</label>
                           <input type="text" id="address" name="address" placeholder="542 W. 15th Street" onChange={(e)=> handleChange({address:e.target.value})} required/>
                        </div>
                        <div className="box">
                           <label htmlFor="zip"> Zip Code *</label>
                           <input type="text" id="zip" name="zip" placeholder="10001" onChange={(e)=> handleChange({zip:e.target.value})} required/>             
                        </div>
                        <div className="box">
                           <label htmlFor="city"> City *</label>
                           <input type="text" id="city" name="city" placeholder="New York" onChange={(e)=> handleChange({city:e.target.value})} required/>
                        </div>
                        <div className="box">
                           <label htmlFor="country">Country *</label>
                           <input type="text" id="country" name="country" placeholder="United States" onChange={(e)=> handleChange({country:e.target.value})} required/> 
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
                           <label htmlFor="cname">Name on Card *</label>
                           <input type="text" id="cname" name="cardname" placeholder="John More Doe" onChange={e => handleChange({cardname:e.target.value})} required/>              
                        </div>
                        <div className="box">
                           <label htmlFor="ccnum">Credit card number *</label>
                           <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={e => handleChange({cardnumber:e.target.value})} required/>  
                        </div>
                        <div className="box">
                           <label htmlFor="expmonth">Exp Month *</label>
                           <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={e => handleChange({expmonth:e.target.value})} required/>  
                        </div>
                        <div className="box">
                           <label htmlFor="expyear">Exp Year *</label>
                           <input type="text" id="expyear" name="expyear" placeholder="2026" onChange={e => handleChange({expyear:e.target.value})} required/>  
                        </div>
                        <div className="box">
                           <label htmlFor="cvv">CVV *</label>
                           <input type="text" id="cvv" name="cvv" placeholder="352" onChange={e => handleChange({cvv:e.target.value})} required/>  
                        </div>
                     </div>
                  </div>
                  <div className="checkout-part3">
                     <Summary flagFormFilled={flagFormFilled}/>
                  </div>  
               </form>  
            </div>  
         </div>
      </div>
   )
}

export default Checkout;
