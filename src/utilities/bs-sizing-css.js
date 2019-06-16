
import { css } from 'lit-element';

export const BsSizingCss = css`
    
    :host([w-25]), .w-25 {
        width: 25% !important;
    }

    :host([w-50]), .w-50 {
        width: 50% !important;
    }

    :host([w-75]), .w-75 {
        width: 75% !important;
    }

    :host([w-100]), .w-100 {
        width: 100% !important;
    }

    :host([w-auto]), .w-auto {
        width: auto !important;
    }

    :host([h-25]), .h-25 {
        height: 25% !important;
    }

    :host([h-50]), .h-50 {
        height: 50% !important;
    }

    :host([h-75]), .h-75 {
        height: 75% !important;
    }

    :host([h-100]), .h-100 {
        height: 100% !important;
    }

    :host([h-auto]), .h-auto {
        height: auto !important;
    }

    :host([mw-100]), .mw-100 {
        max-width: 100% !important;
    }

    :host([mh-100]), .mh-100 {
        max-height: 100% !important;
    }
`;