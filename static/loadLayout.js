
document.body.classList.add('loading');

async function loadFragment(path, placeholderId, cacheKey) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        placeholder.innerHTML = cached;
        loadScriptsFromHTML(cached);
        fetch(path)
            .then(r => r.text())
            .then(html => {
                if (html !== cached) {
                    localStorage.setItem(cacheKey, html);
                }
            });
    } else {
        try {
            const response = await fetch(path);
            const html = await response.text();
            placeholder.innerHTML = html;
            localStorage.setItem(cacheKey, html);
            loadScriptsFromHTML(html);
        } catch (err) {
            console.error(`Ошибка загрузки ${cacheKey}:`, err);
        }
    }
}

function loadScriptsFromHTML(html) {
    const scriptTags = html.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi) || [];
    scriptTags.forEach(scriptTag => {
        const srcMatch = scriptTag.match(/src="([^"]*)"/i);
        if (srcMatch && srcMatch[1]) {
            const script = document.createElement('script');
            script.src = srcMatch[1];
            document.body.appendChild(script);
        }
    });
}

function initComponents() {
    function initDateTime() {
        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');

        function updateTime() {
            const now = new Date();
            const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            if (dateElement) dateElement.textContent = now.toLocaleDateString('ru-RU', optionsDate).toUpperCase();
            if (timeElement) timeElement.textContent = now.toLocaleTimeString('ru-RU', optionsTime);
        }

        setInterval(updateTime, 1000);
        updateTime();
    }

    function initIPAddress() {
        const ipElement = document.getElementById('ip-address');
        if (!ipElement) return;

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipElement.textContent = data.ip;
            })
            .catch(() => {
                ipElement.textContent = 'Не удалось загрузить IP';
            });
    }

    function initLanguageSwitcher() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (event) => {
                const selectedLanguage = event.target.value;
                console.log('Selected language:', selectedLanguage);
                // You can add actual language logic here
            });
        }
    }

    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.overlay');

        if (menuToggle && mobileMenu && overlay) {
            menuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                menuToggle.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });

            overlay.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });

            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                });
            });
        }
    }

    function initMobileSubmenus() {
        document.querySelectorAll('.mobile-menu .dropdown-arrow').forEach(arrow => {
            arrow.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const menuItem = this.closest('.menu-item');
                const dropdownMenu = menuItem.querySelector('.dropdown-menu');

                document.querySelectorAll('.mobile-menu .dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('active');
                        menu.previousElementSibling?.querySelector('.dropdown-arrow')?.classList.remove('rotated');
                    }
                });

                dropdownMenu.classList.toggle('active');
                this.classList.toggle('rotated');
            });
        });
    }

    initDateTime();
    initIPAddress();
    initLanguageSwitcher();
    initMobileMenu();
    initMobileSubmenus();
    initScrollUpButton();
    initDropdownMenus();
}

window.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

function initScrollUpButton() {

    let scrollBtn = document.querySelector('.scroll-up-button');

    if (!scrollBtn) {
        scrollBtn = document.createElement('div');
        scrollBtn.className = 'scroll-up-button';
        scrollBtn.innerHTML = '↑';
        scrollBtn.onclick = window.scrollToTop;
        document.body.appendChild(scrollBtn);
    }

    else {
        scrollBtn.onclick = window.scrollToTop;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function initDropdownMenus() {
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        const submenu = item.querySelector(".sub-dropdown-menu");

        if (!submenu) return;

        item.addEventListener("mouseenter", () => {
            submenu.classList.remove("sub-dropdown-menu-left", "sub-dropdown-menu");

            submenu.style.visibility = "hidden";
            submenu.style.display = "block";

            const rect = submenu.getBoundingClientRect();
            const isOverflowing = rect.right > window.innerWidth;

            submenu.style.display = "";
            submenu.style.visibility = "";

            if (isOverflowing) {
                submenu.classList.add("sub-dropdown-menu-left");
            } else {
                submenu.classList.add("sub-dropdown-menu");
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadFragment('/views/header.html', 'header-placeholder', 'cachedHeader_v4');
        await loadFragment('/views/footer.html', 'footer-placeholder', 'cachedFooter_v4');
        initComponents();
        document.body.classList.remove('loading');
    } catch (e) {
        console.error('loadLayout.js failed to initialize:', e);
        document.body.classList.remove('loading');
    }
});
