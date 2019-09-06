
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsContainer extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                
                :host {
                    width: 100%;
                    display: block;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
        
                @media (min-width: 576px) {
                    :host:not([fluid]) {
                        max-width: 540px;
                    }
                }

                @media (min-width: 768px) {
                    :host:not([fluid]) {
                        max-width: 720px;
                    }
                }

                @media (min-width: 992px) {
                    :host:not([fluid]) {
                        max-width: 960px;
                    }
                }

                @media (min-width: 1200px) {
                    :host:not([fluid]) {
                        max-width: 1140px;
                    }
                }
        
                :host([fluid]) {
                    width: 100%;
                    display: block;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
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

if(!window.customElements.get('bs-container'))  
    window.customElements.define('bs-container', BsContainer);

