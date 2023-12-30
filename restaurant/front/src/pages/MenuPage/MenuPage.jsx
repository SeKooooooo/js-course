import React,{useEffect, useMemo, useState} from "react";
import "./MenuPage.scss"
import Product from "../../components/Product";
import axios from "axios";
import basketSvg from "../../images/basket.svg"
import { Link } from "react-router-dom";


const MenuPage=() =>{
    const [products, setProducts] = useState([])
    console.log(localStorage.getItem("basket"))
    const [basket, setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")) : [])
    const fetchProducts=async()=>{
        const response = await axios.get("http://localhost:3000/products")
        setProducts(response.data)
    }
    const changeBasket=(newBasket)=>{
        setBasket([...newBasket])
        localStorage.setItem("basket",JSON.stringify([...newBasket]))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return(
        <>
            <header>
                <div className="container-header">
                    <nav className="nav-links">
                        <Link to="/"><button className="label">Ресторан у Ашота</button></Link>
                        <Link className="basket" to="/basket"><img className="" src={basketSvg} alt="" /></Link>
                    </nav>
                </div>
            </header>
            <main className="main-menu">
                <div className="container-main">
                    <div className="main-body">
                        {
                            products.map(product=> <Product key={product.id} info={product} changeBasket={changeBasket} basket={basket}/>)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default MenuPage