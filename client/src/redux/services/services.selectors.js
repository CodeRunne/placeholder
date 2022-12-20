import { createSelector } from 'reselect';
import getServicesNames from './services.utils';

export const selectAllServices = state => state.services;

export const selectServices = createSelector(
	[selectAllServices],
	services => Object.entries(services.services)
)

export const selectServicesCategory = createSelector(
	[selectAllServices],
	({ categories }) => categories
);

export const selectServicesServiceName = createSelector(
	[selectServices],
	services => getServicesNames(services)
);

export const selectServicesStatus = createSelector(
	[selectAllServices],
	({ status }) => status 
);
