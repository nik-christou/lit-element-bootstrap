
import { css } from 'lit-element';

export const BsFormRadioInputCss = css`
    
    input {
        position: var(--bs-form-radio-input-position, absolute);
        margin-top: var(--bs-form-radio-input-margin-top, 0.3rem);
        margin-left: var(--bs-form-radio-input-margin-left, -1.25rem);
    }

    :host([inline]) {
        display: inline-flex;
    }
    
    :host([inline]) input {
        position: static;
        margin-top: 0;
        margin-right: 0.3125rem;
        margin-left: 0;
    }

    @media (min-width: 576px) {

        :host([inline]) input {
            position: relative;
            margin-top: 0;
            margin-right: 0.25rem;
            margin-left: 0;
        }
    }
`;
