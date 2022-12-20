import styled from 'styled-components';

export const ModalContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0,0,0,0.03);
	backdrop-filter: blur(2px);

	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 1000;
`;

export const ModalContentContainer = styled.div`
	width: 45vw;
    height: 50vh;
    padding: 1.4rem 0;
    background: var(--white);
    border: 1px solid var(--grey-tint-2);
    border-radius: 0.4rem;
    box-shadow: 1px 1.2px 0.5rem rgb(0, 0, 0, 0.03);
    position: relative;
    
    span.close-button {
    	position: absolute;
	    top: 8%;
	    right: 1.5%;
	    transform: translate(-50%, -50%);
    
        &:hover,
        &:focus {
            cursor: pointer;
        }

	    svg { 
            font-size: 1.4rem; 
        }
        
        @media (max-width: 1200px) {
            top: 9%;
            right: 1%;

            svg {
                font-size: 1.45rem;
            } 
        }

        @media (max-width: 1100px) {
            top: 8.5%; 
        }

        @media (max-width: 900px) {
            right: 2%;

            svg {
                font-size: 1.6rem;
            } 
        }

        @media (max-width: 768px) {
            right: 3%;

            svg {
                font-size: 1.7rem;
            } 
        }

        @media (max-width: 500px) {
            top: 10%; 
        }
    }

    @media (max-width: 1200px) {
    	width: 55vw;
    	height: 65vh;
    }

    @media (max-width: 1100px) {
    	width: 58vw;
    	height: 70vh;
    }

    @media (max-width: 1024px) {
    	width: 64vw;
    	height: 72vh;
    }

    @media (max-width: 900px) {
    	width: 70vw;
    	height: 65vh;
    }

    @media (max-width: 800px) {
    	width: 75vw;
    }

    @media (max-width: 600px) {
    	width: 90vw;
    }

    @media (max-width: 500px) {
    	width: 95vw;
    	height: 60vh;
    }
`;
