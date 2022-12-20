import React from 'react';
import PropTypes from 'prop-types';
import { 
    FormWrapper, 
    FormHeading,
    FormHeadingMainText,
    FormHeadingSubText
} from './form-container.styles';

function FormContainer({ headerText, subHeaderText, children, submitForm }) {
    return (
        <FormWrapper 
            className="form-container"
            onSubmit={submitForm}
            noValidate
        >
            {headerText ?
                <FormHeading className="d-flex d-flex-column d-a-cnt">
                    <FormHeadingMainText>{headerText}</FormHeadingMainText>
                    <FormHeadingSubText>{subHeaderText}</FormHeadingSubText>
                </FormHeading> :
            null}

            {children}
        </FormWrapper>
    )
}

FormContainer.propTypes = {
    headerText: PropTypes.string,
    subHeaderText: PropTypes.string 
}

export default FormContainer;