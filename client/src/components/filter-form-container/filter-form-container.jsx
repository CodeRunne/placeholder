import React from 'react';
import FilterButton from '../filter-button/filter-button';
import SearchForm from '../search-form/search-form';
import { FilterForm } from './filter-form-container.styles';

function FilterFormContainer({ type="services", filterName="" }) {
	return (
		<FilterForm className="d-grid">
         {/* Filter Button */}
         <FilterButton type={type} name={filterName} />

         {/* Search form */}
         <SearchForm type={type} />
	    </FilterForm>
	)
}

export default FilterFormContainer