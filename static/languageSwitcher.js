function initLanguageSwitcher() {
    const languageSelector = document.getElementById("language-select");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    const rulesFrame = document.getElementById("rulesFrame");

    // Если селектор языка не найден, пропускаем
    if (!languageSelector) {
        console.warn("Переключатель языка (#language-select) не найден на странице.");
        return;
    }

    // Функция смены языка
    const setLanguage = (lang) => {
        localStorage.setItem("selectedLanguage", lang);

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-translate");
            element.textContent = translations[lang]?.[key] || `Missing translation: ${key}`;
        });

        if (rulesFrame) {
            let iframeSrc = "";
            if (lang === "kz") {
                iframeSrc = "kk.html";
            } else if (lang === "ru") {
                iframeSrc = "ru.html";
            } else if (lang === "en") {
                iframeSrc = "en.html";
            }
            rulesFrame.src = "";
            setTimeout(() => {
                rulesFrame.src = iframeSrc;
            }, 100);
        }

        // Dispatch updated event
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }));
    };

    // Устанавливаем язык из localStorage или по умолчанию "kz"
    const savedLanguage = localStorage.getItem("selectedLanguage") || "kz";
    languageSelector.value = savedLanguage;
    setLanguage(savedLanguage);

    // Добавляем обработчик события для переключения языка
    languageSelector.addEventListener("change", (event) => setLanguage(event.target.value));
}

// Инициализируем после подгрузки хедера
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();

    fetch('/views/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initLanguageSwitcher(); // Повторная инициализация
        });
});
