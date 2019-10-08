
import { css } from 'lit-element';

export const BsFormGroupCss = css`
    
    :host {
        display: block;
        margin-bottom: 1rem;
    }

    :host([row]) {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    @media (min-width: 576px) {
        
        :host([inline]) {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 0;
        }
    }
`;
