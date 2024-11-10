import createbuttonAddNote from "../button-add-note/create-button-add-note.js";
import createHeader from "../header/header-view.js";
import creatorModal from "../modal/creator-modal.js";

const initApp = () => {
    const containerApp = document.body;

    const header = createHeader();
    containerApp.insertAdjacentElement("beforeend", header);

    const buttonAddNote = createbuttonAddNote();
    containerApp.insertAdjacentElement("beforeend", buttonAddNote);

    const modal = creatorModal();
    containerApp.insertAdjacentElement("beforeend", modal);
};

export default initApp;
// export {containerApp}
