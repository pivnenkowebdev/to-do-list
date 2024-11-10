import createElement from "../utilities/creator.js";
import {
    buttonAddNoteParams,
    buttonAddNoteIconParams,
} from "./button-add-note-params.js";
import createModal from "../modal/creator-modal.js";

const createbuttonAddNote = () => {
    const buttonElement = createElement(buttonAddNoteParams);
    const noteIconElement = createElement(buttonAddNoteIconParams);

    buttonElement.insertAdjacentElement("beforeend", noteIconElement);
    buttonElement.addEventListener("click", createModal);

    return buttonElement;
};

export default createbuttonAddNote;
