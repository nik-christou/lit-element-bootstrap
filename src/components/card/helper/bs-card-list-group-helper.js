
function configureFlushListGroupBorders(assignedNodes) {

    const slotElements = extractOnlyElements(assignedNodes);

    for (let index = 0; index < slotElements.length; ++index) {

        const slotElement = slotElements[index];

        if (isFlushListGroupElement(slotElement)) {

            handleTopBorder(slotElement);
            handleBottomBorder(slotElement);
        }
    }
}

function handleTopBorder(slotElement) {

    const previousElement = slotElement.previousElementSibling;

    if (previousElement) {

        if (isCardHeaderElement(previousElement)) {
            removeListGroupTopBorder(slotElement);
        } else {
            addListGroupTopBorder(slotElement);
        }
    } else {
        removeListGroupTopBorder(slotElement);
    }
}

function handleBottomBorder(slotElement) {

    const nextElement = slotElement.nextElementSibling;

    if(nextElement) {
        addListGroupBottomBorder(slotElement);
    } else {
        addListGroupBottomBorderRadius(slotElement);
    }
}

function removeListGroupTopBorder(element) {
    element.style.setProperty('--flush-list-group-item-top-border', '0');
    element.style.setProperty('--flush-list-group-item-top-left-radius', '0.25rem');
    element.style.setProperty('--flush-list-group-item-top-right-radius', '0.25rem');
}

function addListGroupTopBorder(element) {
    element.style.setProperty('--flush-list-group-item-top-border', '1px solid rgba(0, 0, 0, 0.125)');
}

function addListGroupBottomBorder(element) {
    element.style.setProperty('--flush-list-group-item-bottom-border', '1px solid rgba(0, 0, 0, 0.125)');
}

function addListGroupBottomBorderRadius(element) {
    element.style.setProperty('--flush-list-group-item-bottom-left-radius', '0.25rem');
    element.style.setProperty('--flush-list-group-item-bottom-right-radius', '0.25rem');
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

function  isFlushListGroupElement(el) {
    return el.nodeType === Node.ELEMENT_NODE && (el.localName === 'bs-list-group-flush'
            || el.localName === 'bs-list-group-action-flush');
}

function  isElementButNotSlot(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName !== 'slot');
}

function  isCardHeaderElement(el) {
    return el.nodeType === Node.ELEMENT_NODE 
            && (el.localName === 'bs-card-header');
}

export {configureFlushListGroupBorders};