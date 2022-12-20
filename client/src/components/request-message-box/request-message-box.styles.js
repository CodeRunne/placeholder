import styled from 'styled-components';

    // color: var(--grey-tint-7);
export const RequestMessageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1.2rem 1.4rem;
    
    border-radius: 0.3rem;
    position: relative;

    svg {
    	font-size: 1.3rem;
    	position: absolute;
    	top: 50%;
    	right: 3%;
    	transform: translate(-50%, -50%);
    	justify-self: flex-end;
    
    	&:hover {
    		cursor: pointer;
    	}
    }

    @media (max-width: 1200px) {
    	svg {
    		font-size: 1.35rem;
    	}
    }

    @media (max-width: 1100px) {
		padding: 1.25rem 1.45rem;
    }

    @media (max-width: 900px) {
        padding: 1.4rem 1.6rem;

		svg {
    		font-size: 1.4rem;
    	}
    }

    @media (max-width: 800px) {
    	padding: 1.4rem 1.6rem;

    	svg {
    		font-size: 1.45rem;
    	}
    }

    @media (max-width: 500px) {
        padding: 1.5rem 1.7rem;

    	svg {
    		font-size: 1.6rem;
    	}
    }

    @media (max-width: 425px) {
    	padding: 1.5rem 1.7rem;
    }

    @media (max-width: 375px) {
    	width: 100%;

    	svg {
    		font-size: 1.6rem;
    	}
    }

     @media (max-width: 320px) {
        padding: 1.3rem 1.5rem;

    	svg {
    		font-size: 1.45rem;
    	}
    }
`;

export const RequestMessageText = styled.p`
    width: 90%;
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;

    @media (max-width: 1200px) {
        font-size: 1.1rem;
    }

    @media (max-width: 900px) {
        font-size: 1.15rem;
    }

    @media (max-width: 800px) {
        font-size: 1.12rem;
    }

    @media (max-width: 768px) {
        font-size: 1.135rem;
    }

    @media (max-width: 500px) {
        font-size: 1.12rem;
    }

    @media (max-width: 425px) {
        font-size: 1.25rem;
    }

     @media (max-width: 320px) {
        font-size: 1.23rem;
    }
`;