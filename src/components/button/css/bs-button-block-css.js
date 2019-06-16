
import { css } from 'lit-element';

export const BsButtonBlockCss = css`
    
    :host([block]) {
        display: block;
    }
    
    :host([block]) .btn {
        width: 100%;
    }

    :host([block]:not(:first-child)) .btn {
        margin-top: 0.5rem;
    }
`;