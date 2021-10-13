import React, { useEffect, useState } from 'react';
import { addToDb, clearTheCart, getStoreCart } from '../../data/FakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    useEffect(() => {

        if (products.length) {
            const saveCard = getStoreCart();
            const storeCard = []
            for (const key in saveCard) {

                const addedProduct = products.find(pd => pd.key === key);
                // Product quantity add

                if (addedProduct) {
                    const quantity = saveCard[key]
                    addedProduct.quantity = quantity
                    storeCard.push(addedProduct);
                }

            }

            setCart(storeCard);
        }
    }, [products])


    const handleAddToCard = (product) => {
        const newCard = [...cart, product]
        setCart(newCard);
        addToDb(product.key)

    }

    const handleSearchField = (e) => {
        const searchTex = e.target.value;
        const matchProduct = products.filter(pd => pd.name.toLowerCase().includes(searchTex.toLowerCase()))
        setDisplayProducts(matchProduct)

    }


    return (
        <div>
            <div className="search-container">

                <div class="input-group mb-3 p-3 container">
                    <input type="text" class="form-control" onChange={handleSearchField} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                </div>
            </div>

            <div className="shop-container">
                <div className="product-container">

                    {
                        displayProducts.length === 0 ? <div className="text-center">
                            <div class="spinner-grow" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div> : displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCard={handleAddToCard}

                        ></Product>)
                    }
                </div>
                <div className="card-container">

                    <Cart
                        cart={cart}

                    ></Cart>



                </div>
            </div>
        </div>
    );
};

export default Shop;