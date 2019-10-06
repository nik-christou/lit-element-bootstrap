
import { css } from 'lit-element';

export const BsAlertLinkCss = css`

    a {
        font-weight: 700;
    }

    :host([primary]) a {
        color: #002752;
    }

    :host([secondary]) a {
        color: #202326;
    }

    :host([success]) a {
        color: #0b2e13;
    }

    :host([info]) a {
        color: #062c33;
    }

    :host([warning]) a {
        color: #533f03;
    }

    :host([danger]) a {
        color: #491217;
    }

    :host([light]) a {
        color: #686868;
    }

    :host([dark]) a {
        color: #040505;
    }
`;
