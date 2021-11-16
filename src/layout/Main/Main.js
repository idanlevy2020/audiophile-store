import './Main.css';
import Home from '../../pages/Home/Home';
import Headphones from '../../pages/Headphones';
import Speakers from '../../pages/Speakers';
import Earphones from '../../pages/Earphones';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import Checkout from '../../pages/Checkout/Checkout';
import {useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import {
    Switch,
    Route,
  } from "react-router-dom";

function Main() {
    const value=useContext(StoreContext);
    const products=value.products;
    return (<div className="Main"> 
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
           <Route exact path="/headphones">
              <Headphones />
           </Route>
          <Route exact path="/headphones/xx99mark1">
              <ProductDetails product={products.find(product => product.id===76730)}/>
          </Route>
          <Route exact path="/headphones/xx99mark2">
          <ProductDetails product={products.find(product => product.id===76731)}/>
          </Route>
          <Route exact path="/headphones/xx59">
          <ProductDetails product={products.find(product => product.id===76732)}/>
          </Route>
          <Route exact path="/earphones">
              <Earphones />
          </Route>
          <Route exact path="/earphones/yx1">
          <ProductDetails product={products.find(product => product.id===76733)}/>
          </Route>


          {/* <Route  path="/products/:category/:prodcutId">
              <ProductDetails />
          </Route> */}
        {/* <Route exact path="/products/:id"> */}
          


          <Route exact path="/speakers">
              <Speakers/>
          </Route>
          <Route exact path="/speakers/zx9speaker">
              <ProductDetails product={products.find(product => product.id===76734)}/>
          </Route>
          <Route exact path="/speakers/zx7speaker">
               <ProductDetails product={products.find(product => product.id===76735)}/>
          </Route> 


          <Route exact path="/shoppingCart">
              <ShoppingCart />
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/checkout">
              <Checkout/>
          </Route>
        </Switch>
    </div>);
}

export default Main;
