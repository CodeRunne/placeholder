import React, { useContext } from 'react';
import { APP_NAME } from '../../config';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { SideNavContext } from '../../providers/sidenav-provider/sidenav-provider';
import FundsDisplayButton from '../funds-display-button/funds-display-button';
import Button from '../button/button';
import Hamburger from '../hamburger/hamburger';

import { DashboardNavigationContainer, DashboardNavigationLogo, DashboardNavigationRight } from './dashboard-navigation.styles';

function DashboardNavigation() {
	const { logoutUser } = useContext(AuthContext);
	const { toggleHidden } = useContext(SideNavContext);

	return (
		<DashboardNavigationContainer className="d-flex d-j-sbtw d-a-cnt">
			{/* Dashboard Navigation Logo */}
			<DashboardNavigationLogo className="gradient-text" to="/dashboard">{APP_NAME}</DashboardNavigationLogo>

			{/* Dashboard Navigation Right */}
			<DashboardNavigationRight className="d-flex d-a-cnt">
				{/* Funds Display Button */}
				<FundsDisplayButton />
				
				{/* Logout Button */}
				<Button 
					onClick={logoutUser}
					style={{ padding: '.3rem .5rem' }}
				>Logout</Button>

				{/* Hamburger */}
				<Hamburger setIsOpen={toggleHidden} type />
			</DashboardNavigationRight>
		</DashboardNavigationContainer>
	)
}

export default DashboardNavigation;