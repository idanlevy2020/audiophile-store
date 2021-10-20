import "../pages.css";
import { Button } from "../../components/Button/Button";
import Product from "../../components/Product/Product";
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops"
import AboutUs from "../../components/AboutUs/AboutUs";
import { Link } from "react-router-dom";

function Headphones() {
   let btn = <Button bgcolor="orange" variant="contained" size="small"> See product </Button>;
   const products = [{
      img: <img src="/images/category-headphones/desktop/image-xx99-mark-two.jpg" alt="xx99Mark2"/>,
      whichSideImg: "left",
      h3: "NEW PRODUCT",
      h1: "XX99 Mark II Headphone",
      p: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: "1800$",
      button: btn,
   }, 
   {
      img: <img src="/images/category-headphones/desktop/image-xx99-mark-one.jpg" alt="xx99Mark1"/>,
      whichSideImg: "right",
      h3: "NEW PRODUCT",
      h1: "XX99 Mark I Headphones",
      p: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      price: "1750$",
      button: <Link to={"/headphones/xx99mark1"}>{btn}</Link>,
   }, 
   {
      img: <img src="/images/category-headphones/desktop/image-xx59.jpg" alt="xx59"/>,
      whichSideImg: "right",
      h3: "NEW PRODUCT",
      h1: "XX59 Headphones",
      p: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      button: btn,
   }];
   return (
      <div className="Headphones">
         <div className="title">
            <h1>HEADPHONES</h1>
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
      </div> /*end headphone*/
   );
}

export default Headphones;
