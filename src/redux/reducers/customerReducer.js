import { customers } from "../dumyData/Customers";
import { ADD_CUSTOMER, GET_ALL_CUSTOMERS } from "../actionTypes";

const initialState = {
	customers: customers,
};

export default (state = initialState, action) => {
	let newState;

	switch (action.type) {
		case ADD_CUSTOMER:
            let customers = [...state.customers];
            customers.unshift(action.payload);
            newState = { ...state, customers };
			break;
		default:
			newState = state;
			break;
	}
	console.log(newState);
	return newState;
};
