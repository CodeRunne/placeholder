import styled from 'styled-components';

export const DashboardContainer = styled.main`
	height: 100vh;

    display: grid;
    grid-template-columns: repeat(2,8rem) 4rem repeat(5,1fr) repeat(3,8rem);
    grid-template-rows: 1fr;

    @media (max-width: 1200px) {
    	grid-template-columns: repeat(2,8rem) 5rem repeat(5,1fr) repeat(3,8rem);
    }

    @media (max-width: 1024px) {
    	grid-template-columns: repeat(2,7rem) 6rem repeat(5,1fr) repeat(3,8rem);
    }

    @media (max-width: 900px) {
    	grid-template-columns: repeat(2,7rem) 7.5rem repeat(5,1fr) repeat(3,8rem);
    }

    @media (max-width: 800px) {
    	grid-template-columns: 5rem repeat(5,1fr) repeat(3,8rem);
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`;

export const DashboardMainContainer = styled.main`
    grid-column: 4/-1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;

    @media (max-width: 768px) {
        grid-column: 1/-1;
    }
`;
 
export const DashboardViewsContainer = styled.section`
    width: 100%;
    padding: 2.5rem 3rem;
    position: relative;

    @media (max-width: 1024px) {
        padding: 1.5rem;
    }

    @media (max-width: 600px) {
        padding: 2rem 2rem;
    }

    @media (max-width: 500px) {
        padding: 2rem 1.6rem;
    }

    @media (max-width: 425px) {
        padding: 1.8rem 1rem;
    }

    @media (max-width: 375px) {
        h5.heading-5 {
            font-size: 1.7rem !important;   
        }
    }

    @media (max-width: 320px) {
        h5.heading-5 {
            font-size: 1.5rem !important;   
        }
    }
`;