function MassOrderValidation({ order }) {
	const error = {};
	console.log(order);

	if(Array.isArray(order)) {
		const validateOrders = order.every(order => order.split("|").length === 3);

		if(!validateOrders)
			error.order = "Mass order invalid";
	} 
	
	if(!order.length)
		error.order = "Add an order";
	else if(!order.split("|").length !== 3)
		error.order = "Please be guided"; 

	return error;
}

export default MassOrderValidation;