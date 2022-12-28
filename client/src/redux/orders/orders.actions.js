import axios from 'axios';
import OrdersActionTypes from './orders.types';
import { addNewOrdersApi, bookMassOrder, getAllOrdersApi, filterOrdersByStatusApi, searchOrdersByServiceApi } from '../../config';

const addNewOrderPending = () => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_PENDING
}); 

const addNewOrderSuccess = orders => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_SUCCESS,
	payload: orders
}); 

const addNewOrderFailed = error => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_FAILED,
	payload: error
}); 

const addMassOrdersPending = () => ({
	type: OrdersActionTypes.ADD_MASS_ORDERS_PENDING
}); 

const addMassOrdersSuccess = orders => ({
	type: OrdersActionTypes.ADD_MASS_ORDERS_SUCCESS,
	payload: orders
}); 

const addMassOrdersFailed = error => ({
	type: OrdersActionTypes.ADD_MASS_ORDERS_FAILED,
	payload: error
}); 


// Fetch all orders
const fetchAllOrdersSuccess = orders => ({
	type: OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS,
	payload: orders
});

const fetchAllOrdersPending = () => ({
	type: OrdersActionTypes.FETCH_ALL_ORDERS_PENDING
});

export const filterOrdersByStatus = filteredOrders => ({
	type: OrdersActionTypes.FILTER_ORDERS_BY_STATUS,
	payload: filteredOrders
});


export const searchOrdersByServicesSuccess = order => ({
	type: OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE_SUCCESS,
	payload: order
});

export const searchOrdersByServicesFailed = response => ({
	type: OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE_FAILED,
	payload: response
});

export const resetOrdersStatus = () => ({
	type: OrdersActionTypes.RESET_ORDERS_STATUS
});

// Requests
// Add Order
export const addNewOrder = orders => {
	return dispatch => {
		// Dispatch Add Order Pending State
		dispatch(addNewOrderPending());

		// Post Request
		const addOrder =  axios.post(addNewOrdersApi, orders);

		// Await Request
		addOrder.then(({ data }) => {
			if(data.status === "success")
				dispatch(addNewOrderSuccess(data.data));
		}).catch(error => {
			dispatch(addNewOrderFailed('There was an error adding order'));
		});
	}
}

// Add mass order
export const addMassOrders = (massOrders, userID) => {
	return dispatch => {
		// Dispatch Add Order Pending State
		dispatch(addMassOrdersPending());

		// Post Request
		const addOrder =  axios.post(bookMassOrder, {massOrders, userID});

		// Await Request
		addOrder.then(({ data }) => {
			if(data.status === "success")
				dispatch(addMassOrdersSuccess(data.data));
		}).catch(error => {
			dispatch(addMassOrdersFailed('There was an error adding order'));
		});
	}
}

// Fetch all orders
export const fetchAllOrders = userID => {
	return dispatch => {
		dispatch(fetchAllOrdersPending());

		setTimeout(() => {
			axios.get(`${getAllOrdersApi(userID)}`).then(({ data }) => {
				if(data.status === "success") 
					dispatch(fetchAllOrdersSuccess(data.data));
				});
		}, 1500);
	}
};

// Filter orders
export const filterOrders = (status, userID) => {
	return dispatch => {
		const postServiceCategory = axios.post(`${filterOrdersByStatusApi(status)}`, {userID});

		postServiceCategory
			.then(({ data: { status, data }}) => {
				if(status === "success")
					dispatch(filterOrdersByStatus(data));
			});
	}
}

// Search services service request
export const searchOrdersByService = (orderService, userID) => {
	return dispatch => {
		const postServiceOption = axios.post(searchOrdersByServiceApi, {orderService, userID});

		postServiceOption
			.then(({ data: { status, data, message } }) => {
				if(status === "success") 
					dispatch(searchOrdersByServicesSuccess(data))
				else if(status === "error") {
					console.log(data);
					dispatch(searchOrdersByServicesFailed({message, data}))
				}
			}) 
	}
}