// Общие функции для всех версий
function updateDateTime() {
    const now = new Date();
    const months = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'];

    document.getElementById('current-date').textContent =
        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    document.getElementById('current-time').textContent =
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}

function getExternalIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        })
        .catch(() => {
            document.getElementById('ip-address').textContent = 'недоступен';
        });
}

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function () {
        const lang = this.dataset.lang;
        document.getElementById('current-language').textContent = lang.toUpperCase();
    });
});

// Мобильное меню - Handled by loadLayout.js (initComponents)

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    dropdownArrows.forEach(arrow => {
        arrow.addEventListener('click', function (e) {
            e.preventDefault();
            const dropdown = this.closest('.menu-link').nextElementSibling;
            dropdown.classList.toggle('active');
            this.classList.toggle('fa-chevron-down');
            this.classList.toggle('fa-chevron-up');
        });
    });
});




function initDesktopDropdowns() {
    const menuItems = document.querySelectorAll('.desktop-menu .menu-item');

    menuItems.forEach((item, index) => {
        const dropdown = item.querySelector('.dropdown-menu');
        let timeoutId;

        if (!dropdown) return;

        // Function to position and show dropdown
        const showDropdown = () => {
            clearTimeout(timeoutId);

            // Remove any existing cloned dropdown for this item
            const existingClone = document.getElementById('cloned-' + index);
            if (existingClone) existingClone.remove();

            // Clone dropdown
            const clonedDropdown = dropdown.cloneNode(true);
            clonedDropdown.id = 'cloned-' + index;
            clonedDropdown.style.cssText = `
                display: block;
                position: absolute;
                z-index: 9999;
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            `;

            // Add hover events to cloned dropdown
            clonedDropdown.addEventListener('mouseenter', () => clearTimeout(timeoutId));
            clonedDropdown.addEventListener('mouseleave', hideDropdown);

            // Setup sub-dropdown hover behavior for cloned menu
            const dropdownItems = clonedDropdown.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(dropdownItem => {
                const subDropdown = dropdownItem.querySelector('.sub-dropdown-menu');
                if (!subDropdown) return;

                dropdownItem.addEventListener('mouseenter', () => {
                    subDropdown.style.opacity = '1';
                    subDropdown.style.visibility = 'visible';
                    subDropdown.style.transform = 'translateX(0)';
                    subDropdown.style.pointerEvents = 'auto';
                });

                dropdownItem.addEventListener('mouseleave', () => {
                    subDropdown.style.opacity = '0';
                    subDropdown.style.visibility = 'hidden';
                    subDropdown.style.transform = 'translateX(10px)';
                    subDropdown.style.pointerEvents = 'none';
                });
            });

            document.body.appendChild(clonedDropdown);

            // Position the dropdown
            const rect = item.getBoundingClientRect();
            clonedDropdown.style.top = (rect.bottom + window.scrollY) + 'px';
            clonedDropdown.style.left = (rect.left + window.scrollX) + 'px';
        };

        // Function to hide dropdown
        const hideDropdown = () => {
            timeoutId = setTimeout(() => {
                const clonedDropdown = document.getElementById('cloned-' + index);
                if (clonedDropdown) {
                    clonedDropdown.remove();
                }
            }, 200);
        };

        // Add events
        item.addEventListener('mouseenter', showDropdown);
        item.addEventListener('mouseleave', hideDropdown);
    });
}

// Инициализация
updateDateTime();
setInterval(updateDateTime, 1000);
getExternalIP();
initDesktopDropdowns();
