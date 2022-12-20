import styled from 'styled-components';

export const ButtonElement = styled.button`
    width: max-content;
    border: 0;
    font-family: inherit;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    padding: 1rem 0.2rem;
    
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 0.3rem;

    transition: all .4s ease; 
    position: relative;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1.8px solid var(--dark);
        transform: translateY(-50%);
        opacity: 0;
        border-radius: inherit;
        z-index: -3;
        transition: opacity .5s ease;
    } 

    &[aria-disabled="true"],
    &[disabled="true"] {
        opacity: .7;
        pointer-events: none;
        cursor: not-allowed;
    }

    svg {
        font-size: 1.23rem;
    }

    &:hover,
    &:focus {
        outline: 0;
        cursor: pointer;
    }

    &:focus::before {
        opacity: 1;
    }

    @media (max-width: 1024px) {
        font-size: 1.18rem;
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 425px) {
        font-size: 1.34rem;
    }

    @media (max-width: 375px) {
        font-size: 1.37rem;
    }
`;