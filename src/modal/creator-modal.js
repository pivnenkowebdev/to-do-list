import createElement from "../utilities/creator.js";
import {
    buttonAddParams,
    buttonCancelParams,
    checkboxParams,
    fadeBlockParams,
    headerModalParams,
    inputTitleParams,
    modalParams,
    textareaParams,
    wrapperElementParams,
} from "./modal-params.js";

const creatorModal = () => {
    const containerApp = document.body;
    const fadeBlockElement = createElement(fadeBlockParams);
    const modalElement = createElement(modalParams);
    const headerModalElement = createElement(headerModalParams);
    const inputTitle = createElement(inputTitleParams);
    const checkbox = createElement(checkboxParams);
    const textarea = createElement(textareaParams);
    const buttonAdd = createElement(buttonAddParams);
    const buttonCancel = createElement(buttonCancelParams);
    const wrapperElement = createElement(wrapperElementParams);

    modalElement.insertAdjacentElement("beforeend", headerModalElement);
    modalElement.insertAdjacentElement("beforeend", textarea);
    modalElement.insertAdjacentElement("beforeend", wrapperElement);

    wrapperElement.insertAdjacentElement("beforeend", buttonCancel);
    wrapperElement.insertAdjacentElement("beforeend", buttonAdd);

    headerModalElement.insertAdjacentElement("beforeend", inputTitle);
    headerModalElement.insertAdjacentElement("beforeend", checkbox);

    containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
    containerApp.insertAdjacentElement("beforeend", modalElement);
};

export default creatorModal;
