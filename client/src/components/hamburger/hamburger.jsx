import React from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { HamburgerButton } from './hamburger.styles';

function Hamburger({ isOpen = true, setIsOpen=f=>f, type }) {
	function toggleState() {
		if(type)
			setIsOpen();
		else
			setIsOpen(!isOpen);
	}

	return (
		<div className="hamburger">
			<HamburgerButton onClick={() => toggleState()}>
				<FaBars />
			</HamburgerButton>
		</div>
	)
}

Hamburger.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func.isRequired,
	type: PropTypes.bool
}

export default Hamburger;