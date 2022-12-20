import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../form-label/form-label';
import FormError from '../form-error/form-error';
import FormSelectOption from '../form-select-option/form-select-option';
import { FormGroup, FormSelectField } from './form-select.styles';

function FormSelect({ label = "", handleChange=f=>f, error, options=[], ...otherSelectProps }) {
	return (
		<FormGroup className="form-group d-flex d-flex-column" role="group">
			{/* Form Label */}
			<FormLabel content={label} />

			{/* Form Select */}
			<FormSelectField 
				onChange={handleChange} 
				{...otherSelectProps}
				aria-invalid={error ? "true" : "false"}
				required
			>
				{options.map((option, i) => <FormSelectOption key={`select option ${i}`} value={option} />)}
			</FormSelectField>

			{/* Form Error */}
			{error ? <FormError errorMessage={error} /> : null}
		</FormGroup>
	)
}

FormSelect.propTypes = {
	label: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	options: PropTypes.array.isRequired,
	otherSelecProps: PropTypes.object
}

export default FormSelect;