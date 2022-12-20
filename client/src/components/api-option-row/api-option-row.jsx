import React from 'react';
import { ApiOptionContainer } from './api-option-row.styles';

function ApiOptionRow({ params, desc }) {
	return (
		<tr>
	        <ApiOptionContainer>{params}</ApiOptionContainer>
	        <td>{desc}</td>
	    </tr>	
	)
}

export default ApiOptionRow