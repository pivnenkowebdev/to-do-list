import createElement from "../utilities/creator.js";
import {
    fadeBlockParams,
    headerModalParams,
    inputTitleParams,
    modalParams,
} from "./modal-params.js";

const creatorModal = () => {
    const containerApp = document.body;
    const fadeBlockElement = createElement(fadeBlockParams);
    const modalElement = createElement(modalParams);
    const headerModalElement = createElement(headerModalParams);
    const inputTitle = createElement(inputTitleParams);

    modalElement.insertAdjacentElement("beforeend", headerModalElement);
    headerModalElement.insertAdjacentElement("beforeend", inputTitle);

    containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
    containerApp.insertAdjacentElement("beforeend", modalElement);
};

export default creatorModal;
