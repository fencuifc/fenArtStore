const initState = {
    items: [],
    addedItems: [], //{id:1,price:1.22,quantity:1},
    totalPrice: 0,
    totalQuantity: 0,
    category: []
};
const addTocart = (state, id) => {
    let addedItem = state.items.find(item => item.id === id);
    let existedItem = state.addedItems.findIndex(item => item.id === id);
    if (existedItem >= 0) {
        return {
            ...state,
            addedItems: immutateArry(state.addedItems, id, 1),
            totalPrice: state.totalPrice + addedItem.price,
            totalQuantity: state.totalQuantity + 1
        };
    } else {
        addedItem.quantity = 1;
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            totalPrice: state.totalPrice + addedItem.price,
            totalQuantity: state.totalQuantity + 1
        };
    }
};
const immutateArry = (arry, id, num) => {
    return arry.map((item, index) => {
        if (item.id === id) {
            return {
                ...item,
                quantity: item.quantity + num
            };
        }
        return item;
    });
};
const removeOne = (state, id) => {
    let removeItem = state.addedItems.find(item => item.id === id);
    let removeItemQ = removeItem.quantity;
    if (removeItemQ === 1) {
        return removeItemFromCart(state, id);
    } else {
        return {
            ...state,
            addedItems: immutateArry(state.addedItems, id, -1),
            totalPrice: state.totalPrice - removeItem.price,
            totalQuantity: state.totalQuantity - 1
        };
    }
};
const addOne = (state, id) => {
    return addTocart(state, id);
};
const removeItemFromCart = (state, id) => {
    let removeItem = state.addedItems.find(item => item.id === id);
    let newAddedItem = state.addedItems.filter(item => item.id !== id) || [];
    return {
        ...state,
        addedItems: [...newAddedItem],
        totalPrice: state.totalPrice - (removeItem.price * removeItem.quantity),
        totalQuantity: state.totalQuantity - removeItem.quantity
    };
};
const changeTotalPrice = (state, price) => {
    return {
        ...state,
        totalPrice: state.totalPrice + price
    };
};

const getStoreItems = (state, data) => {
    return {
        ...state,
        items: data.items
    };
};

const updateCurrentCategory = (state, data) => {
    if (data.updateType === 'add') {
        let newCategory = Array.from(state.category);
        newCategory.push(data.category);
        let temp = {
            ...state,
            category: newCategory
        };
        return temp;
    } else {
        return {
            ...state,
            category: state.category.filter(item => item !== data.category) || []
        };
    }
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVE_STORE_ITEMS':
            return getStoreItems(state, action.data);
        case 'ADD_TO_CART':
            return addTocart(state, action.id);
        case 'HANDLE_ADD_Q':
            return addOne(state, action.id);
        case 'HANDLE_REMOVE_Q':
            return removeOne(state, action.id);
        case 'HANDLE_REMOVE':
            return removeItemFromCart(state, action.id);
        case 'CHANGE_TOTAL_PRICE':
            return changeTotalPrice(state, action.price);
        case 'UPDATE_CURRENT_CATEGORY':
            return updateCurrentCategory(state, action.data);
    }
    return state;
};

export default cartReducer;