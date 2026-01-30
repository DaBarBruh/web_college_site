document.addEventListener("DOMContentLoaded", function () {
    // Данные для модального окна
    const specialties = {
        cybersecurity: {
            title: "АҚПАРАТТЫҚ ҚАУІПСІЗДІК ЖҮЙЕЛЕРІ",
            subtitle: "АҚПАРАТТЫҚ ҚАУІПСІЗДІК ТЕХНИГІ",
            description: `
                <p>Ақпараттық қауіпсіздік жүйелері мамандығы бойынша білім алушыларға ақпараттық жүйелерді қорғау, киберқауіптерді анықтау және олардың алдын алу сияқты кәсіби дағдыларды үйретуге бағытталған. Олар желілерді қорғау, шифрлау технологияларын қолдану және қауіпсіздік аудитін жүргізу сияқты тапсырмаларды орындай алады.</p>
                <p>Оқу барысында студенттер заманауи қауіпсіздік құралдарымен жұмыс істеуді үйренеді. Бұл мамандық ақпараттық технологиялар саласындағы сұранысқа ие мамандықтардың бірі болып табылады.</p>
            `,
            details: `
                <div class="detail-item">
                    <i class="fas fa-book"></i>
                    <p><strong>Мамандық:</strong> 06130100 «АҚПАРАТТЫҚ ҚАУІПСІЗДІК ЖҮЙЕЛЕРІ»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <p><strong>Квалификация:</strong> 4506120103 «Ақпараттық қауіпсіздік технигі»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <p><strong>Оқу мерзімі:</strong> 9 сынып негізінде – 3 жыл 10 ай</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <p><strong>Оқу формасы:</strong> Күндізгі</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe"></i>
                    <p><strong>Оқыту тілі:</strong> Қазақ тілі, орыс тілі</p>
                </div>
            `
        },
        computing: {
            title: "ЕСЕПТЕУ ТЕХНИКАСЫ ЖӘНЕ АҚПАРАТТЫҚ ЖЕЛІЛЕР",
            subtitle: "КОМПЬЮТЕР АППАРАТТЫҚ, ҚАМТАМАСЫЗ ЕТУ ОПЕРАТОРЫ",
            description: `
                <p>Компьютер аппараттық, қамтамасыз ету операторы мамандығы бойынша білім алушыларға компьютерлік желілерді басқару, компьютерлерді жөндеу және техникалық қызмет көрсету, ақпараттық жүйелерді орнату және басқару сияқты кәсіби дағдыларды үйретуге бағытталған. Олар маршрутизаторлар мен коммутаторларды басқару, желілерді жобалау және қауіпсіздікті қамтамасыз ету сияқты кең ауқымды тапсырмаларды орындай алады.</p>
                <p>Оқу барысында студенттер теориялық білімді практикамен ұштастырады, сонымен қатар заманауи IT-жабдықтарымен және бағдарламалық қамтамасыз етумен жұмыс істеуді үйренеді.</p>
            `,
            details: `
                <div class="detail-item">
                    <i class="fas fa-book"></i>
                    <p><strong>Мамандық:</strong> 06120200 «ЕСЕПТЕУ ТЕХНИКАСЫ ЖӘНЕ АҚПАРАТТЫҚ ЖЕЛІЛЕР»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <p><strong>Квалификация:</strong> 4506120102 «Компьютер желілерін басқару операторы»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <p><strong>Оқу мерзімі:</strong> 9 сынып негізінде – 3 жыл 10 ай</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <p><strong>Оқу формасы:</strong> Күндізгі</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe"></i>
                    <p><strong>Оқыту тілі:</strong> Қазақ тілі, орыс тілі</p>
                </div>
            `
        },
        software: {
            title: "БАҒДАРЛАМАЛЫҚ ҚАМТАМАСЫЗ ЕТУ",
            subtitle: "БАҒДАРЛАМАШЫ",
            description: `
                <p>Бағдарламалық қамтамасыз ету мамандығы бойынша білім алушыларға бағдарламалау тілдерін үйрену, қосымшаларды әзірлеу және бағдарламалық жүйелерді тестілеу сияқты дағдыларды үйретуге бағытталған. Олар веб-қосымшаларды, мобильді қосымшаларды және басқа да бағдарламалық өнімдерді жасай алады.</p>
                <p>Оқу барысында студенттер Python, Java, C++ сияқты танымал бағдарламалау тілдерін меңгереді. Бұл мамандық IT саласындағы ең сұранысқа ие мамандықтардың бірі болып табылады.</p>
            `,
            details: `
                <div class="detail-item">
                    <i class="fas fa-book"></i>
                    <p><strong>Мамандық:</strong> 06130100 «БАҒДАРЛАМАЛЫҚ ҚАМТАМАСЫЗ ЕТУ»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <p><strong>Квалификация:</strong> 4506130101 «Бағдарламашы»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <p><strong>Оқу мерзімі:</strong> 9 сынып негізінде – 3 жыл 10 ай</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <p><strong>Оқу формасы:</strong> Күндізгі</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe"></i>
                    <p><strong>Оқыту тілі:</strong> Қазақ тілі, орыс тілі</p>
                </div>
            `
        },
        radio: {
            title: "РАДИОТЕХНИКА, ЭЛЕКТРОНИКА ЖӘНЕ ТЕЛЕКОММУНИКАЦИЯЛАР",
            subtitle: "ТЕЛЕКОММУНИКАЦИЯ ЖЕЛІЛЕРІНІҢ ТЕХНИГІ",
            description: `
                <p>Радиотехника, электроника және телекоммуникациялар мамандығы бойынша білім алушыларға телекоммуникациялық жүйелерді орнату, жөндеу және қызмет көрсету сияқты дағдыларды үйретуге бағытталған. Олар радиожиіліктерді басқару, телекоммуникациялық жабдықтарды орнату және желілерді қызмет көрсету сияқты тапсырмаларды орындай алады.</p>
                <p>Оқу барысында студенттер заманауи телекоммуникациялық технологиялармен жұмыс істеуді үйренеді.</p>
            `,
            details: `
                <div class="detail-item">
                    <i class="fas fa-book"></i>
                    <p><strong>Мамандық:</strong> 07140900 «РАДИОТЕХНИКА, ЭЛЕКТРОНИКА ЖӘНЕ ТЕЛЕКОММУНИКАЦИЯЛАР»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <p><strong>Квалификация:</strong> 4507140901 «Телекоммуникация желілерінің технигі»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <p><strong>Оқу мерзімі:</strong> 9 сынып негізінде – 3 жыл 10 ай</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <p><strong>Оқу формасы:</strong> Күндізгі</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe"></i>
                    <p><strong>Оқыту тілі:</strong> Қазақ тілі, орыс тілі</p>
                </div>
            `
        },
        machinery: {
            title: "МАШИНАЛАР МЕН ЖАБДЫҚТАРДЫ ПАЙДАЛАНУ ЖӘНЕ ТЕХНИКАЛЫҚ ҚЫЗМЕТ КӨРСЕТУ",
            subtitle: "ТЕХНИК-МЕХАНИК",
            description: `
                <p>Машиналар мен жабдықтарды пайдалану және техникалық қызмет көрсету мамандығы бойынша білім алушыларға өнеркәсіптік жабдықтарды басқару, жөндеу және техникалық қызмет көрсету сияқты дағдыларды үйретуге бағытталған. Олар машиналарды диагностикалау, техникалық қызмет көрсету және жөндеу сияқты тапсырмаларды орындай алады.</p>
                <p>Оқу барысында студенттер механикалық жүйелермен және заманауи жабдықтармен жұмыс істеуді үйренеді.</p>
            `,
            details: `
                <div class="detail-item">
                    <i class="fas fa-book"></i>
                    <p><strong>Мамандық:</strong> 07151100 «МАШИНАЛАР МЕН ЖАБДЫҚТАРДЫ ПАЙДАЛАНУ ЖӘНЕ ТЕХНИКАЛЫҚ ҚЫЗМЕТ КӨРСЕТУ»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-certificate"></i>
                    <p><strong>Квалификация:</strong> 4507151101 «Техник-механик»</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <p><strong>Оқу мерзімі:</strong> 9 сынып негізінде – 3 жыл 10 ай</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <p><strong>Оқу формасы:</strong> Күндізгі</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-globe"></i>
                    <p><strong>Оқыту тілі:</strong> Қазақ тілі, орыс тілі</p>
                </div>
            `
        }
    };

    // Слайдер для секции "Мамандықтар"
    const majorsList = document.querySelector('.majors-list');
    const cards = document.querySelectorAll('.major-card');

    // определяем, мобильник ли
    const isMobile = window.matchMedia('(max-width: 480px)').matches;

    if (!isMobile) {
        // НЕ мобильный — запускаем анимацию
        cards.forEach(card => {
            majorsList.appendChild(card.cloneNode(true));
        });

        let animationId, position = 0;
        const speed = 1;
        const cardWidth = 300 + 20;
        const listWidth = cardWidth * cards.length;

        function animate() {
            position -= speed;
            if (Math.abs(position) >= listWidth) position = 0;
            majorsList.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(animate);
        }

        animate();

        majorsList.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
        majorsList.addEventListener('mouseleave', () => animate());

    } else {
        // Мобильник — отключаем клонирование и анимацию, оставляем только CSS-скролл
        majorsList.style.transform = '';
        // (твой CSS уже позволит горизонтально скроллить пальцем)
    }

    // Остановка анимации при наведении
    majorsList.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });

    // Возобновление анимации при уходе курсора


    // Модальное окно
    const specialtyPopup = document.getElementById('specialtyPopup');
    const specialtyTitle = document.getElementById('specialtyTitle');
    const specialtySubtitle = document.getElementById('specialtySubtitle');
    const specialtyDescription = document.getElementById('specialtyDescription');
    const specialtyDetails = document.getElementById('specialtyDetails');
    const closeBtn = document.querySelector('.specialtyPopup-close');
    const specialtyButtons = document.querySelectorAll('.specialty-btn');

    // Открытие модального окна
    specialtyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const specialtyKey = button.getAttribute('data-specialty');
            const specialty = specialties[specialtyKey];

            if (specialty) {
                specialtyTitle.textContent = specialty.title;
                specialtySubtitle.textContent = specialty.subtitle;
                specialtyDescription.innerHTML = specialty.description;
                specialtyDetails.innerHTML = specialty.details;
                specialtyPopup.style.display = 'block';
                setTimeout(() => {
                    specialtyPopup.classList.add('show');
                }, 10);
            }
        });
    });

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener('click', () => {
        specialtyPopup.classList.remove('show');
        setTimeout(() => {
            specialtyPopup.style.display = 'none';
        }, 300);
    });

    // Закрытие модального окна при клике вне контента
    specialtyPopup.addEventListener('click', (event) => {
        if (event.target === specialtyPopup) {
            specialtyPopup.classList.remove('show');
            setTimeout(() => {
                specialtyPopup.style.display = 'none';
            }, 300);
        }
    });

    // Слайдер для секции "Неге біз?"
    const cardsContainer = document.querySelector(".cards-container");
    const dotsContainer = document.querySelector(".slider-dots");
    if (cardsContainer && dotsContainer) {
        const cardsPerPage = 3;
        let currentIndex = 0;
        let allCards = Array.from(document.querySelectorAll(".card"));
        let totalSlides = Math.ceil(allCards.length / cardsPerPage);
        let isPaused = false;

        // Создаем точки на основе количества слайдов
        dotsContainer.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentIndex = i * cardsPerPage;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll(".dot");

        // Функция обновления слайдера
        function updateSlider() {
            cardsContainer.innerHTML = "";
            for (let i = currentIndex; i < currentIndex + cardsPerPage; i++) {
                let cardIndex = i % allCards.length;
                cardsContainer.appendChild(allCards[cardIndex].cloneNode(true));
            }
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === Math.floor(currentIndex / cardsPerPage));
            });
        }

        // Останавливаем автоскролл при наведении
        cardsContainer.addEventListener("mouseenter", () => {
            isPaused = true;
        });

        cardsContainer.addEventListener("mouseleave", () => {
            isPaused = false;
        });

        // Функция для автоматического перелистывания
        function nextSlide() {
            if (!isPaused) {
                currentIndex = (currentIndex + cardsPerPage) % (totalSlides * cardsPerPage);
                updateSlider();
            }
        }

        updateSlider();
        setInterval(nextSlide, 3000);

        // Listen for language changes to update detached original cards
        window.addEventListener("languageChanged", (e) => {
            const lang = e.detail.language;
            if (lang && typeof translations !== 'undefined') {
                allCards.forEach(card => {
                    card.querySelectorAll("[data-translate]").forEach(el => {
                        const key = el.dataset.translate;
                        if (translations[lang] && translations[lang][key]) {
                            el.textContent = translations[lang][key];
                        }
                    });
                });
                updateSlider();
            }
        });
    }

    // Прокрутка к секции "why-us"
    const scrollToWhyUs = document.getElementById("scrollToWhyUs");
    if (scrollToWhyUs) {
        scrollToWhyUs.addEventListener("click", function () {
            const section = document.querySelector(".why-us");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Прокрутка к секции "partners-track"
    const topTrack = document.querySelector(".partners-track.top");
    const bottomTrack = document.querySelector(".partners-track.bottom");

    if (topTrack && bottomTrack) {
        // Дублируем элементы для верхнего трека (налево)
        const topItems = Array.from(topTrack.children);
        topItems.forEach(item => topTrack.appendChild(item.cloneNode(true)));

        // Дублируем элементы для нижнего трека (направо)
        const bottomItems = Array.from(bottomTrack.children);
        bottomItems.forEach(item => bottomTrack.appendChild(item.cloneNode(true)));

        let speed = 1;
        let topPosition = 0;
        let bottomPosition = 0;

        function animatePartners() {
            // Верхний трек движется налево
            topPosition -= speed;
            if (Math.abs(topPosition) >= topTrack.scrollWidth / 2) {
                topPosition = 0;
            }
            topTrack.style.transform = `translateX(${topPosition}px)`;

            // Нижний трек движется направо
            bottomPosition += speed;
            if (bottomPosition >= 0) {
                bottomPosition = -bottomTrack.scrollWidth / 2;
            }
            bottomTrack.style.transform = `translateX(${bottomPosition}px)`;

            requestAnimationFrame(animatePartners);
        }

        animatePartners();
    }

    // Открытие WhatsApp при нажатии на "Түсім келеді"
    const applyNow = document.getElementById("applyNow");
    if (applyNow) {
        applyNow.addEventListener("click", function () {
            window.open("https://wa.me/77071710800?text=%D0%93%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8...", "_blank");
        });
    }

    // Открытие модального окна (для других модалок)
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // Закрытие модального окна (для других модалок)
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