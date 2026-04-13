# 新闻网站优化实施清单

## 📋 任务分解与进度追踪

---

## 🔴 高优先级任务（Critical）

### 1. 安全漏洞修复

#### 1.1 XSS 防护
- [ ] **任务 1.1.1**: 添加 DOMPurify 库
  - 文件：`news-site.html` `<head>` 部分
  - 操作：添加 `<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js"></script>`
  - 预计时间：10 分钟

- [ ] **任务 1.1.2**: 清理所有 innerHTML 使用
  - 文件：`news-site.js`
  - 位置：第 588 行、第 467 行等
  - 操作：使用 `DOMPurify.sanitize()` 包装用户输入
  ```javascript
  // 修改前
  element.innerHTML = content;
  
  // 修改后
  element.innerHTML = DOMPurify.sanitize(content);
  ```
  - 预计时间：1 小时

#### 1.2 输入验证
- [ ] **任务 1.2.1**: 搜索输入长度限制
  - 文件：`news-site.html`
  - 修改：
  ```html
  <input type="text" 
         id="news-search-input" 
         maxlength="100"
         data-lang-key="search_news_placeholder" 
         placeholder="搜索新闻...">
  ```
  - 预计时间：15 分钟

- [ ] **任务 1.2.2**: 邮箱格式验证
  - 文件：`news-site.js`
  - 位置：第 681-689 行
  - 修改：
  ```javascript
  document.querySelector('.newsletter-btn')?.addEventListener('click', () => {
      const email = document.querySelector('.newsletter-input').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email) {
          showNotification(getTranslation('enter_email') || '请输入邮箱');
      } else if (!emailRegex.test(email)) {
          showNotification(getTranslation('invalid_email') || '请输入有效的邮箱地址');
      } else {
          showNotification(getTranslation('subscribe_success') || '订阅成功！');
          document.querySelector('.newsletter-input').value = '';
      }
  });
  ```
  - 预计时间：30 分钟

- [ ] **任务 1.2.3**: 添加翻译文本
  - 文件：`translations.js`
  - 操作：为三种语言添加 `invalid_email` 翻译
  - 预计时间：15 分钟

#### 1.3 多语言搜索修复
- [ ] **任务 1.3.1**: 修复搜索大小写转换问题
  - 文件：`news-site.js`
  - 位置：第 443 行
  - 修改：
  ```javascript
  // 按搜索词筛选
  if (state.searchQuery) {
      const query = state.searchQuery.trim().toLowerCase();
      filteredArticles = filteredArticles.filter(article => {
          const lang = state.currentLanguage;
          const title = typeof article.title === 'object' 
              ? article.title[lang] || article.title.cn 
              : article.title;
          const excerpt = typeof article.excerpt === 'object' 
              ? article.excerpt[lang] || article.excerpt.cn 
              : article.excerpt;
          
          // 对英文内容进行大小写不敏感匹配
          return title.toLowerCase().includes(query) || 
                 excerpt.toLowerCase().includes(query);
      });
  }
  ```
  - 预计时间：30 分钟

---

### 2. 性能优化

#### 2.1 图片懒加载
- [ ] **任务 2.1.1**: 添加 loading="lazy" 属性
  - 文件：`news-site.js`
  - 位置：`createNewsCard()` 函数（第 474-508 行）
  - 修改：
  ```javascript
  <div class="news-card-image">
      <img src="${article.image}" 
           alt="${title}" 
           loading="lazy">
      ${article.isBreaking ? '...' : ''}
  </div>
  ```
  - 预计时间：20 分钟

- [ ] **任务 2.1.2**: 详情页图片懒加载
  - 文件：`news-site.js`
  - 位置：`viewNewsDetail()` 函数（第 587 行）
  - 修改：
  ```javascript
  document.getElementById('article-featured-image')
      .setAttribute('src', article.image);
  document.getElementById('article-featured-image')
      .setAttribute('alt', title + ' - 新闻图片');
  document.getElementById('article-featured-image')
      .setAttribute('loading', 'lazy');
  ```
  - 预计时间：15 分钟

#### 2.2 响应式图片
- [ ] **任务 2.2.1**: 实现 srcset 支持
  - 文件：`news-site.js`
  - 位置：`createNewsCard()` 函数
  - 修改：
  ```javascript
  const imageBase = article.image.split('?')[0];
  const imageParams = article.image.split('?')[1] || '';
  
  <img srcset="${imageBase}?w=400&${imageParams} 400w,
               ${imageBase}?w=800&${imageParams} 800w"
       sizes="(max-width: 600px) 400px, 800px"
       src="${article.image}" 
       alt="${title}"
       loading="lazy">
  ```
  - 预计时间：45 分钟

#### 2.3 CSS/JS 压缩
- [ ] **任务 2.3.1**: 创建压缩版本
  - 工具：使用 CSSNano 和 Terser
  - 操作：
  ```bash
  # 安装工具
  npm install -g cssnano terser
  
  # 压缩 CSS
  cssnano news-site.css news-site.min.css
  
  # 压缩 JS
  terser news-site.js -o news-site.min.js -c -m
  ```
  - 预计时间：30 分钟

- [ ] **任务 2.3.2**: 更新 HTML 引用
  - 文件：`news-site.html`
  - 修改：
  ```html
  <link rel="stylesheet" href="news-site.min.css">
  <script src="news-site.min.js"></script>
  ```
  - 预计时间：10 分钟

---

### 3. 可访问性改进

#### 3.1 ALT 文本规范
- [ ] **任务 3.1.1**: 新闻卡片图片 ALT
  - 文件：`news-site.js`
  - 位置：`createNewsCard()` 函数
  - 修改：已在图片懒加载任务中完成
  
- [ ] **任务 3.1.2**: 详情页图片 ALT
  - 文件：`news-site.js`
  - 位置：`viewNewsDetail()` 函数
  - 修改：已在性能优化任务中完成
  - 预计时间：15 分钟

#### 3.2 ARIA 标签增强
- [ ] **任务 3.2.1**: 添加区域标签
  - 文件：`news-site.html`
  - 修改：
  ```html
  <aside class="news-sidebar" aria-label="侧边栏 - 热门新闻和分类">
  <section class="news-list-section" aria-label="新闻列表">
  <div class="news-grid" id="news-grid" aria-live="polite" aria-atomic="true">
  ```
  - 预计时间：20 分钟

- [ ] **任务 3.2.2**: 模态框可访问性
  - 文件：`news-site.html`
  - 修改：
  ```html
  <div class="modal news-modal" 
       id="news-modal" 
       role="dialog" 
       aria-modal="true" 
       aria-labelledby="article-title">
  ```
  - 预计时间：15 分钟

#### 3.3 焦点管理
- [ ] **任务 3.3.1**: 添加焦点样式
  - 文件：`news-site.css`
  - 位置：文件末尾
  - 添加：
  ```css
  /* 焦点样式 - 可访问性 */
  button:focus, 
  a:focus, 
  input:focus, 
  [tabindex]:focus {
      outline: 3px solid var(--primary-green);
      outline-offset: 2px;
  }
  
  /* 移除默认焦点轮廓，使用自定义样式 */
  button:focus-visible,
  a:focus-visible {
      outline: 3px solid var(--primary-green);
      outline-offset: 2px;
  }
  ```
  - 预计时间：20 分钟

- [ ] **任务 3.3.2**: 模态框焦点陷阱
  - 文件：`news-site.js`
  - 位置：`viewNewsDetail()` 函数末尾
  - 添加：
  ```javascript
  // 焦点陷阱
  const modal = document.getElementById('news-modal');
  const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function trapFocus(e) {
      if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
          }
      }
      if (e.key === 'Escape') {
          modal.classList.remove('show');
          document.body.style.overflow = '';
      }
  }

  modal.addEventListener('keydown', trapFocus);
  firstFocusable.focus();
  ```
  - 预计时间：45 分钟

---

## 🟡 中优先级任务（High）

### 4. SEO 优化

#### 4.1 元数据完善
- [ ] **任务 4.1.1**: 优化 Title 标签
  - 文件：`news-site.html`
  - 修改：
  ```html
  <title>缅甸新闻_最新时事_科技_经济_体育新闻 - 敏廷凯新闻网</title>
  ```
  - 预计时间：10 分钟

- [ ] **任务 4.1.2**: 添加 Open Graph 标签
  - 文件：`news-site.html`
  - 位置：`<head>` 部分
  - 添加：
  ```html
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yoursite.com/news-site/">
  <meta property="og:title" content="缅甸新闻网 - 最新时事报道">
  <meta property="og:description" content="提供缅甸最新政治、经济、科技、体育新闻，支持缅文、中文、英文三语阅读">
  <meta property="og:image" content="https://yoursite.com/news-site/images/og-image.jpg">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://yoursite.com/news-site/">
  <meta name="twitter:title" content="缅甸新闻网 - 最新时事报道">
  <meta name="twitter:description" content="提供缅甸最新政治、经济、科技、体育新闻">
  <meta name="twitter:image" content="https://yoursite.com/news-site/images/twitter-image.jpg">
  ```
  - 预计时间：30 分钟

#### 4.2 结构化数据
- [ ] **任务 4.2.1**: 添加 Schema.org 标记
  - 文件：`news-site.html`
  - 位置：`<head>` 部分末尾
  - 添加：
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "敏廷凯新闻网",
    "url": "https://yoursite.com/news-site/",
    "logo": "https://yoursite.com/logo.png",
    "description": "提供缅甸最新政治、经济、科技、体育新闻",
    "languages": ["my", "zh-CN", "en"],
    "sameAs": [
      "https://www.facebook.com/yoursite",
      "https://twitter.com/yoursite"
    ]
  }
  </script>
  ```
  - 预计时间：30 分钟

- [ ] **任务 4.2.2**: 文章结构化数据（动态）
  - 文件：`news-site.js`
  - 位置：`viewNewsDetail()` 函数
  - 添加：
  ```javascript
  // 添加文章结构化数据
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
      "articleBody": content,
      "keywords": article.tags.map(tag => 
          typeof tag === 'object' ? tag[lang] || tag.cn : tag
      ).join(', ')
  };
  
  // 移除旧的结构化数据
  const oldScript = document.getElementById('article-schema');
  if (oldScript) oldScript.remove();
  
  // 添加新的结构化数据
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'article-schema';
  script.textContent = JSON.stringify(articleSchema);
  document.head.appendChild(script);
  ```
  - 预计时间：45 分钟

#### 4.3 H1 标签优化
- [ ] **任务 4.3.1**: 添加页面主标题
  - 文件：`news-site.html`
  - 位置：第 93 行附近
  - 修改：
  ```html
  <section class="news-list-section">
      <div class="section-header">
          <h1 data-lang-key="latest_news" style="font-size: 1.8rem; margin: 0;">最新新闻</h1>
          <!-- 原 h2 改为 h3 或删除 -->
  ```
  - 预计时间：15 分钟

---

### 5. 用户体验提升

#### 5.1 加载状态
- [ ] **任务 5.1.1**: 添加骨架屏
  - 文件：`news-site.css`
  - 添加：
  ```css
  /* 骨架屏加载样式 */
  .skeleton {
      background: linear-gradient(
          90deg,
          var(--light-gray) 0%,
          var(--medium-gray) 50%,
          var(--light-gray) 100%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s ease-in-out infinite;
  }
  
  @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
  }
  
  .skeleton-title {
      height: 24px;
      border-radius: 4px;
      margin-bottom: 10px;
  }
  
  .skeleton-text {
      height: 16px;
      border-radius: 4px;
      margin-bottom: 8px;
  }
  
  .skeleton-image {
      height: 200px;
      border-radius: 8px;
  }
  ```
  - 预计时间：30 分钟

- [ ] **任务 5.1.2**: 实现骨架屏显示
  - 文件：`news-site.js`
  - 修改 `renderNewsList()` 函数，在数据加载前显示骨架屏
  - 预计时间：45 分钟

#### 5.2 搜索优化
- [ ] **任务 5.2.1**: 添加搜索防抖
  - 文件：`news-site.js`
  - 添加：
  ```javascript
  // 防抖函数
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
  
  // 搜索处理（带防抖）
  const debouncedSearch = debounce(() => {
      performSearch();
  }, 300);
  
  // 在 setupEventListeners 中修改
  document.getElementById('news-search-input')?.addEventListener('input', debouncedSearch);
  ```
  - 预计时间：30 分钟

- [ ] **任务 5.2.2**: 空搜索提示
  - 文件：`news-site.js`
  - 修改 `performSearch()` 函数：
  ```javascript
  function performSearch() {
      const searchInput = document.getElementById('news-search-input');
      state.searchQuery = searchInput.value.trim();
      
      if (!state.searchQuery) {
          showNotification(getTranslation('enter_search_query') || '请输入搜索关键词');
          return;
      }
      
      state.currentPage = 1;
      renderNewsList();
  }
  ```
  - 预计时间：15 分钟

#### 5.3 移动端优化
- [ ] **任务 5.3.1**: 增大触摸目标
  - 文件：`news-site.css`
  - 修改：
  ```css
  .category-tab {
      padding: 12px 20px; /* 原 10px 20px */
      min-height: 44px; /* 新增 */
  }
  
  .view-btn {
      min-width: 44px; /* 新增 */
      min-height: 44px; /* 新增 */
  }
  ```
  - 预计时间：20 分钟

- [ ] **任务 5.3.2**: 添加滚动提示
  - 文件：`news-site.css`
  - 添加：
  ```css
  .category-tabs {
      position: relative;
  }
  
  .category-tabs::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 30px;
      background: linear-gradient(to right, transparent, var(--white));
      pointer-events: none;
      opacity: 0.8;
  }
  ```
  - 预计时间：20 分钟

---

## 🟢 低优先级任务（Medium）

### 6. 功能扩展

#### 6.1 评论系统（模拟）
- [ ] **任务 6.1.1**: 添加评论数据结构
  - 文件：`news-site.js`
  - 添加：
  ```javascript
  const newsComments = {
      1: [ // 文章 ID 1 的评论
          {
              id: 1,
              author: '张三',
              content: '很好的文章！',
              date: '2025-01-15',
              likes: 5
          },
          // 更多评论...
      ],
      // 其他文章的评论...
  };
  ```
  - 预计时间：30 分钟

- [ ] **任务 6.1.2**: 实现评论显示
  - 文件：`news-site.js`
  - 在 `viewNewsDetail()` 中添加评论渲染
  - 预计时间：1 小时

#### 6.2 收藏功能
- [ ] **任务 6.2.1**: 添加收藏按钮
  - 文件：`news-site.html`
  - 位置：文章详情页
  - 添加：
  ```html
  <button class="btn-bookmark" aria-label="收藏文章">
      <i class="far fa-bookmark"></i>
  </button>
  ```
  - 预计时间：20 分钟

- [ ] **任务 6.2.2**: 实现收藏逻辑
  - 文件：`news-site.js`
  - 使用 localStorage 存储收藏
  - 预计时间：45 分钟

---

### 7. 内容优化

#### 7.1 分类计数动态化
- [ ] **任务 7.1.1**: 计算真实文章数
  - 文件：`news-site.js`
  - 添加：
  ```javascript
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
  ```
  - 预计时间：30 分钟

- [ ] **任务 7.1.2**: 更新侧边栏显示
  - 文件：`news-site.js`
  - 在初始化时调用并更新 DOM
  - 预计时间：30 分钟

---

## 📊 进度追踪表

| 优先级 | 任务分类 | 已完成 | 总任务 | 完成率 |
|--------|----------|--------|--------|--------|
| 🔴 高 | 安全修复 | 0 | 6 | 0% |
| 🔴 高 | 性能优化 | 0 | 5 | 0% |
| 🔴 高 | 可访问性 | 0 | 6 | 0% |
| 🟡 中 | SEO 优化 | 0 | 5 | 0% |
| 🟡 中 | 用户体验 | 0 | 6 | 0% |
| 🟢 低 | 功能扩展 | 0 | 4 | 0% |
| 🟢 低 | 内容优化 | 0 | 2 | 0% |
| **总计** | | **0** | **34** | **0%** |

---

## 🎯 里程碑

### 里程碑 1：安全加固（预计 4 小时）
- [ ] 所有 XSS 漏洞修复
- [ ] 输入验证完善
- [ ] 多语言搜索正常

### 里程碑 2：性能提升（预计 3 小时）
- [ ] 图片懒加载实现
- [ ] 响应式图片支持
- [ ] CSS/JS 压缩完成

### 里程碑 3：可访问性达标（预计 2 小时）
- [ ] ARIA 标签完善
- [ ] 焦点管理实现
- [ ] ALT 文本规范

### 里程碑 4：SEO 优化完成（预计 2 小时）
- [ ] 元数据完善
- [ ] 结构化数据添加
- [ ] H1 标签优化

### 里程碑 5：用户体验提升（预计 3 小时）
- [ ] 加载状态显示
- [ ] 搜索体验优化
- [ ] 移动端适配改进

---

## 📝 使用说明

1. **任务执行顺序**：按照优先级从高到低执行
2. **进度更新**：完成每个任务后勾选复选框
3. **时间记录**：记录实际用时，与预估时间对比
4. **质量保证**：每个任务完成后进行测试

---

*创建日期：2025-01-15*  
*最后更新：2025-01-15*
