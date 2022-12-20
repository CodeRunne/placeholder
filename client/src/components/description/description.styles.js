import styled from 'styled-components';

export const DescriptionContainer = styled.section`
    height: auto;
    padding-top: 8rem;
    padding-bottom: 8rem;

    @media (max-width: 425px) {
        padding-top: 5rem;
    }

    @media (max-width: 320px) {
        padding-top: 3rem;
    }
`;

export const DescriptionHeader = styled.h2`
    margin-bottom: 2.5rem;

    @media (max-width: 600px) {
        margin-bottom: 1.8rem;
    }

    @media (max-width: 425px) {
        margin-bottom: 1.2rem;
    }

    @media (max-width: 320px) {
        font-size: 2rem !important;
    }

    @media (max-width: 300px) {
        font-size: 1.9rem !important;
        margin-bottom: 1rem;
    }
`;


export const DescriptionText = styled.p`
    width: 55%;
    text-align: center;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    @media (max-width: 1100px) {
        width: 65%;
    }

    @media (max-width: 900px) {
        width: 68%;
    }

    @media (max-width: 800px) {
        width: 75%;
    }

    @media (max-width: 425px) {
        width: 92%;
    }

    @media (max-width: 320px) {
        width: 97%;
    }
`;