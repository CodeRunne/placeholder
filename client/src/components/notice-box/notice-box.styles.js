import styled from 'styled-components';

export const NoticeBoxContainer = styled.div`
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

	ul {
		list-style: circle !important;
		padding-left: 1.5rem;

		li {
			font-size: 1.098rem;
			line-height: 1.5;

			&:not(:last-of-type) {
				margin-bottom: .7rem;
			}

			@media (max-width: 1200px) {
				font-size: 1.1rem;
			}

			@media (max-width: 900px) {
				font-size: 1.2rem;
			}

			@media (max-width: 425px) {
				font-size: 1.23rem;
			}
		}
	}

	@media (max-width: 500px) {
		padding-inline-start: 1.3rem;
		padding-inline-end: 1.3rem;
	}

	@media (max-width: 375px) {
		padding-inline-start: 1.1rem;
		padding-inline-end: 1.1rem;
	}

	@media (max-width: 300px) {
		padding-inline-start: .9rem;
		padding-inline-end: .9rem;
	}
`;

export const NoticeBoxHeader = styled.h6`
	text-align: center;
	margin-bottom: 2rem;

	span {
		color: var(--accent);
	}

	@media (max-width: 900px) {
		font-size: 1.4rem !important;
	}

	@media (max-width: 425px) {
		font-size: 1.6rem !important;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 375px) {
		font-size: 1.55rem !important;
		margin-bottom: 1.3rem;
	}
`;