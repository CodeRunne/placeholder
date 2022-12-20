import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { fetchAllOrders } from '../../../redux/orders/orders.actions';
import { selectAllOrders, selectOrderRequestStatus } from '../../../redux/orders/orders.selectors';
import { Alert, Profile, EmptySlate, SEO, FilterFormContainer, Table, OrdersRow } from '../../../components';
import { OrderContainer } from './view-orders.styles';

function ViewOrders({ fetchOrders, orders, ordersStatus }) {
	const { currentUser: { id }} = useContext(AuthContext);
	const [alertIsOpen, setAlertIsOpen] = useState(false);

	useEffect(() => {
		// Fetch All orders
		fetchOrders(id);

		// Display Alert
		setTimeout(() => setAlertIsOpen(true), 2000);

		return () => {
			setAlertIsOpen(false);
		}
	}, [fetchOrders, id]);

	let content;

	if(ordersStatus === "pending") 
		content = (<p>Loading...</p>);
	else if(orders.length && ordersStatus === "success") {
		const ordersTableHead = ["ID", "category", "services", "link", "status", "quantity", "charge", "average time"];

		content = (
			<OrderContainer className="order-container">
				<FilterFormContainer 
					type="orders"
					filterName="Show filters" />

				<Table tableHead={ordersTableHead}>
		           {orders.map(order => <OrdersRow key={order?.id} {...order} />)}
		        </Table>
			</OrderContainer>
		);
	} else 
		content = ( <EmptySlate /> );

			// {/* Alert */}
			// {alertIsOpen && <Alert isOpen={alertIsOpen} setIsOpen={setAlertIsOpen}>
			// 	<span className="font-bold">Need support to check an order?</span> Order support is done only through tickets <Link className="gradient-text" to="/dashboard/ticket-support">Click here to send new ticket</Link>
			// </Alert>}
	return (
		<>	
			{/* SEO */}
            <SEO
                title="Orders"
                description="Orders"
                type="article"
            />

			{/* User Profile */}
			<Profile style={{ marginTop: alertIsOpen ? '2rem' : '0' }} />

			{/* Orders Content */}
			{content}
		</>
	)
}

const mapStateToDispatch = createStructuredSelector({
	orders: selectAllOrders,
	ordersStatus: selectOrderRequestStatus
});

const mapDispatchToProps = dispatch => ({
	fetchOrders: id => dispatch(fetchAllOrders(id))
});

export default connect(mapStateToDispatch, mapDispatchToProps)(ViewOrders);