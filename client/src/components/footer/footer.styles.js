import styled from 'styled-components';

export const FooterContainer = styled.footer`
	font-size: 1.09rem;
    line-height: 1.5;
    text-transform: capitalize;
    background: var(--white);
    color: var(--grey-tint-7);
	padding: 1.5rem;

    @media (max-width: 1200px) {
        font-size: 1.15rem;
        padding: 2rem;
    }

    @media (max-width: 375px) {
        font-size: 1.13rem;
    }

    @media (max-width: 320px) {
        font-size: 1.14rem;
        text-align: center;
    }
`;