import { useEffect, useState } from "react"
import { getStoreCart } from "../data/FakeDb"

const useCard = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            const saveCard = getStoreCart();
            const storeCard = []
            for (const key in saveCard) {
                const addedProduct = products.find(pd => pd.key === key)
                if (addedProduct) {
                    const quantity = saveCard[key];
                    addedProduct.quantity = quantity;
                    storeCard.push(addedProduct);
                }
            }
            setCart(storeCard);
        }
    }, [products])
    return [cart, setCart];
}


export default useCard;