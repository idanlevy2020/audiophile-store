import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./application/App";
import { BrowserRouter } from "react-router-dom";
// import {ScrollToTop} from './components/ScrollToTop'

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      {/* <ScrollToTop>
           <App />
      </ScrollToTop> */}
   </React.StrictMode>,
   document.getElementById("root")
);
