import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";
import {useContext} from "react";
import {StoreContext} from "../contexts/StoreContext";

function Speakers() {
   const value=useContext(StoreContext);
   const products=value.products;
   
   const speakers=products.filter(product => product.type ==="speakers");
   
   const titleNewProduct="NEW PRODUCT";
   return (
      <div className="Speakers">
         <div className="title">
            <h1>SPEAKERS</h1>
         </div>
         <div className="page">
            <div className="products">
               {speakers.map((speaker,i) => {
                     let whichSideImg;
                     if (i%2===0) whichSideImg='left';
                     else whichSideImg='right';
                     return (
                        <Product key={i} img={speaker.image} whichSideImg={whichSideImg} titleNewProduct={titleNewProduct} name={speaker.name} p={speaker.desc} price={speaker.price} btnLinkTo={speaker.productDetails_Link_to} />
                     );
               })}
            </div>
            <CategoriesShops />
            <AboutUs />
         </div>
      </div> /*end Speakers*/
   );
}

export default Speakers;
