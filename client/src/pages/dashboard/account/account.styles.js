import styled from 'styled-components';
 

export const AccountFormsContainer = styled.div`
	margin-top: 1.5rem;
	grid-row-gap: 2rem;

	@media (max-width: 768px) {
		margin-top: 1rem;

		h5 {
			font-size: 1.7rem !important;
		}
	}
`;


export const AccountForm = styled.form`
	width: 60%;
	margin: 0 auto;
	padding: 2rem;
	gap: .6rem;

	button {
		width: 35%;
	}

	@media (max-width: 1200px) {
		width: 70%;
	}

	@media (max-width: 1024px) {
		width: 80%;
	}

	@media (max-width: 900px) {
		width: 90%;
		padding: 1.5rem;
	
		button {
			width: 40%;
		}

		label {
			font-size: 1.1rem !important;
		}
	}

	@media (max-width: 768px) {
		width: 75%;
	}

	@media (max-width: 600px) {
		width: 85%;
		padding: 1rem .5rem;
	}

	@media (max-width: 500px) {
		width: 95%;
	
		button {
			width: 100%;
		}
	}

	@media (max-width: 425px) {
		label {
			font-size: 1.25rem !important;
		}
	}

	@media (max-width: 375px) {
		width: 97%;
		padding: 1rem 0;
	}
`; 

export const AccountFormHeader = styled.h6`
	font-size: 1.23rem;
    font-weight: 400;
    margin-bottom: 0.8rem;

    @media (max-width: 900px) {
		font-size: 1.25rem;
	}

	@media (max-width: 425px) {
		font-size: 1.37rem;
		margin-bottom: 1.1rem;
	}
`;