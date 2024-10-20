import createElement from "../utilities/creator.js";
import { headerParams, mainTitleParams } from "./params/header-params.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    const mainTitle = createElement(mainTitleParams);

    headerElement.insertAdjacentElement("beforeend", mainTitle);
    return headerElement;
};

export default createHeader;
