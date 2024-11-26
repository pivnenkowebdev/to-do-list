// 1. Получить форму из DOM +
// 2. С помощью обьекта formData получить данные из форм
// 3. Обработать данные из формы, подготовить к созранению в локалку
// 4. Создать структуру для хранения данных
const dataNotes = {
    favoritesNotes: [],
    regularNotes: [],
};

const setDataToStorage = (data) => {
    const dataJson = JSON.stringify(data);
    const keyLocal = "notes";
    localStorage.setItem(keyLocal, dataJson);
};

const formDataHandler = (formElement) => {
    console.log(formElement);
};

setDataToStorage(dataNotes);
export default formDataHandler;
