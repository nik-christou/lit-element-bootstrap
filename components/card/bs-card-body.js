
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCardBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    flex: 1 1 auto;
                    padding: 1.25rem;
                    display: block;
                }
        
                :host > ::slotted([name="card-text"]:last-child) {
                    margin-bottom: 0;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot name="card-title"></slot>
            <slot name="card-subtitle"></slot>
            <slot name="card-text"></slot>
            <slot id="plainSlot"></slot>
            <slot name="card-links"></slot>
        `;
    }
    
    firstUpdated() {
        this._ifLastChildIsCardTextRemoveBottomMargin();
    }
    
    _ifLastChildIsCardTextRemoveBottomMargin() {
        
        const slotElement = this.shadowRoot.querySelector('slot#plainSlot');
        const slotElementNodes = this._getSlotElementNodes(slotElement);
        
        const cardLinksSlotELement = this.shadowRoot.querySelector('slot[name="card-links"]');
        const cardLinksElementNodes = this._getSlotElementNodes(cardLinksSlotELement);
        
        // if nothing was added to the slot node and to the card links node,
        // then find the last element of the card-text and change the margin-bottom
        if(slotElementNodes.length === 0 && cardLinksElementNodes.length === 0) {
            
            const cardTextElement = this._findCardTextElement();
            
            if(cardTextElement) {
                
                const cardTextChildren = cardTextElement.children;
                const lastElementIndex = cardTextChildren.length - 1;
                const lastNode = cardTextChildren[lastElementIndex];
                lastNode.style.marginBottom = '0';
            }
        }
    }
    
    _getSlotElementNodes(slotElement) {
        
        const slotNodes = slotElement.assignedNodes();
        
        const nodeElements = [];
        
        for(let index = 0; index < slotNodes.length; index++) {
            
            const element = slotNodes[index];
            
            if(element.nodeType === Node.ELEMENT_NODE) {
                nodeElements.push(element);
            }
        }
        
        return nodeElements;
    }
    
    _findCardTextElement() {
        
        const cardTextSlotElement = this.shadowRoot.querySelector('slot[name="card-text"]');
        const cardTextAssignedNodes = cardTextSlotElement.assignedNodes();
        
        for(let index = 0; index < cardTextAssignedNodes.length; index++) {
            
            const slotItem = cardTextAssignedNodes[index];
            
            if(this._isCardTextElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isCardTextElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && element.localName === 'bs-card-text';
    }
};

window.customElements.define('bs-card-body', BsCardBody);



