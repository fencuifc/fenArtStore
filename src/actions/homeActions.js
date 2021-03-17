import {fetchPost, urls} from "../constants/util";

export const fetchMenuItems = () => {
    return fetchPost(urls.menuUrl, (json) => {
        return {
            type: "RECEIVE_MENU_ITEMS",
            data: json
        };
    });
};
    

export const fetchStoreItems = () => {
    return fetchPost(urls.storeUrl, (json) => {
        return {
            type: "RECEIVE_STORE_ITEMS",
            data: json
        };
    });
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