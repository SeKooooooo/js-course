import React from "react";

const BasketTitle=()=>{

    return(
        <div className="basket-item">
               <div className="item-title">Название</div>
               <div className="item-count">Количество</div> 
               <div className="item-price">Цена за ед</div>
               <div className="item-totalPrice">Общая цена</div> 
          </div>
    )
}

export default BasketTitle