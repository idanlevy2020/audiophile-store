import "./pages.css";
import { Button } from "../components/Button/Button";
import Product from "../components/Product/Product";
import CategoriesShops from "../components/CategoriesShops/CategoriesShops"
import AboutUs from "../components/AboutUs/AboutUs";

function Speakers() {
   let btn = <Button bgcolor="orange" variant="contained" size="small"> See product </Button>;
   const products = [{
      img: <img src="/images/category-speakers/desktop/image-zx9.jpg" alt="ZX9Speaker"/>,
      whichSideImg: "left",
      h3: "NEW PRODUCT",
      h1: "ZX9 speaker",
      p: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      button: btn,
   }, 
   {
      img: <img src="/images/category-speakers/desktop/image-zx7.jpg" alt="ZX7Speaker"/>,
      whichSideImg: "right",
      h3: "NEW PRODUCT",
      h1: "ZX7 speaker",
      p: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      button: btn,
   }];
   return (
      <div className="Speakers">
         <div className="title">
            <h1>SPEAKERS</h1>
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
      </div> /*end Speakers*/
   );
}

export default Speakers;
