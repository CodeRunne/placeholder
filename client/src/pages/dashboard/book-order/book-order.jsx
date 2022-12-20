import React, { useState, useEffect, useContext } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import NewOrderValidation from '../../../validation/new-order.validation';

// Services Reducer
import { fetchServices } from '../../../redux/services/services.actions';
import { selectServicesCategory, selectServicesServiceName } from '../../../redux/services/services.selectors';

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

function BookOrder({ fetchServices, categories, servicesList, addOrder, orderStatus, orderError }) {
	const { currentUser: { id }} = useContext(AuthContext);
	const orderCategories = categories.filter(category => category !== "all");
	const [category, setCategory] = useState('');
	const [service, setService] = useState('');
	const [link, setLink] = useState('');
	const [averageTime, setAverageTime] = useState('');
	const [quantity, setQuantity] = useState('');
	const [charge, setCharge] = useState('');
	const [errors, setErrors] = useState({});
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { features, fastWorking, info } = newOrderDescription;


	function bookOrder(e) {
		e.preventDefault();

		// Validate orders
		setErrors(NewOrderValidation({
			category,
			service,
			link,
			averageTime,
			quantity,
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

	useEffect(() => {
		if(Object.keys(errors).length === 0 && formIsSubmitted) {
			const newOrder = {
				userID: id,
				category,
				service,
				link,
				averageTime,
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
				setAverageTime("");
			}
		}
	}, [errors, formIsSubmitted, addOrder, orderStatus, id,  category, service, link, averageTime, quantity, charge, setCategory, setLink, setService, setQuantity, setCharge, setAverageTime]);

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
					handleChange={({ target }) => setCategory(target.value)}
					error={errors?.categories}
				/>

				<FormSelect 
					label="Services"
					name="services"
					options={servicesList}
					value={service}
					handleChange={({ target }) => setService(target.value)}
					error={errors?.service}
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
					type="text"
					name="quantity"
					label="Quantity"
					info="min: 500 - max: 28000"
					value={quantity}
					handleChange={({ target }) => setQuantity(target.value)}
					error={errors?.quantity}
				/>

				<FormInput 
					type="text"
					name="average_time"
					label="Average Time"
					placeholder="1 hour 30 minute"
					value={averageTime}
					handleChange={({ target }) => setAverageTime(target.value)}
					error={errors?.averageTime}
				/>

				<FormInput 
					type="text"
					name="charge"
					label="Charge"
					value={charge}
					handleChange={({ target }) => setCharge(target.value)}
					error={errors?.charge}
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
	addOrder: order => dispatch(addNewOrder(order))
});

const mapStateToProps = createStructuredSelector({
	categories: selectServicesCategory,
	servicesList: selectServicesServiceName,
	orderStatus: selectOrderRequestStatus,
	orderError: selectOrderRequestError
})

export default connect(mapStateToProps, mapDispatchToProps)(BookOrder);