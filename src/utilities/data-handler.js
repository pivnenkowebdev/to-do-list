const keyLocal = "notes";

const setDataToStorage = (key, data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(key, dataJson);
};

const getDataFromStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const formDataHandler = (event, formElement) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const isFavorite = formData.get("checkbox");

    const objectNote = {
        title: formData.get("title"),
        textarea: formData.get("textarea"),
        checkbox: formData.get("checkbox"),
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

const data = initData();

export { data, formDataHandler };
