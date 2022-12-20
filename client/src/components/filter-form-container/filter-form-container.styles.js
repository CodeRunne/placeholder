import styled from 'styled-components';

export const FilterForm = styled.div`
	grid-template-columns: min-content repeat(3, 1fr) 30rem;
	grid-row-gap: 1rem;
	padding: 0 .5rem;

	.search__form {
		grid-column: 4/-1;

		@media (max-width: 768px) {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 768px) {
		.filter__button {
			grid-column: 2/-1;
    		grid-row: 2;
		}
	}

	@media (max-width: 375px) {
		padding: 0 1rem;
	}

	@media (max-width: 320px) {
		grid-template-columns: repeat(2,1fr);

		.filter__button {
			grid-column: 1/-1;
    	}
	}

	@media (max-width: 300px) {
		padding: 0 .5rem;
	}
`;