import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../button/button';
import { AlertContainer, AlertText } from './alert.styles';

function Alert({ message, children, setIsOpen, isOpen }) {
	return (
		<AlertContainer className="d-flex d-j-cnt d-a-cnt">
			<AlertText>{ children }</AlertText>
			<Button onClick={() => setIsOpen(!isOpen)}>
				<AiOutlineClose />
			</Button>
		</AlertContainer>
	)
}


Alert.propTypes = {
	message: PropTypes.string,
	setIsOpen: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired
}

export default Alert;