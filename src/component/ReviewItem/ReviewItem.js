import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, price, seller, key } = props.pd;
    const { handleRemove } = props
    return (
        <div className="product">

            <div>
                <h4 className="product-name">  {name}</h4>
                <div className="row">
                    <div className="col-md-6 mb-5">

                        <p><small>by:{seller}</small></p>
                        <p>Price: {price}</p>

                        <h4>Quantity: {quantity}</h4>
                        <button onClick={() => handleRemove(key)} className="regular-btn"> Remove </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;