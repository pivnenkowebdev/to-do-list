import createElement from "../utilities/creator.js";
import {
    // modalParams
    fadeBlockParams,
} from "./modal-params.js";

const creatorModal = () => {
    // const modalElement = createElement()
    const fadeBlockElement = createElement(fadeBlockParams);

    return fadeBlockElement;
};

export default creatorModal;
