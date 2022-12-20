import axios from 'axios';
import ServicesActionTypes from './services.types';
import { getServicesApi, filterServicesByCategoryApi, searchServicesByServiceApi } from '../../config';

export const fetchAllServicesSuccess = services => ({
	type: ServicesActionTypes.FETCH_SERVICES_SUCCESS,
	payload: services
});

export const fetchAllServicesFailed = errorMessage => ({
	type: ServicesActionTypes.FETCH_SERVICES_FAILED,
	payload: errorMessage
});

export const filterServicesByCategorySuccess = category => ({
	type: ServicesActionTypes.FILTER_SERVICES_BY_CATEGORY,
	payload: category
});

export const searchServicesByCategorySuccess = service => ({
	type: ServicesActionTypes.SEARCH_SERVICES_BY_SERVICE,
	payload: service
});


// Fetch all services request
export const fetchServices = () => {
	return dispatch => {
		const fetchServices = axios.get(`${getServicesApi}`);

		// Await response
		fetchServices
			.then(({ data }) => {
				dispatch(fetchAllServicesSuccess(data))
			})
			.catch(error => {
				dispatch(fetchAllServicesFailed('There was an error fetching our services'))
			})
	}
};

// Filter services category request
export const filterServices = category => {
	return dispatch => {
		const postServiceCategory = axios.get(`${filterServicesByCategoryApi(category.toLowerCase())}`);

		postServiceCategory
			.then(({ data }) => dispatch(filterServicesByCategorySuccess(data)));
	}
}

// Search services service request
export const searchServices = serviceName => {
	return dispatch => {
		const postServiceOption = axios.post(searchServicesByServiceApi, {serviceName});

		postServiceOption
			.then(({ data }) => {
				if(data.status === "success")
					dispatch(searchServicesByCategorySuccess(data.services))
			})
			.catch(error => console.log(error))
	}
}