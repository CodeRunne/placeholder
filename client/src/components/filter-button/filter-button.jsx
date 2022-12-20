import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneFilter } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Button from '../button/button';
import FilterOptions from '../filter-options/filter-options';
import { FilterForm } from './filter-button.styles';


function FilterButton({ type, name="Show filter" }) {
	const [showOptions, setShowOptions] = useState(false);

	function submitCategory(e) {
		e.preventDefault();
	}

	return (
		<FilterForm onSubmit={submitCategory} className="filter__button">
			<Button 
				onClick={() => setShowOptions(!showOptions)}
			>
				<AiTwotoneFilter className="filter" />
				{name}
				<MdOutlineKeyboardArrowDown className="arrow-down" />
				{ showOptions ? <FilterOptions type={type} /> : null }
			</Button>
		</FilterForm>
	)
}

FilterButton.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string
}

export default FilterButton;