
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsNav extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style: none;
                }

                :host([fill]) ::slotted(bs-nav-item) {
                    -ms-flex: 1 1 auto;
                    flex: 1 1 auto;
                    text-align: center;
                }

                :host([justified]) ::slotted(bs-nav-item) {
                    -ms-flex-preferred-size: 0;
                    flex-basis: 0;
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    text-align: center;
                }
        
                :host([tabs]) {
                    
                    margin-right: var(--bs-nav-margin-right);
                    margin-bottom: var(--bs-nav-margin-bottom);
                    margin-left: var(--bs-nav-margin-left);
                    border-bottom: var(--bs-nav-border-bottom, 1px solid #dee2e6);
                    
                    --nav-item-margin-bottom: -1px;
                    --nav-link-background-color: #fff;
                    --nav-link-border: 1px solid transparent;
                    --nav-link-active-color: #495057;
                    --nav-link-active-border-top-left-radius: 0.25rem;
                    --nav-link-active-border-top-right-radius: 0.25rem;
                    --nav-link-active-border-color: #dee2e6 #dee2e6 #fff;
                    
                    --dropdown-nav-link-hover-color: #495057;
                    --dropdown-nav-link-padding-bottom: 0.6rem;
                    --dropdown-nav-link-active-color: #495057;
                    --dropdown-nav-link-active-hover-color: #495057;
                    --dropdown-nav-link-active-focus-color: #495057;

                    --dropdown-menu-down-margin-top: -1px;
                    --dropdown-menu-border-top-left-radius: 0;
                    --dropdown-menu-border-top-right-radius: 0;
                }
                
                :host([pills]) {
                    
                    margin-right: var(--bs-nav-margin-right);
                    margin-left: var(--bs-nav-margin-left);
                    
                    --nav-link-active-color: #fff;
                    --nav-link-active-hover-color: #fff;
                    --nav-link-active-background-color: #007bff;
                    --nav-link-border-radius: 0.25rem;
                    --nav-link-active-border-bottom-left-radius: 0.25rem;
                    --nav-link-active-border-bottom-right-radius: 0.25rem;
                    --nav-link-active-border-top-left-radius: 0.25rem;
                    --nav-link-active-border-top-right-radius: 0.25rem;
                    
                    --dropdown-nav-link-padding-top: 0.5rem;
                    --dropdown-nav-link-padding-bottom: 0.5rem;
                    --dropdown-nav-link-padding-left: 1rem;
                    --dropdown-nav-link-padding-right: 1rem;
                    --dropdown-nav-link-hover-color: #0056b3;
                    --dropdown-nav-link-active-color: #fff;
                    --dropdown-nav-link-active-hover-color: #fff;
                    --dropdown-nav-link-active-focus-color: #fff;
                    --dropdown-nav-link-active-background-color: #007bff;
                    --dropdown-nav-link-hover-border-color: transparent;

                    --dropdown-menu-border-top-left-radius: 0.25rem;
                    --dropdown-menu-border-top-right-radius: 0.25rem;
                }
            `
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-nav'))  
    window.customElements.define('bs-nav', BsNav);