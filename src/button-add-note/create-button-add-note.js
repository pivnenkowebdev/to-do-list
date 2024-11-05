import createElement from "../utilities/creator.js";
import {
    buttonAddNoteParams,
    buttonAddNoteIconParams,
} from "./button-add-note-params.js";

const createbuttonAddNote = () => {
    const buttonElement = createElement(buttonAddNoteParams);
    const noteIconElement = createElement(buttonAddNoteIconParams);

    buttonElement.insertAdjacentElement("beforeend", noteIconElement);

    return buttonElement;
};

export default createbuttonAddNote;
