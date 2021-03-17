import {fetchPost, urls} from "../constants/util";

export const changeShippingAddress = (label, val) => {
    return {
    	type: "SHIPPING_ADDRESS",
    	data: {
    		label:label,
    		val:val
    	}
    };
};

export const requestAddressInfo = () => {
	return fetchPost(urls.addressInfo, (json)=>{
		return {
			type: "RECEIVE_ADDRESS_INFO",
			data: json
		}
	})
};

