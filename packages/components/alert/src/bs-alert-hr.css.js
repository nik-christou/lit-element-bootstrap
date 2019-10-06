
import { css } from 'lit-element';

export const BsAlertHrCss = css`

    :host([primary]) hr {
        border-top-color: #9fcdff;
    }

    :host([secondary]) hr {
        border-top-color: #c8cbcf;
    }

    :host([success]) hr {
        border-top-color: #b1dfbb;
    }

    :host([info]) hr {
        border-top-color: #abdde5;
    }

    :host([warning]) hr {
        border-top-color: #ffe8a1;
    }

    :host([danger]) hr {
        border-top-color: #f1b0b7;
    }

    :host([light]) hr {
        border-top-color: #ececf6;
    }

    :host([dark]) hr {
        border-top-color: #b9bbbe;
    }
`;
