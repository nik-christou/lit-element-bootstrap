
import { LitElement, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsNavbarTogglerIcon extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: inline-block;
                    width: 1.5em;
                    height: 1.5em;
                    vertical-align: middle;
                    content: "";
                    background: no-repeat center center;
                    background-size: 100% 100%;
                    background-image: var(--navbar-toggler-icon-background-image);
                    font-size: 1.25rem;
                    line-height: 1;
                    color: rgba(0,0,0,0.5);
                }
            `
        ];
    }
};

if(!window.customElements.get('bs-navbar-toggler-icon')) window.customElements.define('bs-navbar-toggler-icon', BsNavbarTogglerIcon);