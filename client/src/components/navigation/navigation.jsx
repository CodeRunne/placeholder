import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../config';
import NavigationLinks from '../../constants/navigation-links';
import NavigationLink from '../navigation-link/navigation-link';
import Button from '../button/button';
import Hamburger from '../hamburger/hamburger';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import {
    NavigationContainer,
    NavigationWrapper,
    NavigationLogo,
    NavigationRight,
    NavigationLinkItem
} from './navigation.styles';

function Navigation() {
    const navigate = useNavigate();
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    return (
        <NavigationContainer className="navigation d-flex d-j-cnt">
            {/* Navigation wrapper */}
            <NavigationWrapper className="d-flex d-j-sbtw d-a-cnt">
                {/* Navigation Logo */}
                <NavigationLogo className="gradient-text" to="/">{APP_NAME}</NavigationLogo>

                {/* Navigation Right */}
                <NavigationRight className="navigation-right d-flex d-a-cnt">
                    {/* Navigation Links Container */}
                    <NavigationLinkItem className="d-flex d-a-cnt">
                        {/* Navigation Links */}
                        {NavigationLinks.map(link => <NavigationLink key={link.name} {...link} />)}
                    </NavigationLinkItem>

                    {/* Navigation Action Button */}
                    <div className="action-button">
                        <Button 
                            onClick={() => navigate('/register')}
                            style={{
                                width: 'max-content',
                                padding: '.8rem 1.5rem',
                                borderRadius: '.2rem'
                            }}
                            variant="primary"
                        >Create an account</Button>
                    </div>

                    {/* Hamburger */}
                    <Hamburger isOpen={mobileNavIsOpen} setIsOpen={setMobileNavIsOpen} />
                </NavigationRight>
            </NavigationWrapper>

            {mobileNavIsOpen ? <MobileNavigation setIsOpen={setMobileNavIsOpen} /> : null }
        </NavigationContainer>
    )
}

export default Navigation;