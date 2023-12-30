import React, { useEffect } from "react";

const BasketItem=({item,changeTotalPrice})=>{

     return(
          <div className="basket-item">
               <div className="item-title">{item.title}</div>
               <div className="item-count">{item.count}</div>
               <div className="item-price">{item.price}р</div>
               <div className="item-totalPrice">{item.price*item.count}р</div>
          </div>
     )
}

export default BasketItem