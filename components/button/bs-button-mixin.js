
const BsButtonMixin = (superClass) => class extends superClass {
    
    static get properties() {
        return {
            action: String,
            toggle: {type: Boolean, reflect: true},
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            dropdownToggle: {type: Boolean, reflect: true, attribute: 'dropdown-toggle'}
        };
    }
    
    constructor() {
        super();
        this.active = false;
        this.toggle = false;
        this.action = 'button';
        this.disabled = false;
        this.dropdownToggle = false;
    }
    
    firstUpdated() {
        
        const btnElement = this._retrieveButtonElement();
        this._applyButtonActivateState(btnElement);
        this._applyButtonTypeIfApplicable();
        
        this.addEventListener('click', event => this._handleButtonClick(event));
        this.addEventListener('focusout', event => this._handleFocusOut(event));
    }
    
    updated(changedProperties) {
        
        super.updated();
        
        if (changedProperties.has('disabled')) {
            this._disabledChanged();
        }
    }
    
    _disabledChanged() {
        const buttonElement = this._retrieveButtonElement();
        
        if(this.disabled) {
            
            buttonElement.classList.add('disabled');
            buttonElement.setAttribute('disabled', '');
        } else {
            buttonElement.classList.remove('disabled');
            buttonElement.removeAttribute('disabled');
        }
    }
    
    _handleFocusOut(event) {
        
        event.preventDefault();
        
        if(this.disabled) {
            return;
        }
        
        if(this.active && !this.toggle) {
            this._updateToggleState();
        }
        
        const btnFocusOutEvent = new CustomEvent('bs-button-focusout', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(btnFocusOutEvent);
    }
    
    _handleButtonClick(event) {
        
        if(!this._isLinkButton()) {
            event.preventDefault();
        };
        
        if(this.disabled) {
            return;
        }
        
        this._updateButtonFocus();
        this._updateToggleState();
        
        const btnClickedEvent = new CustomEvent('bs-button-click', {
            bubbles: true, 
            composed: true,
            detail: {
                action: this.action
            }
        });

        this.dispatchEvent(btnClickedEvent);
    }

    _updateToggleState() {
        
        const buttonElement = this._retrieveButtonElement();
        
        // added the this.dropdownToggle to enable "active"
        // look and feel during the dropdown menu opened
        if(this.toggle || this.dropdownToggle) {
            
            if(this.active) {
                buttonElement.classList.remove('active');
                buttonElement.removeAttribute('active');
            } else {
                buttonElement.classList.add('active');
                buttonElement.setAttribute('active', '');
            }
            
            this.active = !this.active;
        }
    }
    
    _isLinkButton() {

        const linkButtonElement = this.shadowRoot.querySelector('a');

        if(linkButtonElement) {
            return true;
        }

        return false;
    }

    _retrieveButtonElement() {
        
        const buttonElement = this.shadowRoot.querySelector('button');
        const inputElement = this.shadowRoot.querySelector('input');
        const hrefElement = this.shadowRoot.querySelector('a');
        
        if(buttonElement) {
            return buttonElement;
        } 
        
        if(inputElement) {
            return inputElement;
        }
        
        if(hrefElement) {
            return hrefElement;
        }
    }

    _updateButtonFocus() {
        
        const buttonElement = this.shadowRoot.querySelector('button');
        const inputElement = this.shadowRoot.querySelector('input');
        const hrefElement = this.shadowRoot.querySelector('a');
        
        if(buttonElement) {
            buttonElement.focus();
        }

        if(inputElement) {
            inputElement.focus();
        }

        if(hrefElement) {
            hrefElement.focus();
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
    
    _applyButtonTypeIfApplicable() {
        
        const buttonElement = this.shadowRoot.querySelector('button');
        const inputElement = this.shadowRoot.querySelector('input');
        
        if(buttonElement) {
            this._applyButtonType(buttonElement);
        }

        if(inputElement) {
            this._applyButtonType(inputElement);
        }
    }
    
    _applyButtonType(btnElement) {
        if(this.action === 'button') {
            btnElement.setAttribute('type', 'button');
        }

        if(this.action === 'reset') {
            btnElement.setAttribute('type', 'reset');
        }

        if(this.action === 'submit') {
            btnElement.setAttribute('type', 'submit');
        }
    }
};

export { BsButtonMixin };
