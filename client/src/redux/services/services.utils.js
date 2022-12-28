function getServicesNames(serviceEntries, services) {
	let flattenedServices = serviceEntries.flat();
		flattenedServices = flattenedServices.flat();

	// Filter all objects
	const servicesItems = flattenedServices.filter(service => typeof service === "object");

	// Get All Services Name
	const servicesName = servicesItems.map(item => item.service);
	console.log(serviceEntries, services, servicesItems, Object.values(services));

	return servicesName;
}

export default getServicesNames;