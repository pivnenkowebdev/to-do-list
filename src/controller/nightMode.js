// import { containerApp } from "../utilities/init";

const containerApp = document.body;
const bodyClassList = ["dark", "bg-gray-900"];

const nightMode = () => {
    bodyClassList.forEach((className) => {
        containerApp.classList.toggle(className);
    });
};

export default nightMode;
