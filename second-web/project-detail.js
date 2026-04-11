// 项目详情页面 JavaScript - 使用共享翻译系统

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
    
    // 设置语言切换功能
    setupLanguageSwitcher();
    
    // 设置导航菜单功能
    setupNavigation();
    
    // 加载项目数据
    loadProjectData();
    
    // 监听语言切换事件
    window.addEventListener('languageChanged', function(e) {
        updateProjectContentByLanguage(e.detail.language);
    });
});

// 初始化页面
function initPage() {
    // 从 localStorage 读取语言设置并初始化
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    // 隐藏加载动画
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loading');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    }, 800);
    
    // 设置页面标题和描述
    updatePageMetadata();
    
    // 设置面包屑导航
    setupBreadcrumb();
    
    // 设置平滑滚动
    setupSmoothScroll();
}

// 更新页面元数据
function updatePageMetadata() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'corporate-website';
    
    // 根据项目 ID 获取对应的翻译键前缀
    const translationKeyPrefix = `project_${projectId.replace('-', '_')}`;
    
    // 根据项目 ID 设置不同的页面标题和描述
    const projectData = getProjectData(projectId);
    
    if (projectData) {
        const lang = currentLanguage || localStorage.getItem('preferredLanguage') || 'my';
        
        // 设置页面标题
        const titlePrefix = getTranslation('project_detail', lang);
        const projectTitleText = getTranslation(`${translationKeyPrefix}_title`, lang);
        document.title = `${projectTitleText} | ${getTranslation('logo', lang)}`;
        
        // 设置页面描述
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', projectData.description);
        }
    }
}

// 设置语言切换功能
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // 使用共享的 updateLanguage 函数
            if (typeof updateLanguage === 'function') {
                updateLanguage(lang);
            }
            
            // 更新项目详情页面的动态内容
            setTimeout(() => {
                updateProjectContentByLanguage(lang);
            }, 100);
        });
    });
}

// 更新项目详情页面的动态内容 - 使用项目专属翻译键
function updateProjectContentByLanguage(lang) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'corporate-website';
    
    // 根据项目 ID 获取对应的翻译键前缀
    const translationKeyPrefix = `project_${projectId.replace('-', '_')}`;
    
    const projectData = getProjectData(projectId);
    
    if (projectData) {
        // 从 translations.js 获取翻译后的文本
        const projectTitleText = getTranslation(`${translationKeyPrefix}_title`, lang);
        const projectDesc = getTranslation(`${translationKeyPrefix}_desc`, lang);
        const projectOverviewText = getTranslation(`${translationKeyPrefix}_overview`, lang);
        const projectDateText = getTranslation(`${translationKeyPrefix}_date`, lang);
        const projectDurationText = getTranslation(`${translationKeyPrefix}_duration`, lang);
        const projectCategoryText = getTranslation(`${translationKeyPrefix}_category`, lang);
        
        // 更新项目类型徽章
        const projectBadge = document.querySelector('.project-badge');
        if (projectBadge) {
            const typeKey = `project_type_${projectId.replace('-', '_')}`;
            projectBadge.textContent = getTranslation(typeKey, lang) || getTranslation('project_type', lang);
        }
        
        // 更新项目标题
        const projectTitle = document.getElementById('project-title');
        if (projectTitle) {
            projectTitle.textContent = projectTitleText;
        }
        
        // 更新项目概述
        const projectOverview = document.getElementById('project-overview');
        if (projectOverview) {
            projectOverview.textContent = projectDesc;
        }
        
        // 更新日期、持续时间和类别
        const projectDate = document.getElementById('project-date');
        if (projectDate) {
            projectDate.textContent = projectDateText;
        }
        
        const projectDuration = document.getElementById('project-duration');
        if (projectDuration) {
            projectDuration.textContent = projectDurationText;
        }
        
        const projectCategory = document.getElementById('project-category');
        if (projectCategory) {
            projectCategory.textContent = projectCategoryText;
        }
        
        // 更新项目概述内容
        const overviewContent = document.getElementById('overview-content');
        if (overviewContent) {
            overviewContent.textContent = projectOverviewText;
        }
        
        // 更新功能特点 - 使用项目专属翻译键
        const featuresContainer = document.getElementById('features-content');
        if (featuresContainer) {
            featuresContainer.innerHTML = projectData.features.map((feature, index) => {
                const featureKey = `${translationKeyPrefix}_feature${index + 1}`;
                return `
                    <div class="feature-item">
                        <h3 data-lang-key="${featureKey}_title">${getTranslation(featureKey + '_title', lang)}</h3>
                        <p data-lang-key="${featureKey}_desc">${getTranslation(featureKey + '_desc', lang)}</p>
                    </div>
                `;
            }).join('');
        }
        
        // 更新设计亮点 - 使用项目专属翻译键
        const designContainer = document.getElementById('design-content');
        if (designContainer) {
            designContainer.innerHTML = projectData.designHighlights.map((design, index) => {
                const designKey = `${translationKeyPrefix}_design${index + 1}`;
                return `
                    <div class="design-item">
                        <i class="${design.icon}"></i>
                        <h3 data-lang-key="${designKey}_title">${getTranslation(designKey + '_title', lang)}</h3>
                        <p data-lang-key="${designKey}_desc">${getTranslation(designKey + '_desc', lang)}</p>
                    </div>
                `;
            }).join('');
        }
        
        // 更新实施过程 - 使用项目专属翻译键
        const processContainer = document.getElementById('process-content');
        if (processContainer) {
            processContainer.innerHTML = projectData.process.map((step, index) => {
                const processKey = `${translationKeyPrefix}_process${index + 1}`;
                return `
                    <div class="process-step">
                        <h3 data-lang-key="${processKey}_title">${getTranslation(processKey + '_title', lang)}</h3>
                        <p data-lang-key="${processKey}_desc">${getTranslation(processKey + '_desc', lang)}</p>
                    </div>
                `;
            }).join('');
        }
        
        // 更新成果展示 - 使用项目专属翻译键
        const resultsContainer = document.getElementById('results-content');
        if (resultsContainer) {
            resultsContainer.innerHTML = projectData.results.map((result, index) => {
                const resultKey = `${translationKeyPrefix}_result${index + 1}`;
                return `
                    <div class="gallery-item">
                        <img src="${result.image}" alt="${result.title}">
                        <div class="gallery-caption">
                            <span data-lang-key="${resultKey}_title">${getTranslation(resultKey + '_title', lang)}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// 设置导航菜单功能
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // 切换汉堡菜单动画
            this.classList.toggle('active');
        });
    }
    
    // 关闭菜单当点击菜单项时
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
            }
        });
    });
}

// 设置面包屑导航
function setupBreadcrumb() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'corporate-website';
    
    // 根据项目 ID 获取对应的翻译键前缀
    const translationKeyPrefix = `project_${projectId.replace('-', '_')}`;
    
    // 可以根据项目 ID 动态更新面包屑导航
    const projectData = getProjectData(projectId);
    const lang = currentLanguage || localStorage.getItem('preferredLanguage') || 'my';
    
    if (projectData) {
        const breadcrumbItems = document.querySelectorAll('.breadcrumb li');
        if (breadcrumbItems.length >= 3) {
            const breadcrumbSpan = breadcrumbItems[2].querySelector('span');
            if (breadcrumbSpan) {
                const projectTitleText = getTranslation(`${translationKeyPrefix}_title`, lang);
                breadcrumbSpan.textContent = projectTitleText;
            }
        }
    }
}

// 设置平滑滚动
function setupSmoothScroll() {
    // 为内部链接添加平滑滚动效果
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 加载项目数据
function loadProjectData() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'corporate-website';
    
    const projectData = getProjectData(projectId);
    
    if (projectData) {
        // 更新页面内容
        updateProjectContent(projectData);
        
        // 更新页面元数据
        updatePageMetadata();
    }
}

// 获取项目数据
function getProjectData(projectId) {
    const projects = {
        'corporate-website': {
            title: "企业官网项目",
            description: "这是一个现代化的企业官网项目，采用响应式设计，支持多语言切换，为企业提供专业的在线展示平台。",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024 年 1 月",
            duration: "3 个月",
            category: "企业网站",
            overview: "本项目是为一家跨国企业设计的官方网站，旨在展示企业形象、产品服务和最新动态。网站采用现代化的设计语言，结合企业品牌色彩，打造专业、可信的在线展示平台。项目历时 3 个月完成，从需求分析到最终上线，全程采用敏捷开发流程。",
            features: [
                {
                    key: "feature1",
                    title: "响应式设计",
                    description: "适配各种设备屏幕，确保在手机、平板和电脑上都有良好的浏览体验。"
                },
                {
                    key: "feature2",
                    title: "多语言支持", 
                    description: "支持缅文、中文和英文三种语言，满足不同地区用户的需求。"
                },
                {
                    key: "feature3",
                    title: "SEO 优化",
                    description: "采用搜索引擎优化技术，提高网站在搜索结果中的排名。"
                },
                {
                    key: "feature4",
                    title: "快速加载",
                    description: "优化图片和代码，确保页面快速加载，提升用户体验。"
                }
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts", "Responsive Design", "SEO Optimization"],
            designHighlights: [
                {
                    icon: "fas fa-palette",
                    key: "design1",
                    title: "现代化设计",
                    description: "采用扁平化设计风格，简洁大方，符合现代审美趋势。"
                },
                {
                    icon: "fas fa-mobile-alt",
                    key: "design2",
                    title: "移动优先",
                    description: "采用移动优先的设计理念，确保在移动设备上的最佳体验。"
                },
                {
                    icon: "fas fa-users",
                    key: "design3",
                    title: "用户体验",
                    description: "注重用户体验设计，提供直观易用的界面和流畅的交互。"
                }
            ],
            process: [
                {
                    key: "process1",
                    title: "需求分析",
                    description: "与企业沟通，明确项目需求和目标，制定详细的项目计划。"
                },
                {
                    key: "process2",
                    title: "设计阶段",
                    description: "创建网站原型和视觉设计，与企业确认设计方案。"
                },
                {
                    key: "process3",
                    title: "开发实现",
                    description: "按照设计稿进行前端开发，实现所有功能模块。"
                },
                {
                    key: "process4",
                    title: "测试优化",
                    description: "进行全面测试，优化性能和用户体验。"
                },
                {
                    key: "process5",
                    title: "上线部署",
                    description: "将网站部署到服务器，完成最终上线。"
                }
            ],
            results: [
                {
                    key: "result1",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    title: "首页设计"
                },
                {
                    key: "result2",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    title: "产品页面"
                },
                {
                    key: "result3",
                    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    title: "移动端适配"
                }
            ]
        },
        'ecommerce-website': {
            title: "购物网站项目",
            description: "这是一个高级购物网站项目，提供完整的在线购物体验，包括商品展示、购物车、支付等功能。",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024 年 2 月",
            duration: "4 个月",
            category: "电商网站",
            overview: "本项目是为一家零售企业设计的在线购物平台，提供完整的电商解决方案。",
            features: [
                { key: "feature1", title: "商品管理", description: "支持商品分类、搜索、筛选和详细展示功能。" },
                { key: "feature2", title: "购物车系统", description: "完整的购物车功能，支持商品添加、删除和数量修改。" },
                { key: "feature3", title: "在线支付", description: "集成多种支付方式，确保交易安全可靠。" },
                { key: "feature4", title: "订单管理", description: "完整的订单处理流程，支持订单跟踪和状态更新。" }
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Payment API"],
            designHighlights: [
                { icon: "fas fa-shopping-cart", key: "design1", title: "购物体验优化", description: "专注于提升用户购物体验，简化购买流程。" },
                { icon: "fas fa-credit-card", key: "design2", title: "支付安全", description: "采用先进的支付安全技术，保护用户交易信息。" },
                { icon: "fas fa-truck", key: "design3", title: "物流跟踪", description: "集成物流跟踪功能，实时更新订单状态。" }
            ],
            process: [
                { key: "process1", title: "需求调研", description: "深入了解用户购物习惯和需求，制定功能规划。" },
                { key: "process2", title: "原型设计", description: "创建交互原型，优化购物流程和用户体验。" },
                { key: "process3", title: "系统开发", description: "开发前后端功能，实现完整的电商系统。" },
                { key: "process4", title: "支付集成", description: "集成支付接口，确保交易安全可靠。" },
                { key: "process5", title: "上线运营", description: "部署上线，进行运营维护和功能优化。" }
            ],
            results: [
                { key: "result1", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "商品列表页" },
                { key: "result2", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "购物车页面" },
                { key: "result3", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "支付流程" }
            ]
        },
        'news-portal': {
            title: "新闻门户网站",
            description: "这是一个现代化的新闻门户网站，提供实时新闻更新、分类浏览和个性化推荐功能。",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024 年 3 月",
            duration: "2 个月",
            category: "新闻网站",
            overview: "本项目是为一家新闻媒体机构设计的门户网站，提供实时新闻更新、分类浏览、搜索功能和个性化推荐。",
            features: [
                { key: "feature1", title: "实时更新", description: "支持新闻内容的实时更新和推送功能。" },
                { key: "feature2", title: "分类浏览", description: "按新闻类别进行分类，方便用户快速找到感兴趣的内容。" },
                { key: "feature3", title: "搜索功能", description: "强大的搜索功能，支持关键词搜索和高级筛选。" },
                { key: "feature4", title: "个性化推荐", description: "基于用户阅读习惯的个性化新闻推荐。" }
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "REST API", "Elasticsearch", "Redis"],
            designHighlights: [
                { icon: "fas fa-newspaper", key: "design1", title: "内容优先", description: "以新闻内容为核心，优化阅读体验和内容展示。" },
                { icon: "fas fa-search", key: "design2", title: "智能搜索", description: "强大的搜索功能，支持模糊匹配和语义搜索。" },
                { icon: "fas fa-bell", key: "design3", title: "实时推送", description: "实时新闻推送功能，确保用户及时获取最新资讯。" }
            ],
            process: [
                { key: "process1", title: "内容规划", description: "规划新闻分类和内容结构，确定网站架构。" },
                { key: "process2", title: "界面设计", description: "设计新闻阅读界面，优化内容展示效果。" },
                { key: "process3", title: "功能开发", description: "开发新闻管理、搜索和推荐功能。" },
                { key: "process4", title: "性能优化", description: "优化网站性能，确保快速加载和流畅浏览。" },
                { key: "process5", title: "内容上线", description: "部署上线，进行内容管理和运营维护。" }
            ],
            results: [
                { key: "result1", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "新闻首页" },
                { key: "result2", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "新闻详情页" },
                { key: "result3", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "搜索页面" }
            ]
        },
        'education-website': {
            title: "教育学习平台项目",
            description: "专业的在线教育与学习管理平台，聚焦课程体系建设、教学资源整合与学习效果评估。",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024 年 4 月",
            duration: "4 个月",
            category: "教育平台",
            overview: "本项目是为教育机构打造的专业化在线学习平台，重点建设完整的课程体系、丰富的教学资源和科学的学习评估系统。平台涵盖课程介绍、教学资源库、学习路径规划、教育解决方案等核心模块，为师生提供沉浸式的教与学体验。项目历时 4 个月，采用以学习者为中心的设计理念，确保教育内容的专业性和学习体验的有效性。",
            features: [
                { 
                    key: "feature1", 
                    title: "课程体系展示", 
                    description: "系统化的课程分类与介绍，包含课程大纲、教学目标、适用人群和先修要求，帮助学习者清晰了解课程结构。"
                },
                { 
                    key: "feature2", 
                    title: "教学资源中心", 
                    description: "整合多媒体教学资源，包括教学视频、电子教材、课件下载、习题库和参考文献，支持教师便捷上传和管理。"
                },
                { 
                    key: "feature3", 
                    title: "学习路径规划", 
                    description: "根据学习目标和基础水平，为学习者推荐个性化的学习路径，包含课程顺序建议、时间规划和学习资源配给。"
                },
                { 
                    key: "feature4", 
                    title: "教育解决方案", 
                    description: "针对不同教育场景（K12、职业教育、企业培训）提供定制化的教学解决方案和课程包。"
                },
                {
                    key: "feature5",
                    title: "学习评估系统",
                    description: "包含在线测验、作业提交、自动评分、成绩分析和学习报告，帮助教师评估教学效果。"
                },
                {
                    key: "feature6",
                    title: "师生互动社区",
                    description: "提供课程讨论区、问答板块和学习小组功能，促进师生交流和同伴学习。"
                }
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Node.js", "MongoDB", "WebRTC", "SCORM"],
            designHighlights: [
                { 
                    icon: "fas fa-graduation-cap", 
                    key: "design1", 
                    title: "以学习者为中心", 
                    description: "界面设计遵循教育心理学原则，减少认知负荷，提升学习专注度和信息吸收效率。"
                },
                { 
                    icon: "fas fa-chalkboard-teacher", 
                    key: "design2", 
                    title: "教学专业性", 
                    description: "突出教育内容本身，采用清晰的信息层级和导航结构，便于教师组织教学和学习者查找资源。"
                },
                { 
                    icon: "fas fa-chart-line", 
                    key: "design3", 
                    title: "学习数据可视化", 
                    description: "通过图表直观展示学习进度、成绩趋势和能力图谱，帮助学习者了解自身学习状况。"
                },
                {
                    icon: "fas fa-mobile-alt",
                    key: "design4",
                    title: "多终端适配",
                    description: "支持电脑、平板和手机等多种设备，确保学习者可以随时随地进行学习。"
                }
            ],
            process: [
                { 
                    key: "process1", 
                    title: "教育需求调研", 
                    description: "深入分析目标学习者群体特征、学习目标和教学场景，与教育专家共同确定功能需求和内容框架。"
                },
                { 
                    key: "process2", 
                    title: "课程体系设计", 
                    description: "与学科专家合作，设计科学的课程结构、学习路径和评估标准，确保教育内容的专业性和系统性。"
                },
                { 
                    key: "process3", 
                    title: "教学资源开发", 
                    description: "协助教师制作和整理教学视频、课件、习题等教学资源，建立标准化的资源库管理体系。"
                },
                { 
                    key: "process4", 
                    title: "平台功能实现", 
                    description: "开发课程管理、学习跟踪、评估测试等核心功能，集成视频播放、在线测试和互动社区模块。"
                },
                { 
                    key: "process5", 
                    title: "教学试点与优化", 
                    description: "在真实教学环境中进行试点运行，收集师生反馈，持续优化平台功能和用户体验。"
                },
                {
                    key: "process6",
                    title: "全面推广与培训",
                    description: "组织教师培训，编写使用手册，建立技术支持体系，确保平台顺利投入使用。"
                }
            ],
            results: [
                { 
                    key: "result1", 
                    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                    title: "课程分类导航页" 
                },
                { 
                    key: "result2", 
                    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                    title: "课程详情与资源页" 
                },
                { 
                    key: "result3", 
                    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                    title: "学习路径规划页" 
                },
                {
                    key: "result4",
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    title: "学习评估与报告页"
                }
            ]
        }
    };
    
    return projects[projectId] || projects['corporate-website'];
}

// 更新项目内容
function updateProjectContent(projectData) {
    // 获取当前语言
    const lang = currentLanguage || localStorage.getItem('preferredLanguage') || 'my';
    
    // 根据项目 ID 获取对应的翻译键前缀
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'corporate-website';
    const translationKeyPrefix = `project_${projectId.replace('-', '_')}`;
    
    // 从 translations.js 获取翻译后的文本
    const projectTitleText = getTranslation(`${translationKeyPrefix}_title`, lang);
    const projectDesc = getTranslation(`${translationKeyPrefix}_desc`, lang);
    const projectOverviewText = getTranslation(`${translationKeyPrefix}_overview`, lang);
    const projectDateText = getTranslation(`${translationKeyPrefix}_date`, lang);
    const projectDurationText = getTranslation(`${translationKeyPrefix}_duration`, lang);
    const projectCategoryText = getTranslation(`${translationKeyPrefix}_category`, lang);
    
    // 更新项目头部信息
    const projectTitle = document.getElementById('project-title');
    const projectOverview = document.getElementById('project-overview');
    const projectImage = document.getElementById('project-image');
    const projectDate = document.getElementById('project-date');
    const projectDuration = document.getElementById('project-duration');
    const projectCategory = document.getElementById('project-category');
    
    if (projectTitle) projectTitle.textContent = projectTitleText;
    if (projectOverview) projectOverview.textContent = projectDesc;
    if (projectImage) projectImage.src = projectData.image;
    if (projectDate) projectDate.textContent = projectDateText;
    if (projectDuration) projectDuration.textContent = projectDurationText;
    if (projectCategory) projectCategory.textContent = projectCategoryText;
    
    // 更新项目概述
    const overviewContent = document.getElementById('overview-content');
    if (overviewContent) {
        overviewContent.textContent = projectOverviewText;
    }
    
    // 更新功能特点 - 使用项目专属翻译键
    const featuresContainer = document.getElementById('features-content');
    if (featuresContainer) {
        featuresContainer.innerHTML = projectData.features.map((feature, index) => {
            // 构建项目专属的翻译键，如 project_education_website_feature1_title
            const featureKey = `${translationKeyPrefix}_feature${index + 1}`;
            return `
                <div class="feature-item">
                    <h3 data-lang-key="${featureKey}_title">${getTranslation(featureKey + '_title', lang)}</h3>
                    <p data-lang-key="${featureKey}_desc">${getTranslation(featureKey + '_desc', lang)}</p>
                </div>
            `;
        }).join('');
    }
    
    // 更新设计亮点 - 使用项目专属翻译键
    const designContainer = document.getElementById('design-content');
    if (designContainer) {
        designContainer.innerHTML = projectData.designHighlights.map((design, index) => {
            const designKey = `${translationKeyPrefix}_design${index + 1}`;
            return `
                <div class="design-item">
                    <i class="${design.icon}"></i>
                    <h3 data-lang-key="${designKey}_title">${getTranslation(designKey + '_title', lang)}</h3>
                    <p data-lang-key="${designKey}_desc">${getTranslation(designKey + '_desc', lang)}</p>
                </div>
            `;
        }).join('');
    }
    
    // 更新实施过程 - 使用项目专属翻译键
    const processContainer = document.getElementById('process-content');
    if (processContainer) {
        processContainer.innerHTML = projectData.process.map((step, index) => {
            const processKey = `${translationKeyPrefix}_process${index + 1}`;
            return `
                <div class="process-step">
                    <h3 data-lang-key="${processKey}_title">${getTranslation(processKey + '_title', lang)}</h3>
                    <p data-lang-key="${processKey}_desc">${getTranslation(processKey + '_desc', lang)}</p>
                </div>
            `;
        }).join('');
    }
    
    // 更新成果展示 - 使用项目专属翻译键
    const resultsContainer = document.getElementById('results-content');
    if (resultsContainer) {
        resultsContainer.innerHTML = projectData.results.map((result, index) => {
            const resultKey = `${translationKeyPrefix}_result${index + 1}`;
            return `
                <div class="gallery-item">
                    <img src="${result.image}" alt="${result.title}">
                    <div class="gallery-caption">
                        <span data-lang-key="${resultKey}_title">${getTranslation(resultKey + '_title', lang)}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// 页面滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (navbar) {
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    }
});
