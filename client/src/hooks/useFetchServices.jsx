import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectServices } from '../redux/services/services.selectors';
import { fetchServices } from '../redux/services/services.actions';

function useFetchServices(fetchServices, allServices) {
	const [services, setServices] = useState({});

	useEffect(() => {
		// Fetch all services
		fetchServices();

		// Set services
		setServices(allServices);

		return () => {
			// Set services to null
			setServices({});
		};
	}, [fetchServices, setServices, allServices]);


	return services;
}

const mapStateToProps = createStructuredSelector({
	allServices: selectServices
})

const mapDispatchToProps = dispatch => ({
	fetchServices: () => dispatch(fetchServices())
});

export default connect(mapStateToProps, mapDispatchToProps)(useFetchServices);