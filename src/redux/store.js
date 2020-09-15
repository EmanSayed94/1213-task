import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default process.env.NODE_ENV === 'development' 
? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
: createStore(rootReducer, applyMiddleware(thunk));