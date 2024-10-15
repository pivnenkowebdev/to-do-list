const createElement = (elementParams) => {
    const tagElement = document.createElement(elementParams.tagName);
    tagElement.classList.add(...elementParams.classList);
    return tagElement;
};

export default createElement;
