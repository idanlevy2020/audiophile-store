import './SummaryModal.css';
import React ,{useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function SummaryModal(props) {
   console.log('in SummaryMoadl propsare:',props);
   const value=useContext(StoreContext);
   const cart=value.cart;
   const totalPrice=value.totalPrice;
   return (
      <div className="SummaryModal">
         <button className="close" onClick={()=>props.setModalIsOpen(false)}>&times;</button>
         <h2>cart ({cart.length})</h2>
         <div className="items">
               {cart.map((item,i) => {
                  return (
                     <div className="item flex-row" key={i}>
                        <img src={item.imagePathMobile} alt={item.name} />
                        <div className="itemDetails flex-column">
                           <span className="itemName">{item.name}</span>
                           <span className="itemPrice">${item.price}</span>
                        </div>
                        <p className="itemCount">{item.count}</p> 
                     </div>
                  );
               })}
            </div>
            <div className="price">
               <p>TOTAL:</p>
               <h3>${totalPrice}</h3>
            </div>
            <Link to={"/checkout"}>
               <Button bgcolor="orange" variant="contained" size="small"> CHECKOUT</Button>
            </Link>
      </div>
   )
}

export default SummaryModal;
