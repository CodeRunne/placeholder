import React from 'react';
import { DescriptionContainer, DescriptionHeaderText, DescriptionContentContainer, DescriptionContentItem, DescriptionTitle } from './description-box.styles';

function DescriptionBox({ heading, features, geolocation, notice, start_time, warning, link, guarantee }) {
	return (
		<DescriptionContainer>
			{/* Description Heading Text */}
			<DescriptionHeaderText>{heading}</DescriptionHeaderText>

			{/* Description Content Container */}
			<DescriptionContentContainer className="d-flex d-flex-column">
				{features.length ?
					<DescriptionContentItem className="d-flex d-flex-column">
						{features.map(feature => <li>{feature}</li>)}
					</DescriptionContentItem>
					:
					null
				}

				{/* Start Time */}
				{start_time && <DescriptionTitle>{start_time}</DescriptionTitle>}

				{/* Link Format */}
				{start_time && <DescriptionTitle>{link}</DescriptionTitle>}

				{/* Notice Text */}
				{notice.length ?
					notice.map(notice => <DescriptionTitle>{notice}</DescriptionTitle>)
					:
					null
				}

				{warning && <DescriptionTitle> <span className="font-bold">⭕ Important:</span> You must have minimum 5 posts in <span className="font-bold">Channel</span>. Subjects of <span className="font-bold">Drugs</span>/<span className="font-bold">Earnings</span>/<span className="font-bold">Scam</span>/<span className="font-bold">Cheating</span>/<span className="font-bold">Guns</span> are prohibited and orders will be cancelled.</DescriptionTitle>}
			</DescriptionContentContainer>
		</DescriptionContainer>
	)
}

export default DescriptionBox