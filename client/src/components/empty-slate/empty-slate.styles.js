import styled from 'styled-components';

export const EmptyPageContainer = styled.div`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 12rem;
        border-radius: 0.15rem;
        padding: 0.8rem;
    }

    @media (max-width: 1200px) {
        margin-top: 5rem;

        button {
            width: 14rem;
            padding: 1rem;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 900px) {
        button {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 500px) {
        button {
            font-size: 1.24rem;
        }
    }

    @media (max-width: 425px) {
        button {
            font-size: 1.3rem;
        }
    }
`;

export const EmptyPageImage = styled.img`
    width: 25%;

    @media (max-width: 900px) {
        width: 45%;
    }

    @media (max-width: 500px) {
        width: 60%;
    }

    @media (max-width: 425px) {
        width: 65%;
    }    
`;

export const EmptyPageHeader = styled.h4`
    font-size: 1.7rem;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;

    @media (max-width: 1200px) {
        font-size: 1.8rem;
        margin-top: 1.25rem;
        margin-bottom: 0.8rem; 
    }

    @media (max-width: 900px) {
        font-size: 1.9rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 500px) {
        font-size: 1.85rem;
        margin-bottom: 1.03rem;
    }

    @media (max-width: 425px) {
        font-size: 2rem;
    }

    @media (max-width: 375px) {
        font-size: 1.8rem;
    }
`;

export const EmptyPageInfo = styled.p`
    font-size: 1.04rem;
    color: var(--grey-tint-7);
    margin-bottom: 1.6rem;

    @media (max-width: 1200px) {
        font-size: 1.08rem;
    }

    @media (max-width: 900px) {
        font-size: 1.17rem;
    }

    @media (max-width: 500px) {
        font-size: 1.18rem;
        margin-bottom: 1.2rem;
    }

    @media (max-width: 425px) {
        font-size: 1.27rem;
        margin-bottom: 1.4rem;
    }
`;