import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLinkItem = styled(NavLink)`
    font-size: 1.05rem;
    text-transform: capitalize;
    color: var(--grey-tint-6);
    transition: all .3s ease;

    &:hover,
    &:focus  {
        color: var(--grey-tint-5);
    }

    &[aria-current="page"]  {
        color: var(--primary);
        font-weight: bold;
    }

    @media (max-width: 1200px) {
        font-size: 1.07rem;
    }

    @media (max-width: 900px) {
        font-size: 1.15rem;
    }

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }

    @media (max-width: 425px) {
        font-size: 1.28rem;
    }

    @media (max-width: 375px) {
        font-size: 1.3rem;
    }
`;