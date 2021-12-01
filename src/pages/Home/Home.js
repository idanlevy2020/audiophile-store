import "../pages.css";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
//import Button from "./Button/Button"; //export default
import AboutUs from "../../components/AboutUs/AboutUs";
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops";
import {useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import Product from "../../components/Product/Product";

function Home() {
   const value=useContext(StoreContext);
   const products=value.products;
   const productsHomePage=products.filter(result);

   function result(product){
      return ((product.id===76731)||(product.id===76734)||(product.id===76735)||(product.id===76733));
   }

   console.log('productsHomePage:',productsHomePage);
   //Todo - improve Home and use in products array
   return (
      <div className="Home">
         {/* <div className="Home-part1 flex-column">
            <div className="newProduct flex-column">
               <h3>NEW PRODUCT</h3>
               <h1>XX99 Mark II Headphone</h1>
               <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
               </p>
               <Link to="/headphones/xx99mark2">
                 <Button bgcolor="orange" variant="contained" size="small"> See product </Button>
              </Link>
            </div>
            <img src="/images/home/tablet/image-header.jpg" alt="xx99Mark2"/>
         </div> */}
          <div className="page-content">
            <div className="Home-part2"> 
               <CategoriesShops />
            </div>
            <div className="Home-part3 flex-column">
               <img src="/images/home/tablet/image-speaker-zx9.png" alt="speaker-zx9"/>
               <div className="ZX9speaker flex-column">
                  <h1>ZX9 SPEAKER</h1>
                  <p>
                     Upgrade to premium speakers that are phenomenally built to
                     deliver truly remarkable sound.
                  </p>
                  <Link to="/speakers/zx9speaker">
                     <Button bgcolor="black" variant="contained" size="small"> See product </Button>
                  </Link>
               </div>
            </div>
             <div className="Home-part4">
               <picture>
                  <source media="(max-width: 768px)" srcSet="/images/home/tablet/image-speaker-zx7.jpg"  />
                  <source media="(max-width: 600px)" srcSet="/images/home/mobile/image-speaker-zx7.jpg" />
                  <img src="/images/home/desktop/image-speaker-zx7.jpg" alt="ZX7speaker" />
               </picture>
               <div className="ZX7speaker">
                  <div className="ZX7speaker-content flex-column">
                     <h1>ZX7 SPEAKER</h1>
                     <Link to="/speakers/zx7speaker">
                        <Button bgcolor="" variant="outlined" size="small"> See product </Button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="Home-part5">
               <picture>
                  <source media="(max-width: 768px)" srcSet="/images/home/tablet/image-earphones-yx1.jpg"  />
                  <source media="(max-width: 600px)" srcSet="/images/home/mobile/image-earphones-yx1.jpg" />
                  <img src="/images/home/desktop/image-earphones-yx1.jpg" alt="earphonesYX1" />
               </picture>
               <div className="earphonesYX1">
                  <div className="earphonesYX1-content flex-column">
                     <h1>YX1 EARPHONES</h1>
                     <Link to="/earphones/yx1">
                        <Button bgcolor="" variant="outlined" size="small"> See product </Button>
                     </Link>
                  </div>
               </div>
            </div>
            {/*<div className="products">
               {productsHomePage.map((product, i) => {
                  return (
                     <Product product={product} i={i} key={i}/>
                  );
               })}
            </div> */}
            <AboutUs /> 
         </div>
      </div>
   );
}

export default Home;
