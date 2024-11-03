const createElement = (elementParams) => {
    const tagElement = document.createElement(elementParams.tagName);

    tagElement.classList.add(...elementParams.classList);

    if (elementParams.text) {
        tagElement.innerText = elementParams.text;
    }

    return tagElement;
};

export default createElement;
