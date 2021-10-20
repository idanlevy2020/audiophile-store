import "./Product.css";

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
         {isLeft(props.whichSideImg)&& props.img}
         <div className="productDetails flex-column">
            <h3>{props.h3}</h3>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <h2>{props.price}</h2>
            {props.button}
         </div>
         {isRight(props.whichSideImg)&& props.img}
      </div>/*end Product*/
   );
}

export default Product;
