
import { css } from 'lit-element';

export const BsButtonLinkCss = css`
    
    :host([link]) .btn {
        font-weight: 400;
        color: #007bff;
        background-color: transparent;
    }

    :host([link]) .btn:hover {
        color: #0056b3;
        text-decoration: underline;
        background-color: transparent;
        border-color: transparent;
    }

    :host([link]) .btn:focus, 
    :host([link]) .btn.focus {
        text-decoration: underline;
        border-color: transparent;
        box-shadow: none;
    }

    :host([link]) .btn:disabled, 
    :host([link]) .btn.disabled {
        color: #6c757d;
        pointer-events: none;
    }
`;