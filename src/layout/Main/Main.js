import './Main.css';
import Home from '../../pages/Home/Home';
import Headphones from '../../pages/Headphones';
import Speakers from '../../pages/Speakers';
import Earphones from '../../pages/Earphones';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import {useContext} from "react";
import {CartContext} from '../../application/App';
import {
    Switch,
    Route,
  } from "react-router-dom";

function Main() {
    const [products,cart,addtoCart]=useContext(CartContext);
    return (<div className="Main"> 
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
           <Route exact path="/headphones">
              <Headphones />
           </Route>
          <Route exact path="/headphones/xx99mark1">
              <ProductDetails product={products.headphones[0]}/>
          </Route>
          <Route exact path="/headphones/xx99mark2">
              <ProductDetails product={products.headphones[1]}/>
          </Route>
          <Route exact path="/headphones/xx59">
              <ProductDetails product={products.headphones[2]}/>
          </Route>
           <Route exact path="/speakers">
              <Speakers/>
          </Route>
          <Route exact path="/speakers/zx9speaker">
              <ProductDetails product={products.speakers[0]}/>
          </Route>
          <Route exact path="/speakers/zx7speaker">
              <ProductDetails product={products.speakers[1]}/>
          </Route>
          <Route exact path="/earphones">
              <Earphones />
          </Route>
          <Route exact path="/earphones/yx1">
              <ProductDetails product={products.earphones[0]}/>
          </Route>
          <Route exact path="/shoppingCart">
              <ShoppingCart />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
    </div>);
}

export default Main;
