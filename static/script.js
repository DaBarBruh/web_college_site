document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function (e) {
            e.preventDefault(); // Отменяет стандартный переход по ссылке

            window.scrollTo({
                top: 0,
                behavior: "smooth" // Делаем прокрутку плавной
            });
        });
    }

    // Scroll Up Button Logic
    const scrollBtn = document.querySelector(".scroll-up-button");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add("visible");
            } else {
                scrollBtn.classList.remove("visible");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Global helper for onclick attribute in HTML (just in case)
    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    document.getElementById("applyNow").addEventListener("click", function () {
        window.open("https://wa.me/77071710800?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8...", "_blank");
    });

    // Открытие модального окна
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // Закрытие модального окна
    document.querySelectorAll(".close, .close-modal").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Закрытие при клике вне модального окна
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

});