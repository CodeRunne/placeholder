import React from 'react';
import { NavigationLinkItem } from './navigation-link.styles';

function NavigationLink({ name, url, closeOffset }) {
    return (
        <li>
            <NavigationLinkItem to={`${url}`} onClick={() => closeOffset(false)} end>{name}</NavigationLinkItem>
        </li>
    )
}

export default NavigationLink;