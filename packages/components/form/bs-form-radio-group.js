
import { LitElement, html} from 'lit-element';

export class BsFormRadioGroup extends LitElement {
    
    static get properties() {
        return {
            name: String
        };
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this._updateInputsWithGroupName();
        this.addEventListener('bs-form-radio-click', event => this._handleRadioClick(event));
    }
    
    _updateInputsWithGroupName() {
        
        if(!this.name) {
            return;
        }
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slotNodes = slotNode.assignedNodes();
        
        const formCheckGroupElements = this._retrieveFormCheckGroups(slotNodes);
        
        for (let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupElement = formCheckGroupElements[index];
            const formRadioInputElement = this._retrieveFormRadioInput(formGroupElement);
            
            formRadioInputElement.setAttribute('name', this.name);
        }
    }
    
    _handleRadioClick(event) {
        
        const name = event.detail.name;
        const value = event.detail.value;
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slotNodes = slotNode.assignedNodes();
        
        const formCheckGroupElements = this._retrieveFormCheckGroups(slotNodes);
        
        for (let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupElement = formCheckGroupElements[index];
            const formRadioInputElement = this._retrieveFormRadioInput(formGroupElement);
            
            formRadioInputElement.radioGroupItemSelected(name, value);
        }
    }
    
    _retrieveFormRadioInput(formCheckGroup) {
        
        const formCheckGroupChildren = formCheckGroup.children;
        
        for(let index = 0; index < formCheckGroupChildren.length; index++) {
            
            const childrenItem = formCheckGroupChildren[index];
            
            if (this._isFormRadioInputElement(childrenItem)) {
                
                return childrenItem;
            }
        }
    }
    
    _retrieveFormCheckGroups(slotNodes) {
        
        const elementNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            
            if (this._isFormCheckGroupElement(slotItem)) {
                elementNodes.push(slotItem);
            }
        }
        
        return elementNodes;
    }
    
    _isFormRadioInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-form-radio-input');
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-form-check-group');
    }
};

if(!window.customElements.get('bs-form-radio-group')) 
    window.customElements.define('bs-form-radio-group', BsFormRadioGroup);