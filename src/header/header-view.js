import createElement from "../utilities/creator.js";
import {
    headerParams,
    mainTitleParams,
    nightBtnParams,
    wrapperIconBtnParams,
} from "./params/header-params.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    const mainTitle = createElement(mainTitleParams);
    const nightModeBtn = createElement(nightBtnParams);
    const wrapperIconElement = createElement(wrapperIconBtnParams);

    headerElement.insertAdjacentElement("beforeend", mainTitle);
    headerElement.insertAdjacentElement("beforeend", nightModeBtn);
    nightModeBtn.insertAdjacentElement("beforeend", wrapperIconElement);
    return headerElement;
};

export default createHeader;
