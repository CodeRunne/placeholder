import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const path = window.location.pathname;
		let id;

		if(path.includes("dashboard")) {
			const dashboardRoute = path.split("dashboard")[1];

			if(dashboardRoute === "")
				id = 0;
			else if(dashboardRoute === "/mass-order")
				id = 1;
			else if(dashboardRoute === "/book-order")
				id = 2;
			else if(dashboardRoute === "/add-funds")
				id = 3;
			else if(dashboardRoute === "/ticket-support")
				id = 4;
			else if(dashboardRoute === "/account")
				id = 5;
			
			localStorage.setItem("open-id", JSON.stringify(id));
		}
	})

	if(currentUser) {
		if(!currentUser.verified_mail)
			return <Navigate to="/confirm-mail" replace />
		
		return children;
	} else
		return <Navigate to="/login" replace />
}

export default ProtectedRoute;