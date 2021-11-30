import "./pages.css";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops";
import AboutUs from "../components/AboutUs/AboutUs";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

function Earphones() {
   const value = useContext(StoreContext);
   const products = value.products;
   const earphones = products.filter((product) => product.type === "earphones");
   return (
      <div className="Earphones">
         <div className="page-title">
            <h1>EARPHONES</h1>
         </div>
         <div className="page-content">
            <div className="products">
               {earphones.map((earphone, i) => {
                  return (
                     <Product product={earphone} key={i} className={i % 2 ? "flex-row-reverse" : "flex-row"}/>
                  );
               })}
            </div>
            {/* <CategoriesShops /> */}
            {/* <AboutUs /> */}
         </div>
      </div> /*end Earphones*/
   );
}

export default Earphones;
