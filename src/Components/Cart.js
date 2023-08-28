import React from "react";

function Cart ({cartItems, removeFromCart}) {
    return(
        <div className="cart">
            <h2>Cart</h2>
            <ul className="cart-list">
                {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    );
}


export default Cart;