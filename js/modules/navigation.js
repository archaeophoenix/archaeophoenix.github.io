export class NavigationController {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-item');
        this.sections = document.querySelectorAll('.content-section');
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetSection = link.getAttribute('data-section');
                if (targetSection) {
                    this.setActiveSection(targetSection);
                }
            });
        });

        // Sync with URL hash if present
        const initialHash = window.location.hash.replace('#', '');
        if (initialHash) {
            this.setActiveSection(initialHash);
        }
    }

    setActiveSection(sectionId) {
        // Highlight active link
        this.navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll smoothly to section
        const sectionElem = document.getElementById(sectionId);
        if (sectionElem) {
            sectionElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
