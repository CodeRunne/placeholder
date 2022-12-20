import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectAllOrders = createSelector(
	[selectOrders],
	orders => orders.data
);

export const selectOrderRequestStatus = createSelector(
	[selectOrders],
	({ status }) => status
);

export const selectOrderRequestError = createSelector(
	[selectOrders],
	({ error }) => error
);

export const selectOrderStatues = createSelector(
	[selectOrders],
	({ orderStatues }) => orderStatues
);
