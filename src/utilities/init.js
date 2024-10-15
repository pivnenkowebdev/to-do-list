import createHeader from "../header/header-view.js";

const initApp = () => {
    const containerApp = document.body;
    const header = createHeader();
    containerApp.insertAdjacentElement("beforeend", header);
};

export default initApp;
