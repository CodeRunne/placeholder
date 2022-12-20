import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from './root-reducer';

// Middlewares
const middlewares = [logger, thunk];

// Redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;