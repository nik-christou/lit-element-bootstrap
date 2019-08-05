
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsTabContentItem extends LitElement {
    
    static get properties() {
        return {
            index: Number,
            fade: {type: Boolean, reflect: true},
            show: {type: Boolean, reflect: true},
            active: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .tab-pane {
                     opacity: 0;
                     position:absolute;
                }
                
                .tab-pane.fade.show {
                    opacity: 1;
                    position: static;
                }
                
                .tab-pane.fade {
                    opacity: 0;
                    transition: opacity .15s linear;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="tab-pane">
                <slot></slot>
            </div>
        `;
    }
    
    constructor() {
        super();
        this.index = 0;
        this.fade = false;
        this.show = false;
        this.active = false;
    }
    
    firstUpdated() {
        this._hideTabPane();
    }
    
    updated(changedProperties) {
        
        super.updated();
        
        if (changedProperties.has('active')) {
            this._activeStatusChanged();
        }
    }
    
    _hideTabPane() {
        
        if(this.fade) {
            const tabPaneElement = this.shadowRoot.querySelector('div.tab-pane');
            tabPaneElement.classList.add('fade');
        }
    }
    
    _activeStatusChanged() {
        
        const tabPaneElement = this.shadowRoot.querySelector('div.tab-pane');
        
        if(this.active) {
            tabPaneElement.classList.add('show');
            tabPaneElement.classList.add('active');
        } else {
            tabPaneElement.classList.remove('active');
            tabPaneElement.classList.remove('show');
        }    
    }
};

if(!window.customElements.get('bs-tab-content-item'))  window.customElements.define('bs-tab-content-item', BsTabContentItem);