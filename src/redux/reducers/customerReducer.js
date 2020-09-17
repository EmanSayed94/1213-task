import { customers } from "../dumyData/Customers";
import { ADD_CUSTOMER, GET_CUSTOMER_BY_ID } from "../actionTypes";

const initialState = {
	customers: customers,
	customer:""
};

export default (state = initialState, action) => {
	let newState;
	let customers = [...state.customers];
	switch (action.type) {
		case ADD_CUSTOMER:
			customers.unshift(action.payload);
			newState = { ...state, customers };
			break;
		case GET_CUSTOMER_BY_ID:
			const id = action.payload;
			const customer=customers.find(customer=>customer.id===id);
			newState={...state,customer}
			break;
		default:
			newState = state;
			break;
	}

	return newState;
};
