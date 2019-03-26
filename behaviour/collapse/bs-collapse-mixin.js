
const BsCollapseMixin = (superClass) => class extends superClass {
    
    firstUpdated() {
        this.addEventListener('bs-collapse-toggle', event => this._toggleCollapsable(event));
        this.addEventListener('bs-collapse-multi-toggle', event => this._multiToggleCollapsable(event));
    }
    
    _toggleCollapsable(event) {
        
        const target = event.detail.target;
        
        if(!target) {
            return;
        }
        
        const collapsableElement = this.shadowRoot.querySelector(`bs-collapsable#${target}`);
        
        if(collapsableElement) {
            collapsableElement.toggle();
        }
    }
    
    _multiToggleCollapsable(event) {
        
        const multiTarget = event.detail.multiTarget;
        
        if(!multiTarget) {
            return;
        }
        
        const collapsableElements = this.shadowRoot.querySelectorAll(`bs-collapsable.${multiTarget}`);
        
        for (let index = 0; index < collapsableElements.length; index++) {
            
            const collapsableElement = collapsableElements[index];
            
            if(collapsableElement) {
                collapsableElement.toggle();
            }
        }
    }
};

export { BsCollapseMixin };