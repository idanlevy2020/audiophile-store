import "./Product.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function Product(props) {
   return (
      <div className="Products flex-row" key={props.i}>
         {/* {props.img} */}
         {(props.whichSideImg==='left')&& props.img}
         <div className="productDetails flex-column">
            <h3>{props.titleNewProduct}</h3>
            <h1>{props.name}</h1>
            <p>{props.p}</p>
            <h2>${props.price}</h2>
            <Link to={props.btnLinkTo}>
               <Button bgcolor="orange" variant="contained" size="small"> See product </Button>
            </Link>
         </div>
         {(props.whichSideImg==='right')&& props.img}
      </div>/*end Product*/
   );
}

export default Product;
