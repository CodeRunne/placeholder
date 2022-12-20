import styled from 'styled-components';

export const APIDescriptionBoxContainer = styled.figure`
	gap: 2rem;
`;

export const APIDescriptionBoxMethodText = styled.p`
	font-size: 1.13rem;
	font-weight: 500;

	@media (max-width: 900px) {
		font-size: 1.22rem;
	}

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
`;

export const APIDescriptionBoxResponseText = styled.span`
	font-size: 1.06rem;
	font-weight: 700;
	color: var(--primary);

	@media (max-width: 900px) {
		font-size: 1.14rem;
	}

	@media (max-width: 600px) {
		font-size: 1.12rem;
	}
`;