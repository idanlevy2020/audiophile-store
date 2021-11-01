import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";
import {useContext} from "react";
import {CartContext} from '../application/App'

function Headphones() {
   const [products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart]=useContext(CartContext);
   const headphones=products.headphones;

   const titleNewProduct="NEW PRODUCT";
   return (
      <div className="Headphones">
         <div className="title">
            <h1>HEADPHONES</h1>
         </div>
         <div className="page">
            <div className="products">
               {headphones.map((headphone,i) => {
                     let whichSideImg;
                     if (i%2===0) whichSideImg='left';
                     else whichSideImg='right';
                     return (
                        <Product key={i} img={headphone.image} whichSideImg={whichSideImg} titleNewProduct={titleNewProduct} name={headphone.name} p={headphone.desc} price={headphone.price} btnLinkTo={headphone.productDetails_Link_to} />
                     );
               })}
            </div>
            <CategoriesShops />
            <AboutUs />
         </div>
      </div> /*end headphone*/
   );
}

export default Headphones;
