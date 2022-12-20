import styled from 'styled-components';


export const HowToUseContainer = styled.div`
	width: max-content;
	margin: 4rem auto;
    background: var(--white);
    box-shadow: .4px .5px .6rem rgba(0,0,0,0.04);
    border-radius: 0.3rem;
    padding: 2rem 2.5rem;

    @media (max-width: 1100px) {
        border-radius: .5rem;
        padding: 2.5rem 3rem;
    }

    @media (max-width: 500px) {
        padding: 1.5rem;
    }

    @media (max-width: 425px) {
        width: 96%;
        box-shadow: none;
    }
`;

export const HowToUseHeaderHeaderText = styled.h4`
	font-size: 1.5rem;
    margin-bottom: .8rem;

    @media (max-width: 1100px) {
        font-size: 1.6rem;        
    }

    @media (max-width: 600px) {
        font-size: 1.4rem;        
    }

    @media (max-width: 500px) {
        font-size: 1.35rem;
        margin-bottom: .5rem;
    }

    @media (max-width: 425px) {
        line-height: 1.3;
    }
`;

export const HowToUseHeaderParagraph = styled.p`
	font-size: 1.1rem;

    @media (max-width: 1100px) {
        font-size: 1.15rem;        
    }

    @media (max-width: 600px) {
        font-size: 1.13rem;        
    }

    @media (max-width: 425px) {
        font-size: 1.17rem;
    }

    @media (max-width: 320px) {
        font-size: 1.152rem;
    }
`;

export const HowToUseHeaderListItems = styled.ol`
	margin: 2.5rem 1.5rem;
    font-size: 1.02rem;
    gap: 0.5rem;
    font-weight: 700;
    color: var(--accent-tint-6);

    @media (max-width: 1100px) {
        font-size: 1.06rem;
        gap: .6rem;        
    }

    @media (max-width: 900px) {
        font-size: 1.13rem;
    } 

    @media (max-width: 600px) {
        font-size: 1.1rem;        
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;