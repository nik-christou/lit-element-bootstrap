
import { css } from 'lit-element';

export const BsContentCodeCss = css`
    
    code {
        font-size: 87.5%;
        color: #e83e8c;
        word-break: break-word;
    }

    a > code {
        color: inherit;
    }

    kbd {
        padding: 0.2rem 0.4rem;
        font-size: 87.5%;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
    }

    kbd kbd {
        padding: 0;
        font-size: 100%;
        font-weight: 700;
    }

    pre {
        display: block;
        font-size: 87.5%;
        color: #212529;
    }

    pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
    }

    .pre-scrollable {
        max-height: 340px;
        overflow-y: scroll;
    }
`;