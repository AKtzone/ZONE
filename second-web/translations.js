// 共享翻译文件 - 用于主网页和子网页的语言同步
const translations = {
    my: {
        // 导航栏
        logo: "မင်းသိင်္ခ",
        nav_home: "ပင်မစာမျက်နှာ",
        nav_portfolio: "လက်ရာများ",
        nav_about: "ကျွန်ုပ်အကြောင်း",
        nav_contact: "ဆက်သွယ်ရန်",
        
        // 主页英雄区
        hero_title: "မင်္ဂလာပါ၊ ကျွန်တော်က ဝဘ်ဒီဇိုင်နာပါ။",
        hero_subtitle: "မြန်မာ၊ တရုတ် နှင့် အင်္ဂလိပ် ဘာသာစကားများဖြင့် ဝဘ်စာမျက်နှာ ဒီဇိုင်းဆွဲပေးပါသည်။",
        hero_button: "ကျွန်ုပ်၏ လက်ရာများကို ကြည့်ရန်",
        
        // 作品集
        portfolio_title: "လက်ရာများ",
        project1_title: "စက်မှုလုပ်ငန်းဆိုဒ်",
        project1_desc: "မြန်မာဘာသာဖြင့် ဒီဇိုင်းဆွဲထားသော စက်မှုလုပ်ငန်းဝဘ်ဆိုဒ်",
        project2_title: "ဈေးဝယ်ဆိုဒ်",
        project2_desc: "အဆင့်မြင့် ဈေးဝယ်ဝဘ်ဆိုဒ် ဒီဇိုင်း",
        project3_title: "သတင်းဆိုဒ်",
        project3_desc: "ခေတ်မီသတင်းဝဘ်ဆိုဒ် ဒီဇိုင်း",
        project4_title: "ပညာရေးဆိုဒ်",
        project4_desc: "ပညာရေးဆိုင်ရာ ဝဘ်ဆိုဒ် ဒီဇိုင်း",
        project_button: "အသေးစိတ်ကြည့်ရန်",
        
        // 关于我
        about_title: "ကျွန်ုပ်အကြောင်း",
        about_desc: "ကျွန်တော်သည် မြန်မာနိုင်ငံမှ ဝဘ်ဒီဇိုင်နာတစ်ဦးဖြစ်ပါသည်။ မြန်မာ၊ တရုတ် နှင့် အင်္ဂလိပ်ဘာသာစကားများဖြင့် ဝဘ်ဆိုဒ်များ ဒီဇိုင်းဆွဲပေးနေပါသည်။ ခေတ်မီသော ဒီဇိုင်းများကို မြန်မာယဉ်ကျေးမှုနှင့် ပေါင်းစပ်ကာ ထူးခြားသော ဝဘ်အတွေ့အကြုံများ ဖန်တီးပေးပါသည်။",
        
        // 技能
        skills_title: "ကျွမ်းကျင်မှုများ",
        skill1: "ဝဘ်ဒီဇိုင်း",
        skill2: "မြန်မာစာစီစာ",
        skill3: "ဘာသာပြန်ဆိုခြင်း",
        skill4: "UI/UX ဒီဇိုင်း",
        skill5: "Frontend ဖွံ့ဖြိုးမှု",
        
        // 服务
        services_title: "ဆောင်ရွက်ပေးသော ဝန်ဆောင်မှုများ",
        service1: "ဝဘ်ဆိုဒ် ဒီဇိုင်း",
        service1_desc: "ခေတ်မီသော ဝဘ်ဆိုဒ်များ ဒီဇိုင်းဆွဲပေးခြင်း",
        service2: "ဖုန်း App ဒီဇိုင်း",
        service2_desc: "အသုံးပြုရလွယ်ကူသော မိုဘိုင်း App များ",
        service3: "ဘာသာပြန်ဆိုခြင်း",
        service3_desc: "မြန်မာ၊ တရုတ်၊ အင်္ဂလိပ် ဘာသာပြန်ဆိုမှုများ",
        service4: "UI/UX ဒီဇိုင်း",
        service4_desc: "အသုံးပြုသူအတွေ့အကြုံ ဒီဇိုင်းများ",
        
        // 联系方式
        contact_title: "ဆက်သွယ်ရန်",
        form_name: "နာမည်",
        form_email: "အီးမေးလ်",
        form_message: "မက်ဆေ့ချ်",
        form_submit: "စာပို့ရန်",
        social_title: "လူမှုကွန်ယက်လင့်ခ်များ",
        footer_text: "© ၂၀၂၅ မင်းသိင်္ခ။ မူပိုင်ခွင့်များ ခြွင်းချက်ထားရှိသည်။",
        
        // 项目详情页
        loading: "တင်နေသည်...",
        breadcrumb_home: "ပင်မစာမျက်နှာ",
        breadcrumb_portfolio: "လက်ရာများ",
        project_detail: "စီမံကိန်းအသေးစိတ်",
        project_type: "စီးပွားရေးဆိုဒ်",
        view_live: "အွန်လိုင်းကြည့်ရန်",
        back_portfolio: "လက်ရာများသို့ ပြန်သွားရန်",
        project_overview: "စီမံကိန်းအကျဉ်း",
        project_features: "လုပ်ဆောင်ချက်များ",
        project_technology: "နည်းပညာဖွဲ့စည်းပုံ",
        project_design: "ဒီဇိုင်းထူးခြားချက်များ",
        project_process: "လုပ်ငန်းစဉ်",
        project_results: "ရလဒ်များ",
        
        // 功能特点
        feature1_title: "အရွယ်အစားညီညွတ်သော ဒီဇိုင်း",
        feature1_desc: "ဖုန်း၊ တက်ဘလက်၊ ကွန်ပျူတာများတွင် ကောင်းမွန်သော ကြည့်ရှုမှုအတွေ့အကြုံကို အာမခံချက်။",
        feature2_title: "ဘာသာစကားအမျိုးမျိုး ပံ့ပိုးမှု",
        feature2_desc: "မြန်မာ၊ တရုတ် နှင့် အင်္ဂလိပ် ဘာသာစကား သုံးမျိုးကို ပံ့ပိုးပေးသည်။",
        feature3_title: "SEO အကောင်းဆုံးဖြစ်အောင် ပြုလုပ်ခြင်း",
        feature3_desc: "ရှာဖွေရေးအင်ဂျင် အကောင်းဆုံးဖြစ်အောင် ပြုလုပ်သော နည်းပညာများကို အသုံးပြုသည်။",
        feature4_title: "မြန်ဆန်သော ဖွင့်ချိန်",
        feature4_desc: "ပုံများနှင့် ကုဒ်များကို အကောင်းဆုံးဖြစ်အောင် ပြုလုပ်ထားသည်။",
        
        // 设计亮点
        design1_title: "ခေတ်မီဒီဇိုင်း",
        design1_desc: "ခေတ်မီသော ဒီဇိုင်းပုံစံဖြင့် ရိုးရှင်းပြီး ဆွဲဆောင်မှုရှိသည်။",
        design2_title: "မိုဘိုင်းဦးစားပေး",
        design2_desc: "မိုဘိုင်းပထမ ချဉ်းကပ်မှုဖြင့် အကောင်းဆုံး အတွေ့အကြုံကို ပေးစွမ်းသည်။",
        design3_title: "အသုံးပြုသူအတွေ့အကြုံ",
        design3_desc: "အသုံးပြုသူ အတွေ့အကြုံကို ဦးစားပေးကာ လွယ်ကူစွာ အသုံးပြုနိုင်သည်။",
        
        // 实施过程
        process1_title: "လိုအပ်ချက်များဆန်းစစ်ခြင်း",
        process1_desc: "စီးပွားရေးလုပ်ငန်းနှင့် ဆွေးနွေးကာ စီမံကိန်းလိုအပ်ချက်များကို ရှင်းလင်းစွာ သတ်မှတ်သည်။",
        process2_title: "ဒီဇိုင်းအဆင့်",
        process2_desc: "ဝဘ်ဆိုဒ် ပရိုတိုတိုက်ပ်နှင့် ဒီဇိုင်းများကို ဖန်တီးသည်။",
        process3_title: "ဖွံ့ဖြိုးမှုအဆင့်",
        process3_desc: "ဒီဇိုင်းအတိုင်း ဝဘ်ဆိုဒ်ကို တည်ဆောက်သည်။",
        process4_title: "စမ်းသပ်မှုနှင့် အကောင်းဆုံးဖြစ်အောင် ပြုလုပ်ခြင်း",
        process4_desc: "စမ်းသပ်မှုများ ပြုလုပ်ကာ စွမ်းဆောင်ရည်ကို မြှင့်တင်သည်။",
        process5_title: "တင်ခြင်းနှင့် ဖြန့်ချိခြင်း",
        process5_desc: "ဆာဗာသို့ တင်ကာ နောက်ဆုံးအဆင့်ပြီးဆုံးသည်။",
        
        // 成果展示
        result1_title: "ပင်မစာမျက်နှာ ဒီဇိုင်း",
        result2_title: "ထုတ်ကုန်စာမျက်နှာ",
        result3_title: "မိုဘိုင်းအရွယ်အစားညီညွတ်မှု",
        
        // 项目类型
        project_type_corporate: "စီးပွားရေးဆိုဒ်",
        project_type_ecommerce: "ဈေးဝယ်ဆိုဒ်",
        project_type_news: "သတင်းဆိုဒ်",
        project_type_education: "ပညာရေးဆိုဒ်",
        
        // 企业官网项目
        project_corporate_website_title: "စီးပွားရေးဆိုဒ်",
        project_corporate_website_desc: "၎င်းသည် ခေတ်မီသော စီးပွားရေးဆိုဒ်ဖြစ်ပြီး တုံ့ပြန်သော ဒီဇိုင်းနှင့် ဘာသာစကားအမျိုးမျိုးကို ပံ့ပိုးပေးကာ စီးပွားရေးလုပ်ငန်းများအတွက် ကျွမ်းကျင်သော အွန်လိုင်းပြသမှုပလပ်ဖောင်းကို ပေးစွမ်းသည်။",
        project_corporate_website_date: "၂၀၂၄ ဇန်နဝါရီ",
        project_corporate_website_duration: "၃ လ",
        project_corporate_website_category: "စီးပွားရေးဆိုဒ်",
        project_corporate_website_overview: "ဤစီမံကိန်းသည် နိုင်ငံတကာကုမ္ပဏီတစ်ခုအတွက် တရားဝင်ဝဘ်ဆိုဒ်ကို ဒီဇိုင်းဆွဲပေးခြင်းဖြစ်ပြီး ကုမ္ပဏီ၏ ပုံရိပ်၊ ထုတ်ကုန်ဝန်ဆောင်မှုများနှင့် နောက်ဆုံးရသတင်းများကို ပြသရန် ရည်ရွယ်သည်။ ဝဘ်ဆိုဒ်သည် ခေတ်မီသော ဒီဇိုင်းဘာသာစကားကို အသုံးပြုပြီး ကုမ္ပဏီ၏ အမှတ်တံဆိပ်အရောင်များနှင့် ပေါင်းစပ်ကာ ကျွမ်းကျင်ပြီး ယုံကြည်စိတ်ချရသော အွန်လိုင်းပြသမှုပလပ်ဖောင်းကို ဖန်တီးပေးသည်။ စီမံကိန်းကို ၃ လကြာ ပြီးမြောက်ခဲ့ပြီး လိုအပ်ချက်ခွဲခြမ်းစိတ်ဖြာမှုမှသည် နောက်ဆုံးအဆင့်တင်သည်အထိ သွက်လက်သော ဖွံ့ဖြိုးတိုးတက်မှုလုပ်ငန်းစဉ်ကို အသုံးပြုခဲ့သည်။",
        
        // 教育网站项目
        project_education_website_title: "ပညာရေးသင်ယူမှုပလပ်ဖောင်း",
        project_education_website_desc: "သင်တန်းစနစ်တည်ဆောက်မှု၊ သင်ကြားမှုအရင်းအမြစ်များ ပေါင်းစပ်မှုနှင့် သင်ယူမှုအကျိုးသက်ရောက်မှု အကဲဖြတ်မှုတို့ကို အဓိကထားသော ပညာရေးနှင့် သင်ယူမှုဆိုင်ရာ စီမံခန့်ခွဲမှု ပလပ်ဖောင်းဖြစ်သည်။",
        project_education_website_date: "၂၀၂၄ ဧပြီ",
        project_education_website_duration: "၄ လ",
        project_education_website_category: "ပညာရေးပလပ်ဖောင်း",
        project_education_website_overview: "ဤစီမံကိန်းသည် ပညာရေးအဖွဲ့အစည်းများအတွက် သင်တန်းစနစ်တည်ဆောက်မှု၊ သင်ကြားမှုအရင်းအမြစ်များနှင့် သိပ္ပံနည်းကျ သင်ယူမှုအကဲဖြတ်စနစ်တို့ကို အဓိကထား၍ တည်ဆောက်ထားသော ပညာရေးသင်ယူမှုပလပ်ဖောင်းဖြစ်သည်။ ပလပ်ဖောင်းတွင် သင်တန်းမိတ်ဆက်၊ သင်ကြားမှုအရင်းအမြစ်များ၊ သင်ယူမှုလမ်းကြောင်းပုံဖော်ခြင်းနှင့် ပညာရေးအဖြေများ စသည့် အဓိကမော်ဂျူးများ ပါဝင်ပြီး ဆရာနှင့် သင်္ကန်းများအတွက် နစ်မြုပ်သင်ယူမှုအတွေ့အကြုံကို ပံ့ပိုးပေးသည်။ စီမံကိန်းကို ၄ လကြာမြင့်ပြီး သင်ယူသူကိုဗဟိုပြုသော ဒီဇိုင်းသဘောတရားကို အသုံးပြုကာ ပညာရေးအကြောင်းအရာများ၏ ကျွမ်းကျင်မှုနှင့် သင်ယူမှုအတွေ့အကြုံ၏ ထိရောက်မှုကို သေချာစေသည်။",
        
        // 教育网站功能特点
        project_education_website_feature1_title: "သင်တန်းစနစ် တင်ဆက်မှု",
        project_education_website_feature1_desc: "သင်တန်းအကျဉ်း၊ သင်ယူမှုရည်မှန်းချက်များ၊ သင့်လျော်သောသူများနှင့် ကြိုတင်လိုအပ်ချက်များ ပါဝင်သည့် စနစ်တကျ သင်တန်းအမျိုးအစားခွဲခြားမှုနှင့် မိတ်ဆက်မှု။",
        project_education_website_feature2_title: "သင်ကြားမှုအရင်းအမြစ် ဗဟိုာန",
        project_education_website_feature2_desc: "သင်ကြားရေးဗီဒီယိုများ၊ အီလက်ထရောနစ်စာအုပ်များ၊ တင်ဆက်မှုများ၊ လေ့ကျင့်ခန်းများနှင့် ကိုးကားစာရွက်စာတမ်းများ အပါအဝင် မီဒီယာအမျိုးမျိုးဖြင့် သင်ကြားမှုအရင်းအမြစ်များကို ပေါင်းစပ်ထားသည်။",
        project_education_website_feature3_title: "သင်ယူမှုလမ်းကြောင်း ပုံဖော်ခြင်း",
        project_education_website_feature3_desc: "သင်ယူမှုရည်မှန်းချက်များနှင့် အခြေခံအဆင့်အလိုက် သင်ယူသူများအတွက် တစ်ဦးချင်းစီဆိုင်ရာ သင်ယူမှုလမ်းကြောင်းများကို အကြံပြုပေးသည်။",
        project_education_website_feature4_title: "ပညာရေးအဖြေများ",
        project_education_website_feature4_desc: "K12၊ အသက်မွေးဝမ်းကျောင်းပညာရေး၊ ကော်ပိုရိတ်သင်တန်းများ ကဲ့သို့သော ကွဲပြားသည့် ပညာရေးအခြေအနေများအတွက် စိတ်ကြိုက်သင်ကြားမှုအဖြေများနှင့် သင်တန်းအစုအဝေးများကို ပံ့ပိုးပေးသည်။",
        project_education_website_feature5_title: "သင်ယူမှုအကဲဖြတ်စနစ်",
        project_education_website_feature5_desc: "အွန်လိုင်းစစ်ဆေးမှုများ၊ အိမ်စာပေးပို့မှု၊ အလိုအလျောက်အမှတ်ပေးမှု၊ အဆင့်အကဲဖြတ်မှုခွဲခြမ်းစိတ်ဖြာမှုနှင့် သင်ယူမှုအစီရင်ခံစာများ ပါဝင်သည်။",
        project_education_website_feature6_title: "ဆရာ-သင်္ကန်း အပြန်အလှန်အသိုင်းအဝိုင်း",
        project_education_website_feature6_desc: "သင်တန်းဆွေးနွေးချက်ဇုန်များ၊ မေးခွန်းမေးမြန်းခြင်းဘောင်များနှင့် သင်ယူမှုအုပ်စုများကို ပံ့ပိုးပေးပြီး ဆရာနှင့် သင်္ကန်းအချင်းချင်း အပြန်အလှန်ဆက်သွယ်မှုကို မြှင့်တင်ပေးသည်။",
        
        // 教育网站设计亮点
        project_education_website_design1_title: "သင်ယူသူကိုဗဟိုပြုခြင်း",
        project_education_website_design1_desc: "ပညာရေးစိတ်ဓာတ်သဘောတရားများကို လိုက်နာပြီး သိမြင်မှုဝန်ထုပ်ဝန်ပိုးကို လျှော့ချကာ သင်ယူမှုဂရုစိုက်မှုနှင့် အချက်အလက်စုပ်ယူမှု ထိရောက်မှုကို မြှင့်တင်ပေးသည်။",
        project_education_website_design2_title: "သင်ကြားမှုကျွမ်းကျင်မှု",
        project_education_website_design2_desc: "ပညာရေးအကြောင်းအရာကိုယ်၌ကို အဓိကထားပြီး ဆရာများ သင်ကြားမှုကို စီစဉ်ရန်နှင့် သင်ယူသူများ အရင်းအမြစ်များကို ရှာဖွေရန် လွယ်ကူစေသော ရှင်းလင်းသည့် အချက်အလက်အဆင့်ဆင့်နှင့် လမ်းညွှန်ဖွဲ့စည်းပုံကို အသုံးပြုသည်။",
        project_education_website_design3_title: "သင်ယူမှုဒေတာ မြင်ကွင်းဖော်ပြခြင်း",
        project_education_website_design3_desc: "ဂရပ်များမှတစ်ဆင့် သင်ယူမှုတိုးတက်မှု၊ အဆင့်အကဲဖြတ်မှုပုံစံများနှင့် စွမ်းရည်ပုံစံများကို တိုက်ရိုက်ပြသပေးပြီး သင်ယူသူများအား ၎င်းတို့၏ သင်ယူမှုအခြေအနေကို နားလည်စေသည်။",
        project_education_website_design4_title: "စက်ပစ္စည်းအမျိုးမျိုးနှင့် ကိုက်ညီမှု",
        project_education_website_design4_desc: "ကွန်ပျူတာ၊ တက်ဘလက်နှင့် ဖုန်းများစွာကို ပံ့ပိုးပေးပြီး သင်ယူသူများအား အချိန်မရွေး နေရာမရွေး သင်ယူနိုင်စေသည်။",
        
        // 教育网站实施过程
        project_education_website_process1_title: "ပညာရေးလိုအပ်ချက် လေ့လာဆန်းစစ်ခြင်း",
        project_education_website_process1_desc: "ရည်ရွယ်ထားသော သင်ယူသူအုပ်စု၏ လက္ခဏာများ၊ သင်ယူမှုရည်မှန်းချက်များနှင့် သင်ကြားမှုအခြေအနေများကို နက်ရှိုင်းစွာ ခွဲခြမ်းစိတ်ဖြာပြီး ပညာရေးကျွမ်းကျင်သူများနှင့်အတူ လုပ်ဆောင်ချက်လိုအပ်ချက်များနှင့် အကြောင်းအရာမူဘောင်ကို သတ်မှတ်သည်။",
        project_education_website_process2_title: "သင်တန်းစနစ် တည်ဆောက်ခြင်း",
        project_education_website_process2_desc: "ဘာသာရပ်ကျွမ်းကျင်သူများနှင့် ပူးပေါင်းကာ သိပ္ပံနည်းကျ သင်တန်းဖွဲ့စည်းပုံ၊ သင်ယူမှုလမ်းကြောင်းများနှင့် အကဲဖြတ်မှုစံနှုန်းများကို တည်ဆောက်ပြီး ပညာရေးအကြောင်းအရာများ၏ ကျွမ်းကျင်မှုနှင့် စနစ်တကျရှိမှုကို သေချာစေသည်။",
        project_education_website_process3_title: "သင်ကြားမှုအရင်းအမြစ် ဖွံ့ဖြိုးတိုးတက်မှု",
        project_education_website_process3_desc: "ဆရာများအား သင်ကြားရေးဗီဒီယိုများ၊ တင်ဆက်မှုများ၊ လေ့ကျင့်ခန်းများနှင့် အခြားသင်ကြားမှုအရင်းအမြစ်များကို ဖန်တီးရန်နှင့် စုစည်းရန် ကူညီပေးပြီး စံနှုန်းသတ်မှတ်ထားသော အရင်းအမြစ်စနစ် စီမံခန့်ခွဲမှုကို တည်ဆောက်သည်။",
        project_education_website_process4_title: "ပလပ်ဖောင်းလုပ်ဆောင်ချက် အကောင်အထည်ဖော်ခြင်း",
        project_education_website_process4_desc: "သင်တန်းစီမံခန့်ခွဲမှု၊ သင်ယူမှုခြေရာခံခြင်း၊ အကဲဖြတ်စစ်ဆေးခြင်း စသည့် အဓိကလုပ်ဆောင်ချက်များကို တီထွင်ပြီး ဗီဒီယိုဖွင့်ခြင်း၊ အွန်လိုင်းစစ်ဆေးခြင်းနှင့် အပြန်အလှန်အသိုင်းအဝိုင်း မော်ဂျူးများကို ပေါင်းစပ်သည်။",
        project_education_website_process5_title: "သင်ကြားမှုစမ်းသပ်ခြင်းနှင့် အကောင်းဆုံးဖြစ်စေခြင်း",
        project_education_website_process5_desc: "အစစ်အမှန်သင်ကြားမှုပတ်ဝန်းကျင်တွင် စမ်းသပ်အသုံးပြုပြီး ဆရာနှင့် သင်္ကန်းများ၏ တုံ့ပြန်ချက်များကို စုဆောင်းကာ ပလပ်ဖောင်းလုပ်ဆောင်ချက်နှင့် အသုံးပြုသူအတွေ့အကြုံကို အဆက်မပြတ် အကောင်းဆုံးဖြစ်စေသည်။",
        project_education_website_process6_title: "အပြည့်အဝတိုးချဲ့ခြင်းနှင့် လေ့ကျင့်သင်ကြားခြင်း",
        project_education_website_process6_desc: "ဆရာလေ့ကျင့်သင်ကြားမှုများကို စီစဉ်ပြီး အသုံးပြုမှုလက်စွဲစာအုပ်များကို ရေးသားကာ နည်းပညာပံ့ပိုးမှုစနစ်ကို တည်ဆောက်ပြီး ပလပ်ဖောင်း အောင်မြင်စွာ အသုံးပြုနိုင်စေရန် သေချာစေသည်။",
        
        // 教育网站成果展示
        project_education_website_result1_title: "သင်တန်းအမျိုးအစား လမ်းညွှန်စာမျက်နှာ",
        project_education_website_result2_title: "သင်တန်းအသေးစိတ်နှင့် အရင်းအမြစ်စာမျက်နှာ",
        project_education_website_result3_title: "သင်ယူမှုလမ်းကြောင်း ပုံဖော်ခြင်းစာမျက်နှာ",
        project_education_website_result4_title: "သင်ယူမှုအကဲဖြတ်ခြင်းနှင့် အစီရင်ခံစာစာမျက်နှာ",
        
        // 购物网站
        shop_categories: "ကဏ္ဍများ",
        search_placeholder: "ကုန်ပစ္စည်းများကို ရှာဖွေရန်...",
        sort_default: "ပုံမှန်အစီအစဉ်",
        sort_price_asc: "ဈေးနှုန်း နိမ့်မှ မြင့်",
        sort_price_desc: "ဈေးနှုန်း မြင့်မှ နိမ့်",
        sort_rating: "အဆင့်အမြင့်ဆုံး",
        sort_sales: "အရောင်းရဆုံး",
        products_title: "ကုန်ပစ္စည်းအားလုံး",
        products_count: "ခု",
        sales: "အရောင်း",
        stock: "စတော့",
        in_stock: "လက်ဝယ်ရှိသည်",
        out_of_stock: "ကုန်ဆုံးနေသည်",
        low_stock: "အပူတိုက်",
        add_to_cart: "ခြင်းတောင်းထဲသို့ ထည့်ပါ",
        buy_now: "ယခုဝယ်ယူပါ",
        view_detail: "အသေးစိတ်ကြည့်ရန်",
        shopping_cart: "ဈေးဝယ်ခြင်းတောင်း",
        total: "စုစုပေါင်း",
        clear_cart: "ခြင်းတောင်းကို ရှင်းလင်းပါ",
        checkout: "ငွေချေပါ",
        cart_empty: "ခြင်းတောင်းတွင် ပစ္စည်းမရှိပါ",
        cart_empty_checkout: "ခြင်းတောင်းတွင် ပစ္စည်းမရှိပါ၊ ငွေချေ၍မရပါ",
        added_to_cart: "ခြင်းတောင်းထဲသို့ ထည့်ပြီးပါပြီ",
        confirm_clear_cart: "ခြင်းတောင်းကို ရှင်းလင်းရန် သေချာပါသလား",
        login: "ဝင်ရောက်ပါ",
        register: "မှတ်ပုံတင်ပါ",
        profile: "ကိုယ်ရေးအချက်အလက်",
        username: "အသုံးပြုသူအမည်",
        password: "စကားဝှက်",
        email: "အီးမေးလ်",
        login_btn: "ဝင်ရောက်ပါ",
        register_btn: "မှတ်ပုံတင်ပါ",
        logout: "ထွက်ရန်",
        login_success: "ဝင်ရောက်မှု အောင်မြင်သည်",
        register_success: "မှတ်ပုံတင်မှု အောင်မြင်သည်",
        logout_success: "ထွက်ရန် အောင်မြင်သည်",
        my_orders: "ကျွန်ုပ်၏ အော်ဒါများ",
        my_address: "လိပ်စာများ",
        checkout_title: "ငွေချေပါ",
        step_cart: "ခြင်းတောင်း အတည်ပြုခြင်း",
        step_address: "လက်ခံလိပ်စာ",
        step_payment: "ငွေချေစနစ်",
        step_confirm: "အော်ဒါ အတည်ပြုခြင်း",
        add_address: "လိပ်စာအသစ် ထည့်ပါ",
        credit_card: "ခရက်ဒစ်ကဒ်",
        wechat_pay: "WeChat Pay",
        alipay: "Alipay",
        cod: "ငွေချေစနစ်",
        order_summary: "အော်ဒါ အနှစ်ချုပ်",
        subtotal: "စုစုပေါင်း",
        shipping: "ပို့ဆောင်ခ",
        free_shipping: "အခမဲ့ ပို့ဆောင်ရေး",
        back: "နောက်သို့",
        next: "နောက်တစ်ခု",
        submit_order: "အော်ဒါ တင်ပါ",
        order_success: "အော်ဒါ တင်သွင်းမှု အောင်မြင်သည်",
        option_quantity: "ပမာဏ",
        feature_coming_soon: "မကြာမီ လာမည်...",
        search_history: "ရှာဖွေရေး မှတ်တမ်း",
        no_products: "ကုန်ပစ္စည်း မရှိပါ",
        
        // 新闻网站
        breaking_news: "ထူးခြားသတင်း",
        search_news_placeholder: "သတင်းများကို ရှာဖွေရန်...",
        all_categories: "အားလုံး",
        category_politics: "နိုင်ငံရေး",
        category_economy: "စီးပွားရေး",
        category_technology: "နည်းပညာ",
        category_sports: "အားကစား",
        category_entertainment: "ဖျော်ဖြေရေး",
        category_health: "ကျန်းမာရေး",
        latest_news: "နောက်ဆုံးရ သတင်းများ",
        hot_news: "လူကြိုက်များ သတင်းများ",
        categories: "ကဏ္ဍများ",
        newsletter: "သတင်းစာ မှတ်ပုံတင်ခြင်း",
        newsletter_desc: "ကျွန်ုပ်တို့၏ နေ့စဉ် သတင်းအနှစ်ချုပ်ကို မှတ်ပုံတင်ပါ",
        enter_email: "သင့် အီးမေးလ်ကို ထည့်ပါ",
        subscribe: "မှတ်ပုံတင်ပါ",
        subscribe_success: "မှတ်ပုံတင်မှု အောင်မြင်သည်!",
        share_article: "ဆောင်းပါးကို မျှဝေပါ",
        no_news: "သတင်း မရှိပါ",
        link_copied: "လင့်ခ်ကို ကူးယူပြီးပါပြီ",
        share_success: "မျှဝေမှု အောင်မြင်သည်"
    },
    cn: {
        // 导航栏
        logo: "敏廷凯",
        nav_home: "首页",
        nav_portfolio: "作品集",
        nav_about: "关于我",
        nav_contact: "联系方式",
        
        // 主页英雄区
        hero_title: "你好，我是一名网页设计师。",
        hero_subtitle: "提供缅文、中文与英文的网页设计。",
        hero_button: "查看我的作品",
        
        // 作品集
        portfolio_title: "我的项目",
        project1_title: "企业官网",
        project1_desc: "使用缅文设计的企业官方网站",
        project2_title: "购物网站",
        project2_desc: "高级购物网站设计",
        project3_title: "新闻网站",
        project3_desc: "现代化新闻网站设计",
        project4_title: "教育网站",
        project4_desc: "教育相关网站设计",
        project_button: "查看详情",
        
        // 关于我
        about_title: "关于我",
        about_desc: "我是一名来自缅甸的网页设计师。我使用缅甸语、中文和英语设计网站。我将现代设计与缅甸文化相结合，创造独特的网页体验。",
        
        // 技能
        skills_title: "我的技能",
        skill1: "网页设计",
        skill2: "缅文排版",
        skill3: "中英翻译",
        skill4: "UI/UX设计",
        skill5: "前端开发",
        
        // 服务
        services_title: "提供的服务",
        service1: "网站设计",
        service1_desc: "现代化网站设计服务",
        service2: "手机应用设计",
        service2_desc: "易于使用的移动应用设计",
        service3: "翻译服务",
        service3_desc: "缅文、中文、英文翻译服务",
        service4: "UI/UX设计",
        service4_desc: "用户体验界面设计",
        
        // 联系方式
        contact_title: "与我联系",
        form_name: "姓名",
        form_email: "邮箱",
        form_message: "留言内容",
        form_submit: "发送信息",
        social_title: "社交媒体链接",
        footer_text: "© 2025 敏廷凯 版权所有。",
        
        // 项目详情页
        loading: "加载中...",
        breadcrumb_home: "首页",
        breadcrumb_portfolio: "作品集",
        project_detail: "项目详情",
        project_type: "企业官网",
        view_live: "查看在线演示",
        back_portfolio: "返回作品集",
        project_overview: "项目概述",
        project_features: "功能特点",
        project_technology: "技术架构",
        project_design: "设计亮点",
        project_process: "实施过程",
        project_results: "成果展示",
        
        // 功能特点
        feature1_title: "响应式设计",
        feature1_desc: "适配各种设备屏幕，确保在手机、平板和电脑上都有良好的浏览体验。",
        feature2_title: "多语言支持",
        feature2_desc: "支持缅文、中文和英文三种语言，满足不同地区用户的需求。",
        feature3_title: "SEO优化",
        feature3_desc: "采用搜索引擎优化技术，提高网站在搜索结果中的排名。",
        feature4_title: "快速加载",
        feature4_desc: "优化图片和代码，确保页面快速加载，提升用户体验。",
        
        // 设计亮点
        design1_title: "现代化设计",
        design1_desc: "采用扁平化设计风格，简洁大方，符合现代审美趋势。",
        design2_title: "移动优先",
        design2_desc: "采用移动优先的设计理念，确保在移动设备上的最佳体验。",
        design3_title: "用户体验",
        design3_desc: "注重用户体验设计，提供直观易用的界面和流畅的交互。",
        
        // 实施过程
        process1_title: "需求分析",
        process1_desc: "与企业沟通，明确项目需求和目标，制定详细的项目计划。",
        process2_title: "设计阶段",
        process2_desc: "创建网站原型和视觉设计，与企业确认设计方案。",
        process3_title: "开发实现",
        process3_desc: "按照设计稿进行前端开发，实现所有功能模块。",
        process4_title: "测试优化",
        process4_desc: "进行全面测试，优化性能和用户体验。",
        process5_title: "上线部署",
        process5_desc: "将网站部署到服务器，完成最终上线。",
        
        // 成果展示
        result1_title: "首页设计",
        result2_title: "产品页面",
        result3_title: "移动端适配",
        
        // 项目类型
        project_type_corporate: "企业官网",
        project_type_ecommerce: "购物网站",
        project_type_news: "新闻网站",
        project_type_education: "教育网站",
        
        // 企业官网项目
        project_corporate_website_title: "企业官网项目",
        project_corporate_website_desc: "这是一个现代化的企业官网项目，采用响应式设计，支持多语言切换，为企业提供专业的在线展示平台。",
        project_corporate_website_date: "2024 年 1 月",
        project_corporate_website_duration: "3 个月",
        project_corporate_website_category: "企业网站",
        project_corporate_website_overview: "本项目是为一家跨国企业设计的官方网站，旨在展示企业形象、产品服务和最新动态。网站采用现代化的设计语言，结合企业品牌色彩，打造专业、可信的在线展示平台。项目历时 3 个月完成，从需求分析到最终上线，全程采用敏捷开发流程。",
        
        // 教育网站项目
        project_education_website_title: "教育学习平台项目",
        project_education_website_desc: "专业的在线教育与学习管理平台，聚焦课程体系建设、教学资源整合与学习效果评估。",
        project_education_website_date: "2024 年 4 月",
        project_education_website_duration: "4 个月",
        project_education_website_category: "教育平台",
        project_education_website_overview: "本项目是为教育机构打造的专业化在线学习平台，重点建设完整的课程体系、丰富的教学资源和科学的学习评估系统。平台涵盖课程介绍、教学资源库、学习路径规划、教育解决方案等核心模块，为师生提供沉浸式的教与学体验。项目历时 4 个月，采用以学习者为中心的设计理念，确保教育内容的专业性和学习体验的有效性。",
        
        // 教育网站功能特点
        project_education_website_feature1_title: "课程体系展示",
        project_education_website_feature1_desc: "系统化的课程分类与介绍，包含课程大纲、教学目标、适用人群和先修要求，帮助学习者清晰了解课程结构。",
        project_education_website_feature2_title: "教学资源中心",
        project_education_website_feature2_desc: "整合多媒体教学资源，包括教学视频、电子教材、课件下载、习题库和参考文献，支持教师便捷上传和管理。",
        project_education_website_feature3_title: "学习路径规划",
        project_education_website_feature3_desc: "根据学习目标和基础水平，为学习者推荐个性化的学习路径，包含课程顺序建议、时间规划和学习资源配给。",
        project_education_website_feature4_title: "教育解决方案",
        project_education_website_feature4_desc: "针对不同教育场景（K12、职业教育、企业培训）提供定制化的教学解决方案和课程包。",
        project_education_website_feature5_title: "学习评估系统",
        project_education_website_feature5_desc: "包含在线测验、作业提交、自动评分、成绩分析和学习报告，帮助教师评估教学效果。",
        project_education_website_feature6_title: "师生互动社区",
        project_education_website_feature6_desc: "提供课程讨论区、问答板块和学习小组功能，促进师生交流和同伴学习。",
        
        // 教育网站设计亮点
        project_education_website_design1_title: "以学习者为中心",
        project_education_website_design1_desc: "界面设计遵循教育心理学原则，减少认知负荷，提升学习专注度和信息吸收效率。",
        project_education_website_design2_title: "教学专业性",
        project_education_website_design2_desc: "突出教育内容本身，采用清晰的信息层级和导航结构，便于教师组织教学和学习者查找资源。",
        project_education_website_design3_title: "学习数据可视化",
        project_education_website_design3_desc: "通过图表直观展示学习进度、成绩趋势和能力图谱，帮助学习者了解自身学习状况。",
        project_education_website_design4_title: "多终端适配",
        project_education_website_design4_desc: "支持电脑、平板和手机等多种设备，确保学习者可以随时随地进行学习。",
        
        // 教育网站实施过程
        project_education_website_process1_title: "教育需求调研",
        project_education_website_process1_desc: "深入分析目标学习者群体特征、学习目标和教学场景，与教育专家共同确定功能需求和内容框架。",
        project_education_website_process2_title: "课程体系设计",
        project_education_website_process2_desc: "与学科专家合作，设计科学的课程结构、学习路径和评估标准，确保教育内容的专业性和系统性。",
        project_education_website_process3_title: "教学资源开发",
        project_education_website_process3_desc: "协助教师制作和整理教学视频、课件、习题等教学资源，建立标准化的资源库管理体系。",
        project_education_website_process4_title: "平台功能实现",
        project_education_website_process4_desc: "开发课程管理、学习跟踪、评估测试等核心功能，集成视频播放、在线测试和互动社区模块。",
        project_education_website_process5_title: "教学试点与优化",
        project_education_website_process5_desc: "在真实教学环境中进行试点运行，收集师生反馈，持续优化平台功能和用户体验。",
        project_education_website_process6_title: "全面推广与培训",
        project_education_website_process6_desc: "组织教师培训，编写使用手册，建立技术支持体系，确保平台顺利投入使用。",
        
        // 教育网站成果展示
        project_education_website_result1_title: "课程分类导航页",
        project_education_website_result2_title: "课程详情与资源页",
        project_education_website_result3_title: "学习路径规划页",
        project_education_website_result4_title: "学习评估与报告页",
        
        // 购物网站
        shop_categories: "分类导航",
        search_placeholder: "搜索商品...",
        sort_default: "默认排序",
        sort_price_asc: "价格从低到高",
        sort_price_desc: "价格从高到低",
        sort_rating: "评分最高",
        sort_sales: "销量最高",
        products_title: "全部商品",
        products_count: "件商品",
        sales: "销量",
        stock: "库存",
        in_stock: "有货",
        out_of_stock: "缺货",
        low_stock: "热销",
        add_to_cart: "加入购物车",
        buy_now: "立即购买",
        view_detail: "查看详情",
        shopping_cart: "购物车",
        total: "总计",
        clear_cart: "清空购物车",
        checkout: "去结算",
        cart_empty: "购物车为空",
        cart_empty_checkout: "购物车为空，无法结算",
        added_to_cart: "已添加到购物车",
        confirm_clear_cart: "确定要清空购物车吗？",
        login: "登录",
        register: "注册",
        profile: "个人信息",
        username: "用户名",
        password: "密码",
        email: "邮箱",
        login_btn: "登录",
        register_btn: "注册",
        logout: "退出登录",
        login_success: "登录成功",
        register_success: "注册成功",
        logout_success: "已退出登录",
        my_orders: "我的订单",
        my_address: "收货地址",
        checkout_title: "结算",
        step_cart: "购物车确认",
        step_address: "收货地址",
        step_payment: "支付方式",
        step_confirm: "订单确认",
        add_address: "添加新地址",
        credit_card: "信用卡",
        wechat_pay: "微信支付",
        alipay: "支付宝",
        cod: "货到付款",
        order_summary: "订单摘要",
        subtotal: "小计",
        shipping: "运费",
        free_shipping: "免运费",
        back: "上一步",
        next: "下一步",
        submit_order: "提交订单",
        order_success: "订单提交成功！",
        option_quantity: "数量",
        feature_coming_soon: "功能开发中...",
        search_history: "搜索历史",
        no_products: "暂无商品",
        
        // 新闻网站
        breaking_news: "突发新闻",
        search_news_placeholder: "搜索新闻...",
        all_categories: "全部",
        category_politics: "政治",
        category_economy: "经济",
        category_technology: "科技",
        category_sports: "体育",
        category_entertainment: "娱乐",
        category_health: "健康",
        latest_news: "最新新闻",
        hot_news: "热门新闻",
        categories: "分类",
        newsletter: "订阅通讯",
        newsletter_desc: "订阅我们的每日新闻摘要",
        enter_email: "输入您的邮箱",
        subscribe: "订阅",
        subscribe_success: "订阅成功！",
        share_article: "分享文章",
        no_news: "暂无新闻",
        link_copied: "链接已复制",
        share_success: "分享成功"
    },
    en: {
        // Navigation
        logo: "Min Thant Kyaw",
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Hello, I'm a Web Designer.",
        hero_subtitle: "Providing web design in Burmese, Chinese, and English.",
        hero_button: "View My Work",
        
        // Portfolio
        portfolio_title: "My Projects",
        project1_title: "Corporate Site",
        project1_desc: "Corporate website designed in Burmese language",
        project2_title: "E-commerce Site",
        project2_desc: "Advanced e-commerce website design",
        project3_title: "News Portal",
        project3_desc: "Modern news website design",
        project4_title: "Education Site",
        project4_desc: "Education-related website design",
        project_button: "View Details",
        
        // About
        about_title: "About Me",
        about_desc: "I am a web designer from Myanmar. I design websites in Burmese, Chinese, and English languages. I combine modern designs with Myanmar culture to create unique web experiences.",
        
        // Skills
        skills_title: "My Skills",
        skill1: "Web Design",
        skill2: "Burmese Typography",
        skill3: "Translation",
        skill4: "UI/UX Design",
        skill5: "Frontend Development",
        
        // Services
        services_title: "Services Offered",
        service1: "Website Design",
        service1_desc: "Modern website design services",
        service2: "Mobile App Design",
        service2_desc: "User-friendly mobile application design",
        service3: "Translation Services",
        service3_desc: "Burmese, Chinese, English translation services",
        service4: "UI/UX Design",
        service4_desc: "User experience interface design",
        
        // Contact
        contact_title: "Get In Touch",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",
        social_title: "Social Links",
        footer_text: "© 2025 Min Thant Kyaw. All rights reserved.",
        
        // Project Detail Page
        loading: "Loading...",
        breadcrumb_home: "Home",
        breadcrumb_portfolio: "Portfolio",
        project_detail: "Project Details",
        project_type: "Corporate Website",
        view_live: "View Live Demo",
        back_portfolio: "Back to Portfolio",
        project_overview: "Project Overview",
        project_features: "Features",
        project_technology: "Technology Stack",
        project_design: "Design Highlights",
        project_process: "Implementation Process",
        project_results: "Results Showcase",
        
        // Features
        feature1_title: "Responsive Design",
        feature1_desc: "Adapts to various device screens, ensuring good browsing experience on mobile, tablet, and computer.",
        feature2_title: "Multi-language Support",
        feature2_desc: "Supports Burmese, Chinese, and English languages to meet the needs of users in different regions.",
        feature3_title: "SEO Optimization",
        feature3_desc: "Uses search engine optimization techniques to improve website ranking in search results.",
        feature4_title: "Fast Loading",
        feature4_desc: "Optimizes images and code to ensure fast page loading and improve user experience.",
        
        // Design Highlights
        design1_title: "Modern Design",
        design1_desc: "Uses flat design style, simple and elegant, in line with modern aesthetic trends.",
        design2_title: "Mobile First",
        design2_desc: "Adopts mobile-first design concept to ensure optimal experience on mobile devices.",
        design3_title: "User Experience",
        design3_desc: "Focuses on user experience design, providing intuitive and easy-to-use interface with smooth interactions.",
        
        // Implementation Process
        process1_title: "Requirement Analysis",
        process1_desc: "Communicate with the enterprise to clarify project requirements and goals, develop detailed project plan.",
        process2_title: "Design Phase",
        process2_desc: "Create website prototypes and visual designs, confirm design solutions with the enterprise.",
        process3_title: "Development Implementation",
        process3_desc: "Frontend development according to design drafts, implementing all functional modules.",
        process4_title: "Testing & Optimization",
        process4_desc: "Comprehensive testing, optimizing performance and user experience.",
        process5_title: "Launch & Deployment",
        process5_desc: "Deploy website to server, complete final launch.",
        
        // Results Showcase
        result1_title: "Homepage Design",
        result2_title: "Product Page",
        result3_title: "Mobile Adaptation",
        
        // 项目类型
        project_type_corporate: "Corporate Website",
        project_type_ecommerce: "E-commerce Site",
        project_type_news: "News Portal",
        project_type_education: "Education Site",
        
        // Corporate Website Project
        project_corporate_website_title: "Corporate Website Project",
        project_corporate_website_desc: "This is a modern corporate website project with responsive design and multi-language support, providing a professional online display platform for enterprises.",
        project_corporate_website_date: "January 2024",
        project_corporate_website_duration: "3 Months",
        project_corporate_website_category: "Corporate Website",
        project_corporate_website_overview: "This project is an official website designed for a multinational enterprise, aiming to showcase the company's image, products, services, and latest news. The website adopts a modern design language, combined with corporate brand colors, to create a professional and trustworthy online display platform. The project was completed in 3 months, using an agile development process from requirement analysis to final launch.",
        
        // Education Website Project
        project_education_website_title: "Education Learning Platform Project",
        project_education_website_desc: "Professional online education and learning management platform, focusing on curriculum system construction, teaching resource integration, and learning effectiveness evaluation.",
        project_education_website_date: "April 2024",
        project_education_website_duration: "4 Months",
        project_education_website_category: "Education Platform",
        project_education_website_overview: "This project is a professional online learning platform built for educational institutions, focusing on building a complete curriculum system, rich teaching resources, and scientific learning assessment system. The platform covers core modules such as course introduction, teaching resource library, learning path planning, and educational solutions, providing an immersive teaching and learning experience for teachers and students. The project took 4 months, adopting a learner-centered design philosophy to ensure the professionalism of educational content and the effectiveness of the learning experience.",
        
        // Education Website Features
        project_education_website_feature1_title: "Curriculum System Display",
        project_education_website_feature1_desc: "Systematic course classification and introduction, including course syllabus, teaching objectives, target audience, and prerequisites to help learners clearly understand the course structure.",
        project_education_website_feature2_title: "Teaching Resource Center",
        project_education_website_feature2_desc: "Integrates multimedia teaching resources including teaching videos, e-books, courseware downloads, exercise banks, and reference materials, supporting teachers in convenient uploading and management.",
        project_education_website_feature3_title: "Learning Path Planning",
        project_education_website_feature3_desc: "Recommends personalized learning paths for learners based on learning goals and foundation level, including course sequence suggestions, time planning, and learning resource allocation.",
        project_education_website_feature4_title: "Educational Solutions",
        project_education_website_feature4_desc: "Provides customized teaching solutions and course packages for different educational scenarios (K12, vocational education, corporate training).",
        project_education_website_feature5_title: "Learning Assessment System",
        project_education_website_feature5_desc: "Includes online quizzes, homework submission, automatic grading, grade analysis, and learning reports to help teachers evaluate teaching effectiveness.",
        project_education_website_feature6_title: "Teacher-Student Interaction Community",
        project_education_website_feature6_desc: "Provides course discussion forums, Q&A sections, and learning groups to promote interaction between teachers and students and peer learning.",
        
        // Education Website Design Highlights
        project_education_website_design1_title: "Learner-Centered",
        project_education_website_design1_desc: "Interface design follows educational psychology principles, reduces cognitive load, and improves learning focus and information absorption efficiency.",
        project_education_website_design2_title: "Teaching Professionalism",
        project_education_website_design2_desc: "Highlights educational content itself, adopts clear information hierarchy and navigation structure, facilitating teachers to organize teaching and learners to find resources.",
        project_education_website_design3_title: "Learning Data Visualization",
        project_education_website_design3_desc: "Visually displays learning progress, grade trends, and competency maps through charts to help learners understand their learning status.",
        project_education_website_design4_title: "Multi-Device Adaptation",
        project_education_website_design4_desc: "Supports computers, tablets, and mobile phones to ensure learners can learn anytime, anywhere.",
        
        // Education Website Implementation Process
        project_education_website_process1_title: "Educational Needs Research",
        project_education_website_process1_desc: "Deeply analyze target learner group characteristics, learning goals, and teaching scenarios, work with educational experts to determine functional requirements and content framework.",
        project_education_website_process2_title: "Curriculum System Design",
        project_education_website_process2_desc: "Collaborate with subject experts to design scientific course structure, learning paths, and assessment standards to ensure professionalism and systematicity of educational content.",
        project_education_website_process3_title: "Teaching Resource Development",
        project_education_website_process3_desc: "Assist teachers in creating and organizing teaching videos, courseware, exercises, and other teaching resources, establishing a standardized resource library management system.",
        project_education_website_process4_title: "Platform Function Implementation",
        project_education_website_process4_desc: "Develop core functions such as course management, learning tracking, and assessment testing, integrating video playback, online testing, and interactive community modules.",
        project_education_website_process5_title: "Teaching Pilot & Optimization",
        project_education_website_process5_desc: "Conduct pilot operations in real teaching environments, collect feedback from teachers and students, and continuously optimize platform functionality and user experience.",
        project_education_website_process6_title: "Full Promotion & Training",
        project_education_website_process6_desc: "Organize teacher training, write user manuals, establish technical support systems to ensure the platform is successfully put into use.",
        
        // Education Website Results Showcase
        project_education_website_result1_title: "Course Category Navigation Page",
        project_education_website_result2_title: "Course Details & Resources Page",
        project_education_website_result3_title: "Learning Path Planning Page",
        project_education_website_result4_title: "Learning Assessment & Report Page",
        
        // Shopping Site
        shop_categories: "Categories",
        search_placeholder: "Search products...",
        sort_default: "Default Sort",
        sort_price_asc: "Price: Low to High",
        sort_price_desc: "Price: High to Low",
        sort_rating: "Highest Rating",
        sort_sales: "Best Selling",
        products_title: "All Products",
        products_count: "items",
        sales: "Sales",
        stock: "Stock",
        in_stock: "In Stock",
        out_of_stock: "Out of Stock",
        low_stock: "Hot Sale",
        add_to_cart: "Add to Cart",
        buy_now: "Buy Now",
        view_detail: "View Detail",
        shopping_cart: "Shopping Cart",
        total: "Total",
        clear_cart: "Clear Cart",
        checkout: "Checkout",
        cart_empty: "Cart is empty",
        cart_empty_checkout: "Cart is empty, cannot checkout",
        added_to_cart: "Added to cart",
        confirm_clear_cart: "Are you sure to clear the cart?",
        login: "Login",
        register: "Register",
        profile: "Profile",
        username: "Username",
        password: "Password",
        email: "Email",
        login_btn: "Login",
        register_btn: "Register",
        logout: "Logout",
        login_success: "Login successful",
        register_success: "Registration successful",
        logout_success: "Logged out successfully",
        my_orders: "My Orders",
        my_address: "My Addresses",
        checkout_title: "Checkout",
        step_cart: "Cart Confirmation",
        step_address: "Shipping Address",
        step_payment: "Payment Method",
        step_confirm: "Order Confirmation",
        add_address: "Add New Address",
        credit_card: "Credit Card",
        wechat_pay: "WeChat Pay",
        alipay: "Alipay",
        cod: "Cash on Delivery",
        order_summary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free_shipping: "Free Shipping",
        back: "Back",
        next: "Next",
        submit_order: "Submit Order",
        order_success: "Order submitted successfully!",
        option_quantity: "Quantity",
        feature_coming_soon: "Feature coming soon...",
        search_history: "Search History",
        no_products: "No products",
        
        // News Website
        breaking_news: "Breaking News",
        search_news_placeholder: "Search news...",
        all_categories: "All",
        category_politics: "Politics",
        category_economy: "Economy",
        category_technology: "Technology",
        category_sports: "Sports",
        category_entertainment: "Entertainment",
        category_health: "Health",
        latest_news: "Latest News",
        hot_news: "Hot News",
        categories: "Categories",
        newsletter: "Newsletter",
        newsletter_desc: "Subscribe to our daily news summary",
        enter_email: "Enter your email",
        subscribe: "Subscribe",
        subscribe_success: "Subscription successful!",
        share_article: "Share Article",
        no_news: "No news",
        link_copied: "Link copied",
        share_success: "Share successful"
    }
};

// 当前语言状态
let currentLanguage = 'my';

// 更新语言函数
function updateLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }
    
    currentLanguage = lang;
    
    // 更新所有带有 data-lang-key 属性的元素
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            // 平滑过渡效果
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = translations[lang][key];
                element.style.opacity = '1';
            }, 200);
        }
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-pressed', 'true');
    }
    
    // 保存到 localStorage，实现跨页面语言同步
    localStorage.setItem('preferredLanguage', lang);
    
    // 触发自定义事件，通知其他组件语言已更改
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// 初始化语言
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        updateLanguage(savedLanguage);
    } else {
        updateLanguage('my');
    }
}

// 获取翻译文本的辅助函数
function getTranslation(key, lang = null) {
    const targetLang = lang || currentLanguage;
    return translations[targetLang]?.[key] || key;
}
