import "./pages.css";
import { Button } from "../components/Button/Button";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";

function Earphones() {
   let btn = <Button bgcolor="orange" variant="contained" size="small"> See product </Button>;
   const products = [{
      img: <img src="/images/category-earphones/desktop/image-yx1-earphones.jpg" alt="YX1Wireless"/>,
      whichSideImg: "left",
      h3: "NEW PRODUCT",
      h1: "YX1 wireless earphones",
      p: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      button: btn,
   },];
   return (
      <div className="Earphones">
         <div className="title">
            <h1>EARPHONES</h1>
         </div>
         <div className="page">
            <div className="products">
               {products.map((product,i) => {
                     return (
                        <Product key={i} img={product.img} whichSideImg={product.whichSideImg} h3={product.h3} h1={product.h1} p={product.p} button={product.button} />
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
