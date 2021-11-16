import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";
import {useContext} from "react";
import {StoreContext} from "../contexts/StoreContext";

function Earphones() {
   const value=useContext(StoreContext);
   const products=value.products;

   const earphones=products.filter(product => product.type ==="earphones");

   const titleNewProduct="NEW PRODUCT";
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
                        <Product key={i} img={earphone.image} whichSideImg={whichSideImg} titleNewProduct={titleNewProduct} name={earphone.name} p={earphone.desc} price={earphone.price} btnLinkTo={earphone.productDetails_Link_to} />
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
