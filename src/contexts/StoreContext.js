import { createContext, useState } from "react";
import data from "../components/data";
export const StoreContext = createContext();

function StoreProvider(props) {
   const products = [...data]; //// using spread to copy array...
   const [cart,setCart]= useState([]);
   const [totalPrice,setTotalPrice] = useState(0);
   //I used an countItemsCart because the cart.length will give the amount of types of items
   const [countItemsCart,setCountItemsCart]= useState(0);
   
   function addtoCart(product,countToAdd) {
      /*get product and count product to add
      if productExists item.count=item.count+countToAdd
      else we will add a new product */
      let productExists = false;
      cart.map((item)=>{
         if(item.id===product.id){
            item.count=item.count+countToAdd;
            productExists = true;
         } 
      })
      if(!productExists) setCart([...cart, {...product, count : countToAdd}]);
      setCountItemsCart(countItemsCart+countToAdd);
      setTotalPrice(Math.round(totalPrice+(product.price*countToAdd)));
   }

   function subOneItemFromCart(product) {
      console.log('in subOneItemFromCart()countItemsCart:',countItemsCart);
      if (countItemsCart===1){
         setCart([]);
         setCountItemsCart(0);
         setTotalPrice(0);
      }
      else if(countItemsCart>1){
         cart.map((item)=>{
            if(item.id===product.id){
               if(item.count>1) item.count=item.count-1
               else if(item.count===1) setCart(cart.filter((item)=>item!==product));
               setCountItemsCart(countItemsCart-1);
               setTotalPrice(Math.round(totalPrice-product.price));
            } 
         })
      }
   }

   function removeFromCart(product){
      setCountItemsCart(countItemsCart-product.count);
      setCart(cart.filter((item)=>item!==product));
   }


   const value = { 
      products : products,
      cart: cart,
      addtoCart : addtoCart,
      countItemsCart: countItemsCart, 
      subOneItemFromCart: subOneItemFromCart,
      removeFromCart: removeFromCart,
      totalPrice: totalPrice,
    };

   return(
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
}

export default StoreProvider;
