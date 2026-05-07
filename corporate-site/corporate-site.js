const services = [
    {
        id: 1,
        name: { my: 'မှတ်တံဆိပ်ပုံရိပ်', cn: '品牌形象', en: 'Brand Image' },
        description: { my: 'ကျွမ်းကျင်သောမှတ်တံဆိပ်ပုံရိပ်ဒီဇိုင်းနှင့်အမြင်အာရုံဆက်သွယ်ရေး', cn: '专业的品牌形象设计与视觉传达', en: 'Professional brand identity design and visual communication' },
        icon: 'fa-paint-brush'
    },
    {
        id: 2,
        name: { my: 'ထုတ်ကုန်ပြသမှု', cn: '产品展示', en: 'Product Display' },
        description: { my: 'ထူးခြားသောအမြင်အာရုံနှင့်အပြန်အလှန်တုံ့ပြန်မှုအင်္ဂါရပ်များဖြင့်ထုတ်ကုန်များကိုပြသပါ', cn: '以精美视觉和互动功能展示产品', en: 'Showcase products with stunning visuals and interactive features' },
        icon: 'fa-box-open'
    },
    {
        id: 3,
        name: { my: 'သတင်းအပเดက်', cn: '新闻动态', en: 'News Updates' },
        description: { my: 'အမြန်သတင်းထုတ်ဝေမှုနှင့်ပါဝင်မှုစီမံခန့်ခွဲမှု', cn: '实时新闻发布与内容管理', en: 'Real-time news publishing and content management' },
        icon: 'fa-newspaper'
    },
    {
        id: 4,
        name: { my: 'ဖောက်သည်ဝန်ဆောင်မှု', cn: '客户服务', en: 'Customer Service' },
        description: { my: 'ကျယ်ပြန့်သောဖောက်သည်အထောက်အပံ့နှင့်တုံ့ပြန်ချက်စနစ်', cn: '全方位客户支持与反馈系统', en: 'Comprehensive customer support and feedback system' },
        icon: 'fa-headset'
    }
];

const techStack = [
    'HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts', 'Responsive Design', 'SEO'
];

currentLanguage = localStorage.getItem('preferredLanguage') || 'my';
document.documentElement.lang = currentLanguage;

function getTranslation(key) {
    if (typeof translations !== 'undefined' && translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}

function getLocalizedValue(obj, lang) {
    if (typeof obj === 'object' && obj[lang]) {
        return obj[lang];
    }
    return obj.cn || obj.my || obj.en || '';
}

function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = services.map(service => {
        const name = getLocalizedValue(service.name, currentLanguage);
        const description = getLocalizedValue(service.description, currentLanguage);

        return `
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
        `;
    }).join('');
}

function renderTechTags() {
    const techTagsContainer = document.getElementById('tech-tags');
    if (!techTagsContainer) return;

    techTagsContainer.innerHTML = techStack.map(tag => `
        <span class="tech-tag">${tag}</span>
    `).join('');
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            document.documentElement.lang = lang;

            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            updatePageContent();
            renderServices();

            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        });
    });
}

function updatePageContent() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        const translation = getTranslation(key);
        if (translation && translation !== key) {
            el.textContent = translation;
        }
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupPageAnimation() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof initLanguage === 'function') {
        initLanguage();
    }

    currentLanguage = typeof currentLanguage !== 'undefined' ? currentLanguage : localStorage.getItem('preferredLanguage') || 'my';
    document.documentElement.lang = currentLanguage;

    setupLanguageSwitcher();
    updatePageContent();
    renderServices();
    renderTechTags();
    setupSmoothScroll();
    setupPageAnimation();

    window.addEventListener('languageChanged', (e) => {
        currentLanguage = e.detail.language;
        updatePageContent();
        renderServices();
    });

    document.querySelector('.cta-button')?.addEventListener('click', () => {
        document.querySelector('.about-section')?.scrollIntoView({ behavior: 'smooth' });
    });
});