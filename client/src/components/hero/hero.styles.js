import styled from 'styled-components';

export const HeroContainer = styled.section`
    position: relative;
    height: auto;

    display: flex;
    justify-content: center;
`;

export const HeroContent = styled.div`
    flex-basis: 70%;
    padding: 7rem 0;
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2.5rem;

    @media (max-width: 1024px) {
        flex-basis: 80%;
    }

    @media (max-width: 900px) {
        flex-basis: 90%;
    }

    @media (max-width: 768px) {
        flex-basis: 95%;
    }

    @media (max-width: 600px) {
        flex-basis: 98%;
    }

    @media (max-width: 425px) {
        flex-basis: 100%;
    }
`;

export const HeroDescription = styled.div`
    width: 80%;
    height: auto;
    text-align: center;
    position: relative;

    @media (max-width: 600px) {
        width: 90%;
    }

    @media (max-width: 425px) {
        width: 95%;
    }

    @media (max-width: 320px) {
        width: 98.5%;
    }
`;

export const HeroTitle = styled.h2`
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.16;
    margin-bottom: 2.3rem;
    letter-spacing: -.09rem;

    @media (max-width: 1024px) {
        font-size: 4.1rem;
    }

    @media (max-width: 800px) {
        font-size: 3.8rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 600px) {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 425px) {
        font-size: 2.9rem;
    }

    @media (max-width: 375px) {
        font-size: 2.55rem;
    }

    @media (max-width: 320px) {
        font-size: 2.3rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 300px) {
        font-size: 2.1rem;
    }
`;

export const HeroText = styled.p`
    font-size: 1.12rem;
    line-height: 1.7;
    color: var(--white-tint-9);

    @media (max-width: 1200px) {
        font-size: 1.17rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.19rem;
    }

    @media (max-width: 600px) {
        font-size: 1.17rem;
    }

    @media (max-width: 425px) {
        font-size: 1.23rem;
    }

    @media (max-width: 375px) {
        font-size: 1.2rem;
    }

    @media (max-width: 320px) {
        font-size: 1.15rem;
    }
`;