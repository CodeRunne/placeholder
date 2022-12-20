import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoBitcoin } from 'react-icons/io5';
import { SideNavContext } from '../../providers/sidenav-provider/sidenav-provider';
import { navigationLinks } from '../../constants/dashboard';
import SideNavigationLink from '../side-navigation-link/side-navigation-link'; 
import { SideNavigationContainer, SideNavigationCloseButton, AccountFundsContainer, AccountFundsHeading, AccountFunds, SideNavigationListItem } from './side-navigation.styles';

function SideNavigation() {
	const { hidden, toggleHidden } = useContext(SideNavContext);	

	return (
		<SideNavigationContainer 
			className={`gradient d-flex d-flex-column d-a-cnt ${hidden ? "toggle" : ''}`}>
			{/* Side Navigation Close Button */}
			<SideNavigationCloseButton onClick={toggleHidden}>
				<AiOutlineClose />
			</SideNavigationCloseButton>

			{/* Account Funds Display */}
			<AccountFundsContainer>
				<AccountFundsHeading>Funds</AccountFundsHeading>
				<AccountFunds>
					0.00 
					<IoLogoBitcoin />
				</AccountFunds>
			</AccountFundsContainer>

			{/* Side Navigation List Item */}
			<SideNavigationListItem className="d-flex d-flex-column">
				{navigationLinks.map(link => <SideNavigationLink key={link.name} {...link} />)}
			</SideNavigationListItem>
		</SideNavigationContainer>
	)
}

export default SideNavigation