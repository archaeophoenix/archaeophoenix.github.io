import { skillsData, experienceDataKeys, portfolioData, educationDataKeys } from './data.js';

export class ComponentRenderer {
    constructor(langManager) {
        this.langManager = langManager;
    }

    renderAll() {
        this.updateStaticTranslations();
        this.renderSkills();
        this.renderExperience();
        this.renderPortfolio();
        this.renderEducation();
    }

    updateStaticTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(elem => {
            const key = elem.getAttribute('data-i18n');
            elem.textContent = this.langManager.getTranslation(key);
        });
        document.getElementById('currentLangLabel').textContent = this.langManager.currentLang.toUpperCase();
    }

    renderSkills() {
        const container = document.getElementById('skillsGrid');
        if (!container) return;
        
        container.innerHTML = skillsData.map(group => {
            const categoryName = this.langManager.getTranslation(`skills.${group.key}`);
            const tagsHtml = group.items.map(item => `<span class="tag">${item}</span>`).join('');
            return `
                <div class="skill-card">
                    <div class="skill-category-title"><i class="${group.icon}"></i> ${categoryName}</div>
                    <div class="tags-wrapper">${tagsHtml}</div>
                </div>
            `;
        }).join('');
    }

    renderExperience() {
        const container = document.getElementById('experienceTimeline');
        if (!container) return;

        container.innerHTML = experienceDataKeys.map(exp => {
            const role = this.langManager.getTranslation(exp.roleKey);
            const company = this.langManager.getTranslation(exp.companyKey);
            const period = this.langManager.getTranslation(exp.periodKey);
            const descList = this.langManager.getTranslation(exp.descKey);

            const bullets = Array.isArray(descList) 
                ? descList.map(item => `<li>${item}</li>`).join('') 
                : '';

            return `
                <div class="timeline-item">
                    <div class="job-role">${role}</div>
                    <div class="job-company">${company}</div>
                    <div class="job-period">${period}</div>
                    <ul class="bullet-list">${bullets}</ul>
                </div>
            `;
        }).join('');
    }

    renderPortfolio() {
        const container = document.getElementById('portfolioGrid');
        if (!container) return;

        const visitText = this.langManager.getTranslation('portfolio.visit');

        container.innerHTML = portfolioData.map(item => `
            <div class="portfolio-card">
                <div>
                    <div class="portfolio-title">${item.title}</div>
                    <div class="portfolio-desc">${item.desc}</div>
                </div>
                <a href="${item.url}" target="_blank" class="portfolio-link">
                    ${visitText} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `).join('');
    }

    renderEducation() {
        const container = document.getElementById('educationList');
        if (!container) return;

        container.innerHTML = educationDataKeys.map(edu => {
            const degree = this.langManager.getTranslation(edu.degreeKey);
            const school = this.langManager.getTranslation(edu.schoolKey);
            const year = this.langManager.getTranslation(edu.yearKey);

            return `
                <div class="edu-card">
                    <div>
                        <div class="edu-degree">${degree}</div>
                        <div class="edu-school">${school}</div>
                    </div>
                    <div class="edu-year">${year}</div>
                </div>
            `;
        }).join('');
    }
}
