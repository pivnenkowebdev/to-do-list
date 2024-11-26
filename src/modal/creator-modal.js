import createElement from "../utilities/creator.js";
import formDataHandler from "../utilities/data-handler.js";
import {
    buttonAddParams,
    buttonCancelParams,
    checkboxParams,
    fadeBlockParams,
    fakeCheckboxParams,
    headerModalParams,
    inputTitleParams,
    modalParams,
    textareaParams,
    wrapperCheckboxParams,
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
    const wrapperCheckbox = createElement(wrapperCheckboxParams);
    const fakeCheckbox = createElement(fakeCheckboxParams);

    modalElement.insertAdjacentElement("beforeend", headerModalElement);
    modalElement.insertAdjacentElement("beforeend", textarea);
    modalElement.insertAdjacentElement("beforeend", wrapperElement);

    wrapperElement.insertAdjacentElement("beforeend", buttonCancel);
    wrapperElement.insertAdjacentElement("beforeend", buttonAdd);

    headerModalElement.insertAdjacentElement("beforeend", inputTitle);
    headerModalElement.insertAdjacentElement("beforeend", wrapperCheckbox);
    wrapperCheckbox.insertAdjacentElement("beforeend", checkbox);
    wrapperCheckbox.insertAdjacentElement("beforeend", fakeCheckbox);

    containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
    containerApp.insertAdjacentElement("beforeend", modalElement);

    modalElement.addEventListener("submit", formDataHandler(modalElement));
};

export default creatorModal;
