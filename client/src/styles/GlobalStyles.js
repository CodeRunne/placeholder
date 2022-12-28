import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: -apple-system,BlinkMacSystemFont,Lato,"Segoe UI",Verdana,Arial,sans-serif;
    }

    body {
        background: var(--grey-tint-0);
        color: var(--grey);
        line-height: 1.4rem;
    }

    svg {
        line-height: 0;
    }

    * a:link,
	* a:visited {
	  text-decoration: none;
	}

    // Utils
    .code-rd {
        color: var(--accent-tint-5);
    }

    .code-bl {
        color: var(--primary-tint-4);
    }

    .code-grn {
        color: #00ffd0cc;
    }

    .code-or {
        color: #fcd274b8;
    }

    .code-or-lg {
        color: #f2c596;
    }

    ul {
	  list-style: none;
	}

    ${'' /* Display: flex */}
    .d-flex {
        display: flex;
    }

    .d-flex-column {
        flex-direction: column;
    }

    .d-j-cnt {
        justify-content: center;
    }

    .d-j-sbtw {
        justify-content: space-between;
    }

    .d-j-end {
        justify-content: flex-end;
    }

    .d-j-start {
        justify-content: flex-start;
    }

    .d-a-cnt {
        align-items: center;
    }

    ${'' /* Display: grid */}
    .d-grid {
        display: grid;
    }

    ${'' /* Gradient text */}
    .gradient-text {
	  background: linear-gradient(to top right, var(--primary-tint-7), var(--primary));
	  color: transparent;
	  -webkit-background-clip: text;
	  background-clip: text;
	}

    ${'' /* Gradient background */}
    .gradient {
        background: linear-gradient(to top right, var(--primary-tint-7), var(--primary));
    }

    ${'' /* Container */}
    .container {
        width: 85%;
        margin: 0 auto;

        @media (max-width: 1200px) {
            width: 90%;
        }

        @media (max-width: 1024px) {
            width: 95%;
        }
    }

    ${'' /* Typography */}
    .font-bold {
        font-weight: 700;
        color: var(--grey-tint-8);
    }

    .heading-1 {
        font-size: 3.5rem;
        line-height: 1.2;

        @media (max-width: 1200px) {
            font-size: 3.7rem;
        }

        @media (max-width: 600px) {
            font-size: 3.9rem;
        }
    }


    .heading-2 {
        font-size: 2.8rem;
        line-height: 1.2;
    
        @media (max-width: 1200px) {
            font-size: 2.9rem;
        }

        @media (max-width: 600px) {
            font-size: 2.6rem;
        }

        @media (max-width: 425px) {
            font-size: 2.4rem;
        }

        @media (max-width: 320px) {
            font-size: 2.1rem;
        }

        @media (max-width: 300px) {
            font-size: 1.95rem;
        }
    }

    .heading-3 {
        font-size: 2.4rem;
        line-height: 1.2;

        @media (max-width: 1200px) {
            font-size: 2.55rem;
        }

        @media (max-width: 600px) {
            font-size: 2.7rem;
        }
    }

    .heading-4 {
        font-size: 2rem;
        line-height: 1.2;

        @media (max-width: 1200px) {
            font-size: 2.15rem;
        }

        @media (max-width: 600px) {
            font-size: 2.3rem;
        }

        @media (max-width: 320px) {
            font-size: 2.1rem;
        }
    }

    .heading-5 {
        font-size: 1.7rem;
        line-height: 1.2;

        @media (max-width: 1200px) {
            font-size: 1.6rem;
        }

        @media (max-width: 900px) {
            font-size: 1.5rem;
        }

        @media (max-width: 800px) {
            font-size: 1.45rem;
        }

        @media (max-width: 600px) {
            font-size: 1.6rem;
        }

        @media (max-width: 375px) {
            font-size: 1.5rem;
        }

        @media (max-width: 320px) {
            font-size: 1.35rem;
            line-height: 1.8rem;
        }
    }

    .heading-6 {
        font-size: 1.4rem;
        line-height: 1.2;

        @media (max-width: 1200px) {
            font-size: 1.3rem;
        }

        @media (max-width: 900px) {
            font-size: 1.2rem;
        }

        @media (max-width: 800px) {
            font-size: 1.25rem;
        }

        @media (max-width: 600px) {
            font-size: 1.3rem;
        }

        @media (max-width: 375px) {
            font-size: 1.2rem;
        }

        @media (max-width: 320px) {
            font-size: 1.15rem;
            line-height: 1.6rem;
        }
    }

    .paragraph {
        font-size: 1.1rem;
        color: var(--grey-tint-7);
        line-height: 1.7;

        @media (max-width: 1200px) {
            font-size: 1.15rem;
        }

        @media (max-width: 900px) {
            font-size: 1.18rem;
        }

        @media (max-width: 600px) {
            font-size: 1.25rem;
        }
    }

`;

export default GlobalStyles;