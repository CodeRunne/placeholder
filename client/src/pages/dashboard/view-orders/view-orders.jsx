import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { fetchAllOrders } from '../../../redux/orders/orders.actions';
import { selectAllOrders, selectOrderRequestStatus } from '../../../redux/orders/orders.selectors';
import { Profile, EmptySlate, SEO, FilterFormContainer, Table, OrdersRow, Spinner } from '../../../components';
import { OrdersContainer, OrderContentContainer } from './view-orders.styles';

function ViewOrders({ fetchOrders, orders, ordersStatus }) {
	const { currentUser: { id }} = useContext(AuthContext);

	useEffect(() => {
		// Fetch All orders
		fetchOrders(id);
	}, [fetchOrders, id]);

	let content;

	if(ordersStatus === "pending") 
		content = (<Spinner style={{ alignItems: "normal", marginTop: "6rem" }} />);
	else if(orders.length) {
		const ordersTableHead = ["ID", "category", "services", "link", "status", "quantity", "charge", "average time"];

		content = (
			<OrderContentContainer className="order-container">
				<FilterFormContainer 
					type="orders"
					filterName="Show filters" />

				<Table tableHead={ordersTableHead}>
		           {orders.map(order => <OrdersRow key={order?.id} {...order} />)}
		        </Table>
			</OrderContentContainer>
		);
	} else 
		content = ( <EmptySlate /> );

	return (
		<>	
			{/* SEO */}
            <SEO
                title="Orders"
                description="Orders"
                type="article"
            />

        	{/* Orders Main Container */}
			<OrdersContainer className="d-grid">
				{/* User Profile */}
				<Profile />

				{/* Orders Content */}
				{content}
			</OrdersContainer>
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