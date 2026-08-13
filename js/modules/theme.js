export class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('app_theme') || 'light';
        this.themeToggleBtn = document.getElementById('themeToggleBtn');
        this.themeIcon = document.getElementById('themeIcon');
    }

    init() {
        this.applyTheme(this.currentTheme);

        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => {
                const nextTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(nextTheme);
            });
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (this.themeIcon) {
            if (theme === 'dark') {
                this.themeIcon.className = 'fa-solid fa-sun';
            } else {
                this.themeIcon.className = 'fa-solid fa-moon';
            }
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('app_theme', theme);
        this.applyTheme(theme);
    }
}
