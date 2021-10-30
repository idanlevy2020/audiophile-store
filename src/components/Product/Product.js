import "./Product.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function Product(props) {
   //position of image
   function isLeft(string){
      return (string==='left');
   }

   function isRight(string){
      return (string==='right');
   }
   return (
      <div className="Products flex-row" key={props.i}>
         {/* {props.img} */}
         {isLeft(props.whichSideImg)&& props.img}
         <div className="productDetails flex-column">
            <h3>{props.h3}</h3>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <h2>${props.price}</h2>
            {props.button}
            <Link to={props.btnLinkTo}>
               <Button bgcolor="orange" variant="contained" size="small"> See product </Button>
            </Link>
         </div>
         {isRight(props.whichSideImg)&& props.img}
      </div>/*end Product*/
   );
}

export default Product;
