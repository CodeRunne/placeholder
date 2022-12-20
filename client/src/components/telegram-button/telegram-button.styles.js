import styled from 'styled-components';

export const TelegramButtonBox = styled.div`
	position: fixed;
	bottom: 5%;
	right: 3%;
	z-index: 500;

	@media (max-width: 1024px) {
		bottom: 6%;
		right: 5%;
	}

	@media (max-width: 320px) {
		bottom: 4%;
	}
`;

export const TelegramButtonLink = styled.a`
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 50%;
	background: crimson;

	overflow: hidden;

	svg {
		font-size: 2rem;
    	color: var(--white);

    	@media (max-width: 1200px) {
    		font-size: 2.4rem;
    	}
	}

	@media (max-width: 425px) {
		width: 5rem;
		height: 5rem;
	}

	@media (max-width: 320px) {
		width: 4.6rem;
		height: 4.6rem;
	}
`;