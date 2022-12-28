import styled, { css } from 'styled-components';

export const InputStyles = css`
    width: 100%;
    padding: 1rem .9rem;
    letter-spacing: .35px;
    box-shadow: 0.1px 0.4px 0.7rem rgb(0, 0, 0, 0.03);
    font-size: 1.18rem;

    @media (max-width: 900px) {
        height: 3.9rem;
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

    &::placeholder {
        font-size: 1.08rem;
        color: inherit;
        font-family: inherit;

        @media (max-width: 900px) {
            font-size: 1.13rem;
        }

        @media (max-width: 768px) {
            font-size: 1.17rem;
        }

        @media (max-width: 425px) {
            font-size: 1.3rem;
        }
    }
 
    &[aria-invalid="true"],
    &[aria-invalid="true"]:focus {
        outline-color: var(--accent);
        border-color: var(--accent);
        box-shadow: 0 0 1px var(--accent);
    }

    &:focus { 
        outline: 1.5px solid var(--primary-tint-5);
        border-color: var(--grey-tint-2);
        box-shadow: 0 0 1px var(--primary-tint-5); 
    }

    &:hover {
        border-color: var(--grey-tint-2);
    }

    &[aria-invalid="true"]:hover {
        border-color: var(--accent-tint-5);
    }
`;

export const InputCommonStyles = css`
    border: 1px solid var(--grey-tint-3);
    background: var(--white-tint-7);
    color: var(--grey-tint-6);
    border-radius: .25rem;
    transition: all .3s ease;
`;

export const FormGroup = styled.div`
    width: 100%;
    gap: .4rem;
    position: relative;

    @media (max-width: 1200px) {
        gap: .5rem;
    } 

    @media (max-width: 320px) {
        gap: .6rem;
    } 
`;

export const FormInputField = styled.input`
    ${InputStyles}

    &[aria-disabled="true"],
    &[disabled] {
        cursor: not-allowed;
    }
    
    &,
    &[type="checkbox"] {
        ${InputCommonStyles}
    }

    &::-webkit-inner-spin-button {
        display: none;
    }

    &[type="checkbox"] {
        width: 1.2rem;
        height: 1.2rem;

        @media (max-width: 768px) {
            width: 1.35rem;
            height: 1.35rem;
        }

        @media (max-width: 375px) {
            width: 1.34rem;
            height: 1.34rem;
        }
        
        &:hover,
        &:focus {
            cursor: pointer;
        }
    }

    &[type="search"]::-webkit-search-cancel-button {
        appearance: none;
        -webkit-appearance: none;
        display: none;
    }
`;

export const FormTextarea = styled.textarea`
    height: 14rem;
    resize: none;
    ${InputStyles};
    ${InputCommonStyles};

    @media (max-width: 1100px) {
        height: 16rem;
    }
`;

export const FormInputInfo = styled.span`
    font-size: .99rem;
    text-transform: capitalize;
    color: var(--grey-tint-6);

    @media (max-width: 900px) {
        font-size: 1.06rem;
    }

    @media (max-width: 425px) {
        font-size: 1.14rem;
    }

    @media (max-width: 300px) {
        font-size: 1.16rem;
    }

`;