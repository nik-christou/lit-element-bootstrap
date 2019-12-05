
import { css } from 'lit-element';

export const BsCardGroupCss = css`

    :host {
        display: flex;
        flex-direction: column;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {

        :host {
            flex-flow: row wrap;
        }

        :host ::slotted(bs-card) {
            flex: 1 0 0%;
            margin-bottom: 0;
        }

        :host ::slotted(bs-card:first-child) {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            --card-header-top-right-border-radius: 0px;
            --card-img-top-right-border-radius: 0px;
            --card-footer-bottom-right-border-radius: 0px;
            --card-img-bottom-right-border-radius: 0px;
        }

        :host ::slotted(bs-card:last-child) {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            --bs-card-margin-left: 0px;
            --bs-card-border-left: 0px;
            --card-header-top-left-border-radius: 0px;
            --card-footer-bottom-left-border-radius: 0px;
            --card-img-top-left-border-radius: 0px;
            --card-img-bottom-left-border-radius: 0px;
        }

        :host ::slotted(bs-card:only-child) {
            border-radius: 0.25rem;
            --card-header-top-left-border-radius: 0.25rem;
            --card-header-top-right-border-radius: 0.25rem;
            --card-footer-bottom-left-border-radius: 0.25rem;
            --card-footer-bottom-right-border-radius: 0.25rem;
            --card-img-top-left-border-radius: 0.25rem;
            --card-img-top-right-border-radius: 0.25rem;
            --card-img-bottom-left-border-radius: 0.25rem;
            --card-img-bottom-right-border-radius: 0.25rem;
        }

        :host ::slotted(bs-card:not(:first-child):not(:last-child):not(:only-child)) {
            border-radius: 0;
            --bs-card-margin-left: 0px;
            --bs-card-border-left: 0px;
            --card-footer-bottom-left-border-radius: 0px;
            --card-footer-bottom-right-border-radius: 0px;
            --card-header-top-left-border-radius: 0px;
            --card-header-top-right-border-radius: 0px;
            --card-img-top-right-border-radius: 0px;
            --card-img-top-left-border-radius: 0px;
            --card-img-bottom-right-border-radius: 0px;
            --card-img-bottom-left-border-radius: 0px;
        }
    }
`;
