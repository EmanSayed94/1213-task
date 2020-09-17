import { combineReducers } from 'redux';
import customerReducer from "./customerReducer"
import itemsReducer from './itemsReducer';

export default combineReducers({
    customers:customerReducer,
    itemsReducer:itemsReducer
    
});