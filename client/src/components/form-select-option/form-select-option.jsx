import React from 'react';

function FormSelectOption({ value }) {
	let option;

	if(typeof value === "object")
		option = (<option value={value?.link} style={{ textTransform: 'capitalize' }}>{value?.name}</option>)
	else 
		option = (<option value={value.toLowerCase()} style={{ textTransform: 'capitalize' }}>{value}</option>)

	return (
		<>
			{option}
		</>
	)
}

export default FormSelectOption;