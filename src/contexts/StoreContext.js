import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider(props) {
   
   const [cart,setCart]= useState([]);
   const [totalPrice,setTotalPrice] = useState(0);
   console.log('totalPrice:',totalPrice);
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
      setTotalPrice(totalPrice+(product.price*countToAdd));
   }

   function subOneItemFromCart(product) {
      console.log('in subOneItemFromCart()countItemsCart:',countItemsCart);
      if (countItemsCart==1){
         setCart([]);
         setCountItemsCart(0);
      }
      else if(countItemsCart>1){
         cart.map((item)=>{
            if(item.id===product.id){
               if(item.count>1) item.count=item.count-1
               else if(item.count==1) setCart(cart.filter((item)=>item!==product));
               setCountItemsCart(countItemsCart-1);
            } 
         })
      }
   }

   function removeFromCart(product){
      setCountItemsCart(countItemsCart-product.count);
      setCart(cart.filter((item)=>item!==product));
   }


   
   // const value = { cart };
   const value=[products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart,totalPrice];

   return(
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
}
