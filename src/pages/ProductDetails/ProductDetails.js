import "./ProductDetails.css";
import React, { useState, useContext } from "react";
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops";
import AboutUs from "../../components/AboutUs/AboutUs";
import Features from "../../components/Features/Features";
import Button from "../../components/Button/Button";
import InTheBox from "../../components/InTheBox/InTheBox";
import SummaryModal from "../../components/SummaryModal/SummaryModal";
import { StoreContext } from "../../contexts/StoreContext";
import { useParams } from "react-router-dom";

function ProductDetails() {
   const value = useContext(StoreContext);
   const addtoCart = value.addtoCart;

   const params = useParams();
   const product = value.products.find(
      (product) => product.id === parseInt(params.id)
   );

   console.log("params", params);

   const [count, setCount] = useState(0);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   function openModal() {
      if (count !== 0) {
         addtoCart(product, count);
         setModalIsOpen(true);
      }
   }

   console.log('modalIsOpen',modalIsOpen);

   function closeModal(e) {
      if ((e.target.className === "Modal")||(e.target.className === "closebtn")) {
         setModalIsOpen(false);
      }
   }

   return (
      <div className="ProductDetails">
         <div className="ProductDetails-page">
            <div className="ProductDetails-part1">
               <picture>
                  <source media="(max-width: 768px)" srcSet={product.imagePathTablet}  />
                  <source media="(max-width: 600px)" srcSet={product.imagePathMobile} />
                  <img src={product.imagePathDesktop} alt={product.name} />
               </picture>
               <div className="ProductDetails-part1-content flex-column">
                  <h1 className="productName">{product.name}</h1>
                  <p className="productDesc">{product.desc}</p>
                  <h2>${product.price}</h2>
                  <div className="ProductDetails-part1-content-btns flex-row wrap">
                     <button className="countBtn" onClick={() => setCount(count + 1)}>{count}</button>
                     <Button size="small" variant="contained" bgcolor="orange" onClick={() => openModal()}> ADD TO CART </Button>
                     {modalIsOpen && (
                        <div className="Modal" id="modal" onClick={(e) => closeModal(e)}>
                           <SummaryModal closeModal={closeModal}/>
                           {/* <SummaryModal {...modalIsOpen}/> */}
                        </div>
                     )}
                  </div>
               </div>
            </div>
            <div className="ProductDetails-part2 wrap flex-row">
               <Features />
               <InTheBox />
            </div>
            <AboutUs /> 
             {/* <ProductImages product={product} /> */}
            {/* <div className="ProductDetails-part3-images flex-row">
               <div className="ProductDetails-part3-sideLeft flex-column">
                  <img
                     src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
                     alt="imageGallery1"
                  />
                  <img
                     src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
                     alt="imageGallery2"
                  />
               </div>
               <img
                  src="/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
                  alt="imageGallery3"
               />
            </div>
            <CategoriesShops />
            <AboutUs />  */}
         </div>
      </div>
   );
}

export default ProductDetails;
