import "./ProductDetails.css"
import React, { useState } from 'react';
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops"
import AboutUs from "../../components/AboutUs/AboutUs";
import {useContext} from "react";
import {CartContext} from '../../application/App'
import Button from "../../components/Button/Button";
import InTheBox from "../../components/InTheBox/InTheBox";
import SummaryModal from "../../components/SummaryModal/SummaryModal";

function ProductDetails(props) {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice] = useContext(CartContext);
   const [count, setCount] = useState(0);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   console.log('modalIsOpen:',modalIsOpen);
   const countBtn=  <button className="countBtn" onClick={() => setCount(count + 1)}> {count} </button>;
   // const addToCartBtn= <Button size="small" variant="contained" bgcolor="orange" onClick={() => (count!==0)&& addtoCart(props.product,count)}> ADD TO CART </Button>;
   const addToCartBtn= <Button size="small" variant="contained" bgcolor="orange" onClick={function(){
      if (count!==0){
         addtoCart(props.product,count);
         setModalIsOpen(true);
      } 
   }}> ADD TO CART </Button>;
   return (
      <div className="ProductDetails">
         <div className="ProductDetails-page">
            <div className="ProductDetails-part1 flex-row">
               {props.product.image}
               <div className="ProductDetails-part1-productDetails flex-column">
                  <h1>{props.product.name}</h1>
                  <p>{props.product.desc}</p>
                  <h2>${props.product.price}</h2>
                  <div className="ProductDetails-part1-productDetails-btns flex-row">
                     {countBtn}
                     {addToCartBtn}
                  </div>
               </div>
            </div>
            <div className="ProductDetails-part2 flex-row">
               <div className="features flex-column">
                  <h1>FEATURES</h1>
                  <p> As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. </p>
                  <p> From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector. </p>
               </div> 
               <InTheBox />                
            </div>
            <div className="ProductDetails-part3-images flex-row">
               <div className="ProductDetails-part3-sideLeft flex-column">
                  <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg" alt="imageGallery1"/>
                  <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg" alt="imageGallery2"/>
               </div> 
               <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg" alt="imageGallery3"/>                 
            </div>
            <CategoriesShops />
            <AboutUs />     
         </div> 
         {(modalIsOpen)&&<Modal setModalIsOpen={setModalIsOpen} />}
      </div> 
   );
}


function Modal(props){
   return(
      <div className="Modal">
         <SummaryModal setModalIsOpen={props.setModalIsOpen} />
      </div>
   );
}


export default ProductDetails;
