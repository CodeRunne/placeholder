function NewOrderValidation({ category, service, link, averageTime, quantity, charge }) {
	let numb = {};
	let errors = {};

	if(!category.length)
		errors.categories = "Please select a category you would like to order";

	if(!service.length)
		errors.service = "Please select a service you would like to order";

	if(!service.includes(category))
		errors.service = "Select service based on the selected category";

	if((/^https:\/\/(t\.me)+\/[\w]+$/ig).exec(link) || (/^@[a-zA-Z]{3,}$/ig).exec(link))
			numb.value = "val";
	else 
		errors.link = "Please add a valid telegram account";

	if(quantity < 500 || quantity > 28000)
		errors.quantity = "Quantity can't be less than 500 or greater than 28000";

	if(!(/^[\d]{0,}\shour(s)?(\s[\d]{1,}\sminute(s)?)?$/ig).exec(averageTime))
		errors.averageTime = "Error";


	if(!charge.length)
		errors.charge = "Charge can't be empty";

	return errors;
}

export default NewOrderValidation;