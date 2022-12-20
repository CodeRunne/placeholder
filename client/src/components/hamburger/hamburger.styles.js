import styled from 'styled-components';

export const HamburgerButton = styled.span`
	svg {
		font-size: 1.8rem;
		color: var(--grey);

		&:hover,
		&:focus {
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		svg {
			font-size: 1.9rem;
		}
	}

	@media (max-width: 600px) {
		svg {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 425px) {
		svg {
			font-size: 1.6rem;
		}
	}
`;