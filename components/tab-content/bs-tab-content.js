
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsTabContent extends LitElement {
    
    static get properties() {
        return {
            selectedItem: {type: Number, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss
        ];
    }
    
    render() {
        return html`
            <div class="tab-content">
                <slot></slot>
            </div>
        `;
    }

    constructor() {
        super();
        this.selectedItem = 0;
    }
    
    firstUpdated() {
        this._addTabContentItemsIndexAndActivateInitalTabContent();
    }
    
    updated(changedProperties) {
        
        super.updated();
        
        if (changedProperties.has('selectedItem')) {
            this._selectedItemChanged();
        }
    }
    
    _addTabContentItemsIndexAndActivateInitalTabContent() {
        
        const tabContentItems = this._retrieveTabContentItemNodes();
        
        for(let index = 0; index < tabContentItems.length; ++index) {
            const tabContentItem = tabContentItems[index];
            tabContentItem.setAttribute('index', index);
            if(this.selectedItem === index) {
                tabContentItem.setAttribute('active', '');
            }
        }
    }
    
    _selectedItemChanged() {
        
        const tabContentItems = this._retrieveTabContentItemNodes();
    
        for(let index = 0; index < tabContentItems.length; ++index) {
            
            const tabContentItem = tabContentItems[index];
            
            if(this.selectedItem === tabContentItem.index) {
                tabContentItem.setAttribute('active', '');
            } else {
                tabContentItem.removeAttribute('active');
            }
        }
    }
    
    _retrieveTabContentItemNodes() {
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        const tabContentItemNodes = [];
        
        for (let index = 0; index < slotNodes.length; ++index) {
            const el = slotNodes[index];
            if (this._isTabContentItem(el)) {
                tabContentItemNodes.push(el);
            }
        }
        
        return tabContentItemNodes;
    }
    
    _isTabContentItem(el) {
        return el.nodeType === Node.ELEMENT_NODE && 
                el.localName === 'bs-tab-content-item';
    }
};

if(!window.customElements.get('bs-tab-content')) window.customElements.define('bs-tab-content', BsTabContent);