import createElement from "../utilities/creator.js";
import {
    // modalParams,
    fadeBlockParams,
} from "./modal-params.js";

const creatorModal = () => {
    const containerApp = document.body;
    const fadeBlockElement = createElement(fadeBlockParams);
    containerApp.insertAdjacentElement("beforeend", fadeBlockElement);
};

export default creatorModal;
