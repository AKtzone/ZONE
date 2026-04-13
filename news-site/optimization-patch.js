/**
 * 新闻网站优化补丁
 * 包含所有高优先级优化项的快速修复
 * 
 * 使用方法：将此文件内容合并到 news-site.js 中
 */

// ==================== 安全增强 ====================

/**
 * XSS 防护 - 简单的 HTML 转义函数
 * 如果无法使用 DOMPurify，使用此函数作为基础防护
 */
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, m => map[m]);
}

/**
 * 邮箱验证正则表达式
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 搜索词验证
 */
function validateSearchQuery(query) {
    if (!query || query.trim().length === 0) return false;
    if (query.length > 100) return false;
    return true;
}

// ==================== 性能优化 ====================

/**
 * 防抖函数 - 用于搜索优化
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数 - 用于滚动事件
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== 改进的搜索功能 ====================

/**
 * 优化的搜索函数 - 支持多语言
 */
function performSearchOptimized() {
    const searchInput = document.getElementById('news-search-input');
    const query = searchInput.value.trim();
    
    // 验证搜索词
    if (!validateSearchQuery(query)) {
        showNotification(
            getTranslation('enter_search_query') || 
            '请输入搜索关键词（1-100 个字符）'
        );
        return;
    }
    
    state.searchQuery = query;
    state.currentPage = 1;
    renderNewsList();
}

/**
 * 多语言搜索匹配
 */
function matchesSearchQuery(article, query) {
    const lang = state.currentLanguage;
    const queryLower = query.toLowerCase();
    
    // 标题匹配
    const title = typeof article.title === 'object' 
        ? article.title[lang] || article.title.cn 
        : article.title;
    
    // 摘要匹配
    const excerpt = typeof article.excerpt === 'object' 
        ? article.excerpt[lang] || article.excerpt.cn 
        : article.excerpt;
    
    // 内容匹配
    const content = typeof article.content === 'object' 
        ? article.content[lang] || article.content.cn 
        : article.content;
    
    // 标签匹配
    const tags = article.tags.map(tag => 
        typeof tag === 'object' ? tag[lang] || tag.cn : tag
    ).join(' ');
    
    return title.toLowerCase().includes(queryLower) ||
           excerpt.toLowerCase().includes(queryLower) ||
           content.toLowerCase().includes(queryLower) ||
           tags.toLowerCase().includes(queryLower);
}

// ==================== 图片优化 ====================

/**
 * 生成响应式图片 srcset
 */
function generateSrcset(imageUrl) {
    if (!imageUrl) return '';
    
    const baseUrl = imageUrl.split('?')[0];
    const params = imageUrl.split('?')[1] || '';
    
    return `${baseUrl}?w=400&${params} 400w,
            ${baseUrl}?w=800&${params} 800w,
            ${baseUrl}?w=1200&${params} 1200w`;
}

/**
 * 生成响应式图片 sizes
 */
function generateSizes() {
    return '(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px';
}

/**
 * 优化的新闻卡片创建 - 支持懒加载和响应式图片
 */
function createOptimizedNewsCard(article) {
    const lang = state.currentLanguage;
    const title = typeof article.title === 'object' 
        ? article.title[lang] || article.title.cn 
        : article.title;
    const excerpt = typeof article.excerpt === 'object' 
        ? article.excerpt[lang] || article.excerpt.cn 
        : article.excerpt;
    const category = newsCategories.find(c => c.id === article.category);
    const categoryName = category 
        ? (typeof category.name === 'object' 
            ? category.name[lang] || category.name.cn 
            : category.name) 
        : '';
    
    return `
        <div class="news-card ${state.viewMode === 'list' ? 'list-view' : ''}" 
             data-article-id="${article.id}"
             tabindex="0"
             role="article"
             aria-label="${escapeHTML(title)}">
            <div class="news-card-image">
                <img src="${article.image}" 
                     alt="${escapeHTML(title)}"
                     loading="lazy"
                     srcset="${generateSrcset(article.image)}"
                     sizes="${generateSizes()}">
                ${article.isBreaking 
                    ? '<span class="news-card-badge">' + 
                      (getTranslation('breaking_news') || '突发') + 
                      '</span>' 
                    : ''}
            </div>
            <div class="news-card-content">
                <span class="news-card-category">${categoryName}</span>
                <h3 class="news-card-title">${escapeHTML(title)}</h3>
                <p class="news-card-excerpt">${escapeHTML(excerpt)}</p>
                <div class="news-card-meta">
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${article.date}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-eye"></i>
                        <span>${formatNumber(article.views)}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-comment"></i>
                        <span>${article.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== 可访问性增强 ====================

/**
 * 焦点陷阱管理
 */
class FocusTrap {
    constructor(element) {
        this.element = element;
        this.focusableElements = null;
        this.firstFocusable = null;
        this.lastFocusable = null;
        this.previousActiveElement = null;
    }
    
    activate() {
        this.previousActiveElement = document.activeElement;
        this.updateFocusableElements();
        this.addEventListeners();
        this.firstFocusable.focus();
    }
    
    deactivate() {
        this.removeEventListeners();
        if (this.previousActiveElement) {
            this.previousActiveElement.focus();
        }
    }
    
    updateFocusableElements() {
        this.focusableElements = this.element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        this.firstFocusable = this.focusableElements[0];
        this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    }
    
    addEventListeners() {
        this.element.addEventListener('keydown', this.handleKeydown.bind(this));
    }
    
    removeEventListeners() {
        this.element.removeEventListener('keydown', this.handleKeydown.bind(this));
    }
    
    handleKeydown(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === this.firstFocusable) {
                e.preventDefault();
                this.lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === this.lastFocusable) {
                e.preventDefault();
                this.firstFocusable.focus();
            }
        }
        if (e.key === 'Escape') {
            this.deactivate();
            this.element.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
}

// 全局焦点陷阱实例
const modalFocusTrap = new FocusTrap(document.getElementById('news-modal'));

/**
 * 优化的新闻详情显示 - 增强可访问性
 */
function viewNewsDetailAccessible(articleId) {
    const article = state.articles.find(a => a.id === articleId);
    if (!article) return;
    
    const lang = state.currentLanguage;
    const title = typeof article.title === 'object' 
        ? article.title[lang] || article.title.cn 
        : article.title;
    const content = typeof article.content === 'object' 
        ? article.content[lang] || article.content.cn 
        : article.content;
    const category = newsCategories.find(c => c.id === article.category);
    const categoryName = category 
        ? (typeof category.name === 'object' 
            ? category.name[lang] || category.name.cn 
            : category.name) 
        : '';
    
    // 设置内容
    document.getElementById('article-category').innerHTML = 
        `<i class="fas fa-tag"></i><span>${escapeHTML(categoryName)}</span>`;
    document.getElementById('article-title').textContent = title;
    document.getElementById('article-author').textContent = 
        article.author[lang] || article.author.cn;
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-views').textContent = 
        formatNumber(article.views);
    document.getElementById('article-comments').textContent = article.comments;
    document.getElementById('article-featured-image').src = article.image;
    document.getElementById('article-featured-image').alt = title + ' - 新闻图片';
    document.getElementById('article-featured-image').loading = 'lazy';
    document.getElementById('article-content').innerHTML = 
        DOMPurify ? DOMPurify.sanitize(content.replace(/\n/g, '<br>')) : content.replace(/\n/g, '<br>');
    
    // 渲染标签（使用 textContent 避免 XSS）
    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = '';
    article.tags.forEach(tag => {
        const tagName = typeof tag === 'object' ? tag[lang] || tag.cn : tag;
        const tagElement = document.createElement('span');
        tagElement.className = 'article-tag';
        tagElement.textContent = tagName;
        tagsContainer.appendChild(tagElement);
    });
    
    // 添加文章结构化数据
    addArticleSchema(article, title, content, excerpt, lang);
    
    // 显示模态框
    const modal = document.getElementById('news-modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // 激活焦点陷阱
    modalFocusTrap.element = modal;
    modalFocusTrap.activate();
    
    // 屏幕阅读器通知
    announceToScreenReader(`已打开文章：${title}`);
}

/**
 * 屏幕阅读器通知
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    `;
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ==================== SEO 优化 ====================

/**
 * 添加文章结构化数据
 */
function addArticleSchema(article, title, content, excerpt, lang) {
    // 移除旧的结构化数据
    const oldScript = document.getElementById('article-schema');
    if (oldScript) oldScript.remove();
    
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "image": article.image,
        "datePublished": article.date,
        "author": {
            "@type": "Person",
            "name": article.author[lang] || article.author.cn
        },
        "publisher": {
            "@type": "Organization",
            "name": "敏廷凯新闻网",
            "logo": {
                "@type": "ImageObject",
                "url": "https://yoursite.com/logo.png"
            }
        },
        "description": excerpt,
        "articleBody": content.replace(/\n/g, ' '),
        "keywords": article.tags.map(tag => 
            typeof tag === 'object' ? tag[lang] || tag.cn : tag
        ).join(', '),
        "inLanguage": lang === 'my' ? 'my' : lang === 'cn' ? 'zh-CN' : 'en'
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);
}

// ==================== 输入验证 ====================

/**
 * 优化的订阅处理
 */
function handleNewsletterSubscribe() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification(getTranslation('enter_email') || '请输入邮箱');
        emailInput.focus();
        return;
    }
    
    if (!emailRegex.test(email)) {
        showNotification(getTranslation('invalid_email') || '请输入有效的邮箱地址');
        emailInput.focus();
        return;
    }
    
    // 模拟订阅成功
    showNotification(getTranslation('subscribe_success') || '订阅成功！');
    emailInput.value = '';
    
    // 这里可以添加实际的订阅 API 调用
    console.log('订阅邮箱:', email);
}

// ==================== 分类计数优化 ====================

/**
 * 动态计算分类文章数
 */
function getCategoryCounts() {
    const counts = { all: state.articles.length };
    newsCategories.forEach(cat => {
        if (cat.id !== 'all') {
            counts[cat.id] = state.articles.filter(
                a => a.category === cat.id
            ).length;
        }
    });
    return counts;
}

/**
 * 更新侧边栏分类计数
 */
function updateCategoryCounts() {
    const counts = getCategoryCounts();
    const lang = state.currentLanguage;
    
    document.querySelectorAll('.category-item-widget').forEach(item => {
        const category = item.dataset.category;
        if (counts[category] !== undefined) {
            const countSpan = item.querySelector('.count');
            if (countSpan) {
                countSpan.textContent = counts[category];
            }
        }
    });
}

// ==================== 初始化优化 ====================

/**
 * 优化的初始化函数
 */
function initializeOptimized() {
    // 基础初始化
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    state.currentLanguage = typeof currentLanguage !== 'undefined' 
        ? currentLanguage 
        : 'my';
    
    // 渲染内容
    renderBreakingNews();
    renderHeroNews();
    renderNewsList();
    renderHotNews();
    renderPagination();
    
    // 更新分类计数
    updateCategoryCounts();
    
    // 设置事件监听器（使用优化版本）
    setupOptimizedEventListeners();
    
    // 监听语言切换
    window.addEventListener('languageChanged', (e) => {
        state.currentLanguage = e.detail.language;
        renderBreakingNews();
        renderHeroNews();
        renderNewsList();
        renderHotNews();
        updateCategoryCounts();
    });
    
    // 隐藏加载动画
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('新闻网站优化版已初始化');
}

/**
 * 优化的事件监听器设置
 */
function setupOptimizedEventListeners() {
    // 语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (typeof updateLanguage === 'function') {
                updateLanguage(lang);
            }
        });
    });
    
    // 分类切换
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => 
                t.classList.remove('active'));
            tab.classList.add('active');
            state.currentCategory = tab.dataset.category;
            state.currentPage = 1;
            renderNewsList();
        });
    });
    
    // 侧边栏分类
    document.querySelectorAll('.category-item-widget').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.dataset.category;
            state.currentCategory = category;
            state.currentPage = 1;
            renderNewsList();
        });
    });
    
    // 视图模式切换
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => 
                b.classList.remove('active'));
            btn.classList.add('active');
            state.viewMode = btn.dataset.view;
            const newsGrid = document.getElementById('news-grid');
            if (state.viewMode === 'list') {
                newsGrid.classList.add('list-view');
            } else {
                newsGrid.classList.remove('list-view');
            }
        });
    });
    
    // 搜索（使用防抖）
    const debouncedSearch = debounce(performSearchOptimized, 300);
    document.getElementById('news-search-btn')?.addEventListener('click', performSearchOptimized);
    document.getElementById('news-search-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearchOptimized();
    });
    document.getElementById('news-search-input')?.addEventListener('input', debouncedSearch);
    
    // 模态框关闭
    document.querySelectorAll('.modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                const modal = el.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                    modalFocusTrap.deactivate();
                }
            }
        });
    });
    
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
                modalFocusTrap.deactivate();
            }
        });
    });
    
    // 订阅通讯（带验证）
    document.querySelector('.newsletter-btn')?.addEventListener('click', handleNewsletterSubscribe);
    
    // 分享按钮
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('link')) {
                // 复制链接功能
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    showNotification(getTranslation('link_copied') || '链接已复制');
                }).catch(() => {
                    showNotification('复制失败，请手动复制');
                });
            } else {
                showNotification(getTranslation('share_success') || '分享成功');
            }
        });
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K 聚焦搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('news-search-input')?.focus();
        }
    });
}

// ==================== 导出优化函数 ====================

// 如果需要在其他地方使用，可以导出这些函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        escapeHTML,
        debounce,
        throttle,
        performSearchOptimized,
        createOptimizedNewsCard,
        viewNewsDetailAccessible,
        handleNewsletterSubscribe,
        initializeOptimized
    };
}

// ==================== 自动初始化 ====================

// 页面加载完成后自动使用优化版本
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否已有初始化
    if (typeof state !== 'undefined') {
        // 使用优化版本替换原有函数
        console.log('应用优化补丁...');
        
        // 替换搜索函数
        window.performSearch = performSearchOptimized;
        
        // 替换详情查看函数
        window.viewNewsDetail = viewNewsDetailAccessible;
        
        // 替换卡片创建函数
        window.createNewsCard = createOptimizedNewsCard;
        
        // 更新分类计数
        updateCategoryCounts();
        
        console.log('优化补丁应用完成');
    }
});
