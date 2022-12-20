import styled from 'styled-components';


export const MobileNavigationContainer = styled.nav`
    padding: inherit;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    box-shadow: 0 2px .4rem rgba(0,0,0,0.06);
    border-top: .5px solid var(--grey-tint-1);
    z-index: 1000;

    @media (max-width: 375px) {
    	padding: 2rem 2.5rem;
    }

    @media (max-width: 320px) {
        padding: 2rem 2.5rem;
    }
`;

export const MobileNavigationWrapper = styled.div`
	width: 94%;

    @media (max-width: 375px) {
        width: 98%;
    }
    
    @media (min-width: 700px) {
    	button {
    		display: none;
    	}
    }

    @media (max-width: 600px) {
        button {
            margin-top: 2rem;
        }
    }
`;

export const MobileNavigationListItem = styled.ul`
	gap: 1.2rem;
	margin-bottom: .5rem;
`;