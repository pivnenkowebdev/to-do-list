import createElement from "../utilities/creator.js";
import {
    headerParams,
    mainTitleParams,
    nightBtnParams,
    wrapperIconBtnParams,
} from "./params/header-params.js";
import nightMode from "../controller/nightMode.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    const mainTitle = createElement(mainTitleParams);
    const nightModeBtn = createElement(nightBtnParams);
    const wrapperIconElement = createElement(wrapperIconBtnParams);

    headerElement.insertAdjacentElement("beforeend", mainTitle);
    headerElement.insertAdjacentElement("beforeend", nightModeBtn);
    nightModeBtn.insertAdjacentElement("beforeend", wrapperIconElement);

    nightModeBtn.addEventListener("click", nightMode);

    return headerElement;
};

export default createHeader;
