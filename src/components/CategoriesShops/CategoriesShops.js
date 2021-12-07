import "./CategoriesShops.css";
import {useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext"
import Button from "../Button/Button"
import { Link } from "react-router-dom";

function CategoriesShops() {
   const value = useContext(StoreContext);
   const products = value.products;
   console.log('products',products);
   const shops = products.filter((product) =>(product.id === 76730)||(product.id === 76734)||(product.id === 76733));
   return (
      <div className="CategoriesShops">
            {shops.map((shop,i) => {
                  return (
                     <Shop key={i} shop={shop} />
                  );
            })}
      </div> /*end CategoriesShops*/
   );
}

function Shop(props) {
   const product=props.shop;
   return (
      <div className="Shop">
         <img src={product.imagePathShopShared} alt={product.name} />
         <div className="shop-box flex-column">
            <h3>{product.type.toUpperCase()}</h3>
            <Link to={`/products/${product.type}/${product.id}`}>
               <Button variant='text' bgcolor='' size="small">
                  Shop<i className="fa fa-angle-right fa-lg"></i>
               </Button>
            </Link>
         </div>
      </div> /*end Shop*/
   );
}  

export default CategoriesShops;
