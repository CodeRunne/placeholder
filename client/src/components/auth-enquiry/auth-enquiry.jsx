import React from 'react';
import { AuthEnquiryText, AuthEnquiryLink } from './auth-enquiry.styles';

function AuthEnquiry({ enquiry, enquiryPage, route }) {
	return (
		<AuthEnquiryText className="auth-enquiry">
			{enquiry}?
			<AuthEnquiryLink to={`${route}`} className="gradient-text">{enquiryPage}</AuthEnquiryLink>
		</AuthEnquiryText>
	)
}

export default AuthEnquiry