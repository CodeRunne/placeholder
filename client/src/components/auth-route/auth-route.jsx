import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
	const { currentUser, dashboardRoute } = useContext(AuthContext);

	if(currentUser) {
		if(!currentUser.verified_mail) 
			return <Navigate to="/confirm-mail" replace />

		return <Navigate to={`${dashboardRoute}`} replace />
	} else
		return children;
}

export default AuthRoute;