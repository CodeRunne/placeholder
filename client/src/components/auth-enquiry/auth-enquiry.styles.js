import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthEnquiryText = styled.p`
	font-size: 1.12rem;
	margin-top: 1rem;
	text-align: center;

	@media (max-width: 1200px) {
		margin-top: 1.1rem;
	}

	@media (max-width: 900px) {
		font-size: 1.22rem;
		margin-top: 1.12rem;
	}

	@media (max-width: 768px) {
		margin-top: .7rem;
	}

	@media (max-width: 425px) {
		font-size: 1.32rem;
	}

	@media (max-width: 375px) {
		font-size: 1.29rem;
	}
`;


export const AuthEnquiryLink = styled(Link)`
	font-size: 1.16rem;
	margin-left: .4rem;

	@media (max-width: 900px) {
		font-size: 1.23rem;
	}

	@media (max-width: 425px) {
		font-size: 1.35rem;
	}

	@media (max-width: 375px) {
		font-size: 1.31rem;
	}
`;
