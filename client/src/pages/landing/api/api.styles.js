import styled from 'styled-components';

export const APIContainer = styled.main`
	width: 50%;
	margin: 0 auto;
	padding: 3rem 0;

	@media (max-width: 1100px) {
		width: 55%;
	}

	@media (max-width: 1024px) {
		width: 60%;
	}

	@media (max-width: 900px) {
		width: 65%;
	}

	@media (max-width: 800px) {
		width: 70%;
	}

	@media (max-width: 768px) {
		width: 75%;
	}

	@media (max-width: 600px) {
		width: 80%;
	}

	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const APIDescriptionWrapper = styled.header`
	gap: 1.4rem;

	@media (max-width: 900px) {
		gap: 1.6rem;

		h2 {
			font-size: 2.7rem !important;
		}
	}

	@media (max-width: 600px) {
		gap: 1.8rem;

		h2 {
			font-size: 2.5rem !important;
		}
	}
`;

export const APIDescriptionResponseContainer = styled.div`
	background: var(--code-block-bg);
    color: var(--white);
    padding: 1.7rem 1.5rem;
    border-radius: 0.2rem;
    gap: 0.6rem;

    @media (max-width: 1024px) {
		gap: .8rem;
	}

	@media (max-width: 900px) {
		gap: 1.2rem;
	}

	@media (max-width: 600px) {
		padding: 1.7rem 1.8rem;
	}
`;