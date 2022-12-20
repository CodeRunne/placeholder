import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
    width: 100%;
    padding: 1.3rem 1.8rem;
    background: var(--white);
    box-shadow: 0 1.3px .5rem rgba(0,0,0,0.03);
    border-bottom: 1px solid var(--grey-tint-1);
    position: relative;

    @media (min-width: 786px) {
        .hamburger {
            display: none;
        }
    }

    @media (min-width: 600px) {
        padding: 1rem 1.7rem;
    }
`;


export const NavigationWrapper = styled.div`
    width: 95%;

    @media (max-width: 900px) {
        width: 97%;
    }

    @media (max-width: 768px) {
        width: 96%;
    }

    @media (max-width: 375px) {
        width: 98%;
    }
`;

export const NavigationLogo = styled(Link)`
    font-size: 1.7rem;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 1200px) {
        font-size: 1.8rem;
    }

    @media (max-width: 900px) {
        font-size: 1.82rem;
    }
`;

export const NavigationRight = styled.div`
    gap: 3rem;

    @media (max-width: 1100px) {
        gap: 2rem;
    }

    @media (max-width: 768px) {
        gap: 1.5rem;
    }

    @media (max-width: 600px) {
        .action-button {
            display: none;
        } 
    }
`;

export const NavigationLinkItem = styled.ul`
    gap: 1.8rem;

    @media (max-width: 900px) {
        gap: 1.5rem;
    }

    @media (max-width: 768px) {
        display: none !important;
    }
`;