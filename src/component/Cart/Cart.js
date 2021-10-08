import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity
    }
    // const totalReducer = (prev, product) => prev + product.price

    // const total = cart.reduce(totalReducer, 0);

    const shipping = total > 0 ? 15 : 0;
    const tex = (total + shipping) * 0.10;
    const GrandTotal = total + shipping + tex;

    return (
        <div className="">
            <div className="order-summary">
                <h1>Order Summary</h1>
                <p>Items ordered:{totalQuantity}</p>
            </div>
            <br />
            <div className="total-summary">
                <p><span>Total:</span> ${total.toFixed(2)}</p>
                <p><span>Shipping:</span> ${shipping.toFixed(0)}</p>
                <p><span>Tex:</span> ${tex.toFixed(0)}</p>
                <p><span className="total-order-name">Total Order:</span> ${GrandTotal.toFixed(0)}</p>

            </div>
            <div className="review-btn">
                <button className="regular-btn ">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;