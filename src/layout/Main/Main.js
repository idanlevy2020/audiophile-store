import "./Main.css";
import Home from "../../pages/Home/Home";
import Headphones from "../../pages/Headphones";
import Speakers from "../../pages/Speakers";
import Earphones from "../../pages/Earphones";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Checkout from "../../pages/Checkout/Checkout";
import { Switch, Route } from "react-router-dom";

function Main() {
   return (
      <div className="Main">
         {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
         <Switch>
            <Route exact path="/headphones">
               <Headphones />
            </Route>
            <Route exact path="/earphones">
               <Earphones />
            </Route>
            <Route exact path="/speakers">
               <Speakers />
            </Route>
            <Route exact path="/products/:category/:id">
               <ProductDetails />
            </Route>
            <Route exact path="/shoppingCart">
               <ShoppingCart />
            </Route>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/checkout">
               <Checkout />
            </Route>
         </Switch>
      </div>
   );
}

export default Main;
