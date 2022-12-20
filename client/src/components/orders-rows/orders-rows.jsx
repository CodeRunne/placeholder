import React from 'react';
import PropTypes from 'prop-types';

function OrdersRow({ userID, category, service, link, averageTime, quantity, charge,  status }) {
	return (
		<tr>
	        <td>{userID}</td>
	        <td>{category}</td>
	        <td>{service}</td>
	        <td>{link}</td>
	        <td>{status}</td>
	        <td>{averageTime}</td>
	        <td>{quantity}</td>
	        <td>{charge}</td>
	    </tr>
	)
}

OrdersRow.propTypes = {
	userID: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	service: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	averageTime: PropTypes.string.isRequired,
	charge: PropTypes.number.isRequired
}

export default OrdersRow