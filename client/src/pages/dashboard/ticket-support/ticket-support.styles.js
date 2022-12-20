import styled from 'styled-components';


export const TicketSupportForm = styled.form`
	width: 40%;
	margin: 0 auto;
	gap: .6rem;

	h5 {
		margin-bottom: .9rem;
		text-align: center;
	}

	@media (max-width: 1200px) {
		width: 50%;
		gap: .8rem;
	}

	@media (max-width: 1100px) {
		width: 55%;
		margin-top: 1rem;
	}

	@media (max-width: 900px) {
		width: 65%;
	}

	@media (max-width: 800px) {
		width: 70%;
	}

	@media (max-width: 768px) {
		width: 55%;
	}

	@media (max-width: 600px) {
		width: 70%;
	}

	@media (max-width: 500px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 85%;
	}

	@media (max-width: 375px) {
		width: 90%;
	}

	@media (max-width: 320px) {
		width: 95%;
	}
`;