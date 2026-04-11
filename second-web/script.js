// 注意：翻译数据已从 translations.js 加载
// currentLanguage 变量已在 translations.js 中定义

document.addEventListener('DOMContentLoaded', function() {
        // 初始化语言（使用 translations.js 中的函数）
        if (typeof initLanguage === 'function') {
            initLanguage();
        }
        
        initSkillProgressBars();
        initScrollAnimations();
    
    // 语言切换按钮事件监听（使用 translations.js 中的 updateLanguage 函数）
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (typeof updateLanguage === 'function') {
                updateLanguage(lang);
            }
            
            // 按钮点击动画
            this.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(1.2)', opacity: 0.8 },
                { transform: 'scale(1)', opacity: 1 }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        });
    });
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            navMenu.animate([
                { opacity: 0, transform: 'translateY(-20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        }
    });
    
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showNotification(currentLanguage === 'my' ? 'ကျေးဇူးပြု၍ အကွက်အားလုံးကို ဖြည့်ပါ။' : 
                  currentLanguage === 'cn' ? '请填写所有字段。' : 
                  'Please fill in all fields.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showNotification(currentLanguage === 'my' ? 'ကျေးဇူးပြု၍ မှန်ကန်သော အီးမေးလ်လိပ်စာကို ထည့်ပါ။' : 
                  currentLanguage === 'cn' ? '请输入有效的电子邮件地址。' : 
                  'Please enter a valid email address.', 'error');
            return;
        }
        
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = currentLanguage === 'my' ? 'စာပို့နေသည်...' : 
                               currentLanguage === 'cn' ? '发送中...' : 
                               'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification(currentLanguage === 'my' ? 'စာပို့ခြင်း အောင်မြင်ပါသည်။ ကျေးဇူးတင်ပါသည်။' : 
                  currentLanguage === 'cn' ? '消息发送成功！谢谢。' : 
                  'Message sent successfully! Thank you.', 'success');
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--primary-green)' : 'var(--accent-red)'};
            color: white;
            padding: 15px 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
            window.scrollTo({
                top: portfolioSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
    
    const projectButtons = document.querySelectorAll('.project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification(currentLanguage === 'my' ? 'ကျေးဇူးပြု၍ ဆက်လက်လုပ်ဆောင်ရန် စီစဉ်ဆဲဖြစ်ပါသည်။' : 
                  currentLanguage === 'cn' ? '此功能正在开发中。' : 
                  'This feature is under development.', 'info');
        });
    });
    
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(5px)';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                const currentLink = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
                if (currentLink) {
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                    });
                    currentLink.classList.add('active');
                }
            }
        });
    });
    
    function initSkillProgressBars() {
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        skillProgressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = '0%';
            bar.setAttribute('data-original-width', percentage);
        });
    }

    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    if (entry.target.classList.contains('skill-progress')) {
                        const targetWidth = entry.target.getAttribute('data-percentage');
                        entry.target.style.width = '0%';
                        setTimeout(() => {
                            entry.target.style.width = targetWidth;
                        }, 300);
                    }
                }
            });
        }, observerOptions);
        
        const animateElements = document.querySelectorAll('.project-card, .about-content, .contact-form');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        const skillProgressBars = document.querySelectorAll('.skill-progress');
        skillProgressBars.forEach(bar => {
            bar.style.opacity = '0';
            bar.style.transform = 'translateY(30px)';
            bar.style.transition = 'opacity 0.6s ease, transform 0.6s ease, width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(bar);
        });
    }
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});