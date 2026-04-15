// Dark Mode Logic
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Language Logic
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'pt-br' ? 'en' : 'pt-br';
    html.setAttribute('lang', newLang);
    localStorage.setItem('preferred-lang', newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load preferred language
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        document.documentElement.setAttribute('lang', savedLang);
    }

    // Navigation Active State Logic
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Event Listeners for Toggles
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');

    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);

    function updateActiveLink() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100; // Offset for fixed header
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

        if (isAtBottom) {
            currentSectionId = 'social';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial check
});
