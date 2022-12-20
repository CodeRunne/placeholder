import React, { useEffect } from 'react';
import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { NotificationContainer, NotificationIcon, NotificationText, NotificationCloseButton } from './notification.styles';

function Notification({ type, message, closeModal }) {
	
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 7000);
	}, [closeModal])

	let notificationIconType;

	if(type === "failed") 
        notificationIconType = <BsExclamationCircle className="failed" />;
    else
        notificationIconType = <BsCheckCircle className="success" />;

	return (
		<NotificationContainer 
			className="d-flex d-a-cnt d-j-sbtw">
			{/* Notification Icon */}
			<NotificationIcon>{notificationIconType}</NotificationIcon>

			<NotificationText>{message}</NotificationText>

			<NotificationCloseButton onClick={closeModal}>
				<AiOutlineClose />
			</NotificationCloseButton>
		</NotificationContainer>
	)
}

export default Notification;