import React, { useContext } from 'react';
import { SideNavContext } from '../../providers/sidenav-provider/sidenav-provider';
import { SideNavigationLinkItem } from './side-navigation-link.styles';


function SideNavigationLink({ icon, name, url }) {
	const { toggleHidden } = useContext(SideNavContext);

	return (
		<li>
			<SideNavigationLinkItem 
				to={`${url}`} 
				onClick={toggleHidden}
				className="d-flex d-a-cnt" 
				end
			>
				{icon}
				{name}
			</SideNavigationLinkItem>
		</li>
	)
}

export default SideNavigationLink;