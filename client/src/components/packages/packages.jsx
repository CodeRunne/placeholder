import React from 'react';
import { packages } from '../../constants/home';
import PackageCard from '../package-card/package-card';
import { PackagesContainer, PackagesCollections } from './packages.styles';

function Packages() {
	return (
		<PackagesContainer>
			<h4 className="heading-4">Our Services</h4>

			<PackagesCollections>
				{packages.map(service => <PackageCard key={service.title} {...service} />)}
			</PackagesCollections>
		</PackagesContainer>
	)
}

export default Packages;