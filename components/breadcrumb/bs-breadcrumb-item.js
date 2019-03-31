
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsBreadrumbItem extends LitElement {
    
    static get properties() {
        return {
            title: {type: String, reflect: true },
            target: { type: String, reflect: true },
            active: { type: Boolean, reflect: true }
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host([active]) {
                    color: #6c757d;
                }
            
                :host {
                    padding-left: var(--bs-breadcrumb-item-padding-left);
                }
            
                :host::before {
                    display: var(--bs-breadcrumb-item-display);
                    padding-right: var(--bs-breadcrumb-item-padding-right);
                    color: var(--bs-breadcrumb-item-color);
                    text-decoration: var(--bs-breadcrumb-item-text-decoration);
                    content: var(--bs-breadcrumb-item-divider);
                }
            `
        ];
    }
    
    render() {
        return html`
            ${this._selectTemplateToLoad()}
        `;
    }
    
    constructor() {
        super();
        this.target = '#';
        this.active = false;
        this.title = '';
    }
    
    _selectTemplateToLoad() {
        
        if(this.active) {
            return html`${this.title}`;
        } else {
            return html`<a href="${this.target}">${this.title}</a>`;
        }
    }
};

window.customElements.define('bs-breadcrumb-item', BsBreadrumbItem);