import styled from 'styled-components';

export const ProfileInfoBoxItem = styled.div`
	padding: 1.2rem 1.5rem;
	border: 1.2px solid var(--grey-tint-1-61);
	background: var(--white);
	border-radius: .3rem;
	box-shadow: .8px 1px 0.3rem rgba(0,0,0,0.02);

	gap: 1.8rem;

	svg {
		font-size: 2.1rem;
	}

	@media (max-width: 1200px) {
		padding: 1rem 1.2rem;	
		gap: 1.5rem;

		svg {
			font-size: 2rem;
		}
	}

	@media (max-width: 900px) {
		padding: 2rem 1.5rem;
	    flex-direction: row !important;
	    align-items: center;
	    gap: 1.7rem;

	    svg {
	    	font-size: 2.4rem;
	    }
	}

	@media (max-width: 500px) {
		padding: 1.7rem 1.2rem;
	}

	@media (max-width: 425px) {
		gap: 1.3rem;
	    flex-direction: column !important;
	    align-items: flex-start;
	    padding: 1.7rem 1.8rem;

		svg {
			font-size: 2.1;
		}
	}

	@media (max-width: 375px) {
		flex-direction: row !important;
		gap: 2rem;
	}
`;

export const ProfileInfoContainer = styled.div`
	gap: .5rem;

	@media (max-width: 768px) {
		gap: .8rem;
	}

	@media (max-width: 500px) {
		gap: .7rem;
	}
`;

export const ProfileInfoBoxTitle = styled.h5`
	font-size: 1.45rem;
	color: var(--primary);
	text-transform: capitalize;

	@media (max-width: 1200px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1100px) {
		font-size: 1.55rem;
	}

	@media (max-width: 1024px) {
		font-size: 1.45rem;
	}

	@media (max-width: 900px) {
		font-size: 1.56rem;
	}

	@media (max-width: 800px) {
		font-size: 1.54rem;
	}

	@media (max-width: 768px) {
		font-size: 1.7rem;
	}

	@media (max-width: 500px) {
		font-size: 1.53rem;
	}

	@media (max-width: 425px) {
		font-size: 1.67rem;
	}

	@media (max-width: 375px) {
		font-size: 1.75rem;
	}

	@media (max-width: 300px) {
		font-size: 1.7rem;
	}
`;

export const ProfileInfoContent = styled.p`
	font-size: .99rem;
    color: var(--grey-tint-6);
    text-transform: capitalize;

    @media (max-width: 1200px) {
		font-size: 1.08rem;
	}

	@media (max-width: 1100px) {
		font-size: 1.12rem;
	}

	@media (max-width: 1024px) {
		font-size: 1.07rem;
	}

	@media (max-width: 900px) {
		font-size: 1.15rem;
	}

	@media (max-width: 800px) {
		font-size: 1.16rem;
	}

	@media (max-width: 768px) {
		font-size: 1.17rem;
	}

	@media (max-width: 500px) {
		font-size: 1.09rem;
	}

	@media (max-width: 425px) {
		font-size: 1.2rem;
	}

	@media (max-width: 375px) {
		font-size: 1.17rem;
	}

	@media (max-width: 300px) {
		font-size: 1.16rem;
	}
`;