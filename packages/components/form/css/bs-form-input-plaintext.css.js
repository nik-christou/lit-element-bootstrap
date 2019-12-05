
import { css } from 'lit-element';

export const BsFormInputPlaintextCss = css`
    
    :host {
        display: block;
    }
    
    input {
        display: block;
        width: 100%;
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
        margin-bottom: 0;
        line-height: 1.5;
        color: #212529;
        background-color: transparent;
        border: solid transparent;
        border-width: 1px 0;
    }

    :host([sm]) input,
    :host([lg]) input {
        padding-right: 0;
        padding-left: 0;
    }

    @media (min-width: 576px) {
        
        :host([inline]) input {
            display: inline-block;
        }
    }
`;
