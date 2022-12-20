import styled from 'styled-components';

export const FundsDisplayButtonWrapper = styled.div`
	button {
		width: 6rem;
    	padding: 0.45rem 0.3rem;
	    background: linear-gradient(to top right,var(--primary-tint-2),var(--primary-tint-3)) !important;
	    border: 1px solid var(--primary-tint-3);
	    color: var(--grey-tint-7) !important;
	    gap: 0.25rem;
	    border-radius: 0.2rem;
	    font-size: 1.1rem;
	
		& svg {
			font-size: 1.3rem;
    		margin-top: 0.1rem;
		}

		@media (max-width: 1200px) {
			font-size: 1.3rem;
			padding: .3rem .3rem;

			svg {
				font-size: 1.35rem;
				margin-top: .2rem;
			}
		}

		@media (max-width: 900px) {
			width: 6.5rem;
			padding: 0.45rem 0.4rem;
    		font-size: 1.4rem;

			svg {
				font-size: 1.45rem;
    			margin-top: .2rem;
			}

			@media (max-width: 600px) {
				padding: 0.3rem 0.2rem;

				svg {
					font-size: 1.35rem;
					margin-top: .1rem;
				}
			}
		}

		@media (max-width: 375px) {
			display: none;
		}
	}
`;