import styled from 'styled-components';


export const FormGroup = styled.div`
	width: 100%;
    gap: .4rem;
    position: relative;

    @media (max-width: 768px) {
        gap: .45rem;
    } 

    @media (max-width: 320px) {
        gap: .6rem;
    } 
`;

export const FormSelectField = styled.select`
	width: 100%;
    height: 3.25rem;
    padding: .4rem .9rem;
    letter-spacing: .35px;
    text-transform: capitalize;
    box-shadow: 0.1px 0.4px 0.7rem rgb(0, 0, 0, 0.03);
    font-size: 1.135rem;
    border: 1px solid var(--grey-tint-3);
    background: var(--white-tint-7);
    color: var(--grey-tint-6);
    border-radius: .25rem;
    transition: all .3s ease;
    cursor: pointer;

    @media (max-width: 900px) {
        height: 3.5rem;
        padding: 1rem 1.2rem;
        font-size: 1.2rem;
    }
    
    @media (max-width: 768px) {
        height: 3.6rem;
        font-size: 1.26rem;
    }

    @media (max-width: 425px) {
        height: 3.8rem;
        font-size: 1.3rem;
    }

    &[aria-invalid="true"],
    &[aria-invalid="true"]:focus {
        outline-color: var(--accent);
        border-color: var(--accent);
        box-shadow: 0 0 1px var(--accent);
    }

    &:focus { 
        outline: 1.5px solid var(--primary-tint-5);
        border: 1.5px solid var(--grey-tint-2);
        box-shadow: 0 0 1px var(--primary-tint-5); 
    }

    &:hover {
        border-color: var(--grey-tint-2);
    }

    &[aria-invalid="true"]:hover {
        border-color: var(--accent-tint-5);
    }
`;