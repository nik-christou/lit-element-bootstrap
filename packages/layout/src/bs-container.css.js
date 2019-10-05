
import { css } from 'lit-element';

export const BsContainerCss = css`

    :host {
        width: 100%;
        display: block;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px) {
        :host:not([fluid]) {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        :host:not([fluid]) {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        :host:not([fluid]) {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        :host:not([fluid]) {
            max-width: 1140px;
        }
    }

    :host([fluid]) {
        width: 100%;
        display: block;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
`;
