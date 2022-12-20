import styled from 'styled-components';

export const ErrorText = styled.span`
    font-size: 1.02rem;
    margin-top: 0.4rem;
    margin-bottom: 0.7rem;
    color: var(--accent);

    @media (max-width: 1100px) {
        font-size: 1.04rem;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 425px) {
        font-size: 1.14rem;
    }

    @media (max-width: 375px) {
        font-size: 1.13rem;
    }

    @media (max-width: 300px) {
        font-size: 1.11rem;
    }
`;