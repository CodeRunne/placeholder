import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '../table/table';
import ApiOptionRow from '../api-option-row/api-option-row';
import FormSelect from '../form-select/form-select';
import { ApiOptionContainer, ApiOptionHeader } from './api-option-box.styles';

function ApiOptionBox({ title, selectData=[], data=[] }) {
	const [selectOption, setSelectOption] = useState('');
	const apiTableHead = ['Parameters', 'Description'];
	
	return (
		<ApiOptionContainer>
			<ApiOptionHeader className="heading-5">{title}</ApiOptionHeader>

			{/* Form Select */}
			{selectData.length ? 
				<FormSelect
					name="Api options"
					options={selectData}
					value={selectOption}
					handleChange={({ target }) => setSelectOption(target.value)}
				/>
			: null
			}

			<Table tableHead={apiTableHead}>
				{data.map(({ params, desc }) => <ApiOptionRow key={desc} params={params} desc={desc} />)}
			</Table>
		</ApiOptionContainer>
	)
}

ApiOptionBox.propTypes = {
	title: PropTypes.string.isRequired,
	selectData: PropTypes.array,
	data: PropTypes.array.isRequired
}

export default ApiOptionBox