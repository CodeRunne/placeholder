import styled from 'styled-components';

export const ProfileContainer = styled.div`
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;

	@media (max-width: 1200px) {
		grid-column-gap: .5rem;
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1.2rem;
	}

	@media (max-width: 375px) {
		grid-template-columns: 1fr;
	}
`;