import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops";
import AboutUs from "../components/AboutUs/AboutUs";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

function Headphones() {
   const value = useContext(StoreContext);
   const products = value.products;
   const headphones = products.filter((product) => product.type === "headphones");
   return (
      <div className="Headphones">
         <div className="page-title">
            <h1>HEADPHONES</h1>
         </div>
         <div className="page-content">
            <div className="products">
               {headphones.map((headphone, i) => {
                  return (
                     <Product product={headphone} key={i} className={i % 2 ? "flex-row-reverse" : "flex-row"}/>
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
