import styled, { css } from 'styled-components';

const DescriptionTextStyles = css`
	font-size: 1.06rem;

	@media (max-width: 1100px) {
    	font-size: 1.04rem;
    }

    @media (max-width: 900px) {
    	font-size: 1.14rem;
    }

    @media (max-width: 600px) {
    	font-size: 1.18rem;
    }

    @media (max-width: 500px) {
    	font-size: 1.2rem;
    }

    @media (max-width: 425x) {
    	font-size: 1.3rem;
    }

    @media (max-width: 300px) {
    	font-size: 1.25rem;
    }
`;

export const DescriptionContainer = styled.div`
	width: 100%;	
	height: 100%;
	padding: .5rem 1.7rem;

	overflow-y: auto;

	&::-webkit-scrollbar {
    	width: .25rem;
    }

    &::-webkit-scrollbar-track {
    	background: transparent;
    }

    &::-webkit-scrollbar-thumb {
    	background: var(--grey-tint-6);
    }

    @media (max-width: 600px) {
    	padding: .5rem .5rem;
    }
`;

export const DescriptionHeaderText = styled.h3`
    width: 96%;
	font-size: 1.6rem;
    margin: 0 auto;
    line-height: 1.3;
    text-transform: uppercase;

    @media (max-width: 900px) {
    	font-size: 1.8rem;
    }

    @media (max-width: 600px) {
    	width: 94%;
	    line-height: 1.35;
	    margin: 0;
	    margin-left: 0.7rem;
    }

    @media (max-width: 500px) {
    	font-size: 1.75rem;
    }

    @media (max-width: 425px) {
    	font-size: 2rem;
    }

    @media (max-width: 375px) {
    	width: 100%;
    	font-size: 1.75rem;
    }

    @media (max-width: 320px) {
    	font-size: 1.55rem;
    }
`;

export const DescriptionContentContainer = styled.div`	
	margin-top: 2.2rem;
	padding: 0 .7rem;
	gap: 1.5rem;

	@media (max-width: 900px) {
    	gap: 1.7rem;
    }

    @media (max-width: 375px) {
    	margin-top: 1.8rem;
    }
`;

export const DescriptionContentItem = styled.ul`
	${DescriptionTextStyles}
	gap: 0.2rem;
    color: var(--primary);

	@media (max-width: 900px) {
		gap: .6rem;
	}    

	@media (max-width: 320px) {
		gap: .3rem;
		line-height: 1.6;
	}    
`;

export const DescriptionTitle = styled.p`
	${DescriptionTextStyles}
	line-height: 1.5;

	@media (max-width: 900px) {
    	line-height: 1.6;
    }
`;