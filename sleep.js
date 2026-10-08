// Массив цветов радуги: название и HEX-код
const RAINBOW_COLORS = [
    { name: "Красный",    hex: "#FF0000" },
    { name: "Оранжевый",  hex: "#FF7F00" },
    { name: "Жёлтый",     hex: "#FFFF00" },
    { name: "Зелёный",    hex: "#00FF00" },
    { name: "Голубой",    hex: "#00FFFF" },
    { name: "Синий",      hex: "#0000FF" },
    { name: "Фиолетовый", hex: "#8B00FF" }
];

// Инициализация интерфейса выбора цвета
document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("picker");
    const result = document.getElementById("result");

    // Создаём цветовые кружки для каждого цвета радуги
    RAINBOW_COLORS.forEach((color) => {
        const swatch = document.createElement("div");
        swatch.className = "color-swatch";
        swatch.style.backgroundColor = color.hex;
        swatch.title = color.name;
        swatch.setAttribute("role", "button");
        swatch.setAttribute("aria-label", "Выбрать цвет: " + color.name);

        // Обработчик клика — выбор цвета
        swatch.addEventListener("click", () => {
            selectColor(swatch, color);
        });

        picker.appendChild(swatch);
    });

    // Функция выделения выбранного цвета и смены фона страницы
    function selectColor(element, color) {
        // Снимаем выделение со всех кружков
        document.querySelectorAll(".color-swatch.selected")
                .forEach((el) => el.classList.remove("selected"));

        // Выделяем выбранный кружок
        element.classList.add("selected");

        // Меняем фон страницы на полупрозрачный вариант цвета
        document.body.style.backgroundColor = hexToRgba(color.hex, 0.3);

        // Выводим информацию о выбранном цвете
        result.textContent = "Вы выбрали: " + color.name + " (" + color.hex + ")";
    }

    // Вспомогательная функция: HEX -> RGBA
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
});
