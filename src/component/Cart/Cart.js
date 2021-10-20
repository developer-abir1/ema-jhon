import React from 'react';

import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    console.log(props)
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
                <h4>Items ordered:{totalQuantity}</h4>
            </div>
            <br />
            <div className="total-summary">

                <div className="row  ">
                    <div className="col-md-4">
                        <p  ><span>Total:</span>  </p>
                        <p><span>Shipping:</span> </p>
                        <p><span>Tex:</span>  </p>
                        <p><span className="total-order-name">Total Order:</span>  </p>
                    </div>
                    <div className="col-md-6">
                        <p >     ${total.toFixed(2)}</p>
                        <p> ${shipping.toFixed(2)}</p>
                        <p>     ${tex.toFixed(2)}</p>
                        <p>  ${GrandTotal.toFixed(2)}</p>
                    </div>
                </div>
                {props.children}
            </div>

        </div>
    );
};

export default Cart;