
import { css } from 'lit-element';

export const BsFormCheckLabelCss = css`
    
    label {
        margin-bottom: 0;
    }

    :host([disabled]) label {
        color: #6c757d;
    }
    
    :host([valid]) label {
        color: #28a745;
    }
    
    :host([invalid]) label {
        color: #dc3545;
    }
`;
