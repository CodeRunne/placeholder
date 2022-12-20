import styled from 'styled-components';

export const InfoBoxSection = styled.figure`
	border-radius: .5rem;
	border: 1px solid var(--grey-tint-1);
	padding: 2.2rem 1.7rem;
	background: var(--white);
	box-shadow: 1px 1.2px .6rem rgba(0,0,0,0.04);
	gap: 1.5rem;

	@media (max-width: 900px) {
		padding: 2.4rem 2rem;
	}

	@media (max-width: 320px) {
		padding: 1.7rem 1.2rem;
	}
`;