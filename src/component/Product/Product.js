import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {



    const { star, name, price, img, seller, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">  {name}</h4>
                <div className="row">
                    <div className="col-md-6 mb-5">

                        <p><small>by:{seller}</small></p>
                        <p>Price: {price}</p>
                        <p><small>  only {stock} left in stock - order soon</small></p>



                        <button onClick={() => props.handleAddToCard(props.product, key)} className="regular-btn"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>

                    </div>
                    <div className="col-md-6 mb-0">
                        <h3 >Features</h3>
                        <Rating
                            readonly
                            initialRating={star}
                            emptySymbol='far fa-star icon-color'
                            fullSymbol='fas fa-star icon-color'
                        />


                        <div className="all-info mt-2">
                            <p>Display Size: </p>
                            <p>Computer Memory Size:</p>
                            <p>Operating System: </p>
                            <p>Cpu Model Family:</p>
                            <p>Cpu Model Manufacturer:</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;