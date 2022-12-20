import React from 'react';
import { EnquiryBoxSection } from './enquiry-box.styles';

function EnquiryBox() {
	return (
		<EnquiryBoxSection>
			<h5 className="heading-5">Webmail payment have 5% Fee / for example if you pay $100 we will add $95 in your account
			</h5>
			<h5 className="heading-5">After payment, Send Details to Telegram Support: <span className="gradient-text">Telegram Payment Support</span>
			</h5>
		</EnquiryBoxSection>
	)
}

export default EnquiryBox;