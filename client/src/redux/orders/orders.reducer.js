import OrdersActionTypes from './orders.types';


const initialState = {
	data: [],
	orderStatues: ['all', 'pending', 'in progress', 'completed', 'partial', 'processing', 'cancelled'],
	status: 'idle',
	error: null
};


function ordersReducer(state=initialState, action) {
	switch(action.type) {
		case OrdersActionTypes.ADD_NEW_ORDER_PENDING:
			return {
				...state,
				status: 'pending',
				error: null
			}
		case OrdersActionTypes.ADD_NEW_ORDER_SUCCESS:
			return {
				...state,
				data: state.data.concat(action.payload),
				status: 'success',
				error: null
			}
		case OrdersActionTypes.ADD_NEW_ORDER_FAILED:
			return {
				...state,
				errors: action.payload,
				status: 'failed'
			}
		case OrdersActionTypes.ADD_MASS_ORDERS_PENDING:
			return {
				...state,
				status: 'pending',
				error: null
			}
		case OrdersActionTypes.ADD_MASS_ORDERS_SUCCESS:
			return {
				...state,
				data: [...state.data, ...action.payload],
				status: 'success',
				error: null
			}
		case OrdersActionTypes.ADD_MASS_ORDERS_FAILED:
			return {
				...state,
				errors: action.payload,
				status: 'failed'
			}
		case OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS:
			return {
				...state,
				data: [].concat(action.payload),
				status: 'success'
			}
		case OrdersActionTypes.FETCH_ALL_ORDERS_PENDING:
			return {
				...state,
				status: 'pending'
			}
		case OrdersActionTypes.FILTER_ORDERS_BY_STATUS:
			return {
				...state,
				data: [].concat(action.payload),				
				status: 'success'
			}
		case OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE_SUCCESS:
			return {
				...state,
				data: [].concat(action.payload),
				status: 'success',
				error: null
			}
		case OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE_FAILED:
			return {
				...state,
				error: action.payload.message,
				status: "failed",
				data: [].concat(action.payload.data)
			}
		case OrdersActionTypes.RESET_ORDERS_STATUS:
			return {
				...state,
				error: null,
				status: "idle"
			}
		default:
			return state
	}
} 

export default ordersReducer;