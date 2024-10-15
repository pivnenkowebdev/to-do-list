import createElement from "../utilities/creator.js";
import { headerParams } from "./params/header-params.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    return headerElement;
};

export default createHeader;
