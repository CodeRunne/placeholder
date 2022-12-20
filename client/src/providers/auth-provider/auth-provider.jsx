import { useState, createContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import decryptData from '../../assets/_helpers/decrypt-data';
import { logoutAuthApi, authApi, encryptionKey } from '../../config';

const AuthContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	setIsLoading: () => {},
	isLoading: false,
	logoutUser: () => {},
	dashboardRoute: ""
});


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [dashboardRoute, setDashboardRoute] = useState("/dashboard");
	const [routes] = useState({
		0: "/dashboard",
		1: "/dashboard/mass-order",
		2: "/dashboard/book-order",
		3: "/dashboard/add-funds",
		4: "/dashboard/ticket-support",
		5: "/dashboard/account"
	});
	
	useEffect(() => {		
		function authUser() {
			const user = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : null; 
			const decryptedUser = user ? decryptData(user, encryptionKey) : null;
			const token = decryptedUser?.sessionID;

			// Check if token exists
			if(token) {
				axios.post(authApi(token))
					.then(({ data: {user}}) => {
						if(user) {
							setCurrentUser(user);
							setIsLoading(false);
						} else 
							return <Navigate to="/login" replace />
					})
			} else {
				setCurrentUser(null);
				setIsLoading(false);
			}
		}

		authUser();
	}, [setCurrentUser, setIsLoading]);
	

	useEffect(() => {
		const dashboardPageId = localStorage.getItem("open-id") ?? null;
		
		if(dashboardPageId) {
			const route = routes[dashboardPageId];

			setDashboardRoute(route);
		}
	}, [setDashboardRoute, routes])

	// Logout user
	function logoutUser() {
		axios.get(logoutAuthApi)
			.then(({ data: { status }}) => {
				if(status === "success") {
					// Delete session
					sessionStorage.removeItem('token');

					// Set current user to null
					setCurrentUser(null);
				}
			});
	}

	return (
		<AuthContext.Provider value={{
			currentUser,
			setCurrentUser,
			isLoading,
			setIsLoading,
			logoutUser,
			dashboardRoute
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider };