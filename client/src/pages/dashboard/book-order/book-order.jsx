import React, { useState, useEffect, useContext } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import NewOrderValidation from '../../../validation/new-order.validation';

// Services Reducer
import { fetchServices, searchServices } from '../../../redux/services/services.actions';
import { selectServicesCategory, selectServicesServiceName, selectServices, selectServicesEntries } from '../../../redux/services/services.selectors';

// Orders Reducers
import { addNewOrder } from '../../../redux/orders/orders.actions';
import { selectOrderRequestStatus, selectOrderRequestError } from '../../../redux/orders/orders.selectors';

// New Order Constants
import { newOrderNote, newOrderDescription } from '../../../constants/dashboard';

import { FormSelect, FormInput, Button, NoticeBox, NoticeNote, Modal } from '../../../components';
import { 
	NewOrderContainer, 
	NewOrderFormContainer, 
	NewOrderDescriptionContainer, 
	NewOrderDescriptionHeader, 
	NewOrderDescriptionContentContainer,
	NewOrderDescriptionContentItem,
	NewOrderDescriptionTitle
} from './book-order.styles';

function BookOrder({ fetchServices, categories, servicesList, addOrder, orderStatus, orderError, filterServicesByCategory, servicesEntriesCategory, allServices }) {
	const { currentUser: { id }} = useContext(AuthContext);
	const orderCategories = categories.filter(category => category !== "all");
	const [category, setCategory] = useState('');
	const [service, setService] = useState('');
	const [link, setLink] = useState('');
	const [quantity, setQuantity] = useState('');
	const [charge, setCharge] = useState(0.00);
	const [serviceMaximumOrder, setServiceMaximumOrder] = useState(0);
	const [serviceMinimumOrder, setServiceMinimumOrder] = useState(0);
	const [errors, setErrors] = useState({});
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { features, fastWorking, info } = newOrderDescription;

	// Add new order
	function bookOrder(e) {
		e.preventDefault();

		// Validate orders
		setErrors(NewOrderValidation({
			category,
			service,
			link,
			quantity: {
				max: serviceMaximumOrder,
				min: serviceMinimumOrder,
				quantityValue: quantity
			},
			charge
		}));
	
		setFormIsSubmitted(true);
	}

	useEffect(() => {
		// Display Modal onLoad
		setIsModalOpen(true);

		return () => {
			setIsModalOpen(false);
		}
	}, [setIsModalOpen]);

	// Fetch all services
	useEffect(() => {
		// Fetch Services
		fetchServices();
	}, [fetchServices]);

	// Get service maximum and minimum order
	useEffect(() => {
		if(allServices && category && service && service.includes(category)) {
			const serviceCategory = allServices[category];

			// Check if service exists
			const existingService = serviceCategory.find(services => services.service.toLowerCase() === service);

			if(existingService) {
				const { min_order, max_order } = existingService;

				// Set services minimum
				setServiceMinimumOrder(min_order);

				// Set services maximum order
				setServiceMaximumOrder(max_order);
			}
		} else {
			// Set services minimum to 0
			setServiceMinimumOrder(0);

			// Set services maximum order to 0
			setServiceMaximumOrder(0);
		}
	}, [allServices, category, service, setServiceMinimumOrder, setServiceMaximumOrder]);

	useEffect(() => {
		if(Object.keys(errors).length === 0 && formIsSubmitted) {
			const newOrder = {
				userID: id,
				category,
				service,
				link,
				quantity,
				charge
			};

			// Add new order
			addOrder(newOrder);

			if(orderStatus === "success") {
				// Empty inputs
				setCategory("");
				setLink("");
				setService("");
				setQuantity("");
				setCharge("");
			}
		}
	}, [errors, formIsSubmitted, addOrder, orderStatus, id,  category, service, link, quantity, charge]);

	// Calculate Order Charge (service order * quantity)
	function calculateOrderCharge() {
		// Validate quantity
		if(quantity < serviceMinimumOrder || quantity > serviceMaximumOrder) {
			// Set quantity error
			setErrors({ ...errors, quantity: `Quantity can't be less than ${serviceMinimumOrder} or greater than ${serviceMaximumOrder}` })
		} else {
			// Set quantity to null
			setErrors({...errors, quantity: ""});

			const parseQuantityToZeroIfEmpty = quantity ? 0 : quantity;
			

			if(parseInt(parseQuantityToZeroIfEmpty) >= 0 && parseInt(parseQuantityToZeroIfEmpty) <= 28000 && category && service) {
				servicesEntriesCategory.forEach(([name, data]) => {
					if(name === category) {
						data.forEach(data => {
							if(data.service.toLowerCase() === service.toLowerCase()) {
								const {max_order} = data;

								// Get order charge
								const orderCharge = max_order * quantity;

								// Set Order Charge
								setCharge(orderCharge);
							}
						})
					}
				})
			} else {
				// Set charge to 0
				setCharge(0);

				// Set quantity to null
				setErrors({...errors, quantity: ""});
			}
		}
	}

	return (
		<NewOrderContainer className="d-grid">
			{/* Modal */}  
			{isModalOpen && <Modal
				isOpen={isModalOpen}
				closeModal={() => setIsModalOpen(prevState => !prevState)}
			>
				<NoticeBox>
					{/* List */}
					<ul>
						<li>Please be sure to read the full description of our services</li>
						<li>Do not use two different services with the <span className="font-bold gradient-text">Same Link.</span> If you do this, we will not be able to to fix it, wait for the first order to be completed before placing a new order
						</li>
					</ul>

					{/* Notice Note Container */}
					<NoticeNote noticeText={newOrderNote} />
				</NoticeBox>
			</Modal>}

			{/* New Order Form */}
			<NewOrderFormContainer 
				className="d-flex d-flex-column" 
				onSubmit={bookOrder}
				noValidate
			>
				<FormSelect 
					label="Categories"
					name="services-category"
					options={orderCategories}
					value={category}
					handleChange={({ target }) => {
						setCategory(target.value)

						// Filter services by category
						filterServicesByCategory(target.value);
					}}
					error={errors?.categories}
				/>

				<FormSelect 
					label="Services"
					name="services"
					options={servicesList}
					value={service}
					handleChange={({ target }) => setService(target.value)}
					error={errors?.service}
					isDisabled={category ? false : true}
				/>

				<FormInput 
					type="text"
					name="link"
					label="Link"
					value={link}
					handleChange={({ target }) => setLink(target.value)}
					error={errors?.link}
				/>

				<FormInput 
					type="number"
					name="quantity"
					label="Quantity"
					info={service ? `min: ${serviceMinimumOrder} - max: ${serviceMaximumOrder}` : ""}
					value={quantity}
					handleChange={({ target }) => setQuantity(target.value)}
					handleBlur={() => calculateOrderCharge()}
					error={errors?.quantity}
				/>

				<FormInput 
					type="number"
					name="charge"
					label="Charge"
					value={charge}
					handleChange={({ target }) => setCharge(target.value)}
					error={errors?.charge}
					isDisabled
				/>

				<Button
					type="submit"
					variant="primary"
					style={{ width: '100%' }}
				>
					Book  Order
				</Button>
			</NewOrderFormContainer>

			{/* New Order Description Container */}
			<NewOrderDescriptionContainer>
				{/* Description Header Text */}
				<NewOrderDescriptionHeader>Description</NewOrderDescriptionHeader>

				{/* Description Content Container */}
				<NewOrderDescriptionContentContainer>
					{/* Decription Features List */}
					<NewOrderDescriptionContentItem className="d-flex d-flex-column">
						{features.map(feature => (<li>{feature}</li>))}	
					</NewOrderDescriptionContentItem>

					{/* Description Title */}
					<NewOrderDescriptionTitle>⏳ Start Time: Fast[15k+/daily]</NewOrderDescriptionTitle>

					{/* Description Title */}
					<NewOrderDescriptionTitle>Fast Working</NewOrderDescriptionTitle>

					{/* Decription Features List */}
					<NewOrderDescriptionContentItem className="d-flex d-flex-column">
						{fastWorking.map(working => (<li>{working}</li>))}	
					</NewOrderDescriptionContentItem>

					{/* Description Title */}
					<NewOrderDescriptionTitle>⏳ Start Time: 30 min - 4 hours</NewOrderDescriptionTitle>

					{/* Description Title */}
					<NewOrderDescriptionTitle>{info.link}</NewOrderDescriptionTitle>

					{info.content.map(content => (
						<>
							{/* Description Title */}
							<NewOrderDescriptionTitle>{content}</NewOrderDescriptionTitle>
						</>
					))}
					

					<NewOrderDescriptionTitle> <span className="font-bold">⭕ Important:</span> You must have minimum 5 posts in <span className="font-bold">Channel</span>. Subjects of <span className="font-bold">Drugs</span>/<span className="font-bold">Earnings</span>/<span className="font-bold">Scam</span>/<span className="font-bold">Cheating</span>/<span className="font-bold">Guns</span> are prohibited and orders will be cancelled.</NewOrderDescriptionTitle>
				</NewOrderDescriptionContentContainer>
			</NewOrderDescriptionContainer>
		</NewOrderContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchServices: () => dispatch(fetchServices()),
	addOrder: order => dispatch(addNewOrder(order)),
	filterServicesByCategory: serviceCategory => dispatch(searchServices(serviceCategory))
});

const mapStateToProps = createStructuredSelector({
	categories: selectServicesCategory,
	servicesList: selectServicesServiceName,
	orderStatus: selectOrderRequestStatus,
	orderError: selectOrderRequestError,
	servicesEntriesCategory: selectServicesEntries,
	allServices: selectServices
})

export default connect(mapStateToProps, mapDispatchToProps)(BookOrder);