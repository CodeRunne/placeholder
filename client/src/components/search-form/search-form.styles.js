import styled from 'styled-components';

export const SearchFormContainer = styled.form`
	position: relative;

	input {
		padding-right: 4rem;
	}

	svg {
		font-size: 1.3rem;
	    color: var(--grey-tint-5);
	    position: absolute;
	    top: 50%;
	    right: 2%;
		transform: translate(-50%, -50%);

		@media (max-width: 1200px) {
			font-size: 1.5rem;
			right: 1%;
		}

		@media (max-width: 900px) {
			font-size: 1.6rem;
		}

		@media (max-width: 425px) {
			font-size: 1.8rem;
		}
	}	
`;