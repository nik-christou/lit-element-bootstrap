
function configureCardLinks(assignedNodes) {
    
    const slotElements = extractOnlyElements(assignedNodes);
    
    for (let index = 0; index < slotElements.length; ++index) {
        
        const slotElement = slotElements[index];
        
        if (isCardLinkElement(slotElement)) {
            
            const previousElement = slotElement.previousElementSibling;
            
            if (previousElement) {
                
                if (isCardLinkElement(previousElement)) {
                    addLeftMarginToCardLink(slotElement);
                } else {
                    removeLeftMarginToCardLink(slotElement);
                }
            } else {
                removeLeftMarginToCardLink(slotElement);
            }
        }
    }
}

function removeLeftMarginToCardLink(element) {
    element.style.setProperty('--card-link-left-margin', '0');
}

function addLeftMarginToCardLink(element) {
    element.style.setProperty('--card-link-left-margin', '1.25rem');
}

function extractOnlyElements(slotNodes) {

    const elementNodes = [];

    for (let index = 0; index < slotNodes.length; ++index) {
        let slotItem = slotNodes[index];
        if (isElementButNotSlot(slotItem)) {
            elementNodes.push(slotItem);
        }
    }

    return elementNodes;
}

function  isCardLinkElement(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName === 'bs-card-link');
}

function  isElementButNotSlot(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName !== 'slot');
}

export {configureCardLinks};