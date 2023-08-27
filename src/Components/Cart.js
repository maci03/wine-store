import React from "react";

function Cart ({cartItems}) {
    return(
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
                ))}
            </ul>
        </div>
    );
}


export default Cart;