import styled from 'styled-components';

export const ApiOptionContainer = styled.div`
	margin: 3.5rem 0;

	div {
		margin-top: 1rem !important;
	}

	@media (max-width: 900px) {
		.table-wrapper {
			overflow: hidden !important;
		}

		table {
			width: 100% !important;
		}

		thead th {
			font-size: 1.12rem !important;
		}

		tbody td {
			font-size: 1.13rem !important;
		}

		th, td {
			padding: 1.2rem !important;
		}
	}

	@media (max-width: 425px) {
		thead th {
			font-size: 1.16rem !important;
		}

		tbody td {
			font-size: 1.14rem !important;
		}

		th, td {
			padding: 1.3rem !important;
		}
	}

	@media (max-width: 375px) {
		thead th {
			font-size: 1.18rem !important;
		}

		tbody td {
			font-size: 1.15rem !important;
		}

		th, td {
			padding: 1.4rem !important;
		}
	}
`;

export const ApiOptionHeader = styled.h5`
	font-weight: 500;
	text-transform: capitalize;
	color: var(--grey-tint-7);

	@media (max-width: 900px) {
		font-size: 1.7rem !important;
	}
`;