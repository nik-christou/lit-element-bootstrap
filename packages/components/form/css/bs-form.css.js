
import { css } from 'lit-element';

export const BsFormCss = css`
    
    :host(:not([inline])) {
        display: block;
    }
    
    :host([inline]) {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
    
    :host([inline]) form {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    @media (min-width: 576px) {
        :host([inline]) {
            --bs-form-control-display: inline-block;
            --bs-form-control-width: auto;
            --bs-form-control-vertical-align: middle;
            --bs-input-group-width: auto;
        }
    }
`;
