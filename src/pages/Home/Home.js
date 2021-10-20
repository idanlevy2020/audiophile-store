import "../pages.css";
import "./Home.css";
import { Button } from "../../components/Button/Button";
//import Button from "./Button/Button"; //export default
import CategoriesShops from "../../components/CategoriesShops/CategoriesShops"
import AboutUs from "../../components/AboutUs/AboutUs";

function Home() {
   return (
      <div className="Home">
         <div className="Home-part1">
            <div className="newProduct flex-column">
               <h3>New product</h3>
               <h1>XX99 Mark II Headphones</h1>
               <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
               </p>
               <Button bgcolor="orange" variant="contained" size="small"> See product </Button>
            </div>
         </div>
         <div className="page">
            <div className="Home-part2">
               <CategoriesShops />
            </div>
            <div className="Home-part3">
               <div className="ZX9speaker flex-column">
                  <h1>ZX9 SPEAKER</h1>
                  <p>
                     Upgrade to premium speakers that are phenomenally built to
                     deliver truly remarkable sound.
                  </p>
                  <Button bgcolor="black" variant="contained" size="small"> See product </Button>
               </div>
            </div>
            <div className="Home-part4">
               <img src="/images/home/desktop/image-speaker-zx7.jpg" alt="ZX7speaker" />
               <div className="ZX7speaker flex-column">
                  <h1>ZX7 SPEAKER</h1>
                  <Button bgcolor="" variant="outlined" size="small"> See product </Button>
               </div>
            </div>
            <div className="Home-part5 flex-row">
               <img src="/images/home/desktop/image-earphones-yx1.jpg" alt="earphonesYX1" />
               <div className="earphonesYX1 flex-column">
                  <h1>YX1 EARPHONES</h1>
                  <Button bgcolor="" variant="outlined" size="small"> See product </Button>
               </div>
            </div>
            <AboutUs />
         </div>
      </div>
   );
}

export default Home;
