const createElement = (elementParams) => {
    const tagElement = document.createElement(elementParams.tagName);

    tagElement.classList.add(...elementParams.classList);

    if (elementParams.text) {
        tagElement.innerText = elementParams.text;
    }

    if (elementParams.attrParams) {
        for (const key in elementParams.attrParams) {
            tagElement.setAttribute(key, elementParams.attrParams[key]);
        }
    }

    if (elementParams.value) {
        tagElement.value = elementParams.value;
    }

    return tagElement;
};

export default createElement;
