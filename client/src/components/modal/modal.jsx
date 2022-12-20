import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import Portals from '../portals/portals';
import { ModalContainer, ModalContentContainer } from './modal.styles';

function Modal({ children, isOpen = true, closeModal=f=>f }) {
	useEffect(() => {
		const closeOnKey = e => e.which === 27 || e.keyCode === 27 ? closeModal() : null;

		// Add Keyboard Listener
		document.body.addEventListener('keydown', closeOnKey);

		return () => {
			// Remove Keyboard Listener
			document.body.removeEventListener('keydown', closeOnKey);
		};
	}, [closeModal]);

	if(!isOpen) return null;

	return (
		<Portals>
			<ModalContainer>
				{/* Modal Content Container */}
				<ModalContentContainer>
					{/* Modal Close Button */}
					<span onClick={closeModal} className="close-button">
						<AiOutlineClose />
					</span>

					{children}
				</ModalContentContainer>
			</ModalContainer>
		</Portals>
	)
}


Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired
}

export default Modal;