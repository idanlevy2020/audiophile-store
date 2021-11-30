import { createContext, useState } from "react";
import data from "../components/data";
export const StoreContext = createContext();

function StoreProvider(props) {
   const products = [...data]; //// using spread to copy array...
   const [cart, setCart] = useState([]);
   const [totalPrice, setTotalPrice] = useState(0);
   //I used an countItemsCart because the cart.length will give the amount of types of items
   const [countItemsCart, setCountItemsCart] = useState(0);

   function addtoCart(product, countToAdd) {
      /*get product and count product to add */
      const findIndex = cart.findIndex((item) => item.id === product.id);
      console.log("findIndex:", findIndex);
      if (findIndex !== -1) {
         // if productExists
         cart[findIndex].count = cart[findIndex].count + countToAdd;
      } else {
         // else we will add a new product
         setCart([...cart, { ...product, count: countToAdd }]);
      }
      setCountItemsCart(countItemsCart + countToAdd);
      setTotalPrice(Math.round(totalPrice + product.price * countToAdd));
   }

   function subOneItemFromCart(product) {
      //Deleting one product from a product type or from the cart
      console.log("in subOneItemFromCart()countItemsCart:", countItemsCart);
      const findIndex = cart.findIndex((item) => item.id === product.id);
      if (findIndex !== -1) {
         // if productExists
         if (cart[findIndex].count === 1)
            setCart(cart.filter((item) => item !== product));
         if (cart[findIndex].count > 1) cart[findIndex].count--;
         setCountItemsCart(countItemsCart - 1);
         setTotalPrice(Math.round(totalPrice - product.price));
      }
   }

   function removeFromCart(product) {
      // Deleting a specific product type
      setCountItemsCart(countItemsCart - product.count);
      setCart(cart.filter((item) => item !== product));
   }

   const value = {
      products: products,
      cart: cart,
      addtoCart: addtoCart,
      countItemsCart: countItemsCart,
      subOneItemFromCart: subOneItemFromCart,
      removeFromCart: removeFromCart,
      totalPrice: totalPrice,
   };

   return (
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
}

export default StoreProvider;
