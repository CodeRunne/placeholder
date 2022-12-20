import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PackageCardContainer = styled.figure`
	padding: .8rem 2.3rem;
	gap: .7rem;
	border-radius: .35rem;
	position: relative;
	color: var(--white);
	transition: background .4s ease;

	@media (max-width: 1200px) {
		padding: 1rem 2.5rem;
	}

	@media (max-width: 800px) {
		gap: 1rem;
	}

	@media (max-width: 425px) {
		font-size: 1.8rem;
		padding: 1rem 3rem;
	}

	@media (max-width: 320px) {
		gap: 1.4rem;
	}

	svg {
		font-size: 2.5rem;
		transition: color .35s ease-in-out;

		@media (max-width: 1200px) {
			font-size: 2.7rem;
		}

		@media (max-width: 800px) {
			font-size: 2.9rem;
		}

		@media (max-width: 425px) {
			font-size: 3.2rem;
		}

		@media (max-width: 375px) {
			font-size: 3.4rem;
		}

		@media (max-width: 320px) {
			font-size: 3.5rem;
		}
	}

	&:before {
		content: '';
	    position: absolute;
	    top: 50%;
	    left: 7%;
	    transform: translate(-50%, -50%);
	    width: 0.2rem;
	    height: 75%;
	    background: var(--white-tint-8);
	    border-radius: 0.1rem;
	    transition: background .5s ease-in-out;

	    @media (max-width: 425px) {
			width: .22rem;
			left: 4%;
		}
	}

	&:hover {
		cursor: pointer;
		background: var(--white-tint-9);
	}

	&:hover {
		& svg {
			color: var(--primary);
		}

		& a {
			color: var(--grey-tint-6);
		}

		&:before {
			background: linear-gradient(to top right, var(--primary-tint-7), var(--primary));
		}
	}
`;

export const PackageCardLink = styled(Link)`
	text-transform: capitalize;
	font-size: 1.2rem;
	user-select: none;
	color: inherit;
	transition: color .2s ease;

	@media (max-width: 1200px) {
		font-size: 1.25rem;
	}

	@media (max-width: 1024px) {
		font-size: 1.3rem;
	}

	@media (max-width: 800px) {
		font-size: 1.4rem;
	}

	@media (max-width: 425px) {
		font-size: 1.6rem;
	}

	@media (max-width: 375px) {
		font-size: 1.5rem;
	}

	@media (max-width: 320px) {
		gap: 1.75rem;
	}
`;