import styled from 'styled-components';

export const NoMatchContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    gap: .2rem;
    user-select: none;

    button {
	    font-size: 1.1rem;
	    font-weight: 500;
	    margin-top: 0.4rem;
        
    }
    
    @media (max-width: 900px) {
        button {
            font-size: 1.25rem;
        }

        h1 {
            font-size: 4rem !important;
        }
    }

    @media (max-width: 600px) {
        width: 60%;
    }

    @media (max-width: 425px) {
        width: 80%;

        h1 {
            font-size: 4.1rem !important;
        }
    }

    @media (max-width: 375px) {
        width: 90%;
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 3.5rem !important;
        }
    }

    @media (max-width: 300px) {
        h1 {
            font-size: 3.3rem !important;
        }
    }
`;

export const NoMatchHighlighter = styled.p`
    font-size: 1.6rem;
    font-weight: 700;

    @media (max-width: 900px) {
        font-size: 1.7rem;
    }

    @media (max-width: 425px) {
        font-size: 1.8rem;
    }
`;

export const NoMatchSubHeader = styled.h5`
    font-size: 1.18rem;
    font-weight: 400;
    margin-top: .5rem;
    color: var(--grey-tint-5);

    @media (max-width: 900px) {
        font-size: 1.2rem;
        margin-top: .6rem;
    }

    @media (max-width: 425px) {
        font-size: 1.3rem;
        margin-top: .8rem;
    }

    @media (max-width: 320px) {
        font-size: 1.15rem;
        margin-top: 0.4rem;
    }

    @media (max-width: 300px) {
        font-size: 1.08rem;
    }
`;