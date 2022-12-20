import styled from 'styled-components';

export const TableWrapper = styled.div`
	width: 100%;
    overflow-x: auto;
    border-radius: 0.5rem;
    border: 1.2px solid var(--grey-tint-2);
    margin-top: 4rem;
`;

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: justify;

	.title > td {
		padding: 1rem;
	}

	.title > td > p {
		padding: 1rem 1.5rem;
		border-radius: .15rem;
		color: var(--white-tint-9);
		font-size: 1.15rem;

		@media (max-width: 425px) {
			font-size: 1.23rem;
		}
	}

	th, td {
		padding: 1rem;
		text-align: left;
	}

	td {
		font-size: 1.05rem;
		font-weight: 400;
		color: var(--grey-tint-7);
		line-height: 1.5;
		text-transform: capitalize;

		@media (max-width: 1200px) {
			font-size: 1.02rem;
		}

		@media (max-width: 900px) {
			font-size: 1.08rem;
		}

		@media (max-width: 800px) {
			font-size: 1.06rem;
		}

		@media (max-width: 768px) {
			font-size: 1.08rem;
		}

		@media (max-width: 425px) {
			font-size: 1.13rem;
		}

		@media (max-width: 375px) {
			font-size: 1.15rem;
		}
	}

	tbody {
		background: #fff;
	}

	.figure {
		font-size: 1.08rem;
		font-weight: 500;

		@media (max-width: 1200px) {
			font-size: 1.07rem;
		}

		@media (max-width: 900px) {
			font-size: 1.14rem;
		}

		@media (max-width: 800px) {
			font-size: 1.12rem;
		}

		@media (max-width: 768px) {
			font-size: 1.13rem;
		}

		@media (max-width: 425px) {
			font-size: 1.17rem;
		}

		@media (max-width: 375px) {
			font-size: 1.17rem;
		}
	}


	td > a {
		padding: .5rem 1rem;
		background: var(--primary-tint-7);
		color: #fff;
		border-radius: .3rem;
	}

	td button {
		width: 5rem;
	    padding: 0.6rem;
	    border-radius: 0.2rem;
	    font-size: 1.03rem;

	    @media (max-width: 600px) {
	        font-size: 1.05rem;
	    }

	    @media (max-width: 425px) {
	    	font-size: 1.1rem;
    		padding: 0.7rem 0.8rem;
	    }

	    @media (max-width: 375px) {
	    	font-size: 1.15rem;
    		padding: 0.7rem 1.1rem;
	    }
	}

	@media (max-width: 1100px) {
		width: 120%;	
	}

	@media (max-width: 800px) {
		width: 130%;	
	}

	@media (max-width: 768px) {
		width: 140%;	
	}

	@media (max-width: 600px) {
		width: 170%;	
	}

	@media (max-width: 425px) {
		width: 230%;	
	}

	@media (max-width: 375px) {
		width: 270%;	
	}

	@media (max-width: 320px) {
		width: 320%;
	}

	@media (max-width: 300px) {
		width: 340%;
	}
`;


export const TableHead = styled.thead`
	background: var(--grey-tint-7);
	color: var(--white);
	text-transform: capitalize;
	border-bottom: .05rem solid #ccc;


	& tr th {
		padding: 1.2rem;

		@media (max-width: 900px) {
			font-size: 1.05rem;
		}

		@media (max-width: 425px) {
			font-size: 1.12rem;
		}

		@media (max-width: 375px) {
			font-size: 1.17rem;
		}
	}
`;

