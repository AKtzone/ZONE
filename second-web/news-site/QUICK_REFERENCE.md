# 新闻网站优化 - 快速参考卡

## 🔥 5 分钟快速修复

### 1. 添加 XSS 防护（3 分钟）
```html
<!-- news-site.html <head> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js"></script>
```

### 2. 添加邮箱验证（2 分钟）
```javascript
// news-site.js 订阅按钮事件
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('请输入有效的邮箱地址');
    return;
}
```

### 3. 图片懒加载（2 分钟）
```javascript
// createNewsCard() 函数中
<img src="${article.image}" loading="lazy" alt="${title}">
```

### 4. 搜索防抖（3 分钟）
```javascript
// 添加防抖函数
function debounce(fn, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), wait);
    };
}

// 使用
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
```

### 5. 焦点样式（1 分钟）
```css
/* news-site.css */
button:focus, a:focus {
    outline: 3px solid var(--primary-green);
    outline-offset: 2px;
}
```

---

## 🎯 关键文件位置

| 文件 | 路径 | 用途 |
|------|------|------|
| 评估报告 | [`QUALITY_ASSESSMENT_REPORT.md`](file://z:\THING\AndroidStudioProjects\second-web\news-site\QUALITY_ASSESSMENT_REPORT.md) | 详细问题清单 |
| 任务清单 | [`OPTIMIZATION_CHECKLIST.md`](file://z:\THING\AndroidStudioProjects\second-web\news-site\OPTIMIZATION_CHECKLIST.md) | 实施步骤 |
| JS 补丁 | [`optimization-patch.js`](file://z:\THING\AndroidStudioProjects\second-web\news-site\optimization-patch.js) | 安全 + 性能 |
| HTML 补丁 | [`html-optimization-patch.html`](file://z:\THING\AndroidStudioProjects\second-web\news-site\html-optimization-patch.html) | SEO + 可访问性 |
| CSS 补丁 | [`css-optimization-patch.css`](file://z:\THING\AndroidStudioProjects\second-web\news-site\css-optimization-patch.css) | 样式优化 |

---

## ⚠️ 高危问题 TOP 5

### 1. XSS 攻击风险 🔴
**位置**：`news-site.js` 多处 `innerHTML`  
**修复**：使用 `DOMPurify.sanitize()`  
**优先级**：🔴 立即修复

### 2. 输入验证缺失 🔴
**位置**：搜索框、邮箱订阅  
**修复**：添加长度限制和格式验证  
**优先级**：🔴 立即修复

### 3. 外部资源无完整性 🔴
**位置**：Font Awesome CDN  
**修复**：添加 `integrity` 属性  
**优先级**：🔴 立即修复

### 4. 图片无懒加载 🟡
**位置**：所有新闻卡片  
**修复**：添加 `loading="lazy"`  
**优先级**：🟡 本周完成

### 5. 焦点管理缺失 🟡
**位置**：新闻详情模态框  
**修复**：实现焦点陷阱  
**优先级**：🟡 本周完成

---

## 📊 核心指标

### 当前状态
```
综合得分：76/100
安全性：65/100 🔴
性能：70/100 🟡
SEO：70/100 🟡
可访问性：75/100 🟡
```

### 优化目标
```
综合得分：95/100
安全性：95/100 ✅
性能：95/100 ✅
SEO：95/100 ✅
可访问性：95/100 ✅
```

---

## 🛠️ 必备工具

### 开发工具
```bash
# 安装压缩工具
npm install -g cssnano terser

# 压缩 CSS
cssnano news-site.css news-site.min.css

# 压缩 JS
terser news-site.js -o news-site.min.js -c -m
```

### 测试工具
- Google Lighthouse（性能 + SEO）
- WAVE（可访问性）
- OWASP ZAP（安全）

---

## 📝 代码片段

### XSS 防护
```javascript
function escapeHTML(str) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, m => map[m]);
}
```

### 邮箱验证
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email) {
    return emailRegex.test(email);
}
```

### 响应式图片
```javascript
function generateSrcset(url) {
    const base = url.split('?')[0];
    const params = url.split('?')[1] || '';
    return `${base}?w=400&${params} 400w,
            ${base}?w=800&${params} 800w`;
}
```

### 焦点陷阱
```javascript
class FocusTrap {
    constructor(element) {
        this.element = element;
        this.focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        this.firstFocusable = this.focusableElements[0];
        this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    }
    
    activate() {
        this.firstFocusable.focus();
        this.element.addEventListener('keydown', this.handleKeydown.bind(this));
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
            this.element.classList.remove('show');
        }
    }
}
```

---

## 🎓 最佳实践

### HTML
- ✅ 使用语义化标签
- ✅ 添加 ARIA 标签
- ✅ 包含 meta 描述
- ✅ 结构化数据

### CSS
- ✅ 使用 CSS 变量
- ✅ 移动端优先
- ✅ 减少重排重绘
- ✅ 响应式图片

### JavaScript
- ✅ 事件委托
- ✅ 防抖节流
- ✅ 懒加载
- ✅ 错误处理

---

## 📞 快速检查清单

### 发布前检查
- [ ] XSS 防护已添加
- [ ] 输入验证正常
- [ ] 图片懒加载启用
- [ ] 焦点样式正确
- [ ] 错误处理完善
- [ ] 移动端测试通过
- [ ] 键盘导航正常
- [ ] 屏幕阅读器测试

### 性能检查
- [ ] 文件已压缩
- [ ] 图片已优化
- [ ] 缓存策略正确
- [ ] CDN 配置合理
- [ ] 首屏加载 < 1s

### SEO 检查
- [ ] Title 优化
- [ ] Meta 描述完整
- [ ] 结构化数据添加
- [ ] 网站地图生成
- [ ] robots.txt 配置

---

## 🚀 一键命令

### 压缩所有资源
```bash
# 压缩 CSS
cssnano news-site.css news-site.min.css

# 压缩 JS
terser news-site.js -o news-site.min.js -c -m

# 查看文件大小
ls -lh *.min.*
```

### 性能测试
```bash
# 使用 Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:8080/news-site/ --view
```

---

## 📈 监控指标

### 性能指标
- FCP < 1.0s
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### 业务指标
- 跳出率 < 40%
- 平均停留时间 > 3 分钟
- 页面浏览量 > 5

---

**最后更新**：2025-01-15  
**维护人员**：开发团队  
**文档版本**：v1.0
