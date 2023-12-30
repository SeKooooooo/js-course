import React from "react";

const BasketEnd=({totalPrice})=>{

    return(
        <div className="basket-item">
               <div className="item-end">Итог</div>
               <div className="item-totalPrice">{totalPrice}р</div> 
          </div>
    )
}

export default BasketEnd