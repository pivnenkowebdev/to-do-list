const keyLocal = "notes";

const setDataToStorage = (key, data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(key, dataJson);
};

const getDataFromStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const setDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
};

const setId = (statusNote) => {
    let newId = null;
    if (statusNote) {
        newId = data.favoritesNotes.length + "favorite";
    } else if (!statusNote) {
        newId = data.regularNotes.length + "regular";
    }
    console.log(newId);

    return newId;
};

const formDataHandler = (event, formElement) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const isFavorite = formData.get("checkbox");

    const objectNote = {
        title: formData.get("title"),
        textarea: formData.get("textarea"),
        checkbox: formData.get("checkbox"),
        date: setDate(),
        id: setId(isFavorite),
    };

    isFavorite
        ? data.favoritesNotes.push(objectNote)
        : data.regularNotes.push(objectNote);
    setDataToStorage(keyLocal, data);
};

const initData = () => {
    const isData = getDataFromStorage(keyLocal);
    let data = null;
    if (isData) {
        data = isData;
    } else {
        const dataNotes = {
            favoritesNotes: [],
            regularNotes: [],
        };
        setDataToStorage(keyLocal, dataNotes);
        data = dataNotes;
    }
    return data;
};

// const findNoteObject = (id) => {
//     const isFavoriteId = id.endsWith("favorite");
//     const currentArray = isFavoriteId ? data.favoritesNotes : data.regularNotes;

//     currentArray.forEach((element) => {
//         if (id === element.id) {
//             return element;
//         }
//     });
// };

const removeNote = (id) => {
    const isFavoriteId = id.endsWith("favorite");

    const currentArray = isFavoriteId ? data.favoritesNotes : data.regularNotes;

    const currentId = currentArray.findIndex((el) => el.id == id);

    currentArray.splice(currentId, 1);
    setDataToStorage(keyLocal, data);
};

const data = initData();

export { data, formDataHandler, removeNote };
