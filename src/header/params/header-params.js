const headerParams = {
    tagName: "header",
    classList: [
        "header",
        "flex",
        "justify-between",
        "items-center",
        "py-3",
        "container",
        "border-b-2",
        "border-cyan-600",
        "dark:border-white",
    ],
};

const mainTitleParams = {
    tagName: "h1",
    classList: [
        "text-cyan-500",
        "text-2xl",
        "font-medium",
        "capitalize",
        "font-['Roboto_Slab']",
        "dark:text-white",
    ],
    text: "to-do",
};

const nightBtnParams = {
    tagName: "button",
    classList: [
        "w-10",
        "h-10",
        "rounded-full",
        "bg-cyan-600",
        "flex",
        "justify-center",
        "items-center",
        "dark:bg-white",
    ],
};

const wrapperIconBtnParams = {
    tagName: "span",
    classList: [
        "block",
        "w-7",
        "h-7",
        "bg-[url('.././img/sun-icon.svg')]",
        "dark:bg-[url('.././img/moon.svg')]",
        "bg-no-repeat",
        "bg-contain",
    ],
};

export { headerParams, mainTitleParams, nightBtnParams, wrapperIconBtnParams };
