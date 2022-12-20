import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardNavigationContainer = styled.nav`
	padding: 1.3rem 3rem;
	background: var(--white);
	border-bottom: 1px solid var(--grey-tint-1);

	@media (min-width: 786px) {
        .hamburger {
            display: none;
        }
    }

    @media (max-width: 375px) {
    	padding: 1rem 2.2rem;
    }
`;

export const DashboardNavigationLogo = styled(Link)`
	font-size: 1.5rem;
	font-weight: 700;
	text-transform: uppercase;
`;


export const DashboardNavigationRight = styled.div`
	gap: 1.2rem;

	& > button {
		font-size: 1.07rem;
	
		@media (max-width: 1024px) {
			font-size: 1.18rem;
		}

		@media (max-width: 425px) {
			font-size: 1.23rem;
		}

		@media (max-width: 320px) {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 600px) {
		gap: 1rem;
    }

    @media (max-width: 500px) {
		gap: .6rem;
    }

    @media (max-width: 425px) {
    	gap: 1rem;
    }
`;

export const DashboardNavigationAccountLink = styled(Link)`
	color: inherit;
`;