import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationLinks from '../../constants/navigation-links';
import Button from '../button/button';
import NavigationLink from '../navigation-link/navigation-link';
import { MobileNavigationContainer, MobileNavigationWrapper, MobileNavigationListItem } from './mobile-navigation.styles';

function MobileNavigation({ setIsOpen }) {
	const navigate = useNavigate();
	
	return (
		<MobileNavigationContainer className="d-flex d-j-cnt">
			<MobileNavigationWrapper>
				<MobileNavigationListItem className="d-flex d-flex-column d-a-cnt">
					{NavigationLinks.map(link => <NavigationLink key={link.name} {...link} closeOffset={setIsOpen} />)}
				</MobileNavigationListItem>

				<Button 
	                onClick={() => navigate('/register')}
	                style={{
	                    width: '100%',
	                    padding: '.8rem 1.5rem',
	                    borderRadius: '.2rem'
	                }}
	                variant="primary"
	            >Create an account</Button>
			</MobileNavigationWrapper>
		</MobileNavigationContainer>
	)
}

export default MobileNavigation