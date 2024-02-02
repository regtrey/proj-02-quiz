import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* Gray */
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;

        /* Brand */
        --color-brand-50: #f0fdf4;
        --color-brand-100: #dcfce7;
        --color-brand-200: #bbf7d0;
        --color-brand-300: #86efac;
        --color-brand-400: #4ade80;
        --color-brand-500: #22c55e;

        /* Danger */
        --color-danger-400: #f87171;
    }

    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    button:focus,
    input:focus {
        outline: 1px solid var(--color-brand-500);
        outline-offset: 1px;
    }

    button:disabled,
    input:disabled {
        border: none;
        background-color: var(--color-grey-300);
        color: var(--color-grey-0);
        outline: none;
        cursor: not-allowed;

        &:hover {
            border: none;
            background-color: var(--color-grey-300);
            color: var(--color-grey-0);
            outline: none;
        }
    }

    a {
        text-decoration:none;
    }

    a:active,
    a:visited {
        color: #000;
    }
`;

export default GlobalStyles;
