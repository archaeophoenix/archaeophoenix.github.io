import { LanguageManager } from './modules/i18n.js';
import { ComponentRenderer } from './modules/renderer.js';
import { NavigationController } from './modules/navigation.js';
import { ThemeManager } from './modules/theme.js';

class ProfileApp {
    constructor() {
        this.langManager = new LanguageManager();
        this.renderer = new ComponentRenderer(this.langManager);
        this.navController = new NavigationController();
        this.themeManager = new ThemeManager(); // <--- Sudah ada
    }

    start() {
        // Initialize Theme
        this.themeManager.init();

        // Initial rendering & Navigation
        this.renderer.renderAll();
        this.navController.init();

        // Language toggle event listener
        const toggleBtn = document.getElementById('langToggleBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.langManager.toggleLanguage();
                this.renderer.renderAll();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new ProfileApp();
    app.start();
});
