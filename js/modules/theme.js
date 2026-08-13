export class ThemeManager {
    constructor() {
        // Cek LocalStorage atau preferensi sistem (opsional)
        this.currentTheme = localStorage.getItem('theme') || 'light';
    }

    init() {
        // Terapkan tema ke elemen <html>
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Buat atau pasang event listener pada tombol tema
        this.setupThemeToggle();
    }

    setupThemeToggle() {
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer) return;

        // Cek apakah tombol sudah ada di HTML atau belum
        let themeBtn = document.getElementById('themeToggleBtn');
        
        if (!themeBtn) {
            // Jika belum ada di HTML, buat secara otomatis dan letakkan sebelum tombol bahasa
            const wrapper = document.createElement('div');
            wrapper.className = 'theme-switch-wrapper';
            wrapper.innerHTML = `
                <button id="themeToggleBtn" class="lang-btn" title="Toggle Dark/Light Mode">
                    <i id="themeIcon" class="fa-solid ${this.currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
                </button>
            `;
            
            const langWrapper = navContainer.querySelector('.lang-switch-wrapper');
            if (langWrapper) {
                navContainer.insertBefore(wrapper, langWrapper);
            } else {
                navContainer.appendChild(wrapper);
            }
            
            themeBtn = document.getElementById('themeToggleBtn');
        } else {
            // Jika tombol sudah ada di HTML, sesuaikan ikon awalnya
            this.updateButtonIcon();
        }

        // Tambahkan event click
        themeBtn.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateButtonIcon();
    }

    updateButtonIcon() {
        const icon = document.getElementById('themeIcon');
        if (icon) {
            if (this.currentTheme === 'dark') {
                icon.className = 'fa-solid fa-sun';
            } else {
                icon.className = 'fa-solid fa-moon';
            }
        }
    }
}