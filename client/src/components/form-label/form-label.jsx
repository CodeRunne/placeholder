import React from 'react';
import PropTypes from 'prop-types';
import { LabelElement } from './form-label.styles';

function FormLabel({ content }) {
    return (
        <LabelElement>
            {content}
        </LabelElement>
    )
}

FormLabel.propTypes = {
    content: PropTypes.string.isRequired
};

export default FormLabel; 