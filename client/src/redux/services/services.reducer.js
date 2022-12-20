import ServicesActionTypes from './services.types';

const initialState = {
	services: {},
	categories: [],
	status: 'idle',
	error: null
};


function servicesReducer(state = initialState, action) {
	switch(action.type) {
		case ServicesActionTypes.FETCH_SERVICES_SUCCESS:
			return {
				...state,
				services: Object.assign({}, action.payload),
				categories: ['all'].concat(Object.keys({ ...action.payload })),
				status: 'success'
			}
		case ServicesActionTypes.FETCH_SERVICES_FAILED:
			return {
				...state,
				status: 'failed',
				error: action.payload
			}
		case ServicesActionTypes.FILTER_SERVICES_BY_CATEGORY:
			return {
				...state,
				services: Object.assign({}, action.payload),				
				status: 'success'
			}
		case ServicesActionTypes.SEARCH_SERVICES_BY_SERVICE:
			return {
				...state,
				services: Object.assign({}, action.payload),				
				status: 'success'
			}
		default:
			return state
	}
}

export default servicesReducer;