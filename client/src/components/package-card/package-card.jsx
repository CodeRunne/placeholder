import React from 'react';
import PropTypes from 'prop-types';
import { PackageCardContainer, PackageCardLink } from './package-card.styles';

function PackageCard({ icon, title, url }) {
	return (
		<PackageCardContainer className="d-flex d-flex-column">
			{icon}
			<PackageCardLink to={`${url}`}>{title}</PackageCardLink>
		</PackageCardContainer>
	)
}

PackageCard.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
}

export default PackageCard;