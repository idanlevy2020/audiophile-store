import "./Product.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function Product(props) {
   const product = props.product;

   return (
      <div className="Product">
         <div className="Product-container flex-column">
         {/* <div className={"Product-container "+props.className}> */}
            {/* <div className={"desktop "+props.className}> */}
               <picture>
                  <source media="(max-width: 768px)" srcSet={product.imagePathTablet}  />
                  <source media="(max-width: 600px)" srcSet={product.imagePathMobile} />
                  <img src={product.imagePathDesktop} alt={product.name} />
               </picture>
               <div className="productDetails flex-column">
                  <p className="titleNewProduct">NEW PRODUCT</p>
                  <p className="titleProductName">{product.name}</p>
                  <p className="titleProductDesc">{product.desc}</p>
                  <Link to={`/products/${product.type}/${product.id}`}>
                     <Button bgcolor="orange" variant="contained" size="small">
                        See product
                     </Button>
                  </Link>
               </div>
               
            {/* </div> */}
         </div>
      </div> /*end Product*/
   );
}

export default Product;



function Product_Old(props) {
   const product = props.product;
   const i = props.i;
   console.log('props in Product',props);
   const img=<img src={product.imagePath} alt={product.name}/>;
   let whichSideImg;
   if (i % 2 === 0) whichSideImg = "left";
   else whichSideImg = "right";
   return (
      <div className="Products flex-row">
         {(whichSideImg==="left") && img}
         <div className="productDetails flex-column">
            <h3>NEW PRODUCT</h3>
            <h1>{product.name}</h1>
            {/* {product.name.map((word) => {
                  return (`
                     <h1>{word}</h1>
                  );
               })} */}
            <p>{product.desc}</p>
            {product.price !== undefined && <h2>${product.price}</h2>}
            <Link to={`/products/${product.type}/${product.id}`}>
               <Button bgcolor="orange" variant="contained" size="small">
                  See product
               </Button>
            </Link>
         </div>
         {(whichSideImg==="right") && img}
      </div> /*end Product*/
   );
}
