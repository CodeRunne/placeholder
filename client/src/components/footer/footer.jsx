import React from 'react';
import { APP_NAME } from '../../config';
import { FooterContainer } from './footer.styles';

function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<FooterContainer className="d-flex d-j-cnt">
			&copy; copyright {APP_NAME} 2015 - {currentYear}. All rights reserved.
		</FooterContainer>
	)
}

export default Footer