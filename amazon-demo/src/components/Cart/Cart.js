import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 12.99;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping=4.99;
    }
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Ordered {cart.length}</p>
            <p>Shipping cast {shipping}</p>
            <p>Total price {totalPrice+shipping}</p>
        </div>
    );
};

export default Cart;