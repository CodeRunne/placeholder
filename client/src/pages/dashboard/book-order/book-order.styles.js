import styled, { css } from 'styled-components';

const NewOrderDescriptionText = css`
	font-size: 1.06rem;

	@media (max-width: 1100px) {
    	font-size: 1.04rem;
    }

    @media (max-width: 900px) {
    	font-size: 1.08rem;
    }

    @media (max-width: 425px) {
    	font-size: 1.15rem;
    }

    @media (max-width: 300px) {
    	font-size: 1.2rem;
    	line-height: 1.2;
    }
`;

export const NewOrderContainer = styled.main`
	grid-template-columns: 1fr 56% 40%;
	grid-row-gap: 1.6rem;
	grid-column-gap: 2.2rem;

	@media (max-width: 1100px) {
		grid-template-columns: 50% 46%;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		padding: 0 1.5rem;
	}

	@media (max-width: 800px) {
		padding: 0 1rem;
	}

	@media (max-width: 425px) {
		padding: 0;
	}
`;

export const NewOrderFormContainer = styled.form`
	grid-column: 1/3;
	gap: 1.4rem;

	@media (max-width: 1100px) {
		grid-column: 1/2;
	}

	@media (max-width: 900px) {
		grid-column: 1/-1;
	}
`;

export const NewOrderDescriptionContainer = styled.div`
	grid-column: 3/-1;
	padding: 1.6rem 1.8rem;
	border-radius: .3rem;
	background: var(--grey-tint-1-61);
	color: var(--grey-tint-8);

	@media (max-width: 1100px) {
		grid-column: 2/-1;
	}

	@media (max-width: 900px) {
		grid-column: 1/-1;
	}

	@media (max-width: 320px) {
		padding: 1.6rem 1.2rem;
	}
`;

export const NewOrderDescriptionHeader = styled.h5`
	font-size: 1.1rem;
	font-weight: 500;
`; 

export const NewOrderDescriptionContentContainer = styled.div`
	gap: 1.5rem;
	margin-top: 1rem;
`;

export const NewOrderDescriptionContentItem = styled.ul`
	${NewOrderDescriptionText}
	gap: 0.2rem;
	margin: 2rem 0;
    color: var(--primary);

	@media (max-width: 900px) {
		gap: .4rem;
	}    

	@media (max-width: 425px) {
		gap: .6rem;
	}
`;

export const NewOrderDescriptionTitle = styled.p`
	${NewOrderDescriptionText}
	line-height: 1.5;
	margin: 1.5rem 0;
`;