
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';
import { BsSpacingCss } from '../../utilities';

export class BsNavbarBrand extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            css`
                :host span {
                    display: inline-block;
                    padding-top: 0.3125rem;
                    padding-bottom: 0.3125rem;
                    margin-right: 1rem;
                    font-size: 1.25rem;
                    line-height: inherit;
                    white-space: nowrap;
                }
        
                span {
                    color: var(--navbar-brand-color);
                }
            `
        ];
    }
    
    render() {
        return html`
            <span class="mb-0 h1">
                <slot></slot>
            </span>
        `;
    }
};

if(!window.customElements.get('bs-navbar-brand')) window.customElements.define('bs-navbar-brand', BsNavbarBrand);