import "./App.css";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";
import data from "../components/data";
// import { useState, createContext, useContext } from "react";
import {useState,createContext} from "react";

// export const ProductsContext = createContext();
export const CartContext = createContext();

function App() {
   const products = {...data}; //// using spread to copy obj...
   const [cart,setCart]= useState([]);

   function addtoCart(product){
      setCart([...cart, {...product}]);
   }

   function removefromCart(product){
      setCart(cart.filter(cart.product!==product));
   }
   return (
      <div className="App">
         <Header countProducts={cart.length}/>
         <CartContext.Provider value={[products,cart,addtoCart]}>
           <Main />
         </CartContext.Provider>
         <Footer />
      </div>
   );
}

export default App;
