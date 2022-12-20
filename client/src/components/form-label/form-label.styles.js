import styled from 'styled-components';

export const LabelElement = styled.label`
    font-size: 1.08rem;
    text-transform: capitalize;
    color: var(--grey-tint-6);

    @media (max-width: 1100px) {
        font-size: 1.06rem;
    }

    @media (max-width: 768px) {
        font-size: 1.12rem;
    }

    @media (max-width: 425px) {
        font-size: 1.16rem;
    }

    @media (max-width: 375px) {
        font-size: 1.2rem;
    }

    @media (max-width: 320px) {
        font-size: 1.19rem;
    }

    @media (max-width: 300px) {
        font-size: 1.22rem;
    }
`;