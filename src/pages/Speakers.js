import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";
import {useContext} from "react";
import {StoreContext} from "../contexts/StoreContext";

function Speakers() {
   const value = useContext(StoreContext);
   const products = value.products;
   const speakers = products.filter((product) => product.type === "speakers");
   return (
      <div className="Speakers">
         <div className="page-title">
            <h1>SPEAKERS</h1>
         </div>
         <div className="page-content">
            <div className="products">
               {speakers.map((speaker, i) => {
                  return (
                     <Product product={speaker} key={i} className={i % 2 ? "flex-row-reverse" : "flex-row"}/>
                  );
               })}
            </div>
            {/* <CategoriesShops /> */}
            <AboutUs />
         </div>
      </div> /*end Speakers*/
   );
}

export default Speakers;
