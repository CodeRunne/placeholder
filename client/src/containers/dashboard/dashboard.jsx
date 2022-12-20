import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardNavigation, SideNavigation, TelegramButton, NoMatch, Spinner, ProtectedRoute } from '../../components';

import { DashboardContainer, DashboardMainContainer, DashboardViewsContainer } from './dashboard.styles';

// Routes
const Orders = lazy(() => import('../../pages/dashboard/view-orders/view-orders'));
const MassOrder = lazy(() => import('../../pages/dashboard/mass-order/mass-order'));
const Account = lazy(() => import('../../pages/dashboard/account/account'));
const AddFunds = lazy(() => import('../../pages/dashboard/add-funds/add-funds'));
const BookOrder = lazy(() => import('../../pages/dashboard/book-order/book-order'));
const TicketSupport = lazy(() => import('../../pages/dashboard/ticket-support/ticket-support'));

function Dashboard() {
	return (
		<DashboardContainer>
			{/* Side Navigation */}
			<SideNavigation />

			{/* Dashboard Main Container */}
			<DashboardMainContainer>
				{/* Dashboard Navigation */}
				<DashboardNavigation />

				{/* Dashboard Views Container */}
				<DashboardViewsContainer className="contents">
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route index element={
								<ProtectedRoute>
									<Orders />
								</ProtectedRoute>
							}/>
							<Route path="mass-order" element={
								<ProtectedRoute>
									<MassOrder />
								</ProtectedRoute>
							}/>
							<Route path="add-funds" element={
								<ProtectedRoute>
									<AddFunds />
								</ProtectedRoute>
							}/>
							<Route path="account" element={
								<ProtectedRoute>
									<Account />
								</ProtectedRoute>
							}/>
							<Route path="book-order" element={
								<ProtectedRoute>
									<BookOrder />
								</ProtectedRoute>
							}/>
							<Route path="ticket-support" element={
								<ProtectedRoute>
									<TicketSupport />
								</ProtectedRoute>
							}/>
							<Route path="*" element={
								<ProtectedRoute>
									<NoMatch path="/dashboard" style={{ left: '63%' }} />
								</ProtectedRoute>
							}/>
						</Routes>
					</Suspense>
				</DashboardViewsContainer>
			</DashboardMainContainer>

			{/* Telegram Button */}
			<TelegramButton />
		</DashboardContainer>
	)
}

export default Dashboard