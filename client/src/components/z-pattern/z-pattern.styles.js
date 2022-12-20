import styled from 'styled-components';

export const ZPatternContainer = styled.section`
	padding: 5rem 1.5rem;
    grid-template-columns: 30rem 1fr;
    gap: 7rem;

    @media (max-width: 1200px) {
    	gap: 5rem;
    }

    @media (max-width: 1100px) {
    	gap: 3rem;
    }

    @media (max-width: 800px) {
    	grid-template-columns: 27rem 1fr;
    }

    @media (max-width: 768px) {
    	gap: 2rem;
    }

    @media (max-width: 600px) {
    	grid-template-columns: 1fr;
    }

    @media (max-width: 375px) {
        padding: 3rem 1.5rem;
    }

    @media (max-width: 320px) {
        padding: 2rem 1rem;
    }
`;

export const ZPatternImage = styled.img`
	width: 100%;
	height: 80%;
	object-fit: cover;

	@media (max-width: 600px) {
    	order: 2;
    }
`;

export const ZPatternContent = styled.div`
	gap: 1.5rem;

	@media (max-width: 600px) {
    	order: 1;
    }

    @media (max-width: 320px) {
        h4 {
            font-size: 2.2rem !important;
        }
    }

    @media (max-width: 320px) {
        gap: 1rem;
    }
`;