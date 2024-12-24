// 1. Добавить data в обьект заметок
// 2. Отображать data в рендере
// 3. HTML template element

const clearRender = () => {
    const isList = document.querySelector("#list");

    if (isList) {
        isList.innerHTML = "";
    }
};

const render = (arrNotes) => {
    let isList = document.querySelector("#list");
    if (!isList) {
        isList = document.createElement("ul");
        isList.id = "list";
        document.body.append(isList);
    }

    const listWrapper = document.createDocumentFragment();

    arrNotes.forEach((note) => {
        const template = document.createElement("li");
        template.className = "my-4 max-w-4xl mx-auto";
        template.id = note.id;

        const iconClass = note.checkbox ? "icon-star-gold" : "icon-star-btn";
        const dateString = note.date.substring(0, 10);
        const timeString = note.date.substring(12, note.date.length);

        const noteElement = `
        <article class="border-2 border-cyan-600 rounded-md dark:border-white">
            <div class="flex justify-between pl-2">
                <div class="flex">
                    <h2 class="text-2xl text-cyan-700 mr-4 font-semibold dark:text-cyan-500">${note.title}</h2>
                    <p class="my-auto text-sm text-slate-500 font-semibold dark:text-white" id="date">Заметка создана ${dateString} в ${timeString}</p>
                </div>
                
                <div class= "flex gap-2 pt-1 pr-2">
                    <button class="${iconClass} w-6 h-6 bg-cover bg-no-repeat "></button>
                    <button class="bg-[url('../img/edit-btn.svg')] w-6 h-6 bg-cover bg-no-repeat dark:bg-[url('../img/edit-btn-dark.svg')]"></button>
                    <button class="bg-[url('../img/trash-btn.svg')] w-6 h-6 bg-cover bg-no-repeat dark:bg-[url('../img/trash-btn-dark.svg')]"></button>
                </div>
            </div>

            <p class="pl-2 dark:text-white mb-1">${note.textarea}</p>
        </article>
        `;
        template.innerHTML = noteElement;
        listWrapper.appendChild(template);
        // date.addEventListener("click", () => {
        //     date.endWith("favorite")
        // });
    });

    isList.appendChild(listWrapper);
};

export { render, clearRender };
