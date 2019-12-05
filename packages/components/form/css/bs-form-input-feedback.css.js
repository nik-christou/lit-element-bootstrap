
import { css } from 'lit-element';

export const BsFormInputFeedbackCss = css`
    
    :host {
        display: none;
    }
    
    :host([valid]) {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #28a745;
    }
    
    :host([invalid]) {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: #dc3545;
    }
`;
