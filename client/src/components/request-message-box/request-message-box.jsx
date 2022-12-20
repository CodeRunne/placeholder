import React from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { RequestMessageContainer, RequestMessageText } from './request-message-box.styles';

function RequestMessageBox({ message, style, type }) {
	function getStyles(type) {
		if(type === "error")
			return {
				background: 'var(--accent-tint-0)',
				border: '1px solid var(--accent-tint-4)',
				color: 'var(--accent)',
				...style
			}
		else if(type === "success")
			 return {
				background: 'var(--green-tint-4)',
				border: '1px solid var(--green-tint-2)',
				color: 'var(--green)',
				...style
			}
	}

	const backgroundStyles = getStyles(type);
	
	return (
		<RequestMessageContainer style={backgroundStyles}
		>
			<RequestMessageText>{message}</RequestMessageText>
		</RequestMessageContainer>
	)
}

RequestMessageBox.propTypes = {
	message: PropTypes.string
}

export default RequestMessageBox