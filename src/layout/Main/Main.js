import './Main.css';
import Home from '../../pages/Home/Home';
import Headphones from '../../pages/Headphones/Headphones';
import Speakers from '../../pages/Speakers';
import Earphones from '../../pages/Earphones';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Xx99Mark1 from '../../pages/Headphones/HeadphonesProducts/Xx99Mark1';
import {
    Switch,
    Route,
  } from "react-router-dom";

function Main() {
    return (<div className="Main"> 
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
           <Route exact path="/headphones">
              <Headphones />
           </Route>
           <Route exact path="/headphones/xx99mark1">
              <Xx99Mark1 />
          </Route>
           <Route exact path="/speakers">
              <Speakers />
          </Route>
          <Route exact path="/earphones">
              <Earphones />
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
