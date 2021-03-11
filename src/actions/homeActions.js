//import fetch from 'cross-fetch'
let dev = true;
let storeUrl = dev ? '../../assets/store.json' : 'http://www.ffeni.com/fen/assets/store.json';
let menuUrl = dev ? '../../assets/menu.json' : 'http://www.ffeni.com/fen/assets/menu.json';

const receiveStoreItems = (json) => {
    return {
        type: "RECEIVE_STORE_ITEMS",
        data: json
    };
};

const fetchPost = (url, callBack) => {
    return dispatch => {
        return fetch(url).then(response => response.json()).then(json => dispatch(callBack(json)));
    };
};

export const fetchMenuItems = () => {
    return fetchPost(menuUrl, (json) => {
        return {
            type: "RECEIVE_MENU_ITEMS",
            data: json
        };
    });
};

export const fetchStoreItems = () => {
    return fetchPost(storeUrl, receiveStoreItems);
    /*return dispatch=>{
    	return fetch(storeUrl)
    	.then(response=>response.json())
    	.then(json => dispatch(receivePost(json)))
    }*/
};

export const updateCurrentCategory = (category, updateType) => {
    return {
        type: 'UPDATE_CURRENT_CATEGORY',
        data: {
            category: category,
            updateType: updateType
        }
    };
};