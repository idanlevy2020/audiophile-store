import "./CategoriesShops.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

function CategoriesShops() {
   let btn = <Button variant='text' bgcolor='' size="small">Shop<i className="fa fa-angle-right fa-lg"></i></Button>
   const shops = [{
      img: <img src="/images/shared/desktop/image-headphones.png" alt="headphones"/>,
      title: "HEADPHONES",
      pathLink:"/headphones",
      button: btn,
   }, 
   {
      img: <img src="/images/shared/desktop/image-speakers.png" alt="speakers"/>,
      title: "SPEAKERS",
      pathLink:"/speakers",
      button: btn,
   },
   { 
      img: <img src="/images/shared/desktop/image-earphones.png" alt="earphones"/>,
      title: "EARPHONES",
      pathLink:"/earphones",
      button: btn,     
   }];
   return (
      <div className="CategoriesShops">
         <div className="shops flex-row wrap">
            {shops.map((shop,i) => {
                  return (
                     <CategoriesShopsMain key={i} img={shop.img} title={shop.title} path={shop.pathLink} button={shop.button} />
                  );
            })}
         </div>
      </div> /*end CategoriesShops*/
   );
}

function CategoriesShopsMain(props) {
   return (
      <div className="CategoriesShopsMain">
         {props.img}
         <div className="category-btn-block">
            <h3>{props.title}</h3>
            <Link to={props.path}> {props.button}</Link>
         </div>
      </div> /*end CategoriesShopsMain*/
   );
}  

export default CategoriesShops;
