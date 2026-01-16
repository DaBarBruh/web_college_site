document.addEventListener('DOMContentLoaded', () => {
    const whyUsSection = document.querySelector('.why-us');
    if (!whyUsSection) return;

    const container = whyUsSection.querySelector('.cards-container');
    const nextBtn = whyUsSection.querySelector('.slider-btn.next');
    const prevBtn = whyUsSection.querySelector('.slider-btn.prev');
    const dots = whyUsSection.querySelectorAll('.slider-dots .dot');

    if (!container || !nextBtn || !prevBtn) return;

    const cards = container.querySelectorAll('.card');
    const gap = 40; // Gap from CSS (40px)
    let cardWidth = cards[0]?.offsetWidth || 0;
    let cardsPerView = 4; // По умолчанию показываем 4 карточки
    let scrollAmount = (cardWidth + gap) * cardsPerView;

    // Обновляем ширину карточки и количество видимых карточек
    const updateCardSettings = () => {
        cardWidth = cards[0]?.offsetWidth || 0;
        // Определяем сколько карточек помещается в контейнере
        const containerWidth = container.offsetWidth;
        cardsPerView = Math.max(1, Math.floor(containerWidth / (cardWidth + gap)));
        scrollAmount = (cardWidth + gap) * cardsPerView;
    };

    // Обновляем активные точки
    const updateDots = () => {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.offsetWidth;

        // Рассчитываем активную точку
        let activeDot = 0;
        if (scrollLeft >= maxScroll - 10) { // Если в конце
            activeDot = dots.length - 1;
        } else {
            const cardIndex = Math.round(scrollLeft / scrollAmount);
            activeDot = Math.min(cardIndex, dots.length - 1);
        }

        // Обновляем точки
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDot);
        });
    };

    // Прокрутка к определенной точке
    const scrollToDot = (dotIndex) => {
        const scrollPosition = dotIndex * scrollAmount;
        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    // Инициализация
    updateCardSettings();
    updateDots();

    // Обработчики кнопок
    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Обработчики для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToDot(index);
        });
    });

    // Обновляем при прокрутке
    container.addEventListener('scroll', () => {
        updateDots();

        // Показываем/скрываем кнопки в зависимости от позиции
        const showPrev = container.scrollLeft > 10;
        const showNext = container.scrollLeft < (container.scrollWidth - container.offsetWidth - 10);

        prevBtn.style.opacity = showPrev ? '1' : '0.5';
        prevBtn.style.pointerEvents = showPrev ? 'all' : 'none';

        nextBtn.style.opacity = showNext ? '1' : '0.5';
        nextBtn.style.pointerEvents = showNext ? 'all' : 'none';
    });

    // Обновляем при изменении размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardSettings();
            updateDots();
        }, 200);
    });

    // Инициализация состояния кнопок
    setTimeout(() => {
        container.dispatchEvent(new Event('scroll'));
    }, 100);
});