import React from 'react';
import PropTypes from 'prop-types';
import FormError from '../form-error/form-error';
import FormLabel from '../form-label/form-label';
import {
    FormGroup,
    FormInputField,
    FormTextarea,
    FormInputInfo
} from './form-input.styles';

function FormInput({ label, error, info, handleChange, handleBlur=f=>f, groupStyle, isDisabled, ...otherInputProps }) {
    return (
        <FormGroup 
            className="form-group d-flex d-flex-column" 
            role="group"
            style={groupStyle}
        >
            {/* Form label */}
            {label && <FormLabel content={label} /> }

            {otherInputProps.type === "textarea" ?
                <>
                    {/* Form Textarea */}
                    <FormTextarea 
                        {...otherInputProps}  
                        className="form-textarea"
                        aria-invalid={error ? "true" : "false"}
                        onChange={handleChange}
                        required
                        autoComplete="false"
                    />
                </>
            :
                <>
                    {/* Form Input */}
                    <FormInputField 
                        {...otherInputProps}  
                        className="form-input"
                        aria-invalid={error ? "true" : "false"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-disabled={isDisabled ? true : false}
                        disabled={isDisabled ? true : false}
                        required
                        autoComplete="false"
                        readonly
                    />
                </>
            }

            {info ? <FormInputInfo>{info}</FormInputInfo> : null}

            {/* Form Error */}
            {error && <FormError errorMessage={error} />}
        </FormGroup>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    groupStyle: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    isDisabled: PropTypes.bool
}

export default FormInput;