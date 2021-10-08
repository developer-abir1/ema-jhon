const addToDb = id => {
    const existing = getDb();
    let shopping_card = {}
    if (!existing) {
        shopping_card[id] = 1

    }
    else {
        shopping_card = JSON.parse(existing);
        if (shopping_card[id]) {
            const newCount = shopping_card[id] + 1;
            shopping_card[id] = newCount;

        }
        else {
            shopping_card[id] = 1
        }


    }
    updateDb(shopping_card)

}

const getDb = () => localStorage.getItem('shopping_card');
const updateDb = (card) => {
    localStorage.setItem('shopping_card', JSON.stringify(card))
}

const removeDb = id => {
    const existing = getDb();
    if (!existing) {

    }
    else {
        const shopping_card = JSON.parse(existing)
        delete shopping_card[id]
        updateDb(shopping_card)
    }
}


const getStoreCart = () => {
    const existing = getDb();
    return existing ? JSON.parse(existing) : {}
}
const clearTheCart = () => {
    localStorage.removeItem('shopping_card')
}



export { addToDb, removeDb, clearTheCart, getStoreCart }