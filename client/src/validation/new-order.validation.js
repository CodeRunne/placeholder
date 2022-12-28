function NewOrderValidation({ category, service, link, quantity, charge }) {	
	let errors = {};
	const { quantityValue, max, min } = quantity;

	if(!category.length)
		errors.categories = "Please select a category you would like to order";

	if(!service.length)
		errors.service = "Please select a service you would like to order";

	if(!service.includes(category))
		errors.service = "Select service based on the selected category";

	if(!(/^https:\/\/(t\.me)+\/[\w]+$/ig).exec(link)) 
		errors.link = "Please add a valid telegram account";

	if(quantityValue < min || quantityValue > max)
		errors.quantity = "Quantity can't be less than 500 or greater than 28000";

	if(charge < min)
		errors.charge = "Select a service and input the quantity";

	return errors;
}

export default NewOrderValidation;