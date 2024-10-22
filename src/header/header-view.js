import createElement from "../utilities/creator.js";
import {
    headerParams,
    mainTitleParams,
    nightBtnParams,
} from "./params/header-params.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    const mainTitle = createElement(mainTitleParams);
    const nightModeBtn = createElement(nightBtnParams);

    headerElement.insertAdjacentElement("beforeend", mainTitle);
    headerElement.insertAdjacentElement("beforeend", nightModeBtn);
    return headerElement;
};

export default createHeader;
