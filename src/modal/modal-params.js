const fadeBlockParams = {
    tagName: "div",
    classList: [
        "w-screen",
        "h-screen",
        "bg-[#e2e8f046]",
        "backdrop-blur-sm",
        "absolute",
        "top-0",
        "left-0",
    ],
};

const modalParams = {
    tagName: "form",
    classList: [
        "absolute",
        "bg-white",
        "max-w-[915px]",
        "w-full",
        "rounded-lg",
        "bottom-2/4",
        "right-2/4",
        "translate-x-2/4",
        "translate-y-2/4",
        "py-9",
        "px-7",
    ],
};

const headerModalParams = {
    tagName: "div",
    classList: [
        "flex",
        "max-w-[362px]",
        "gap-2",
        "border-b-2",
        "border-cyan-600",
    ],
};

const inputTitleParams = {
    tagName: "input",
    classList: [],
    attrParams: {
        type: "text",
    },
};

export { fadeBlockParams, modalParams, headerModalParams, inputTitleParams };
