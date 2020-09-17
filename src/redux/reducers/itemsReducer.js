import { ADD_ITEM,GET_ITEM_BY_USER_ID } from "../actionTypes";
import{items}  from "../dumyData/Items"

const initialState = {
   items: localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):items,
    userItems:[]
};

export default (state = initialState, action) => {
	let newState;
	let items = [...state.items];

	switch (action.type) {
		case ADD_ITEM:
			console.log(action.payload);
			items.push(action.payload);
			newState = { ...state, items };
			break;
		case GET_ITEM_BY_USER_ID:
			const id = action.payload;
			let userItems= items.filter((item) => item.userId === id);
			newState = { ...state, userItems };
			break;
		default:
			newState = state;
			break;
	}
	localStorage.setItem('items',JSON.stringify(newState.items))
	return newState;
};
