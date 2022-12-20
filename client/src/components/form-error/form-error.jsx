import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText } from './form-error.styles';

function FormError({ errorMessage }) {
    return (
        <ErrorText className='form-error'>{errorMessage}</ErrorText>
    )
}   

FormError.propTypes = {
    errorMessage: PropTypes.string
};

export default FormError;