
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