import { useEffect } from 'react';
import { createPortal } from 'react-dom';
 
const modalRoot = document.getElementById('modal-root');

function Portals({ children }) {
	const ele = document.createElement('div');

	useEffect(() => {
		// Append Portals Child On Mounting	
		modalRoot.appendChild(ele);

		return () => {
			// Remove Portals Child On Unmounting
			modalRoot.removeChild(ele);
		};
	}, [ele])

	return createPortal(
		children,
		ele
	);
}

export default Portals;