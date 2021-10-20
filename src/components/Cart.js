import React from 'react';
import { Link } from "react-router-dom";
import '../css/Cart.css';

const Cart = () => {
    return (
        <>
            <div className="cart-title">
                <h1>YOUR CART IS EMPTY</h1>
                <Link to="/all">Let's go shopping!</Link>
            </div>
        </>
        
    )
}





export default Cart;