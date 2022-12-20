import React from 'react';
import PropTypes from 'prop-types';
import { ServicesBoxContainer, ServicesBoxIconWrapper, ServicesBoxHeader, ServicesBoxParagraph } from './services-box.styles';

function ServicesBox({ icon, title, content }) {
	return (
		<ServicesBoxContainer>
			<ServicesBoxIconWrapper className="d-flex d-j-cnt d-a-cnt">
				{icon}
			</ServicesBoxIconWrapper>
			<ServicesBoxHeader>{title}</ServicesBoxHeader>
			<ServicesBoxParagraph>{content}</ServicesBoxParagraph>
		</ServicesBoxContainer>
	)
}

ServicesBox.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
}

export default ServicesBox;