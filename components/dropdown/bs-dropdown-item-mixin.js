
const BsDropdownItemMixin = (superClass) => class extends superClass {
    
    static get properties() {
        return {
            title: String,
            index: Number,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    constructor() {
        super();
        this.active = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        const buttonElement = this._retrieveButtonElement();
        this._applyButtonActivateState(buttonElement);
        buttonElement.addEventListener('mousedown', event => this._handleButtonClick(event));
    }
    
    _retrieveButtonElement() {
        
        const linkElement = this.shadowRoot.querySelector('a.dropdown-item');
        const buttonElement = this.shadowRoot.querySelector('button.dropdown-item');
        
        if(linkElement) {
            return linkElement;
        }
        
        if(buttonElement) {
            return buttonElement;
        }
    }
    
    _applyButtonActivateState(btnElement) {
        
        if(this.disabled && !this.active) {
            btnElement.classList.toggle('disabled');
        }

        if(!this.disabled && this.active) {
            btnElement.classList.toggle('active');
        }
    }
    
    _handleButtonClick(event) {
        
        if(!this.disabled) {
            
            const btnClickedEvent = new CustomEvent('bs-dropdown-item-click', {
                bubbles: true, 
                composed: true,
                detail: {
                    index: this.index
                }
            });
            
            this.dispatchEvent(btnClickedEvent);
        }
    }
};

export { BsDropdownItemMixin };
