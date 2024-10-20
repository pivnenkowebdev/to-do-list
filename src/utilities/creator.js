const createElement = (elementParams) => {
    const tagElement = document.createElement(elementParams.tagName);

    // if (elementParams.classList && elementParams.length > 0) {
    tagElement.classList.add(...elementParams.classList);
    // }

    if (elementParams.text) {
        tagElement.innerText = elementParams.text;
    }

    return tagElement;
};

export default createElement;
