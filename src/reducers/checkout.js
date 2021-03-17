const initState = {
    userInfo: {
        firstName:"",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        city: "",
        zipcode:"",
        country:"",
        state:"",
    },
    addressInfo:{}
};
const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHIPPING_ADDRESS':
            return updateShippingAddress(state, action.data.label, action.data.val);
        case 'RECEIVE_ADDRESS_INFO':
        	return {
        		...state,
        		addressInfo: action.data
        	};
    }
    return state;
};
const updateShippingAddress = (state, label, val) => {
    return {
        ...state,
        userInfo: {
            ...state.userInfo,
            [label]: val
        }
    }
};
export default checkoutReducer;