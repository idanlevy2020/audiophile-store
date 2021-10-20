// import "../../pages.css";
import "./Xx99Mark1.css"
import React, { useState } from 'react';
import { Button } from "../../../components/Button/Button";
import CategoriesShops from "../../../components/CategoriesShops/CategoriesShops"
import AboutUs from "../../../components/AboutUs/AboutUs";
// import Product from "../../../components/Product/Product";

function Xx99Mark1() {
   const [count, setCount] = useState(0);
   const product = {
      img: <img src="/images/category-headphones/desktop/image-xx99-mark-one.jpg" alt="xx99Mark1"/>,
      whichSideImg: "left",
      h1: "XX99 Mark I Headphones",
      p: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      price: "1750$",
      addToCartBtn: <Button size="small" variant="contained" bgcolor="orange"> ADD TO CART </Button>,
      countBtn: <button className="countBtn" onClick={() => setCount(count + 1)}> {count} </button>
   };
   return (
      <div className="Xx99Mark1">
         <div className="Xx99Mark1-page">
            {/* <div className="Xx99Mark1Products">
               {products.map((product,i) => {
                  return (
                     <Product key={i} img={product.img} whichSideImg={product.whichSideImg} h1={product.h1} p={product.p} price={product.price} button={product.button} />
                  );
               })}
            </div> */}
            <div className="Xx99Mark1-part1 flex-row" key={product.i}>
               {product.img}
               <div className="Xx99Mark1-part1-productDetails flex-column">
                  <h1>{product.h1}</h1>
                  <p>{product.p}</p>
                  <h2>{product.price}</h2>
                  <div className="Xx99Mark1-part1-productDetails-btns flex-row">
                     {product.countBtn}
                     {product.addToCartBtn}
                  </div>
               </div>
            </div>
            <div className="Xx99Mark1-part2 flex-row">
               <div className="features flex-column">
                  <h1>FEATURES</h1>
                  <p> As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. </p>
                  <p> From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector. </p>
               </div> 
               <div className="inTheBox">
                  <h1>IN THE BOX</h1>
                  <p> Your shopping bag is empty </p>
               </div>                 
            </div>
            <div className="Xx99Mark1-part3-images flex-row">
               <div className="Xx99Mark1-part3-sideLeft flex-column">
                  <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg" alt="imageGallery1"/>
                  <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg" alt="imageGallery2"/>
               </div> 
               <img src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg" alt="imageGallery3"/>                 
            </div>
            <CategoriesShops />
            <AboutUs />     
         </div> 
      </div> /*end Xx99Mark1*/
   );
}

export default Xx99Mark1;
