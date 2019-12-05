
import { css } from 'lit-element';

export const BsFormSelectCss = css`
    
    :host {
        display: block;
    }
    
    select.form-control:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    select.form-control[size], 
    select.form-control[multiple] {
        height: auto;
    }
`;
