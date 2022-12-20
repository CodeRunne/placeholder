import styled from 'styled-components';

export const FilterForm = styled.form`
	position: relative;

	& button {
		color: var(--grey-tint-7) !important;
	    border-radius: 0.4rem;
	    background: var(--white) !important;
	    border: 1px solid var(--grey-tint-2);
	    box-shadow: 0.1px 0.2px 0.6rem rgb(0 0 0 / 2%);
	    padding: 0.7rem 0.8rem;

	    @media (max-width: 600px) {
	    	padding: .9rem; .8rem;
	    }
	} 

	& .filter {
		font-size: 1.4rem;
    	margin-right: 0.6rem;
	}

	& .arrow-down {
		font-size: 1.6rem;
    	margin-left: 2rem;
	}

	@media (max-width: 1200px) {
		font-size: 1.2rem;
	}
`;