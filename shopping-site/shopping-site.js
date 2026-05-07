// 购物网站功能实现

// ==================== 模拟数据 ====================
const categories = [
    {
        id: 'electronics',
        name: { my: 'အီလက်ထရောနစ်', cn: '电子产品', en: 'Electronics' },
        icon: 'fa-mobile-alt',
        count: 12,
        subcategories: [
            { id: 'phones', name: { my: 'ဖုန်းများ', cn: '手机', en: 'Phones' }, count: 5 },
            { id: 'laptops', name: { my: 'လက်ပ်တော့ပ်များ', cn: '笔记本电脑', en: 'Laptops' }, count: 4 },
            { id: 'tablets', name: { my: 'တက်ဘလက်များ', cn: '平板电脑', en: 'Tablets' }, count: 3 }
        ]
    },
    {
        id: 'clothing',
        name: { my: 'အဝတ်အစား', cn: '服装', en: 'Clothing' },
        icon: 'fa-tshirt',
        count: 18,
        subcategories: [
            { id: 'mens', name: { my: 'အမျိုးသား', cn: '男装', en: "Men's" }, count: 6 },
            { id: 'womens', name: { my: 'အမျိုးသမီး', cn: '女装', en: "Women's" }, count: 8 },
            { id: 'kids', name: { my: 'ကလေးများ', cn: '童装', en: "Kids'" }, count: 4 }
        ]
    },
    {
        id: 'home',
        name: { my: 'အိမ်သုံးကုန်ပစ္စည်း', cn: '家居用品', en: 'Home & Living' },
        icon: 'fa-couch',
        count: 5,
        subcategories: [
            { id: 'furniture', name: { my: 'ပရိဘောဂ', cn: '家具', en: 'Furniture' }, count: 3 },
            { id: 'decor', name: { my: 'အလှဆင်ပစ္စည်းများ', cn: '装饰品', en: 'Decor' }, count: 2 }
        ]
    },
    {
        id: 'beauty',
        name: { my: 'အလှကုန်', cn: '美妆护肤', en: 'Beauty' },
        icon: 'fa-pump-soap',
        count: 8,
        subcategories: [
            { id: 'skincare', name: { my: 'အသားအရေ ထိန်းသိမ်းရေး', cn: '护肤', en: 'Skincare' }, count: 3 },
            { id: 'makeup', name: { my: 'မိတ်ကပ်', cn: '彩妆', en: 'Makeup' }, count: 3 },
            { id: 'perfume', name: { my: 'ရေမွှေး', cn: '香水', en: 'Perfume' }, count: 2 }
        ]
    },
    {
        id: 'sports',
        name: { my: 'အားကစား', cn: '运动户外', en: 'Sports' },
        icon: 'fa-football-ball',
        count: 6,
        subcategories: [
            { id: 'fitness', name: { my: 'လေ့ကျင့်ခန်း', cn: '健身', en: 'Fitness' }, count: 3 },
            { id: 'outdoor', name: { my: 'ပြင်ပလှုပ်ရှားမှု', cn: '户外', en: 'Outdoor' }, count: 3 }
        ]
    },
    {
        id: 'books',
        name: { my: 'စာအုပ်များ', cn: '图书', en: 'Books' },
        icon: 'fa-book',
        count: 15,
        subcategories: [
            { id: 'tech', name: { my: 'နည်းပညာ', cn: '科技', en: 'Technology' }, count: 5 },
            { id: 'business', name: { my: 'စီးပွားရေး', cn: '商业', en: 'Business' }, count: 5 },
            { id: 'novel', name: { my: 'ဝတ္ထု', cn: '小说', en: 'Novels' }, count: 5 }
        ]
    }
];

const products = [
    {
        id: 1,
        name: { my: 'စမတ်ဖုန်း Pro', cn: '智能手机 Pro', en: 'Smartphone Pro' },
        price: 2999,
        originalPrice: 3599,
        rating: 4.8,
        sales: 1250,
        stock: 50,
        category: 'phones',
        description: {
            my: 'အဆင့်မြင့် စမတ်ဖုန်း၊ 5G ပံ့ပိုးမှု၊ ကင်မရာ 48MP',
            cn: '高端智能手机，支持 5G，48MP 摄像头',
            en: 'High-end smartphone with 5G support and 48MP camera'
        },
        images: [
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300'
        ]
    },
    {
        id: 2,
        name: { my: 'လက်ပ်တော့ပ် Ultra', cn: '笔记本电脑 Ultra', en: 'Laptop Ultra' },
        price: 5999,
        originalPrice: 6999,
        rating: 4.9,
        sales: 890,
        stock: 30,
        category: 'laptops',
        description: {
            my: 'ပေါ့ပါးသော လက်ပ်တော့ပ်၊ SSD 512GB, RAM 16GB',
            cn: '轻薄笔记本电脑，512GB SSD, 16GB 内存',
            en: 'Lightweight laptop with 512GB SSD and 16GB RAM'
        },
        images: [
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300'
        ]
    },
    {
        id: 3,
        name: { my: 'အမျိုးသား T-Shirt', cn: '男装 T 恤', en: "Men's T-Shirt" },
        price: 199,
        originalPrice: 299,
        rating: 4.5,
        sales: 2100,
        stock: 200,
        category: 'mens',
        description: {
            my: 'သဘာဝ ဝါဂွမ်း T-Shirt၊ အသက်ရှူကောင်းသော',
            cn: '纯棉 T 恤，透气舒适',
            en: '100% cotton T-shirt, breathable and comfortable'
        },
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300'
        ]
    },
    {
        id: 4,
        name: { my: 'အမျိုးသမီး ကျောပိုးအိတ်', cn: '女装背包', en: "Women's Backpack" },
        price: 459,
        originalPrice: 599,
        rating: 4.7,
        sales: 1560,
        stock: 80,
        category: 'womens',
        description: {
            my: 'ဖက်ရှင်ကျသော ကျောပိုးအိတ်၊ ရေစိုခံ',
            cn: '时尚背包，防水材质',
            en: 'Stylish backpack with water-resistant material'
        },
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300'
        ]
    },
    {
        id: 5,
        name: { my: 'တက်ဘလက် Air', cn: '平板电脑 Air', en: 'Tablet Air' },
        price: 3299,
        originalPrice: 3899,
        rating: 4.6,
        sales: 720,
        stock: 40,
        category: 'tablets',
        description: {
            my: '10.9 လက်မ မျက်နှာပြင်၊ 256GB သိုလှောင်မှု',
            cn: '10.9 英寸屏幕，256GB 存储',
            en: '10.9-inch display with 256GB storage'
        },
        images: [
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300'
        ]
    },
    {
        id: 6,
        name: { my: 'ကစားသမား ဘောလုံး', cn: '运动足球', en: 'Sports Football' },
        price: 159,
        originalPrice: 219,
        rating: 4.4,
        sales: 980,
        stock: 150,
        category: 'sports',
        description: {
            my: 'စံပြု ဘောလုံး၊ တာရှည်ခံသော',
            cn: '标准足球，耐用材质',
            en: 'Standard football with durable material'
        },
        images: [
            'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=800',
            'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=400',
            'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=300'
        ]
    },
    {
        id: 7,
        name: { my: 'စာအုပ် - Web Development', cn: '图书 - Web 开发', en: 'Book - Web Development' },
        price: 89,
        originalPrice: 129,
        rating: 4.9,
        sales: 3200,
        stock: 500,
        category: 'books',
        description: {
            my: 'ဝဘ်ဖွံ့ဖြိုးမှု သင်ခန်းစာ၊ HTML, CSS, JavaScript',
            cn: 'Web 开发教程，HTML、CSS、JavaScript',
            en: 'Web development tutorial covering HTML, CSS, and JavaScript'
        },
        images: [
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800',
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300'
        ]
    },
    {
        id: 8,
        name: { my: 'အသားအရေ ထိန်းသိမ်းရေး Pro', cn: '护肤精华液 Pro', en: 'Skincare Serum Pro' },
        price: 299,
        originalPrice: 399,
        rating: 4.8,
        sales: 1500,
        stock: 100,
        category: 'skincare',
        description: {
            my: 'အသားအရေကို စိုပြေစေပြီး အာဟာရ ပေးသည်',
            cn: '深层滋润肌肤，提供营养',
            en: 'Deeply moisturizes and nourishes skin'
        },
        images: [
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300'
        ]
    },
    {
        id: 9,
        name: { my: 'မိတ်ကပ် Palette', cn: '彩妆调色盘', en: 'Makeup Palette' },
        price: 199,
        originalPrice: 299,
        rating: 4.6,
        sales: 980,
        stock: 80,
        category: 'makeup',
        description: {
            my: 'အရောင်စုံ မိတ်ကပ် Palette၊ နေ့ရော ညပါ သုံးနိုင်',
            cn: '多色彩妆盘，日用夜用皆宜',
            en: 'Colorful palette for day and night use'
        },
        images: [
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300'
        ]
    },
    {
        id: 10,
        name: { my: 'ရေမွှေး Premium', cn: '香水 Premium', en: 'Perfume Premium' },
        price: 599,
        originalPrice: 799,
        rating: 4.9,
        sales: 750,
        stock: 50,
        category: 'perfume',
        description: {
            my: 'ပြင်သစ်မှ တင်သွင်းသော ရေမွှေး',
            cn: '法国进口香水，持久留香',
            en: 'French imported perfume, long-lasting'
        },
        images: [
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300'
        ]
    },
    {
        id: 11,
        name: { my: 'လေ့ကျင့်ခန်း သုံး ပြားများ', cn: '健身器材套装', en: 'Fitness Equipment Set' },
        price: 399,
        originalPrice: 599,
        rating: 4.7,
        sales: 680,
        stock: 60,
        category: 'fitness',
        description: {
            my: 'အိမ်တွင် လေ့ကျင့်ခန်း လုပ်ရန် ကိရိယာများ',
            cn: '家用健身器材，方便实用',
            en: 'Home fitness equipment, convenient and practical'
        },
        images: [
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300'
        ]
    },
    {
        id: 12,
        name: { my: 'ပြင်ပလှုပ်ရှားမှု ကျောပိုးအိတ်', cn: '户外登山包', en: 'Outdoor Hiking Backpack' },
        price: 499,
        originalPrice: 699,
        rating: 4.8,
        sales: 520,
        stock: 45,
        category: 'outdoor',
        description: {
            my: 'တောင်တက်ရန် သင့်တော်သော ကျောပိုးအိတ်',
            cn: '专业登山包，耐用轻便',
            en: 'Professional hiking backpack, durable and lightweight'
        },
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300'
        ]
    },
    {
        id: 13,
        name: { my: 'နည်းပညာ စာအုပ်', cn: '科技编程书籍', en: 'Technology Programming Book' },
        price: 89,
        originalPrice: 129,
        rating: 4.9,
        sales: 2000,
        stock: 300,
        category: 'tech',
        description: {
            my: 'Python programming သင်ခန်းစာ',
            cn: 'Python 编程入门教程',
            en: 'Python programming tutorial for beginners'
        },
        images: [
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800',
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300'
        ]
    },
    {
        id: 14,
        name: { my: 'စီးပွားရေး စာအုပ်', cn: '商业管理书籍', en: 'Business Management Book' },
        price: 99,
        originalPrice: 139,
        rating: 4.7,
        sales: 1500,
        stock: 250,
        category: 'business',
        description: {
            my: 'စီးပွားရေး စီမံခန့်ခွဲမှု လမ်းညွှန်',
            cn: '商业管理实战指南',
            en: 'Business management practical guide'
        },
        images: [
            'https://images.unsplash.com/photo-1554774853-719586f8c277?w=800',
            'https://images.unsplash.com/photo-1554774853-719586f8c277?w=400',
            'https://images.unsplash.com/photo-1554774853-719586f8c277?w=300'
        ]
    },
    {
        id: 15,
        name: { my: 'ဝတ္ထုစာအုပ်', cn: '畅销小说', en: 'Bestselling Novel' },
        price: 59,
        originalPrice: 79,
        rating: 4.8,
        sales: 3000,
        stock: 500,
        category: 'novel',
        description: {
            my: 'လူကြိုက်များသော ဝတ္ထုစာအုပ်',
            cn: '畅销小说，情节引人入胜',
            en: 'Bestselling novel with engaging plot'
        },
        images: [
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300'
        ]
    },
    {
        id: 16,
        name: { my: 'ခေတ်မီ ဆိုဖာ', cn: '现代沙发', en: 'Modern Sofa' },
        price: 1299,
        originalPrice: 1599,
        rating: 4.7,
        sales: 680,
        stock: 25,
        category: 'furniture',
        description: {
            my: 'သက်တောင့်သက်သာရှိသော ခေတ်မီဒီဇိုင်း ဆိုဖာ',
            cn: '舒适现代设计沙发，高档面料',
            en: 'Comfortable modern design sofa with premium fabric'
        },
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea970?w=800',
            'https://images.unsplash.com/photo-1555041469-a586c61ea970?w=400',
            'https://images.unsplash.com/photo-1555041469-a586c61ea970?w=300'
        ]
    },
    {
        id: 17,
        name: { my: 'သစ်သား စားပွဲ', cn: '木质餐桌', en: 'Wooden Dining Table' },
        price: 899,
        originalPrice: 1199,
        rating: 4.6,
        sales: 520,
        stock: 30,
        category: 'furniture',
        description: {
            my: 'သဘာဝ သစ်သားဖြင့် ပြုလုပ်ထားသော စားပွဲ',
            cn: '天然木材制作的餐桌，环保耐用',
            en: 'Dining table made from natural wood, eco-friendly and durable'
        },
        images: [
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400',
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300'
        ]
    },
    {
        id: 18,
        name: { my: 'မှန်ဘီလူး ကပ်နာရီ', cn: '玻璃挂钟', en: 'Glass Wall Clock' },
        price: 159,
        originalPrice: 219,
        rating: 4.5,
        sales: 890,
        stock: 60,
        category: 'decor',
        description: {
            my: 'ခေတ်မီဒီဇိုင်း မှန်ဘီလူး ကပ်နာရီ',
            cn: '现代设计玻璃挂钟，静音机芯',
            en: 'Modern design glass wall clock with silent movement'
        },
        images: [
            'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800',
            'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400',
            'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300'
        ]
    },
    {
        id: 19,
        name: { my: 'ပန်းအိုး အလှဆင်', cn: '装饰花瓶', en: 'Decorative Vase' },
        price: 89,
        originalPrice: 129,
        rating: 4.4,
        sales: 1200,
        stock: 80,
        category: 'decor',
        description: {
            my: 'လက်ရာမြောက်သော ပန်းအိုး ဒီဇိုင်း',
            cn: '精美工艺花瓶，家居装饰必备',
            en: 'Exquisite vase design, perfect for home decoration'
        },
        images: [
            'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
            'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400',
            'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300'
        ]
    },
    {
        id: 20,
        name: { my: 'စာအုပ်စင်', cn: '书架', en: 'Bookshelf' },
        price: 459,
        originalPrice: 599,
        rating: 4.7,
        sales: 750,
        stock: 35,
        category: 'furniture',
        description: {
            my: 'ခိုင်ခံ့သော သစ်သား စာအုပ်စင်',
            cn: '坚固木质书架，多层设计',
            en: 'Sturdy wooden bookshelf with multi-tier design'
        },
        images: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400',
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300'
        ]
    }
];

// ==================== 全局状态 ====================
let state = {
    currentLanguage: 'my',
    currentCategory: null,
    currentSubcategory: null,
    viewMode: 'grid',
    sortBy: 'default',
    cart: [],
    user: null,
    searchHistory: [],
    checkoutStep: 1,
    selectedAddress: null,
    products: [...products]
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言（从 localStorage 读取，与主网页同步）
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    // 确保 state.currentLanguage 与全局 currentLanguage 同步
    state.currentLanguage = typeof currentLanguage !== 'undefined' ? currentLanguage : 'my';
    
    loadCartFromStorage();
    loadUserFromStorage();
    loadSearchHistory();
    renderCategories();
    renderProducts();
    setupEventListeners();
    updateCartDisplay();
    
    // 监听语言切换事件，重新渲染分类和商品
    window.addEventListener('languageChanged', (e) => {
        state.currentLanguage = e.detail.language;
        renderCategories();
        renderProducts();
    });
    
    // 隐藏加载动画
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== 分类导航 ====================
function renderCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    
    const lang = state.currentLanguage;
    
    categoryList.innerHTML = categories.map(category => {
        const hasSubcategories = category.subcategories && category.subcategories.length > 0;
        const isActive = state.currentCategory === category.id;
        
        // 获取当前语言的分类名称
        const categoryName = getLocalizedName(category.name, lang);
        
        return `
            <li class="category-item ${isActive ? 'active' : ''}" data-category="${category.id}">
                <a href="javascript:void(0)" class="category-link ${isActive ? 'active' : ''}">
                    <span>
                        <i class="fas ${category.icon} category-icon"></i>
                        ${categoryName}
                    </span>
                    <span class="category-count">${category.count}</span>
                </a>
                ${hasSubcategories ? `
                    <ul class="subcategory-list ${isActive ? 'show' : ''}" id="subcat-${category.id}">
                        ${category.subcategories.map(subcat => {
                            const subcatName = getLocalizedName(subcat.name, lang);
                            return `
                                <li class="subcategory-item" data-subcategory="${subcat.id}">
                                    <a href="javascript:void(0)" 
                                       class="${state.currentSubcategory === subcat.id ? 'active' : ''}">
                                        ${subcatName} (${subcat.count})
                                    </a>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                ` : ''}
            </li>
        `;
    }).join('');
    
    // 添加事件监听器
    addCategoryEventListeners();
}

function addCategoryEventListeners() {
    // 主分类点击事件
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryItem = link.closest('.category-item');
            const categoryId = categoryItem.dataset.category;
            toggleCategory(categoryId);
        });
    });
    
    // 子分类点击事件
    document.querySelectorAll('.subcategory-item a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const categoryItem = link.closest('.category-item');
            const categoryId = categoryItem.dataset.category;
            const subcategoryItem = link.closest('.subcategory-item');
            const subcategoryId = subcategoryItem.dataset.subcategory || 
                                  link.getAttribute('href').split("'")[3];
            selectSubcategory(categoryId, subcategoryId);
        });
    });
}

function toggleCategory(categoryId) {
    const categoryItem = document.querySelector(`.category-item[data-category="${categoryId}"]`);
    const subcategoryList = document.getElementById(`subcat-${categoryId}`);
    
    if (state.currentCategory === categoryId) {
        state.currentCategory = null;
        state.currentSubcategory = null;
        categoryItem.classList.remove('active');
        if (subcategoryList) subcategoryList.classList.remove('show');
    } else {
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.subcategory-list').forEach(list => {
            list.classList.remove('show');
        });
        
        state.currentCategory = categoryId;
        categoryItem.classList.add('active');
        if (subcategoryList) subcategoryList.classList.add('show');
    }
    
    renderProducts();
}

function selectSubcategory(categoryId, subcategoryId) {
    if (state.currentSubcategory === subcategoryId) {
        state.currentSubcategory = null;
    } else {
        state.currentSubcategory = subcategoryId;
    }
    
    renderCategories();
    renderProducts();
}

// ==================== 商品展示 ====================
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    const productsCount = document.getElementById('products-count');
    
    if (!productsGrid) return;
    
    let filteredProducts = [...state.products];
    
    // 按分类筛选
    if (state.currentCategory) {
        filteredProducts = filteredProducts.filter(p => {
            const category = categories.find(c => c.id === state.currentCategory);
            if (category && category.subcategories.length > 0) {
                if (state.currentSubcategory) {
                    return p.category === state.currentSubcategory;
                }
                const subcatIds = category.subcategories.map(s => s.id);
                return subcatIds.includes(p.category);
            }
            return p.category === state.currentCategory || 
                   (category && category.subcategories.length === 0);
        });
    }
    
    // 排序
    switch (state.sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'sales':
            filteredProducts.sort((a, b) => b.sales - a.sales);
            break;
    }
    
    productsCount.textContent = `${filteredProducts.length} ${getTranslation('products_count') || '件商品'}`;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-inbox" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                <p style="font-size: 1.2rem;">${getTranslation('no_products') || '暂无商品'}</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => {
        const lang = state.currentLanguage;
        const name = typeof product.name === 'object' ? product.name[lang] || product.name.cn : product.name;
        const description = typeof product.description === 'object' ? product.description[lang] || product.description.cn : product.description;
        
        return `
            <div class="product-card ${state.viewMode === 'list' ? 'list-view' : ''}" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${name}" loading="lazy">
                    ${product.stock < 10 ? '<span class="product-badge">' + (getTranslation('low_stock') || '热销') + '</span>' : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <div class="product-meta">
                        <span class="product-rating">
                            <i class="fas fa-star"></i>
                            <span>${product.rating}</span>
                        </span>
                        <span class="product-sales">${getTranslation('sales') || '销量'}: ${product.sales}</span>
                        <span class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                            ${product.stock > 0 ? (getTranslation('in_stock') || '有货') : (getTranslation('out_of_stock') || '缺货')}
                        </span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">¥${product.price}</span>
                        <span class="original-price">¥${product.originalPrice}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> ${getTranslation('add_to_cart') || '加入购物车'}
                        </button>
                        <button class="btn-view-detail" onclick="viewProductDetail(${product.id})">
                            ${getTranslation('view_detail') || '查看详情'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==================== 商品详情模态框 ====================
function viewProductDetail(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    const lang = state.currentLanguage;
    const name = typeof product.name === 'object' ? product.name[lang] || product.name.cn : product.name;
    const description = typeof product.description === 'object' ? product.description[lang] || product.description.cn : product.description;
    
    document.getElementById('detail-main-image').src = product.images[0];
    document.getElementById('detail-title').textContent = name;
    document.getElementById('detail-rating').innerHTML = `<i class="fas fa-star"></i><span>${product.rating}</span>`;
    document.getElementById('detail-sales').textContent = `${getTranslation('sales') || '销量'}: ${product.sales}`;
    document.getElementById('detail-stock').textContent = `${getTranslation('stock') || '库存'}: ${product.stock}`;
    document.getElementById('detail-price').textContent = `¥${product.price}`;
    document.getElementById('detail-original-price').textContent = `¥${product.originalPrice}`;
    document.getElementById('detail-description').textContent = description;
    
    // 渲染缩略图
    const thumbnails = document.getElementById('thumbnail-images');
    thumbnails.innerHTML = product.images.map((img, index) => `
        <img src="${img}" alt="${name}" onclick="changeMainImage('${img}', this)" class="${index === 0 ? 'active' : ''}">
    `).join('');
    
    // 重置数量
    document.getElementById('quantity-input').value = 1;
    
    // 存储当前产品 ID 用于加入购物车
    document.getElementById('add-to-cart').dataset.productId = productId;
    document.getElementById('buy-now').dataset.productId = productId;
    
    // 显示模态框
    document.getElementById('product-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function changeMainImage(src, thumbnail) {
    document.getElementById('detail-main-image').src = src;
    document.querySelectorAll('.thumbnail-images img').forEach(img => img.classList.remove('active'));
    thumbnail.classList.add('active');
}

// ==================== 事件监听器 ====================
function setupEventListeners() {
    // 语言切换按钮 - 与主网页保持一致
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
    
    // 视图模式切换
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.viewMode = btn.dataset.view;
            
            const productsGrid = document.getElementById('products-grid');
            if (state.viewMode === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
    
    // 排序
    document.getElementById('sort-select')?.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });
    
    // 搜索
    document.getElementById('search-btn')?.addEventListener('click', performSearch);
    document.getElementById('search-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // 购物车
    document.getElementById('cart-toggle')?.addEventListener('click', toggleCart);
    document.getElementById('cart-close')?.addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.remove('show');
    });
    document.getElementById('clear-cart')?.addEventListener('click', clearCart);
    document.getElementById('checkout-btn')?.addEventListener('click', openCheckout);
    
    // 用户账户
    document.getElementById('user-toggle')?.addEventListener('click', () => {
        const modal = document.getElementById('user-modal');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // 模态框关闭
    document.querySelectorAll('.modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                const modal = el.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // 关闭按钮点击事件
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
    
    // 用户标签切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${tabName}-tab`)?.classList.add('active');
        });
    });
    
    // 登录表单提交
    document.querySelector('.login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        loginUser(username);
    });
    
    // 注册表单提交
    document.querySelector('.register-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        registerUser(username, email);
    });
    
    // 商品详情模态框操作
    document.getElementById('qty-minus')?.addEventListener('click', () => {
        const input = document.getElementById('quantity-input');
        if (input.value > 1) input.value--;
    });
    
    document.getElementById('qty-plus')?.addEventListener('click', () => {
        const input = document.getElementById('quantity-input');
        if (input.value < 99) input++;
    });
    
    document.getElementById('add-to-cart')?.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.productId);
        const quantity = parseInt(document.getElementById('quantity-input').value);
        if (productId) {
            addToCart(productId, quantity);
            document.getElementById('product-modal').classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    document.getElementById('buy-now')?.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.productId);
        const quantity = parseInt(document.getElementById('quantity-input').value);
        if (productId) {
            addToCart(productId, quantity);
            document.getElementById('product-modal').classList.remove('show');
            document.body.style.overflow = '';
            openCheckout();
        }
    });
    
    // 结算流程
    document.getElementById('checkout-next')?.addEventListener('click', nextCheckoutStep);
    document.getElementById('checkout-back')?.addEventListener('click', prevCheckoutStep);
    document.getElementById('submit-order')?.addEventListener('click', submitOrder);
    document.getElementById('add-address-btn')?.addEventListener('click', addNewAddress);
    
    // 分类侧边栏切换（移动端）
    document.querySelector('.category-toggle')?.addEventListener('click', () => {
        document.querySelector('.category-sidebar').classList.toggle('show');
    });
}

// ==================== 搜索功能 ====================
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) return;
    
    // 添加到搜索历史
    addToSearchHistory(query);
    
    // 筛选商品
    state.products = products.filter(p => {
        const lang = state.currentLanguage;
        const name = typeof p.name === 'object' ? p.name[lang] || p.name.cn : p.name;
        const desc = typeof p.description === 'object' ? p.description[lang] || p.description.cn : p.description;
        return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
    });
    
    renderProducts();
    document.getElementById('search-history')?.classList.remove('show');
}

function addToSearchHistory(query) {
    if (!state.searchHistory.includes(query)) {
        state.searchHistory.unshift(query);
        if (state.searchHistory.length > 5) {
            state.searchHistory.pop();
        }
        saveSearchHistory();
        renderSearchHistory();
    }
}

function renderSearchHistory() {
    const historyContainer = document.getElementById('search-history');
    if (!historyContainer) return;
    
    if (state.searchHistory.length === 0) {
        historyContainer.innerHTML = '';
        return;
    }
    
    historyContainer.innerHTML = `
        <h4>${getTranslation('search_history') || '搜索历史'}</h4>
        <ul class="search-history-list">
            ${state.searchHistory.map(term => `
                <li class="search-history-item" onclick="searchFromHistory('${term}')">${term}</li>
            `).join('')}
        </ul>
    `;
}

function searchFromHistory(term) {
    document.getElementById('search-input').value = term;
    performSearch();
}

function loadSearchHistory() {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
        state.searchHistory = JSON.parse(saved);
        renderSearchHistory();
    }
}

function saveSearchHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
}

// ==================== 购物车功能 ====================
function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            ...product,
            quantity
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    showNotification(getTranslation('added_to_cart') || '已添加到购物车');
}

function updateCartItem(productId, quantity) {
    const item = state.cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToStorage();
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    renderCartItems();
}

function clearCart() {
    if (confirm(getTranslation('confirm_clear_cart') || '确定要清空购物车吗？')) {
        state.cart = [];
        saveCartToStorage();
        updateCartDisplay();
        renderCartItems();
    }
}

function updateCartDisplay() {
    const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
    
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total-price').textContent = `¥${total}`;
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-light);">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.3;"></i>
                <p>${getTranslation('cart_empty') || '购物车为空'}</p>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = state.cart.map(item => {
        const lang = state.currentLanguage;
        const name = typeof item.name === 'object' ? item.name[lang] || item.name.cn : item.name;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${name}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                    <div class="cart-item-controls">
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" value="${item.quantity}" min="1" readonly>
                            <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('show');
    if (cartSidebar.classList.contains('show')) {
        renderCartItems();
    }
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('shoppingCart');
    if (saved) {
        state.cart = JSON.parse(saved);
    }
}

function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
}

// ==================== 用户账户 ====================
function loginUser(username) {
    state.user = { username, email: `${username}@example.com` };
    localStorage.setItem('currentUser', JSON.stringify(state.user));
    updateUserDisplay();
    document.getElementById('user-modal').classList.remove('show');
    document.body.style.overflow = '';
    showNotification(`${getTranslation('login_success') || '登录成功'}!`);
}

function registerUser(username, email) {
    state.user = { username, email };
    localStorage.setItem('currentUser', JSON.stringify(state.user));
    updateUserDisplay();
    document.getElementById('user-modal').classList.remove('show');
    document.body.style.overflow = '';
    showNotification(`${getTranslation('register_success') || '注册成功'}!`);
}

function logoutUser() {
    state.user = null;
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    showNotification(getTranslation('logout_success') || '已退出登录');
}

function updateUserDisplay() {
    if (state.user) {
        document.getElementById('profile-username').textContent = state.user.username;
        document.querySelectorAll('.tab-btn[data-tab="profile"]').forEach(btn => {
            btn.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.tab-btn[data-tab="profile"]').forEach(btn => {
            btn.style.display = 'none';
        });
    }
}

function loadUserFromStorage() {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
        state.user = JSON.parse(saved);
        updateUserDisplay();
    }
}

// ==================== 结算流程 ====================
function openCheckout() {
    if (state.cart.length === 0) {
        showNotification(getTranslation('cart_empty_checkout') || '购物车为空，无法结算');
        return;
    }
    
    document.getElementById('cart-sidebar').classList.remove('show');
    document.getElementById('checkout-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
    state.checkoutStep = 1;
    updateCheckoutSteps();
}

function updateCheckoutSteps() {
    // 更新步骤指示器
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 < state.checkoutStep) {
            step.classList.add('completed');
        } else if (index + 1 === state.checkoutStep) {
            step.classList.add('active');
        }
    });
    
    // 更新步骤内容
    document.querySelectorAll('.checkout-step-content').forEach((content, index) => {
        content.classList.remove('active');
        if (index + 1 === state.checkoutStep) {
            content.classList.add('active');
        }
    });
    
    // 渲染购物车确认
    if (state.checkoutStep === 1) {
        renderCheckoutCartItems();
    }
    
    // 渲染地址列表
    if (state.checkoutStep === 2) {
        renderAddressList();
    }
    
    // 渲染订单摘要
    if (state.checkoutStep === 4) {
        renderOrderSummary();
    }
    
    // 更新按钮显示
    document.getElementById('checkout-back').style.display = state.checkoutStep === 1 ? 'none' : 'block';
    document.getElementById('checkout-next').style.display = state.checkoutStep === 4 ? 'none' : 'block';
    document.getElementById('submit-order').style.display = state.checkoutStep === 4 ? 'block' : 'none';
}

function renderCheckoutCartItems() {
    const container = document.getElementById('checkout-cart-items');
    if (!container) return;
    
    container.innerHTML = state.cart.map(item => {
        const lang = state.currentLanguage;
        const name = typeof item.name === 'object' ? item.name[lang] || item.name.cn : item.name;
        
        return `
            <div class="checkout-cart-item">
                <div class="checkout-cart-item-image">
                    <img src="${item.images[0]}" alt="${name}">
                </div>
                <div class="checkout-cart-item-info">
                    <div class="checkout-cart-item-title">${name}</div>
                    <div class="checkout-cart-item-price">¥${item.price}</div>
                    <div class="checkout-cart-item-quantity">x ${item.quantity}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderAddressList() {
    const container = document.getElementById('address-list');
    if (!container) return;
    
    // 模拟地址数据
    const addresses = [
        { id: 1, name: '张三', phone: '138****1234', address: '北京市朝阳区 xxx 街道' },
        { id: 2, name: '李四', phone: '139****5678', address: '上海市浦东新区 xxx 路' }
    ];
    
    container.innerHTML = addresses.map(addr => `
        <div class="address-item ${state.selectedAddress === addr.id ? 'selected' : ''}" onclick="selectAddress(${addr.id})">
            <h4>${addr.name} ${addr.phone}</h4>
            <p>${addr.address}</p>
        </div>
    `).join('');
}

function selectAddress(addressId) {
    state.selectedAddress = addressId;
    renderAddressList();
}

function addNewAddress() {
    showNotification(getTranslation('feature_coming_soon') || '功能开发中...');
}

function renderOrderSummary() {
    const container = document.getElementById('summary-items');
    if (!container) return;
    
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 500 ? 0 : 20;
    const total = subtotal + shipping;
    
    container.innerHTML = state.cart.map(item => {
        const lang = state.currentLanguage;
        const name = typeof item.name === 'object' ? item.name[lang] || item.name.cn : item.name;
        
        return `
            <div class="summary-item">
                <div class="summary-item-image">
                    <img src="${item.images[0]}" alt="${name}">
                </div>
                <div class="summary-item-info">
                    <div class="summary-item-title">${name}</div>
                    <div class="summary-item-price">¥${item.price}</div>
                    <div class="summary-item-quantity">x ${item.quantity}</div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('summary-subtotal').textContent = `¥${subtotal}`;
    document.getElementById('summary-shipping').textContent = shipping === 0 ? (getTranslation('free_shipping') || '免运费') : `¥${shipping}`;
    document.getElementById('summary-total').textContent = `¥${total}`;
}

function nextCheckoutStep() {
    if (state.checkoutStep < 4) {
        state.checkoutStep++;
        updateCheckoutSteps();
    }
}

function prevCheckoutStep() {
    if (state.checkoutStep > 1) {
        state.checkoutStep--;
        updateCheckoutSteps();
    }
}

function submitOrder() {
    // 模拟提交订单
    showNotification(getTranslation('order_success') || '订单提交成功！');
    setTimeout(() => {
        state.cart = [];
        saveCartToStorage();
        updateCartDisplay();
        document.getElementById('checkout-modal').classList.remove('show');
        document.body.style.overflow = '';
    }, 1500);
}

// ==================== 工具函数 ====================
function getLocalizedName(obj, lang) {
    if (typeof obj === 'object' && obj !== null) {
        return obj[lang] || obj.cn || Object.values(obj)[0] || '';
    }
    return obj || '';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-green), var(--primary-green-light));
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 100000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
