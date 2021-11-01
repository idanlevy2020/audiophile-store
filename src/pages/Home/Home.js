import "../pages.css";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
//import Button from "./Button/Button"; //export default
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops"
import AboutUs from "../../components/AboutUs/AboutUs";

function Home(props) {
   const products=props.products;
   return (
      <div className="Home">
         <div className="Home-part1 flex-row">
            <div className="newProduct flex-column">
               <h3>New product</h3>
               <h1>XX99 Mark II Headphones</h1>
               <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
               </p>
               <Link to="/headphones/xx99mark2">
                 <Button bgcolor="orange" variant="contained" size="small"> See product </Button>
              </Link>
            </div>
            <img src="/images/home/tablet/image-header.jpg" alt="xx99Mark2"/>
         </div>
         <div className="page">
            <div className="Home-part2">
               <CategoriesShops />
            </div>
            <div className="Home-part3 flex-row">
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
            <div className="Home-part4 flex-row">
               <img src="/images/home/desktop/image-speaker-zx7.jpg" alt="ZX7speaker" />
               <div className="ZX7speaker">
                  <h1>ZX7 SPEAKER</h1>
                  <Link to="/speakers/zx7speaker">
                     <Button bgcolor="" variant="outlined" size="small"> See product </Button>
                  </Link>
               </div>
            </div>
            <div className="Home-part5 flex-row">
               <img src="/images/home/desktop/image-earphones-yx1.jpg" alt="earphonesYX1" />
               <div className="earphonesYX1 flex-column">
                  <h1>YX1 EARPHONES</h1>
                  <Link to="/earphones/yx1">
                     <Button bgcolor="" variant="outlined" size="small"> See product </Button>
                  </Link>
               </div>
            </div>
            <AboutUs />
         </div>
      </div>
   );
}

export default Home;
