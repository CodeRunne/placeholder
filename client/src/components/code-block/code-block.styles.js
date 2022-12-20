import styled from 'styled-components';

export const CodeBlockHeader = styled.h6`
	font-size: 1.13rem;
    font-weight: 400;
    margin-bottom: 0.7rem;

    @media (max-width: 900px) {
    	font-size: 1.21rem;
    	margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
    	font-size: 1.215rem;
    }

    @media (max-width: 425px) {
    	font-size: 1.3rem;
    }

    @media (max-width: 375px) {
    	font-size: 1.35rem;
    }
`;

export const CodeBlockPre = styled.pre`
	background: var(--code-block-bg);
	color: var(--white);
	border-radius: .2rem;
	padding: 1.2rem 1.4rem;

	span {
		font-size: 1rem;
		line-height: 1.6;
		
		&.nl {
			display: block;
		}

		&.pl {
			margin-left: 1.5rem;
		}

		&.pr {
			margin-right: .5rem;
		}

		@media (max-width: 900px) {
			font-size: 1.03rem;
		}

		@media (max-width: 425px) {
			font-size: 1.05rem;
		}

		@media (max-width: 375px) {
	    	font-size: 1.1rem;
	    }
	}

`;