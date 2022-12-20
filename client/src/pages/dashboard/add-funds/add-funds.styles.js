import styled from 'styled-components';

export const AddFundsContainer = styled.div`
	width: 55%;
	padding: 1.2rem 2rem;
	margin: 0 auto;

	@media (max-width: 1200px) {
		width: 70%;
	}

	@media (max-width: 1100px) {
		width: 80%;
	}

	@media (max-width: 1024px) {
		width: 90%;
	}

	@media (max-width: 900px) {
		width: 95%;
	}

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 600px) {
		width: 100%;
		padding: 1.2rem 1.5rem;
	}

	@media (max-width: 425px) {
		margin-top: 1.5rem;
		padding: 1.2rem 1rem;
	}

	@media (max-width: 320px) {
		margin: 0;
		margin-top: 1rem;
		padding: 0;
	}
`;

export const AddFundsForm = styled.form`
	margin-top: 2rem;
	padding: .2rem;
	gap: 1.5rem;
`;

export const AddFundsInstructionBox = styled.div`
	gap: 1.3rem;
	margin-bottom: .6rem;
`;

export const AddFundsInstructionBonusContainer = styled.div`
	gap: .9rem;

	@media (max-width: 425px) {
		gap: 1.15rem
	}
`;

export const AddFundsInstructionBonusText = styled.p`
	font-size: 1.07rem;
	color: teal;
	font-family: corbel, sans-serif;

	@media (max-width: 1100px) {
		font-size: 1.1rem;
	}

	@media (max-width: 900px) {
		font-size: 1.17rem;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media (max-width: 425px) {
		font-size: 1.3rem
	}
`;

export const AddFundsInstructionLink = styled.p`
	font-size: 1.02rem;
    margin-top: 1rem;

	a {
		font-size: inherit;
	}

	@media (max-width: 1100px) {
		font-size: 1.04rem;
	}

	@media (max-width: 900px) {
		font-size: 1.08rem;
	}

	@media (max-width: 768px) {
		font-size: 1.12rem;
	}

	@media (max-width: 425px) {
		font-size: 1.16rem
	}
`;