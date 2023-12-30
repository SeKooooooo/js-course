import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BasketPage.scss"
import BasketItem from "../../components/BasketItem";
import BasketTitle from "../../components/BasketTitle";
import BasketEnd from "../../components/BasketEnd";

const BasketPage=()=>{
    const [basket, setBasket] = useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")) : [])
    const totalPrice= basket.reduce((sum,e)=>sum+e.count*e.price,0)
    const setOrder=()=>{
        localStorage.removeItem("basket")
        setBasket([])
    }
    console.log(totalPrice);
    return (
        <>
            <header>
                <div className="container-header">
                    <nav className="nav-links">
                        <Link to="/"><button className="label">Ресторан у Ашота</button></Link>
                    </nav>
                </div>
            </header>
            <main className="main-basket">
                <div className="container-main">
                    <div className="main-body">
                        <ul className="basket-list">
                            <BasketTitle/>
                            {  
                                basket.map(e=><BasketItem item={e}/>)
                            }
                            <BasketEnd totalPrice={totalPrice}/>
                        </ul>
                        <button className="go-order" onClick={setOrder}></button>
                    </div>
                </div>
            </main>
        </>

    )
}

export default BasketPage
