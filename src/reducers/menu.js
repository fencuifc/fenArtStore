const menuReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_MENU_ITEMS':
            return [...state, ...action.data.menu];
    }
    return state;
};
export default menuReducer;