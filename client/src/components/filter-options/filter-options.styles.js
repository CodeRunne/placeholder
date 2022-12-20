import styled from 'styled-components';

export const FilterOptionsContainer = styled.div`
	width: 25rem;
    height: 8rem;
	padding: 1.2rem 1rem;
    background: #222;
    box-shadow: 0.1px 0.4px 0.7rem rgb(0, 0, 0, 0.05);
    border-radius: 0.2rem;
    
    display: grid;
    grid-row-gap: 0.95rem;

	position: absolute;
    top: 105%;
    left: 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
    	width: .2rem;
    }

    &::-webkit-scrollbar-track {
    	background: transparent;
    }

    &::-webkit-scrollbar-thumb {
    	background: var(--white);
    }

    @media (max-width: 1200px) {
        width: 23rem;
    }

    @media (max-width: 900px) {
        padding: 1.3rem 1.5rem;
    }

    @media (max-width: 800px) {
        top: 120%;
    }

    @media (max-width: 425px) {
        width: 25rem;
    }
`;

export const FilterOptionsText = styled.p`
	color: yellowgreen;
    font-size: 1.03rem;
    text-transform: capitalize;
    text-align: justify;
    transition: background .3s ease;

    &:hover {
    	background: var(--grey-tint-1);
    }

    @media (max-width: 1200px) {
        font-size: 1.05rem;
    }

    @media (max-width: 900px) {
        font-size: 1.12rem;
    }

    @media (max-width: 600px) {
        font-size: 1.13rem;
    }

    @media (max-width: 425px) {
        font-size: 1.18rem;
    }
`;