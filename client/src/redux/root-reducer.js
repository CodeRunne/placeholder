import { combineReducers } from 'redux';

// Reducers
import servicesReducer from './services/services.reducer';
import ordersReducer from './orders/orders.reducer';

export default combineReducers({
	services: servicesReducer,
	orders: ordersReducer
});