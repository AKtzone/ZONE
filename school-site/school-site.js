const courses = [
    {
        id: 1,
        name: { my: 'ဖရွန့်အင်ဒီဗလပ်မန်းမိတ်ဆက်', cn: '前端开发入门', en: 'Frontend Development Introduction' },
        description: { my: 'ခေတ်သစ်ဝဘ်ဆိုဒ်များကိုတည်ဆောက်ရန် HTML၊ CSS၊ JavaScript အခြေခံဗဟုသုတများ', cn: '学习 HTML、CSS、JavaScript 基础知识，构建现代化网站', en: 'Learn HTML, CSS, JavaScript fundamentals to build modern websites' },
        icon: 'fa-code',
        duration: { my: 'လ 3', cn: '3个月', en: '3 months' },
        targetAudience: { my: 'အနိဒါယအသေးငယ်များ', cn: '零基础学员', en: 'Complete beginners' },
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 2,
        name: { my: 'Python ပရိုဂရမ်မင်းအခြေခံ', cn: 'Python编程基础', en: 'Python Programming Basics' },
        description: { my: 'လက်တွေ့ပရောဂျက်များဖြင့် Python ကိုအခြေခံမရှိဘဲသင်ယူပါ', cn: '从零开始学习Python，包含实战项目', en: 'Learn Python from scratch with practical projects' },
        icon: 'fa-python',
        duration: { my: 'လ 4', cn: '4个月', en: '4 months' },
        targetAudience: { my: 'ပရိုဂရမ်မင်းအနိဒါယများ', cn: '编程初学者', en: 'Programming beginners' },
        image: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600',
        tags: ['Python', 'Programming', 'Data']
    },
    {
        id: 3,
        name: { my: 'ဒေတာခွဲခြမ်းစိတ်ဖြာလက်တွေ့', cn: '数据分析实战', en: 'Data Analysis Practice' },
        description: { my: 'Python နှင့်ပြသခြင်းဖြင့်ဒေတာခွဲခြမ်းစိတ်ဖြာကိုကျွမ်းကျင်ပါ', cn: '掌握Python数据分析和可视化技能', en: 'Master data analysis with Python and visualization' },
        icon: 'fa-chart-bar',
        duration: { my: 'လ 3', cn: '3个月', en: '3 months' },
        targetAudience: { my: 'အလယ်အဆင့်သင်ယူသူများ', cn: '中级学习者', en: 'Intermediate learners' },
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        tags: ['Data Analysis', 'Python', 'Visualization']
    },
    {
        id: 4,
        name: { my: 'UI/UX ဒီဇိုင်းအပြည့်အစုံ', cn: 'UI/UX设计全案', en: 'UI/UX Design Complete' },
        description: { my: 'အပြည့်အစုံ UI/UX ဒီဇိုင်းနိယာမများနှင့်ကိရိယာများ', cn: '全面学习UI/UX设计原则和工具', en: 'Comprehensive UI/UX design principles and tools' },
        icon: 'fa-palette',
        duration: { my: 'လ 4', cn: '4个月', en: '4 months' },
        targetAudience: { my: 'ဒီဇိုင်းစိတ်အားထက်သန်သူများ', cn: '设计爱好者', en: 'Design enthusiasts' },
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
        tags: ['UI/UX', 'Design', 'Figma']
    }
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

function renderCourses(filteredCourses = courses) {
    const coursesGrid = document.getElementById('courses-grid');
    if (!coursesGrid) return;

    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 4rem; margin-bottom: 20px; color: #9ca3af;"></i>
                <p style="font-size: 1.2rem; color: #6b7280;">${getTranslation('school_no_courses') || '没有找到课程'}</p>
            </div>
        `;
        return;
    }

    coursesGrid.innerHTML = filteredCourses.map(course => {
        const name = getLocalizedValue(course.name, currentLanguage);
        const description = getLocalizedValue(course.description, currentLanguage);
        const duration = getLocalizedValue(course.duration, currentLanguage);
        const targetAudience = getLocalizedValue(course.targetAudience, currentLanguage);

        return `
            <div class="course-card">
                <img src="${course.image}" alt="${name}">
                <div class="course-info">
                    <i class="fas ${course.icon} course-icon"></i>
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${duration}</span>
                        <span><i class="fas fa-users"></i> ${targetAudience}</span>
                    </div>
                    <div class="course-tags">
                        ${course.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="course-btn">${getTranslation('school_enroll') || '立即报名'}</a>
                </div>
            </div>
        `;
    }).join('');
}

function setupSearch() {
    const searchInput = document.getElementById('course-search');
    const searchBtn = document.getElementById('search-btn');

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            renderCourses(courses);
            return;
        }

        const filtered = courses.filter(course => {
            const name = getLocalizedValue(course.name, currentLanguage).toLowerCase();
            const description = getLocalizedValue(course.description, currentLanguage).toLowerCase();
            const tags = course.tags.join(' ').toLowerCase();
            return name.includes(query) || description.includes(query) || tags.includes(query);
        });

        renderCourses(filtered);
    };

    searchBtn?.addEventListener('click', handleSearch);
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
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
            renderCourses();

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

    document.getElementById('course-search')?.setAttribute('placeholder', getTranslation('school_search_course') || '搜索课程...');
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
    renderCourses();
    setupSearch();
    setupSmoothScroll();
    setupPageAnimation();

    window.addEventListener('languageChanged', (e) => {
        currentLanguage = e.detail.language;
        updatePageContent();
        renderCourses();
    });

    document.querySelector('.cta-button.primary')?.addEventListener('click', () => {
        document.querySelector('.courses-section')?.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.cta-button.secondary')?.addEventListener('click', () => {
        document.querySelector('.learning-path-section')?.scrollIntoView({ behavior: 'smooth' });
    });
});