import "./App.css";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";
import data from "../components/data";
// import {useState,createContext} from "react";
// export const StoreContext = createContext();

import StoreProvider from "../contexts/StoreContext";

function App() {
   return (
      <div className="App">
         {/* <CartContext.Provider value={value}>
            <Header/>
            <Main />
            <Footer />
         </CartContext.Provider> */}

         <StoreProvider>
            <Header/>
            <Main />
            <Footer />
         </StoreProvider>
      </div>
   );
}

export default App;
