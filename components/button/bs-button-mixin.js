
const defaultThemeColors = new Map([
    ['primary', '#007bff'],
    ['secondary', '#6c757d'],
    ['success', '#28a745'],
    ['info', '#17a2b8'],
    ['warning', '#ffc107'],
    ['danger', '#dc3545'],
    ['light', '#f8f9fa'],
    ['dark', '#343a40']
]);

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
        
        btnElement.addEventListener('click', event => this._handleButtonClick(event));
        btnElement.addEventListener('focusout', event => this._handleFocusOut(event));

        this._setupDefaultThemeColors();
    }
    
    updated(changedProperties) {
        
        super.updated();
        
        if (changedProperties.has('disabled')) {
            this._disabledChanged();
        }
    }

    _setupDefaultThemeColors() {

        const hostElement = this.shadowRoot.host;

        for (let [key, value] of defaultThemeColors) {
            
            if(hostElement.hasAttribute(key)) {
                this._updateCssProperty(hostElement, key, value);
            }
        }
    }

    _updateCssProperty(hostElement, cssPropName, cssPropValue) {
        
        const cssVarName = '--'+cssPropName;

        if(!getComputedStyle(hostElement).getPropertyValue(cssVarName)) {
            hostElement.style.setProperty(cssVarName, cssPropValue);
        }
    }
    
    _disabledChanged() {
        
        if(this.disabled) {
            
            const buttonElement = this._retrieveButtonElement();
            buttonElement.classList.add('disabled');
            buttonElement.setAttribute('disabled', '');
        }
    }
    
    _handleFocusOut(event) {
        
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
        
        if(this._blockAllowDefaultEvent()) {
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
    
    _blockAllowDefaultEvent() {

        const linkButtonElement = this.shadowRoot.querySelector('a');

        if(!linkButtonElement && !this.href) {
            return false;
        }

        return true;
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