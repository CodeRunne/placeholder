import React from 'react';
import { InfoBoxSection } from './info-box.styles';
 
function InfoBox({ children, heading }) {
	return (
		<InfoBoxSection className="d-flex d-flex-column">
			<h5 className="heading-5">{heading}</h5>

			{children}
		</InfoBoxSection>
	)
}

export default InfoBox