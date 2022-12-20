import React, { useState } from 'react';
// import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { FormInput, Button } from '../../../components';
import { MassOrderContainer, MassOrderForm } from './mass-order.styles';


function MassOrder() {
	// const { currentUser: { id }} = useContext(AuthContext); 
	const [order, setOrder] = useState("");
	const [error, setError] = useState("");
	const [validated, setValidated] = useState(false);

	function submitMassOrder(e) {
		e.preventDefault();

		if(order.includes("\n")) {
			const formattedOrder = order.split('\n');

			if(Array.isArray(formattedOrder)) {
				const validatedOrders = formattedOrder.every(order => order.split("|").length === 3);

				if(!validatedOrders) {
					setError("Please be guided")
				} else {
					// Set Validated
					setValidated(true);

					setError("");
				}
			}
		} else {
			if(!order.length) {
				setError("Add an order");
			} else if(order.split("|").length !== 3)
				setError("Please be guided");
			else {
				// Set Validated
				setValidated(true);

				setError("");
			}
		}

		if(validated) {
			let data = [];

			if(!order.includes("\n"))
				data.push(order)
			else {
				const orderList = order.split("\n");

				// Push Order List
				data = [].concat(orderList);	
			}
		}
	}

	return (
		<MassOrderContainer>
			<h5 className="heading-5" style={{ fontWeight: '500' }}>Mass Order</h5>

			<MassOrderForm 
				className="d-flex d-flex-column" 
				onSubmit={submitMassOrder}
				noValidate
			>
				<FormInput
					type="textarea"
					name="mass-order"
					label="One order per line in order"
					value={order}
					handleChange={({ target }) => setOrder(target.value)}
					placeholder="service_id | link | quantity"
					error={error}
				/>

				<Button
					type="submit"
					variant="primary"
					style={{ width: '100%' }}
				>Submit</Button>
			</MassOrderForm>
		</MassOrderContainer>
	)
}

export default MassOrder;