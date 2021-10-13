import React from 'react';
import { removeDb } from '../../data/FakeDb';
import useCard from '../../hooks/useCard';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCard(products);

    const handleRemove = (key) => {
        const removeCart = cart.filter(item => item.key !== key)
        setCart(removeCart)
        removeDb(key)

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
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default OrderReview;