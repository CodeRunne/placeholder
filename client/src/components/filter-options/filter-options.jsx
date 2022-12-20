import React, { useContext } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
// Services Action
import { filterServices } from '../../redux/services/services.actions';
import { selectServicesCategory } from '../../redux/services/services.selectors';

// Order Action
import { filterOrders } from '../../redux/orders/orders.actions';
import { selectOrderStatues } from '../../redux/orders/orders.selectors';

import { FilterOptionsContainer, FilterOptionsText } from './filter-options.styles';

function FilterOptions({ type, filterServices, filterOrders, servicesCategories, orderStatuses }) {
	let options;
	const { currentUser } = useContext(AuthContext);
	const userID = currentUser?.id ?? '';


	const filterOptionAction = (type, data) => {
		if(type === "orders") return filterOrders(data, userID);

		return filterServices(data);
	}

	// Set options data based on the type
	if(type === "services")
		options = servicesCategories;
	else if(type === "orders")
		options = orderStatuses;

	return (
		<FilterOptionsContainer>
			{options.map(option => ( 
				<FilterOptionsText key={option} onClick={() => filterOptionAction(type, option)}>{option}</FilterOptionsText> ))}
		</FilterOptionsContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	servicesCategories: selectServicesCategory,
	orderStatuses: selectOrderStatues
});

const mapDispatchToProps = dispatch => ({
	filterServices: category => dispatch(filterServices(category)),
	filterOrders: (status, id) => dispatch(filterOrders(status, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions)