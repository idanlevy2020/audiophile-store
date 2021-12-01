import './SummaryModal.css';
import React ,{useContext} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function SummaryModal(props) {
   console.log('in SummaryMoadl props are:',props);
   const value=useContext(StoreContext);
   const addtoCart=value.addtoCart;
   const subOneItemFromCart=value.subOneItemFromCart;
   const cart=value.cart;
   const totalPrice=value.totalPrice;
   return (
      <div className="SummaryModal">
         <button className="closebtn" onClick={(e) => props.closeModal(e)}>&times;</button>
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
                        <div className="buttonsCountContainer flex-row">
                           <button onClick={() => subOneItemFromCart(item)}> - </button>
                           <p className="itemCount">{item.count}</p>
                           <button onClick={() => addtoCart(item,1)}> + </button>
                        </div>
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
