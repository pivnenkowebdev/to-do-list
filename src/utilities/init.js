import createbuttonAddNote from "../button-add-note/create-button-add-note.js";
import createHeader from "../header/header-view.js";

const initApp = () => {
    const containerApp = document.body;

    const header = createHeader();
    containerApp.insertAdjacentElement("beforeend", header);

    const buttonAddNote = createbuttonAddNote();
    containerApp.insertAdjacentElement("beforeend", buttonAddNote);
};

export default initApp;
// export {containerApp}
