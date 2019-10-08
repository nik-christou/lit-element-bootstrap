
import { css } from 'lit-element';

export const BsFormControlSizeCss = css`

    :host([sm]) .form-control {
        height: calc(1.8125rem + 2px);
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }
    
    :host([lg]) .form-control {
        height: calc(2.875rem + 2px);
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }
`;