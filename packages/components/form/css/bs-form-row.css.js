
import { css } from 'lit-element';

export const BsFormRowCss = css`
    
    :host {
        display: flex;
        flex-wrap: wrap;
        margin-right: -5px;
        margin-left: -5px;
    }
    
    ::slotted(bs-column) {
        padding-right: 5px !important;
        padding-left: 5px !important;
    }
    
    /* 
        * the below assumes that the bs-form-group 
        * has column attributes like md-6
        */
    
    ::slotted(bs-form-group) {
        padding-right: 5px !important;
        padding-left: 5px !important;
    }
`;
