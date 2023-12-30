import React, { useState } from "react";

const Product=({info,changeBasket,basket})=>{
    const [count, setCount] = useState(basket.find(item => item.id === info.id)?basket.find(item => item.id === info.id).count: 0)
    console.log(basket.find(item => item.id === info.id))
    const Add=()=>{
        const newCount=count+1
        setCount(newCount)
        let flag=false
        const newBasket = basket.map(item=>{
            if (item.id===info.id){
                flag=true
                return {...item,count:newCount}
            } return item})
        if (!flag){
            const newItem={...info, count:newCount}
            changeBasket([...basket,newItem])
        } else{
            changeBasket(newBasket)
        }
    }

    const Remove=()=>{
        const newCount= count>0 ? count-1 : 0
        setCount(newCount)
        if (newCount===0){
            changeBasket(basket.filter(item=>item.id!==info.id))
        }else{
            changeBasket(basket.map(item=>{
                if (item.id===info.id){
                    return {...item,count:newCount}
                } return item}))}
    }

    return(
        <div className="product">
            <h2 className="product-title">{info.title}</h2>
            <p className="product-type">Категория: {info.type}</p>
            <p className="product-price">Цена: {info.price}р</p>
            <div className="product-basket">
                <button onClick={()=>Add()} className="set-basket">Добавить</button>
                <button onClick={()=>Remove()} className="remove-basket">Удалить</button>
                <span className="product-count">{count}</span>
            </div>
        </div>
    )
}

export default Product