import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0 ; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price*product.quantity;
        debugger;
    }
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Ordered {cart.length}</p>
            <p>Total price {total}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;