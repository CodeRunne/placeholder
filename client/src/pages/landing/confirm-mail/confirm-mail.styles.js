import styled from 'styled-components';


export const ConfirmMailContainer = styled.div`
	width: 37vw;
	margin: 0 auto;
	margin-top: 6rem;	
	padding: 3rem 2.1rem;
	background: var(--white);
	box-shadow: .8px 1px .7rem rgba(0,0,0,0.02);
	border: 1px solid var(--grey-tint-1);
	border-radius: .2rem;

	@media (max-width: 1200px) {
		width: 43vw;
	}

	@media (max-width: 1024px) {
		width: 47vw;
	}

	@media (max-width: 900px) {
		width: 52vw;
	}

	@media (max-width: 800px) {
		width: 60vw;
	}

	@media (max-width: 600px) {
		width: 75vw;
	}

	@media (max-width: 500px) {
		width: 85vw;
	}

	@media (max-width: 425px) {
		width: 94vw;
		padding: 2.1rem 1.85rem;
	}

	@media (max-width: 375px) {
		padding: 2.1rem 1.6rem;
	}

	@media (max-width: 320px) {
		padding: 2.1rem 1.2rem;
	}
`;

export const ConfirmMailIcon = styled.div`
	width: 5rem;
    height: 4rem;
    border-radius: 0.6rem;
    margin: 0 auto;
    margin-bottom: 2.3rem;
    background: var(--primary-tint-1);

    svg {
    	font-size: 1.8rem;
    	color: var(--primary-tint-7);
    }

    @media (max-width: 900px) {
		width: 6rem;
		height: 5rem;

		svg {
			font-size: 2.3rem;
		}	
	}
`;

export const ConfirmMailHeadingText = styled.h5`
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 1rem;

	@media (max-width: 900px) {
		font-size: 1.65rem;
		margin-bottom: 1.2rem;
	}

	@media (max-width: 425px) {
		font-size: 1.75rem;
	}

	@media (max-width: 375px) {
		font-size: 1.8rem;
		text-align: inherit;
	}
`;

export const ConfirmMailSubHeader = styled.p`
	font-size: 1.12rem;
	text-align: center;
    color: var(--grey-tint-6);
    line-height: 1.6;

    @media (max-width: 900px) {
		font-size: 1.15rem;
		line-height: 1.6;
	}

	@media (max-width: 500px) {
		font-size: 1.13rem;
	}

	@media (max-width: 425px) {
		font-size: 1.16rem;
		line-height: 1.75;
	}

	@media (max-width: 375px) {
		font-size: 1.18rem;
		text-align: inherit;
	}
`;

// export const ConfirmMailActionContainer = styled.div`
// 	gap: 0.4rem;
//     margin-top: 2rem;

//     @media (max-width: 900px) {
// 		margin-top: 2.2rem;
// 	}

// 	@media (max-width: 425px) {
// 		margin-top: 2.4rem;
// 	}

// 	@media (max-width: 320px) {
// 		flex-direction: column;
// 	}
// `;