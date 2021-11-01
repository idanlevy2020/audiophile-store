import "./App.css";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";
import data from "../components/data";
import {useState,createContext} from "react";
export const CartContext = createContext();

function App() {
   const products = {...data}; //// using spread to copy obj...
   const [cart,setCart]= useState([]);
   const [countItemsCart,setCountItemsCart]= useState(0);
   //I used an countItemsCart because the cart.length will give the amount of types of items

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

   return (
      <div className="App">
         <Header countItemsCart={countItemsCart}/>
         <CartContext.Provider value={[products,cart,addtoCart,countItemsCart,subOneItemFromCart,removeFromCart]}>
           <Main />
         </CartContext.Provider>
         <Footer />
      </div>
   );
}

export default App;
