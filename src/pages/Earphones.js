import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";
import {useContext} from "react";
import {CartContext} from '../application/App'

function Earphones() {
   const [products,cart,addtoCart]=useContext(CartContext);
   const earphones=products.earphones;

   const title_h3="NEW PRODUCT";
   // const products = [{
   //    img: <img src="/images/category-earphones/desktop/image-yx1-earphones.jpg" alt="YX1Wireless"/>,
   //    whichSideImg: "left",
   //    h3: "NEW PRODUCT",
   //    h1: "YX1 wireless earphones",
   //    p: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
   //    button: btn,
   // },];
   return (
      <div className="Earphones">
         <div className="title">
            <h1>EARPHONES</h1>
         </div>
         <div className="page">
         <div className="products">
               {earphones.map((earphone,i) => {
                     let whichSideImg;
                     if (i%2===0) whichSideImg='left';
                     else whichSideImg='right';
                     return (
                        <Product key={i} img={earphone.image} whichSideImg={whichSideImg} h3={title_h3} h1={earphone.name} p={earphone.desc} price={earphone.price} btnLinkTo={earphone.productDetails_Link_to} />
                     );
               })}
            </div>
            <CategoriesShops />
            <AboutUs />
         </div>
      </div> /*end Earphones*/
   );
}

export default Earphones;
