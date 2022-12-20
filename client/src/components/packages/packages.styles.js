import styled from 'styled-components';

export const PackagesContainer = styled.section`
	padding: 4.5rem 1rem;
	background: linear-gradient(to top right, var(--primary-tint-7), var(--primary));

	h4 {
		margin-bottom: 3.5rem;
    	margin-left: 4.5rem;
    	text-transform: uppercase;
    	color: var(--white);

    	@media (max-width: 1200px) {
    		margin-left: 3rem;
    	}

    	@media (max-width: 375px) {
    		margin-left: 0;
    		text-align: center;
    	}
	}
`;

export const PackagesCollections = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));

	@media (max-width: 1024px) {
		grid-row-gap: 1rem;
	}

	@media (max-width: 800px) {
		justify-items: start;
		padding-left: 2.5rem;
	}

	@media (max-width: 425px) {
		grid-row-gap: 2rem;
	}

	@media (max-width: 320px) {
		padding-left: 1.5rem;
	}
`;