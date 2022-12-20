import styled from 'styled-components';

export const AlertContainer = styled.blockquote`
	width: 100%;
	height: 5.5rem;
	padding: 1rem 1.2rem;
    background: var(--tertiary-tint-1);
    gap: .5rem;

    position: relative;

	& button {
		position: absolute;
	    top: 50%;
	    right: 3%;
	    transform: translate(-50%, -50%);

	    font-size: 1.6rem;	
		
		@media (max-width: 1200px) {
			font-size: 2rem;
			right: 2%;
		}

		@media (max-width: 1100px) {
			top: 17%;
			right: -1%;
		}
		
		@media (max-width: 600px) {
			right: 0;
			font-size: 1.4rem;
		}

		@media (max-width: 425px) {
			right: 1.5%;
		    font-size: 1.6rem;
		    top: 45%;
		}

		@media (max-width: 375px) {
			right: 50%;
		    font-size: 1.5rem;
		    top: 68%;
		}

		@media (max-width: 320px) {	
		    right: 25%;
		    font-size: 1.5rem;
		    top: 68%;
		}

		@media (max-width: 300px) {
			right: 1%;
		    font-size: 1.6rem;
		    top: 50%;
		}
	}

	@media (max-width: 1024px) {
		padding: 1rem 1.4rem;
	}
`;

export const AlertText = styled.p`
	font-size: 1.1rem;
    line-height: 1.5;

    @media (max-width: 1200px) {
		font-size: 1.13rem;
	}

	@media (max-width: 1100px) {
		font-size: 1.1rem;
	}
`;