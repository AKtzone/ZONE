// 新闻网站功能实现

// ==================== 模拟数据 ====================
const newsCategories = [
    { id: 'all', name: { my: 'အားလုံး', cn: '全部', en: 'All' }, icon: 'fa-globe' },
    { id: 'politics', name: { my: 'နိုင်ငံရေး', cn: '政治', en: 'Politics' }, icon: 'fa-landmark' },
    { id: 'economy', name: { my: 'စီးပွားရေး', cn: '经济', en: 'Economy' }, icon: 'fa-chart-line' },
    { id: 'technology', name: { my: 'နည်းပညာ', cn: '科技', en: 'Technology' }, icon: 'fa-microchip' },
    { id: 'sports', name: { my: 'အားကစား', cn: '体育', en: 'Sports' }, icon: 'fa-futbol' },
    { id: 'entertainment', name: { my: 'ဖျော်ဖြေရေး', cn: '娱乐', en: 'Entertainment' }, icon: 'fa-film' },
    { id: 'health', name: { my: 'ကျန်းမာရေး', cn: '健康', en: 'Health' }, icon: 'fa-heartbeat' }
];

const newsArticles = [
    {
        id: 1,
        title: { 
            my: 'မြန်မာနိုင်ငံ၏ နည်းပညာကဏ္ဍ ကြီးထွားလာ',
            cn: '缅甸科技行业快速增长',
            en: "Myanmar's Technology Sector Growing Rapidly"
        },
        excerpt: {
            my: 'နည်းပညာကဏ္ဍသည် ယခုနှစ်တွင် ၂၀% ကျော် ကြီးထွားလာခဲ့သည်',
            cn: '科技行业今年增长超过 20%，显示出强劲的发展势头',
            en: 'The technology sector has grown over 20% this year, showing strong momentum'
        },
        content: {
            my: `မြန်မာနိုင်ငံ၏ နည်းပညာကဏ္ဍသည် ယခုနှစ်တွင် သိသာထင်ရှားသော ကြီးထွားမှုကို မြင်တွေ့ခဲ့ရသည်။ ဒစ်ဂျစ်တယ်ပြောင်းလဲမှုများနှင့် အင်တာနက်အသုံးပြုမှု တိုးတက်လာခြင်းတို့ကြောင့် နည်းပညာကုမ္ပဏီများစွာ ပေါ်ထွန်းလာခဲ့သည်။

အထူးသဖြင့် ရန်ကုန်နှင့် မန္တလေးမြို့များတွင် စတားတပ်ကုမ္ပဏီများ တိုးတက်လာပြီး နိုင်ငံတကာ ရင်းနှီးမြှုပ်နှံမှုများလည်း ရရှိလာခဲ့သည်။

အဓိက ကြီးထွားမှုများမှာ -
• မိုဘိုင်းအပလီကေးရှင်း ဖွံ့ဖြိုးမှု
• အီလက်ထရောနစ်ကုန်သွယ်ရေး
• ဖိုင်နန်တက် ဝန်ဆောင်မှုများ
• ပညာရေး နည်းပညာများ

ကျွမ်းကျင်ပညာရှင်များ၏ ခန့်မှန်းချက်အရ နည်းပညာကဏ္ဍသည် လာမည့် ၅ နှစ်အတွက် ၃၀% ထပ်မံကြီးထွားလာမည်ဟု ခန့်မှန်းရသည်။`,
            cn: `缅甸科技行业今年取得了显著增长。数字化转型和互联网普及率的提高推动了众多科技公司的涌现。

特别是在仰光和曼德勒，初创公司大量涌现，并获得了国际投资。

主要增长领域包括：
• 移动应用开发
• 电子商务
• 金融科技服务
• 教育科技

专家预测，科技行业在未来五年内还将增长 30%。`,
            en: `Myanmar's technology sector has seen remarkable growth this year. Digital transformation and increased internet usage have driven the emergence of numerous tech companies.

Especially in Yangon and Mandalay, startups have flourished and attracted international investment.

Key growth areas include:
• Mobile app development
• E-commerce
• Fintech services
• EdTech

Experts predict the sector will grow another 30% in the next five years.`
        },
        category: 'technology',
        author: { my: 'မင်းကျော်', cn: '闵觉', en: 'Min Kyaw' },
        date: '2025-01-15',
        views: 15234,
        comments: 156,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        tags: [
            { my: 'နည်းပညာ', cn: '科技', en: 'Technology' },
            { my: 'စီးပွားရေး', cn: '经济', en: 'Economy' },
            { my: 'ဆန်းသစ်တီထွင်မှု', cn: '创新', en: 'Innovation' }
        ],
        isBreaking: true,
        isHero: true
    },
    {
        id: 2,
        title: {
            my: 'အာဆီယံ စီးပွားရေး ပူးပေါင်းဆောင်ရွက်မှု အစည်းအဝေး',
            cn: '东盟经济合作会议',
            en: 'ASEAN Economic Cooperation Meeting'
        },
        excerpt: {
            my: 'အာဆီယံ ခေါင်းဆောင်များ စီးပွားရေး ပူးပေါင်းဆောင်ရွက်မှုကို ဆွေးနွေး',
            cn: '东盟领导人讨论经济合作，推动区域一体化发展',
            en: 'ASEAN leaders discuss economic cooperation and regional integration'
        },
        content: {
            my: `အာဆီယံ ခေါင်းဆောင်များသည် ဘန်ကောက်မြို့တွင် စီးပွားရေး ပူးပေါင်းဆောင်ရွက်မှုကို မြှင့်တင်ရန် အစည်းအဝေးပြုလုပ်ခဲ့ကြသည်။

အဓိက ဆွေးနွေးချက်များမှာ -
• ကုန်သွယ်ရေး လွယ်ကူချောမွေ့ရေး
• ရင်းနှီးမြှုပ်နှံမှု တိုးချဲ့ရေး
• ဒစ်ဂျစ်တယ် စီးပွားရေး ဖွံ့ဖြိုးတိုးတက်မှု
• ရေရှည် တည်တံ့သော ဖွံ့ဖြိုးမှု

ခေါင်းဆောင်များသည် ၂၀၃၀ ပြည့်နှစ်တွင် အာဆီယံ စီးပွားရေး အသိုက်အဝန်း တည်ထောင်ရန် သဘောတူညီချက် ရရှိခဲ့ကြသည်။`,
            cn: `东盟领导人在曼谷举行会议，讨论加强经济合作。

主要议题包括：
• 贸易便利化
• 投资扩大
• 数字经济发展
• 可持续发展

领导人同意在 2030 年建立东盟经济共同体。`,
            en: `ASEAN leaders met in Bangkok to discuss strengthening economic cooperation.

Key topics included:
• Trade facilitation
• Investment expansion
• Digital economy development
• Sustainable development

Leaders agreed to establish the ASEAN Economic Community by 2030.`
        },
        category: 'economy',
        author: { my: 'စုမြတ်', cn: '苏妙', en: 'Su Myat' },
        date: '2025-01-14',
        views: 12890,
        comments: 98,
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
        tags: [
            { my: 'အာဆီယံ', cn: '东盟', en: 'ASEAN' },
            { my: 'စီးပွားရေး', cn: '经济', en: 'Economy' },
            { my: 'ပူးပေါင်းဆောင်ရွက်မှု', cn: '合作', en: 'Cooperation' }
        ],
        isBreaking: true,
        isHero: false
    },
    {
        id: 3,
        title: {
            my: 'မြန်မာ့ ရွှေတိဂုံဘုရား ပြုပြင်ထိန်းသိမ်းမှု',
            cn: '缅甸仰光大金塔修缮工程',
            en: 'Shwedagon Pagoda Restoration Project'
        },
        excerpt: {
            my: 'ရွှေတိဂုံစေတီတော်၏ ရှေးဟောင်းသုတေသန တန်ဖိုးကို ထိန်းသိမ်းရန် ပြုပြင်ထိန်းသိမ်းမှုများ ပြုလုပ်',
            cn: '为保护大金塔的历史价值，进行大规模修缮工作',
            en: 'Major restoration work to preserve the historical value of Shwedagon Pagoda'
        },
        content: {
            my: `ရွှေတိဂုံစေတီတော်ကြီး၏ ရှေးဟောင်းသုတေသန တန်ဖိုးကို ထိန်းသိမ်းသည့်အနေဖြင့် ကြီးမားသော ပြုပြင်ထိန်းသိမ်းမှုများကို စတင်ခဲ့ပြီ ဖြစ်သည်။

ဤလုပ်ငန်းစဉ်တွင် -
• ရွှေချခြင်း လုပ်ငန်းများ
• တန်ဆောင်းများ ပြုပြင်ခြင်း
• မြေအောက်ရေစီးဆင်းမှု စနစ် တိုးတက်အောင် ပြုလုပ်ခြင်း
• ခရီးသွားလာရေး ဝန်ဆောင်မှုများ မြှင့်တင်ခြင်း

လုပ်ငန်းများကို ၂ နှစ်အတွင်း ပြီးစီးရန် မျှော်လင့်ရသည်။`,
            cn: `为保护仰光大金塔的历史价值，已开始进行大规模修缮工程。

工程包括：
• 贴金工作
• 殿堂修缮
• 改善地下排水系统
• 提升旅游服务

工程预计两年内完成。`,
            en: `Major restoration work has begun to preserve the historical value of Shwedagon Pagoda.

The project includes:
• Gold leaf application
• Hall restoration
• Improved underground drainage
• Enhanced tourist facilities

The work is expected to be completed within two years.`
        },
        category: 'politics',
        author: { my: 'အောင်သိန်း', cn: '昂丁', en: 'Aung Thein' },
        date: '2025-01-13',
        views: 18567,
        comments: 234,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
        tags: [
            { my: 'ယဉ်ကျေးမှု', cn: '文化', en: 'Culture' },
            { my: 'သမိုင်းကြောင်း', cn: '历史', en: 'History' },
            { my: 'ခရီးသွား', cn: '旅游', en: 'Tourism' }
        ],
        isBreaking: false,
        isHero: false
    },
    {
        id: 4,
        title: {
            my: 'အာရှဖလား ဘောလုံးပြိုင်ပွဲ မြန်မာအသင်း ဝင်ရောက်ယှဉ်ပြိုင်',
            cn: '缅甸队参加亚洲杯足球赛',
            en: 'Myanmar Team Participates in Asian Cup'
        },
        excerpt: {
            my: 'မြန်မာ့လက်ရွေးစင် ဘောလုံးအသင်းသည် အာရှဖလား ပြိုင်ပွဲတွင် ပထမဆုံးအကြိမ် ဝင်ရောက်ယှဉ်ပြိုင်',
            cn: '缅甸国家足球队首次参加亚洲杯决赛圈比赛',
            en: 'Myanmar national football team participates in Asian Cup finals for the first time'
        },
        content: {
            my: `မြန်မာ့လက်ရွေးစင် ဘောလုံးအသင်းသည် သမိုင်းတွင် ပထမဆုံးအကြိမ်အဖြစ် အာရှဖလား ဘောလုံးပြိုင်ပွဲ၏ နောက်ဆုံးအဆင့်သို့ ရောက်ရှိခဲ့ပြီ ဖြစ်သည်။

နည်းပြချုပ် ဦးမြင့်သိန်းက -
"ကျွန်တော်တို့ရဲ့ ကစားသမားတွေ အားလုံး အကောင်းဆုံး ကြိုးစားနေကြပါတယ်။ ဒီအောင်မြင်မှုဟာ မြန်မာ့ဘောလုံးအတွက် သမိုင်းဝင် အခိုက်အတန့်ပါ။"

ပထမပွဲစဉ်ကို လာမည့် သီပတ်တွင် ကစားမည် ဖြစ်ပြီး ပရိသတ်များက အားပေးရန် စိတ်လှုပ်ရှားနေကြသည်။`,
            cn: `缅甸国家足球队历史性地首次晋级亚洲杯决赛圈。

主教练吴敏丁表示：
"我们所有球员都在尽最大努力。这次成功对缅甸足球来说是历史性的时刻。"

首场比赛将在下周进行，球迷们热情高涨。`,
            en: `Myanmar national football team has reached the Asian Cup finals for the first time in history.

Head coach U Myint Thein said:
"All our players are giving their best. This achievement is a historic moment for Myanmar football."

The first match will be played next week, and fans are excited.`
        },
        category: 'sports',
        author: { my: 'သန့်ဇင်', cn: '丹辛', en: 'Than Zin' },
        date: '2025-01-12',
        views: 25678,
        comments: 456,
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
        tags: [
            { my: 'ဘောလုံး', cn: '足球', en: 'Football' },
            { my: 'အားကစား', cn: '体育', en: 'Sports' },
            { my: 'အာရှဖလား', cn: '亚洲杯', en: 'Asian Cup' }
        ],
        isBreaking: false,
        isHero: false
    },
    {
        id: 5,
        title: {
            my: 'မြန်မာ့ ရုပ်ရှင်သစ် "ရတနာပုံ" နိုင်ငံတကာ ရုပ်ရှင်ပွဲတော်တွင် ဆုရရှိ',
            cn: '缅甸电影《翡翠之城》获国际电影节大奖',
            en: 'Myanmar Film "City of Jade" Wins International Award'
        },
        excerpt: {
            my: 'မြန်မာရုပ်ရှင် "ရတနာပုံ" သည် ဘာလင် ရုပ်ရှင်ပွဲတော်တွင် အကောင်းဆုံး ဓာတ်ပုံဆု ရရှိ',
            cn: '缅甸电影《翡翠之城》在柏林电影节获得最佳摄影奖',
            en: 'Myanmar film "City of Jade" wins Best Cinematography at Berlin Film Festival'
        },
        content: {
            my: `မြန်မာရုပ်ရှင် "ရတနာပုံ" သည် ဂျာမနီနိုင်ငံတွင် ကျင်းပသော ဘာလင် နိုင်ငံတကာ ရုပ်ရှင်ပွဲတော်၌ အကောင်းဆုံး ဓာတ်ပုံဆုကို ရရှိခဲ့သည်။

ဒါရိုက်တာ ဦးအောင်မော်က -
"ဒီဆုဟာ မြန်မာရုပ်ရှင်လောကအတွက် ဂုဏ်ယူစရာပါ။ ကျွန်တော်တို့ရဲ့ ယဉ်ကျေးမှုနဲ့ ဓလေ့တွေကို ကမ္ဘာကို ပြသနိုင်ခဲ့ပါတယ်။"

ရုပ်ရှင်သည် မန္တလေးမြို့ရှိ ကျောက်စိမ်းတူးဖော်ရေး လုပ်သားများ၏ ဘဝကို ရိုက်ကူးထားခြင်း ဖြစ်သည်။`,
            cn: `缅甸电影《翡翠之城》在德国柏林国际电影节上获得最佳摄影奖。

导演吴昂莫表示：
"这个奖项是缅甸电影界的荣耀。我们成功向世界展示了我们的文化和传统。"

该片讲述了曼德勒翡翠矿工的生活。`,
            en: `Myanmar film "City of Jade" won Best Cinematography at the Berlin International Film Festival in Germany.

Director U Aung Moe said:
"This award is an honor for Myanmar cinema. We were able to show our culture and traditions to the world."

The film depicts the lives of jade miners in Mandalay.`
        },
        category: 'entertainment',
        author: { my: 'နန်းမွန်', cn: '南曼', en: 'Nan Mone' },
        date: '2025-01-11',
        views: 14523,
        comments: 189,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
        tags: [
            { my: 'ရုပ်ရှင်', cn: '电影', en: 'Film' },
            { my: 'ဖျော်ဖြေရေး', cn: '娱乐', en: 'Entertainment' },
            { my: 'ဆုတံဆိပ်', cn: '奖项', en: 'Award' }
        ],
        isBreaking: false,
        isHero: false
    },
    {
        id: 6,
        title: {
            my: 'ကျန်းမာရေးစောင့်ရှောက်မှု စနစ် အသစ် မိတ်ဆက်',
            cn: '新医疗保健系统推出',
            en: 'New Healthcare System Launched'
        },
        excerpt: {
            my: 'ဒစ်ဂျစ်တယ် ကျန်းမာရေးစောင့်ရှောက်မှု စနစ်အသစ်ကို တစ်နိုင်ငံလုံးတွင် စတင်အသုံးပြု',
            cn: '全国范围内启动数字医疗保健系统',
            en: 'Digital healthcare system launched nationwide'
        },
        content: {
            my: `ကျန်းမာရေးဝန်ကြီးဌာနသည် ဒစ်ဂျစ်တယ် ကျန်းမာရေးစောင့်ရှောက်မှု စနစ်အသစ်ကို တစ်နိုင်ငံလုံးတွင် စတင်အသုံးပြုခဲ့ပြီ ဖြစ်သည်။

ဤစနစ်တွင် ပါဝင်သည့် အင်္ဂါရပ်များ -
• အွန်လိုင်းမှ ဆရာဝန်နှင့် တိုင်ပင်ခြင်း
• ဆေးညွှန်းများ ဒစ်ဂျစ်တယ် ထုတ်ပေးခြင်း
• ကျန်းမာရေး မှတ်တမ်းများ သိမ်းဆည်းခြင်း
• ဆေးရုံများတွင် စောင့်ဆိုင်းမှု လျှော့ချခြင်း

ဝန်ကြီးဌာနက ဤစနစ်သည် ကျန်းမာရေး ဝန်ဆောင်မှုများကို ပိုမိုလွယ်ကူစေမည်ဟု ပြောကြားသည်။`,
            cn: `卫生部已在全国范围内推出新的数字医疗保健系统。

系统功能包括：
• 在线咨询医生
• 电子处方
• 健康记录存储
• 减少医院等待时间

卫生部表示该系统将使医疗服务更加便捷。`,
            en: `The Ministry of Health has launched a new digital healthcare system nationwide.

Features include:
• Online doctor consultations
• Digital prescriptions
• Health record storage
• Reduced hospital waiting times

The ministry says the system will make healthcare services more accessible.`
        },
        category: 'health',
        author: { my: 'ဒေါက်တာ မြတ်သူ', cn: '妙杜医生', en: 'Dr. Myat Thu' },
        date: '2025-01-10',
        views: 11234,
        comments: 145,
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        tags: [
            { my: 'ကျန်းမာရေး', cn: '健康', en: 'Health' },
            { my: 'နည်းပညာ', cn: '科技', en: 'Technology' },
            { my: 'ဝန်ဆောင်မှု', cn: '服务', en: 'Services' }
        ],
        isBreaking: false,
        isHero: false
    }
];

// ==================== 全局状态 ====================
let state = {
    currentLanguage: 'my',
    currentCategory: 'all',
    currentPage: 1,
    itemsPerPage: 6,
    viewMode: 'grid',
    searchQuery: '',
    articles: [...newsArticles]
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    state.currentLanguage = typeof currentLanguage !== 'undefined' ? currentLanguage : 'my';
    
    renderBreakingNews();
    renderHeroNews();
    renderNewsList();
    renderHotNews();
    renderPagination();
    setupEventListeners();
    
    // 监听语言切换事件
    window.addEventListener('languageChanged', (e) => {
        state.currentLanguage = e.detail.language;
        renderBreakingNews();
        renderHeroNews();
        renderNewsList();
        renderHotNews();
    });
    
    // 隐藏加载动画
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== 突发新闻 ====================
function renderBreakingNews() {
    const container = document.getElementById('breaking-news-content');
    if (!container) return;
    
    const breakingNews = state.articles.filter(a => a.isBreaking);
    const lang = state.currentLanguage;
    
    container.innerHTML = breakingNews.map(article => {
        const title = typeof article.title === 'object' ? article.title[lang] || article.title.cn : article.title;
        return `<div class="ticker-item">${title}</div>`;
    }).join('');
}

// ==================== 头条新闻 ====================
function renderHeroNews() {
    const container = document.getElementById('hero-news');
    if (!container) return;
    
    const heroNews = state.articles.find(a => a.isHero);
    if (!heroNews) return;
    
    const lang = state.currentLanguage;
    const title = typeof heroNews.title === 'object' ? heroNews.title[lang] || heroNews.title.cn : heroNews.title;
    const category = newsCategories.find(c => c.id === heroNews.category);
    const categoryName = category ? (typeof category.name === 'object' ? category.name[lang] || category.name.cn : category.name) : '';
    
    container.innerHTML = `
        <img src="${heroNews.image}" alt="${title}">
        <div class="hero-news-content">
            <span class="hero-news-category">${categoryName}</span>
            <h2 class="hero-news-title">${title}</h2>
            <div class="hero-news-meta">
                <div class="meta-item">
                    <i class="fas fa-user"></i>
                    <span>${heroNews.author[lang] || heroNews.author.cn}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${heroNews.date}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-eye"></i>
                    <span>${formatNumber(heroNews.views)}</span>
                </div>
            </div>
        </div>
    `;
    
    container.addEventListener('click', () => viewNewsDetail(heroNews.id));
}

// ==================== 新闻列表 ====================
function renderNewsList() {
    const container = document.getElementById('news-grid');
    if (!container) return;
    
    let filteredArticles = [...state.articles];
    
    // 按分类筛选
    if (state.currentCategory !== 'all') {
        filteredArticles = filteredArticles.filter(a => a.category === state.currentCategory);
    }
    
    // 按搜索词筛选
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filteredArticles = filteredArticles.filter(article => {
            const lang = state.currentLanguage;
            const title = typeof article.title === 'object' ? article.title[lang] || article.title.cn : article.title;
            const excerpt = typeof article.excerpt === 'object' ? article.excerpt[lang] || article.excerpt.cn : article.excerpt;
            return title.toLowerCase().includes(query) || excerpt.toLowerCase().includes(query);
        });
    }
    
    // 分页
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
    
    if (paginatedArticles.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-newspaper" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                <p style="font-size: 1.2rem;">${getTranslation('no_news') || '暂无新闻'}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = paginatedArticles.map(article => createNewsCard(article)).join('');
    
    // 更新分页
    state.totalPages = Math.ceil(filteredArticles.length / state.itemsPerPage);
    renderPagination();
}

function createNewsCard(article) {
    const lang = state.currentLanguage;
    const title = typeof article.title === 'object' ? article.title[lang] || article.title.cn : article.title;
    const excerpt = typeof article.excerpt === 'object' ? article.excerpt[lang] || article.excerpt.cn : article.excerpt;
    const category = newsCategories.find(c => c.id === article.category);
    const categoryName = category ? (typeof category.name === 'object' ? category.name[lang] || category.name.cn : category.name) : '';
    
    // 为图片生成响应式 srcset
    const imageSrcset = generateImageSrcset(article.image);
    
    return `
        <div class="news-card ${state.viewMode === 'list' ? 'list-view' : ''}" 
             data-article-id="${article.id}"
             tabindex="0"
             role="article"
             aria-label="${escapeHTML(title)}"
             onclick="handleNewsCardClick(${article.id})"
             onkeypress="handleNewsCardKeyPress(event, ${article.id})">
            <div class="news-card-image">
                <img src="${article.image}" 
                     alt="${escapeHTML(title)}"
                     loading="lazy"
                     ${imageSrcset ? `srcset="${imageSrcset}"` : ''}
                     sizes="(max-width: 600px) 400px, 800px">
                ${article.isBreaking ? '<span class="news-card-badge">' + (getTranslation('breaking_news') || '突发') + '</span>' : ''}
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

// ==================== 分页导航 ====================
function renderPagination() {
    const container = document.getElementById('pagination');
    if (!container) return;
    
    if (state.totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // 上一页
    html += `<button ${state.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${state.currentPage - 1})">
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    // 页码
    for (let i = 1; i <= state.totalPages; i++) {
        if (i === 1 || i === state.totalPages || (i >= state.currentPage - 1 && i <= state.currentPage + 1)) {
            html += `<button class="${i === state.currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
            html += `<span style="padding: 10px;">...</span>`;
        }
    }
    
    // 下一页
    html += `<button ${state.currentPage === state.totalPages ? 'disabled' : ''} onclick="changePage(${state.currentPage + 1})">
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    container.innerHTML = html;
}

function changePage(page) {
    if (page < 1 || page > state.totalPages) return;
    state.currentPage = page;
    renderNewsList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 热门新闻 ====================
function renderHotNews() {
    const container = document.getElementById('hot-news-list');
    if (!container) return;
    
    const sortedArticles = [...state.articles].sort((a, b) => b.views - a.views).slice(0, 5);
    const lang = state.currentLanguage;
    
    container.innerHTML = sortedArticles.map((article, index) => {
        const title = typeof article.title === 'object' ? article.title[lang] || article.title.cn : article.title;
        return `
            <div class="hot-news-item" onclick="viewNewsDetail(${article.id})">
                <div class="hot-news-rank">${index + 1}</div>
                <div class="hot-news-title">${title}</div>
            </div>
        `;
    }).join('');
}

// ==================== 新闻详情 ====================
function viewNewsDetail(articleId) {
    const article = state.articles.find(a => a.id === articleId);
    if (!article) return;
    
    const lang = state.currentLanguage;
    const title = typeof article.title === 'object' ? article.title[lang] || article.title.cn : article.title;
    const content = typeof article.content === 'object' ? article.content[lang] || article.content.cn : article.content;
    const category = newsCategories.find(c => c.id === article.category);
    const categoryName = category ? (typeof category.name === 'object' ? category.name[lang] || category.name.cn : category.name) : '';
    
    document.getElementById('article-category').innerHTML = `<i class="fas fa-tag"></i><span>${categoryName}</span>`;
    document.getElementById('article-title').textContent = title;
    document.getElementById('article-author').textContent = article.author[lang] || article.author.cn;
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-views').textContent = formatNumber(article.views);
    document.getElementById('article-comments').textContent = article.comments;
    document.getElementById('article-featured-image').src = article.image;
    document.getElementById('article-content').innerHTML = content.replace(/\n/g, '<br>');
    
    // 渲染标签
    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = article.tags.map(tag => {
        const tagName = typeof tag === 'object' ? tag[lang] || tag.cn : tag;
        return `<span class="article-tag">${tagName}</span>`;
    }).join('');
    
    // 显示模态框
    document.getElementById('news-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ==================== 事件监听器 ====================
function setupEventListeners() {
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
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
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
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
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
    
    // 搜索
    document.getElementById('news-search-btn')?.addEventListener('click', performSearch);
    document.getElementById('news-search-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
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
    
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
    
    // 模态框 overlay 点击关闭
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                const modal = overlay.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(modal => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });
        }
    });
    
    // 订阅通讯
    document.querySelector('.newsletter-btn')?.addEventListener('click', () => {
        const email = document.querySelector('.newsletter-input').value;
        if (email) {
            showNotification(getTranslation('subscribe_success') || '订阅成功！');
            document.querySelector('.newsletter-input').value = '';
        } else {
            showNotification(getTranslation('enter_email') || '请输入邮箱');
        }
    });
    
    // 分享按钮
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('link')) {
                showNotification(getTranslation('link_copied') || '链接已复制');
            } else {
                showNotification(getTranslation('share_success') || '分享成功');
            }
        });
    });
}

function performSearch() {
    const searchInput = document.getElementById('news-search-input');
    state.searchQuery = searchInput.value.trim();
    state.currentPage = 1;
    renderNewsList();
}

// ==================== 工具函数 ====================
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getTranslation(key) {
    return translations[state.currentLanguage]?.[key] || key;
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

// ==================== 新增功能函数 ====================

/**
 * XSS 防护 - HTML 转义函数
 * 防止跨站脚本攻击
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
 * 生成响应式图片 srcset
 * 提供多种尺寸以适应不同屏幕
 */
function generateImageSrcset(imageUrl) {
    if (!imageUrl) return '';
    
    try {
        // 解析 URL
        const urlParts = imageUrl.split('?');
        const baseUrl = urlParts[0];
        const params = urlParts[1] || '';
        
        // 生成不同尺寸的图片 URL
        return `${baseUrl}?w=400&${params} 400w,
                ${baseUrl}?w=800&${params} 800w,
                ${baseUrl}?w=1200&${params} 1200w`;
    } catch (error) {
        console.error('生成图片 srcset 失败:', error);
        return '';
    }
}

/**
 * 处理新闻卡片点击事件
 * 打开新闻详情模态框
 */
function handleNewsCardClick(articleId) {
    try {
        console.log('点击新闻卡片，ID:', articleId);
        viewNewsDetail(articleId);
    } catch (error) {
        console.error('处理新闻卡片点击失败:', error);
        showNotification('加载新闻详情失败，请稍后重试');
    }
}

/**
 * 处理新闻卡片键盘事件
 * 支持 Enter 键打开详情
 */
function handleNewsCardKeyPress(event, articleId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleNewsCardClick(articleId);
    }
}

/**
 * 优化的新闻详情显示 - 增强图片处理
 */
function viewNewsDetail(articleId) {
    try {
        const article = state.articles.find(a => a.id === articleId);
        if (!article) {
            console.error('未找到文章，ID:', articleId);
            showNotification('文章不存在或已被删除');
            return;
        }
        
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
        
        // 预加载图片，避免闪烁
        const hdImageUrl = article.image.replace('w=800', 'w=1200');
        const imageLoader = new Image();
        imageLoader.src = hdImageUrl;
        
        // 设置基本内容（先于图片显示，避免等待）
        document.getElementById('article-category').innerHTML = 
            `<i class="fas fa-tag"></i><span>${escapeHTML(categoryName)}</span>`;
        document.getElementById('article-title').textContent = title;
        document.getElementById('article-author').textContent = 
            article.author[lang] || article.author.cn;
        document.getElementById('article-date').textContent = article.date;
        document.getElementById('article-views').textContent = formatNumber(article.views);
        document.getElementById('article-comments').textContent = article.comments;
        
        // 设置图片 - 使用预加载的图片
        const featuredImage = document.getElementById('article-featured-image');
        if (featuredImage) {
            // 先显示占位符
            featuredImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
            featuredImage.alt = title + ' - 新闻图片';
            featuredImage.loading = 'eager'; // 优先加载
            
            // 图片加载完成后显示
            imageLoader.onload = function() {
                featuredImage.src = hdImageUrl;
            };
            
            // 添加图片加载错误处理
            imageLoader.onerror = function() {
                console.warn('图片加载失败，使用备用图片');
                featuredImage.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200';
                featuredImage.alt = '默认新闻图片';
            };
        }
        
        // 设置内容 - 使用 XSS 防护（异步处理，避免阻塞）
        requestAnimationFrame(() => {
            const contentElement = document.getElementById('article-content');
            if (contentElement && typeof DOMPurify !== 'undefined') {
                contentElement.innerHTML = DOMPurify.sanitize(content.replace(/\n/g, '<br>'));
            } else if (contentElement) {
                // 如果没有 DOMPurify，使用简单的转义
                contentElement.innerHTML = escapeHTML(content).replace(/\n/g, '<br>');
            }
        });
        
        // 渲染标签
        const tagsContainer = document.getElementById('article-tags');
        if (tagsContainer) {
            tagsContainer.innerHTML = '';
            article.tags.forEach(tag => {
                const tagName = typeof tag === 'object' ? tag[lang] || tag.cn : tag;
                const tagElement = document.createElement('span');
                tagElement.className = 'article-tag';
                tagElement.textContent = tagName;
                tagsContainer.appendChild(tagElement);
            });
        }
        
        // 显示模态框（在所有内容准备完成后）
        requestAnimationFrame(() => {
            const modal = document.getElementById('news-modal');
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                
                // 聚焦到模态框
                const closeButton = modal.querySelector('.modal-close');
                if (closeButton) {
                    closeButton.focus();
                }
            }
        });
        
        console.log('新闻详情显示成功:', articleId);
    } catch (error) {
        console.error('显示新闻详情失败:', error);
        showNotification('加载新闻详情失败，请稍后重试');
    }
}
