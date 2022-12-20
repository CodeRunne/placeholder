import React from 'react';
import PropTypes from 'prop-types';
import { APIDescriptionBoxContainer, APIDescriptionBoxMethodText, APIDescriptionBoxResponseText } from './api-description-box.styles';

function ApiDescriptionBox({ method, value }) {
	return (
		<APIDescriptionBoxContainer className="d-flex">
			<APIDescriptionBoxMethodText>{method}:</APIDescriptionBoxMethodText>
			<APIDescriptionBoxResponseText>{value}</APIDescriptionBoxResponseText>
		</APIDescriptionBoxContainer>
	)
}

ApiDescriptionBox.propTypes = {
	method: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
}

export default ApiDescriptionBox;