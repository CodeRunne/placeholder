import styled from 'styled-components';


export const ServicesBoxContainer = styled.blockquote`
    background: var(--white);
    border: 1px solid var(--grey-tint-1);
    border-radius: 0.4rem;
    padding: 2.5rem 2rem;
	box-shadow: .1px .15px .8rem rgba(0,0,0,0.02);

	@media (max-width: 600px) {
		padding: 2.7rem 2.2rem;
	}

	@media (max-width: 425px) {
		padding: 1.4rem 1.2rem;
	}

	@media (max-width: 375px) {
		padding: 1.6rem 1.4rem;
	}

	@media (max-width: 320px) {
		padding: 2.4rem 1.9rem;
	}
`;

export const ServicesBoxIconWrapper = styled.div`
	padding: 1rem 2rem;
	margin-bottom: 1.2rem;
	background: var(--primary-tint-2);
	border-radius: .4rem;

	svg {
		font-size: 4.3rem;
		color: var(--primary);

		@media(max-width: 800px) {
			font-size: 4.6rem;
		}

		@media (max-width: 600px) {
			font-size: 5rem;
		}
	}
`;

export const ServicesBoxHeader = styled.h5`
	font-size: 1.02rem;
	margin-bottom: 0.8rem;

	@media(max-width: 1200px) {
		font-size: 1.07rem;
	}

	@media(max-width: 900px) {
		font-size: 1.09rem;
	}

	@media(max-width: 800px) {
		font-size: 1.12rem;
		margin-bottom: 0.6rem;
	}

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}

	@media (max-width: 375px) {
		margin-bottom: .8rem;
		font-size: 1.22rem;
	}

	@media (max-width: 300px) {
		font-size: 1.23rem;
	}
`;

export const ServicesBoxParagraph = styled.p`
	line-height: 1.5;
	font-size: 1rem;

	@media(max-width: 1200px) {
		font-size: 1.03rem;
	}

	@media(max-width: 900px) {
		font-size: 1.06rem;
	}

	@media(max-width: 800px) {
		font-size: 1.08rem;
	}

	@media (max-width: 600px) {
		font-size: 1.12rem;
	}

	@media (max-width: 375px) {
		font-size: 1.15rem;
	}

	@media (max-width: 300px) {
		font-size: 1.16rem;
	}
`;