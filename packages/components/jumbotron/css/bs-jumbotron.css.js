import { css } from 'lit-element';

export const BsJumbotronCss = css`

    :host {
        display: block;
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        background-color: #e9ecef;
        border-radius: 0.3rem;
    }

    @media (min-width: 576px) {
        :host {
            padding: 4rem 2rem;
        }
    }

    :host([fluid]) {
        padding-right: 0;
        padding-left: 0;
        border-radius: 0;
    }
`;
