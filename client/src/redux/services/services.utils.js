function getServicesNames(services) {
	let flattenedServices = services.flat();
		flattenedServices = flattenedServices.flat();

	// Filter all objects
	const servicesItems = flattenedServices.filter(service => typeof service === "object");

	// Get All Services Name
	const servicesName = servicesItems.map(item => item.service);

	return servicesName;
}

export default getServicesNames;