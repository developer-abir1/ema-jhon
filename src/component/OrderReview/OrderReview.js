import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, removeDb } from '../../data/FakeDb';
import useCard from '../../hooks/useCard';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCard(products);
    const history = useHistory()

    const handleRemove = (key) => {
        const removeCart = cart.filter(item => item.key !== key)
        setCart(removeCart)
        removeDb(key)

    }


    const handleProceedShipping = () => {
        history.push('./shipping');
        // clearTheCart()
    }

    return (
        <div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            pd={pd}
                            handleRemove={handleRemove}


                        ></ReviewItem>)
                    }
                </div>
                <div className="card-container">
                    <Cart cart={cart}>

                        <button onClick={handleProceedShipping} className="regular-btn">Proceed to shipping</button>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default OrderReview;