import styled from 'styled-components';

export const DashboardContainer = styled.main`
	height: 100vh;

    display: grid;
    grid-template-rows: 1fr;
`;

export const DashboardMainContainer = styled.main`
    width: calc(100% - 263.984px);
    margin-left: 263.984px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
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