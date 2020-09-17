import { customers } from "../dumyData/Customers";
import {
	ADD_CUSTOMER,
	GET_CUSTOMER_BY_ID,
	ADD_TOTAL_TO_CUSTOMER,
} from "../actionTypes";

const initialState = {
	customers: localStorage.getItem("customers")
		? JSON.parse(localStorage.getItem("customers"))
		: [],
	customer: "",
};

export default (state = initialState, action) => {
	let newState;
	let customers = [...state.customers];
	let customer;
	switch (action.type) {
		case ADD_CUSTOMER:
			customers.unshift(action.payload);
			newState = { ...state, customers };
			break;
		case GET_CUSTOMER_BY_ID:
			const id = action.payload;
			customer = customers.find((customer) => customer.id === id);
			newState = { ...state, customer };
			break;
		default:
			newState = state;
			break;
	}
	localStorage.setItem("customers", JSON.stringify(newState.customers));
	return newState;
};
