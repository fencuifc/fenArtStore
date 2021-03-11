export const addToCart = (id)=>{
	return {
		type:'ADD_TO_CART',
		id:id
	}
}

export const handleAddQ = (id)=>{
	return {
		type:'HANDLE_ADD_Q',
		id:id
	}
}
export const handleRemoveQ = (id)=>{
	return {
		type: 'HANDLE_REMOVE_Q',
		id: id
	}
}
export const handleRemove = (id)=>{
	return {
		type:'HANDLE_REMOVE',
		id:id
	}
}
export const changeTotalPrice = (price)=>{
	return {
		type:'CHANGE_TOTAL_PRICE',
		price:price
	}
}