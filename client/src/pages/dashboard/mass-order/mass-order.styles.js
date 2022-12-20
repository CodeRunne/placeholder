import styled from 'styled-components';

export const MassOrderContainer = styled.div`
	@media (max-width: 768px) {
		width: 65%;
		margin: 0 auto;
		margin-top: 1.5rem;
	}

	@media (max-width: 600px) {
		width: 80%;
	}

	@media (max-width: 500px) {
		width: 85%;
	}

	@media (max-width: 425px) {
		width: 90%;
	}

	@media (max-width: 375px) {
		width: 95%;
	}
`;

export const MassOrderForm = styled.form`
	width: 45%;
	margin-top: 2rem;
	gap: .7rem;

	@media (max-width: 1200px) {
		width: 50%;
	}

	@media (max-width: 1100px) {
		width: 60%;
	}

	@media (max-width: 900px) {
		width: 70%;
	}

	@media (max-width: 800px) {
		width: 80%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;