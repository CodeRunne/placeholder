import styled from 'styled-components';

export const NotificationContainer = styled.div`
	width: 26%;
    padding: 1.2rem 1.4rem;

    position: fixed;
    top: 16%;
    right: 1.2%;
    transform: translateY(-50%);
    background: var(--white);
    border: 1px solid var(--grey-tint-1-61);
    border-radius: 0.25rem;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.03);
    z-index: 1500;
    line-height: 0;

    @media (max-width: 1200px) {
        width: 36%;
        top: 3.7%;
        right: 1.5%;
    }

    @media (max-width: 1100px) {
        width: 40%;
        top: 4%;
    }

    @media (max-width: 1024px) {
        width: 45%;
        top: 4.5%;
        right: 2.5%;
    }

    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 55%;
    }

    @media (max-width: 768px) {
        width: 45%;
    }

    @media (max-width: 600px) {
        width: 50%;
    }
`;

export const NotificationIcon = styled.span`
	svg {
        font-size: 1.7rem;

        &.success { color: var(--green-tint-3); }
        &.failed { color: var(--accent); }
    }

    @media (max-width: 1100px) {
        font-size: 1.75rem; 
    }
`;

export const NotificationText = styled.p`
	width: 76%;
	font-size: 1.06rem;
	line-height: 1.5;
    word-break: break-all;
    color: var(--grey-tint-7);
    padding-left: .4rem;

    @media (max-width: 1100px) {
        font-size: 1.1rem; 
    }

    @media (max-width: 900px) {
        font-size: 1.13rem;
    }

    @media (max-width: 800px) {
        font-size: 1.16rem;
    } 

    @media (max-width: 600px) {
        font-size: 1.17rem;
    }
`;

export const NotificationCloseButton = styled.span`
	font-size: 1.2rem;
	color: var(--grey-tint-7);

	&:hover,
	&:focus {
		cursor: pointer;
	}

    @media (max-width: 1100px) {
        font-size: 1.4rem; 
    }
`;