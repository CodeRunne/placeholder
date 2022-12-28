import { createSelector } from 'reselect';

export const selectAllServices = state => state.services;

export const selectServices = createSelector(
	[selectAllServices],
	services => services.services
);

export const selectServicesEntries = createSelector(
	[selectServices],
	services => Object.entries(services)
);

export const selectServicesCategory = createSelector(
	[selectAllServices],
	({ categories }) => categories
);

export const selectServicesServiceName = createSelector(
	[selectServices],
	services => Object.values(services).flat().map(service => service.service)
);

export const selectServicesStatus = createSelector(
	[selectAllServices],
	({ status }) => status 
);

