
import { Translations, QuizTopic, CountryDetail, Language, SeoConfig, PageView } from './types';

export const AFFILIATE_LINK = "http://playstake.io/landing?c=play971&offer=play971";

export const IMAGES = {
  hero: {
    bg: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2000&auto=format&fit=crop", 
    aviatorCard: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80"
  },
  sports: {
    banner: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80",
    arabSupport: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
  },
  poker: {
    bg: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80",
    royalFlush: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Royal_Flush_spade.jpg/640px-Royal_Flush_spade.jpg"
  },
  casino: {
    sweetBonanza: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80",
    gatesOfOlympus: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80",
    wanted: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80",
    sugarRush: "https://images.unsplash.com/photo-1581553632367-271032170327?auto=format&fit=crop&q=80",
    fruitParty: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80",
    chaosCrew: "https://images.unsplash.com/photo-1605218427306-0220202d0834?auto=format&fit=crop&q=80",
    bookOfDead: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80",
    razorShark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    moneyTrain: "https://images.unsplash.com/photo-1542259682-628d61741541?auto=format&fit=crop&q=80",
    mental: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&q=80",
    bigBass: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80",
    sanQuentin: "https://images.unsplash.com/photo-1584034289882-9694e9275035?auto=format&fit=crop&q=80"
  }
};

export const TEXTS: Record<Language, Translations> = {
  en: {
    nav: {
      sports: "Sports",
      casino: "Casino",
      promo: "Promo Code",
      aviator: "Crash Games",
      poker: "Poker",
      news: "News",
      login: "Login",
      register: "Register",
      quiz: "Quiz"
    },
    hero: {
      title: "Play Smarter with Stake",
      subtitle: "The trusted partners for the Arab World. Highest Bonuses, Instant Withdrawals, VIP Support.",
      cta: "Play Now",
      bonus: "Get $3000 Bonus"
    },
    home: {
      featuresTitle: "Why Choose Play971?",
      feature1Title: "Instant Withdrawals",
      feature1Body: "No more waiting. Get your crypto winnings instantly to your wallet.",
      feature2Title: "24/7 Arabic Support",
      feature2Body: "Dedicated support team speaking your language, available round the clock.",
      feature3Title: "Exclusive VIP Perks",
      feature3Body: "Access high roller tables, higher limits, and dedicated VIP hosts.",
      arabTitle: "Built for Arab Players",
      arabSubtitle: "Localization",
      arabBody1: "We understand the unique needs of players from the GCC and MENA region.",
      arabBody2: "From localized support to culturally relevant games and sports markets.",
      vipTitle: "VIP Program",
      vipSubtitle: "Unlock the ultimate gaming experience",
      vipBody: "Climb the ranks and earn massive rewards.",
      vipBenefit1: "Dedicated Host",
      vipBenefit2: "Higher Limits",
      vipBenefit3: "Exclusive Bonuses",
      vipBenefit4: "Luxury Gifts",
      countriesTitle: "Supported Countries",
      countriesSubtitle: "Find dedicated guides for your region",
      cryptoTitle: "Crypto Gambling",
      cryptoSubtitle: "The Future is Here"
    },
    promo: {
      title: "Exclusive Promo Code",
      subtitle: "Unlock max rewards",
      copy: "Use code PLAY971 to unlock a 200% deposit bonus up to $3000 and instant 5% rakeback.",
      codeLabel: "Your Code",
      claimed: "Code Copied!",
      stepTitle: "How to Claim",
      step1: "Click Play Now",
      step2: "Register Account",
      step3: "Enter Code PLAY971",
      benefitsTitle: "Your Benefits",
      benefit1: "200% Deposit Match",
      benefit2: "Instant Rakeback",
      benefit3: "VIP Fast Track",
      box1Title: "Deposit Bonus",
      box1Body: "Double your money instantly.",
      box2Title: "Rakeback",
      box2Body: "Earn on every bet.",
      box3Title: "VIP Access",
      box3Body: "Skip the queue.",
      trustTitle: "Trusted by Thousands",
      compareTitle: "Why Use Our Code?",
      compareSubtitle: "Compare the benefits",
      speedTitle: "Speed",
      articleTitle: "The Stake Advantage"
    },
    aviator: {
      title: "AirBoost",
      subtitle: "Fly High, Win Big",
      bet: "Bet",
      cashout: "Cash Out",
      crashed: "Crashed",
      playing: "Playing",
      demoBalance: "Demo Balance",
      descTitle: "How to Play",
      descBody: "Place your bet and watch the plane take off. Cash out before it flies away!",
      howToTitle: "Rules",
      howToBody: "Multiplier increases as the plane flies. Win your bet multiplied by the coefficient.",
      manual: "Manual",
      auto: "Auto",
      autoCashOut: "Auto Cash Out",
      startAuto: "Start Auto",
      stopAuto: "Stop Auto",
      activationReturn: "RTP 97%",
      demoBanner: "Demo Mode",
      statsTitle: "Round History",
      mathTitle: "Fairness",
      mathBody: "Provably fair system ensures random results.",
      distLow: "Low Risk",
      distMid: "Med Risk",
      distHigh: "High Risk"
    },
    poker: {
      heroTitle: "Stake Poker",
      heroSubtitle: "Experience the thrill of the tables",
      descTitle: "Poker Room",
      descBody: "Join tables with players from around the world.",
      holdemTitle: "Texas Hold'em",
      holdemBody: "The most popular poker variant.",
      omahaTitle: "Omaha",
      omahaBody: "More cards, more action.",
      tournamentsTitle: "Tournaments",
      tournamentsBody: "Big prize pools daily.",
      howToPlayTitle: "How to Play",
      handRankings: "Hand Rankings",
      cryptoPokerTitle: "Crypto Poker",
      cryptoPokerBody: "Anonymous, fast, and secure."
    },
    plinko: {
      title: "Plinko",
      subtitle: "Drop & Win",
      risk: "Risk",
      rows: "Rows",
      bet: "Bet Amount",
      play: "Play"
    },
    sports: {
      heroTitle: "Sports Betting",
      heroSubtitle: "Best odds on major leagues",
      descTitle: "Sportsbook",
      descBody: "Bet on Football, Basketball, Tennis, and more."
    },
    casino: {
      descTitle: "Online Casino",
      descBody: "Thousands of slots and live games.",
      liveTitle: "Live Casino",
      liveBody: "Real dealers, real action.",
      slotsTitle: "Slots",
      slotsBody: "Spin to win on top titles.",
      providersTitle: "Top Providers",
      providersBody: "Pragmatic, Evolution, Hacksaw."
    },
    news: {
      title: "Latest News",
      readMore: "Read More",
      latestUpdates: "Latest Updates"
    },
    legal: {
      termsTitle: "Terms & Conditions",
      privacyTitle: "Privacy Policy",
      cookieTitle: "Cookie Policy"
    },
    review: {
      title: "Stake Review",
      subtitle: "Honest opinion",
      verdict: "Our Verdict",
      pros: "Pros",
      cons: "Cons",
      toc: "Table of Contents"
    },
    quiz: {
      title: "Crypto Quiz",
      subtitle: "Test your knowledge",
      start: "Start Quiz",
      next: "Next Question",
      finish: "Finish Quiz",
      score: "Your Score",
      playAgain: "Play Again"
    },
    footer: {
      about: "About Us",
      quickLinks: "Quick Links",
      legal: "Legal",
      disclaimer: "Disclaimer: Gambling involves risk. 18+.",
      rights: "All rights reserved.",
      sitemap: "Sitemap",
      stakeReview: "Stake Review",
      cryptoAcademy: "Crypto Academy"
    },
    common: {
      playNow: "Play Now",
      viewAll: "View All",
      popular: "Popular",
      new: "New",
      learnMore: "Learn More"
    },
    seo: {
      title: "Play971 - Stake Partner",
      body: "Official Stake.com partner for the Arab world.",
      metaTitleHome: "Play971 Home",
      metaTitleSports: "Sports Betting",
      metaTitleCasino: "Casino Games",
      metaTitleAviator: "Aviator Game",
      metaTitlePoker: "Poker Room",
      metaTitlePromo: "Promotions",
      metaTitleNews: "News",
      metaTitleReview: "Stake Review",
      metaTitleQuiz: "Crypto Quiz"
    }
  },
  ar: {
    nav: {
      sports: "رياضة",
      casino: "كازينو",
      promo: "كود الخصم",
      aviator: "ألعاب كراش",
      poker: "بوكر",
      news: "أخبار",
      login: "دخول",
      register: "تسجيل",
      quiz: "مسابقة"
    },
    hero: {
      title: "العب بذكاء مع ستيك",
      subtitle: "الشركاء الموثوقون للعالم العربي. أعلى المكافآت، سحوبات فورية، دعم VIP.",
      cta: "العب الآن",
      bonus: "احصل على 3000$ بونص"
    },
    home: {
      featuresTitle: "لماذا تختار Play971؟",
      feature1Title: "سحوبات فورية",
      feature1Body: "لا مزيد من الانتظار. احصل على أرباحك الرقمية فوراً إلى محفظتك.",
      feature2Title: "دعم عربي 24/7",
      feature2Body: "فريق دعم مخصص يتحدث لغتك، متاح على مدار الساعة.",
      feature3Title: "مزايا VIP حصرية",
      feature3Body: "الوصول إلى طاولات الرهان العالي، حدود أعلى، ومضيفين VIP مخصصين.",
      arabTitle: "صمم للاعبين العرب",
      arabSubtitle: "تعريب",
      arabBody1: "نحن نتفهم الاحتياجات الفريدة للاعبين من دول مجلس التعاون الخليجي والشرق الأوسط.",
      arabBody2: "من الدعم المحلي إلى الألعاب والأسواق الرياضية ذات الصلة ثقافياً.",
      vipTitle: "برنامج VIP",
      vipSubtitle: "افتح تجربة اللعب النهائية",
      vipBody: "اصعد المراتب واكسب مكافآت ضخمة.",
      vipBenefit1: "مضيف مخصص",
      vipBenefit2: "حدود أعلى",
      vipBenefit3: "مكافآت حصرية",
      vipBenefit4: "هدايا فاخرة",
      countriesTitle: "الدول المدعومة",
      countriesSubtitle: "ابحث عن أدلة مخصصة لمنطقتك",
      cryptoTitle: "مقامرة الكريبتو",
      cryptoSubtitle: "المستقبل هنا"
    },
    promo: {
      title: "كود خصم حصري",
      subtitle: "افتح أقصى المكافآت",
      copy: "استخدم الكود PLAY971 لفتح مكافأة إيداع بنسبة 200% تصل إلى 3000$ ورايك باك فوري 5%.",
      codeLabel: "كودك",
      claimed: "تم نسخ الكود!",
      stepTitle: "كيفية المطالبة",
      step1: "انقر العب الآن",
      step2: "سجل حساب",
      step3: "أدخل الكود PLAY971",
      benefitsTitle: "مزاياك",
      benefit1: "مطابقة إيداع 200%",
      benefit2: "رايك باك فوري",
      benefit3: "مسار سريع VIP",
      box1Title: "مكافأة الإيداع",
      box1Body: "ضاعف أموالك فوراً.",
      box2Title: "رايك باك",
      box2Body: "اربح على كل رهان.",
      box3Title: "وصول VIP",
      box3Body: "تجاوز قائمة الانتظار.",
      trustTitle: "موثوق من قبل الآلاف",
      compareTitle: "لماذا تستخدم كودنا؟",
      compareSubtitle: "قارن المزايا",
      speedTitle: "السرعة",
      articleTitle: "ميزة ستيك"
    },
    aviator: {
      title: "AirBoost",
      subtitle: "حلق عالياً، اربح كثيراً",
      bet: "رهان",
      cashout: "سحب",
      crashed: "تحطمت",
      playing: "لعب",
      demoBalance: "رصيد تجريبي",
      descTitle: "كيف تلعب",
      descBody: "ضع رهانك وشاهد الطائرة تقلع. اسحب قبل أن تطير بعيداً!",
      howToTitle: "القواعد",
      howToBody: "يزداد المضاعف كلما حلقت الطائرة. اربح رهانك مضروباً في المعامل.",
      manual: "يدوي",
      auto: "تلقائي",
      autoCashOut: "سحب تلقائي",
      startAuto: "بدء التلقائي",
      stopAuto: "إيقاف التلقائي",
      activationReturn: "RTP 97%",
      demoBanner: "وضع تجريبي",
      statsTitle: "تاريخ الجولات",
      mathTitle: "العدالة",
      mathBody: "نظام عادل يضمن نتائج عشوائية.",
      distLow: "مخاطرة منخفضة",
      distMid: "مخاطرة متوسطة",
      distHigh: "مخاطرة عالية"
    },
    poker: {
      heroTitle: "بوكر ستيك",
      heroSubtitle: "جرب إثارة الطاولات",
      descTitle: "غرفة البوكر",
      descBody: "انضم إلى طاولات مع لاعبين من جميع أنحاء العالم.",
      holdemTitle: "تكساس هولديم",
      holdemBody: "نوع البوكر الأكثر شعبية.",
      omahaTitle: "أوماها",
      omahaBody: "المزيد من البطاقات، المزيد من الإثارة.",
      tournamentsTitle: "البطولات",
      tournamentsBody: "جوائز ضخمة يومياً.",
      howToPlayTitle: "كيف تلعب",
      handRankings: "ترتيب الأيادي",
      cryptoPokerTitle: "بوكر الكريبتو",
      cryptoPokerBody: "مجهول، سريع، وآمن."
    },
    plinko: {
      title: "بلينكو",
      subtitle: "أسقط واربح",
      risk: "المخاطرة",
      rows: "الصفوف",
      bet: "قيمة الرهان",
      play: "العب"
    },
    sports: {
      heroTitle: "المراهنات الرياضية",
      heroSubtitle: "أفضل الاحتمالات للدوريات الكبرى",
      descTitle: "كتاب الرياضة",
      descBody: "راهن على كرة القدم، كرة السلة، التنس، والمزيد."
    },
    casino: {
      descTitle: "كازينو اونلاين",
      descBody: "الآلاف من السلوتس والألعاب المباشرة.",
      liveTitle: "كازينو مباشر",
      liveBody: "موزعون حقيقيون، إثارة حقيقية.",
      slotsTitle: "سلوتس",
      slotsBody: "در لتربح في أفضل العناوين.",
      providersTitle: "أفضل المزودين",
      providersBody: "براغماتيك، إيفلوشن، هاكساو."
    },
    news: {
      title: "آخر الأخبار",
      readMore: "اقرأ المزيد",
      latestUpdates: "آخر التحديثات"
    },
    legal: {
      termsTitle: "الشروط والأحكام",
      privacyTitle: "سياسة الخصوصية",
      cookieTitle: "سياسة الكوكيز"
    },
    review: {
      title: "مراجعة ستيك",
      subtitle: "رأي صادق",
      verdict: "حكمنا",
      pros: "إيجابيات",
      cons: "سلبيات",
      toc: "جدول المحتويات"
    },
    quiz: {
      title: "مسابقة الكريبتو",
      subtitle: "اختبر معلوماتك",
      start: "ابدأ المسابقة",
      next: "السؤال التالي",
      finish: "إنهاء المسابقة",
      score: "نتيجتك",
      playAgain: "العب مجدداً"
    },
    footer: {
      about: "من نحن",
      quickLinks: "روابط سريعة",
      legal: "قانوني",
      disclaimer: "إخلاء مسؤولية: المقامرة تنطوي على مخاطر. +18.",
      rights: "جميع الحقوق محفوظة.",
      sitemap: "خريطة الموقع",
      stakeReview: "مراجعة ستيك",
      cryptoAcademy: "أكاديمية الكريبتو"
    },
    common: {
      playNow: "العب الآن",
      viewAll: "عرض الكل",
      popular: "شائع",
      new: "جديد",
      learnMore: "اعرف المزيد"
    },
    seo: {
      title: "Play971 - شريك ستيك",
      body: "الشريك الرسمي لـ Stake.com للعالم العربي.",
      metaTitleHome: "الرئيسية Play971",
      metaTitleSports: "المراهنات الرياضية",
      metaTitleCasino: "ألعاب الكازينو",
      metaTitleAviator: "لعبة أفياتور",
      metaTitlePoker: "غرفة البوكر",
      metaTitlePromo: "العروض الترويجية",
      metaTitleNews: "الأخبار",
      metaTitleReview: "مراجعة ستيك",
      metaTitleQuiz: "مسابقة الكريبتو"
    }
  }
};

export const SEO_METADATA: Record<Language, Record<PageView, SeoConfig>> = {
  en: {
    home: {
      title: "Play971 | Official Stake.com Partner | Best Crypto Casino & Sports",
      description: "Join Play971, the #1 Arab-focused partner for Stake.com. Enjoy instant crypto withdrawals, 24/7 Arabic support, and exclusive VIP bonuses. Deposit $1500, get $3000."
    },
    promo: {
      title: "Stake Promo Code Play971 gets you up to $3000 bonus",
      description: "Stake Promo Code Play971 gets you up to $3000 bonus. Activate instant rakeback, fast-track VIP status, and unlock exclusive rewards today."
    },
    sports: {
      title: "Stake Sports Betting | Best Odds for Football, F1 & More",
      description: "Bet on the Premier League, Champions League, Saudi Pro League and more with the best crypto odds. Instant settlements and high limits for VIPs."
    },
    casino: {
      title: "Stake Online Casino | 3000+ Slots & Live Dealer Games",
      description: "Play the world's best crypto casino games. Slots, Live Blackjack, Roulette, and Stake Originals like Plinko and Crash. High RTP and instant payouts."
    },
    aviator: {
      title: "Play Crash Games Free | AirBoost & Aviator Demo",
      description: "Try the best Crash games for free. Master your strategy on AirBoost and Aviator before playing for real money. Provably fair gaming."
    },
    plinko: {
      title: "Play Plinko Free | Stake Original Game Demo",
      description: "Drop the ball and aim for the 1000x multiplier. Play the Plinko demo for free and learn the strategies of high-risk crypto gaming."
    },
    poker: {
      title: "Stake Poker | Crypto Poker Tournaments & Cash Games",
      description: "Join the action at Stake Poker. Texas Hold'em and Omaha tables running 24/7. Instant rakeback, low fees, and soft competition."
    },
    news: {
      title: "Latest Crypto Gambling News & Updates | Play971",
      description: "Stay updated with the latest news from the world of crypto gambling, Stake.com updates, and major sports betting events."
    },
    review: {
      title: "Stake.com Review 2025 | Legit or Scam? | Play971 Verdict",
      description: "Comprehensive review of Stake.com for Arab players. We test withdrawals, support, games, and bonuses. Read our honest verdict."
    },
    quiz: {
      title: "Crypto Academy | Learn & Win | Play971",
      description: "Test your knowledge of crypto, blockchain, and gambling strategies. Complete the quiz to improve your betting skills."
    },
    legal: {
      title: "Legal Information | Terms & Privacy | Play971",
      description: "Read our terms and conditions, privacy policy, and cookie policy. Play971 is committed to transparency and responsible gambling."
    },
    country: {
      title: "Best Stake Promo Code by Country | Play971",
      description: "Find the best Stake.com promo code for your country. Exclusive bonuses for UAE, Saudi Arabia, Kuwait, Qatar, Egypt and more."
    }
  },
  ar: {
    home: {
      title: "Play971 | الشريك الرسمي لـ Stake.com | أفضل كازينو ومراهنات كريبتو",
      description: "انضم إلى Play971، الشريك العربي الأول لـ Stake.com. استمتع بسحوبات فورية للعملات الرقمية، دعم عربي 24/7، ومكافآت VIP حصرية. أودع 1500$ واحصل على 3000$."
    },
    promo: {
      title: "كود خصم ستيك Play971 يمنحك بونص يصل إلى 3000$",
      description: "كود خصم ستيك Play971 يمنحك مكافأة تصل إلى 3000 دولار. قم بتفعيل الرايك باك الفوري، وتسريع حالة VIP، وفتح مكافآت حصرية اليوم."
    },
    sports: {
      title: "مراهنات ستيك الرياضية | أفضل الاحتمالات لكرة القدم والمزيد",
      description: "راهن على الدوري الإنجليزي الممتاز، دوري أبطال أوروبا، الدوري السعودي والمزيد بأفضل احتمالات الكريبتو. تسويات فورية وحدود عالية لكبار الشخصيات."
    },
    casino: {
      title: "كازينو ستيك اونلاين | 3000+ لعبة سلوت وموزع مباشر",
      description: "العب أفضل ألعاب كازينو الكريبتو في العالم. سلوتس، بلاك جاك مباشر، روليت، وألعاب ستيك الأصلية مثل بلينكو وكراش. عائد عالي ودفعات فورية."
    },
    aviator: {
      title: "العب ألعاب التصادم مجانًا | AirBoost وديمو Aviator",
      description: "جرب أفضل ألعاب التصادم مجانًا. أتقن استراتيجيتك في AirBoost و Aviator قبل اللعب بمال حقيقي. ألعاب عادلة ومثبتة."
    },
    plinko: {
      title: "العب بلينكو مجانًا | ديمو لعبة ستيك الأصلية",
      description: "أسقط الكرة واستهدف مضاعف 1000x. العب ديمو بلينكو مجانًا وتعلم استراتيجيات مقامرة الكريبتو عالية المخاطر."
    },
    poker: {
      title: "بوكر ستيك | بطولات بوكر الكريبتو وألعاب نقدية",
      description: "انضم إلى الأكشن في بوكر ستيك. طاولات تكساس هولديم وأوماها تعمل 24/7. رايك باك فوري، رسوم منخفضة، ومنافسة سهلة."
    },
    news: {
      title: "آخر الأخبار مقامرة الكريبتو والتحديثات | Play971",
      description: "ابق على اطلاع بآخر الأخبار من عالم مقامرة الكريبتو، تحديثات Stake.com، وأحداث المراهنات الرياضية الكبرى."
    },
    review: {
      title: "مراجعة Stake.com 2025 | شرعي أم احتيال؟ | حكم Play971",
      description: "مراجعة شاملة لـ Stake.com للاعبين العرب. نحن نختبر السحوبات، الدعم، الألعاب، والمكافآت. اقرأ حكمنا الصادق."
    },
    quiz: {
      title: "أكاديمية الكريبتو | تعلم واربح | Play971",
      description: "اختبر معرفتك بالكريبتو، البلوكتشين، واستراتيجيات المقامرة. أكمل المسابقة لتحسين مهاراتك في المراهنة."
    },
    legal: {
      title: "معلومات قانونية | الشروط والخصوصية | Play971",
      description: "اقرأ الشروط والأحكام، سياسة الخصوصية، وسياسة ملفات الارتباط. Play971 ملتزمة بالشفافية والمقامرة المسؤولة."
    },
    country: {
      title: "أفضل كود خصم ستيك حسب الدولة | Play971",
      description: "اعثر على أفضل كود ترويجي لـ Stake.com لبلدك. مكافآت حصرية للإمارات، السعودية، الكويت، قطر، مصر والمزيد."
    }
  }
};

export const CASINO_GAMES_LIST = {
  en: [
    { id: 1, title: "Sweet Bonanza", provider: "Pragmatic Play", category: ["Slots", "Popular", "High Volatility"], desc: "A colorful, candy-themed slot with high volatility. Famous for its tumble mechanics and massive multipliers in the bonus round.", arabAppeal: "The high volatility appeals to players seeking big wins. The vibrant colors and simple mechanics make it a favorite." },
    { id: 2, title: "Gates of Olympus", provider: "Pragmatic Play", category: ["Slots", "Popular", "High Volatility"], desc: "Zeus opens the gates to huge wins with multiplier orbs up to 500x. Pays anywhere on the screen.", arabAppeal: "The mythological theme resonates well, and the high max win potential aligns with high rollers." },
    { id: 3, title: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", category: ["Slots", "New Releases", "High Volatility"], desc: "Gritty western theme with three unique bonus features: Train Heist, Duel at Dawn, and Dead Man's Hand.", arabAppeal: "Action-packed gameplay with distinct bonus buy options popular among strategy players." },
    { id: 4, title: "Crazy Time", provider: "Evolution", category: ["Live Casino", "Game Shows", "Popular"], desc: "The world's most popular live game show featuring a money wheel and four bonus games.", arabAppeal: "Social interaction and the thrill of live events make this a top choice." },
    { id: 5, title: "Lightning Roulette", provider: "Evolution", category: ["Live Casino", "Table Games", "Roulette"], desc: "Classic roulette electrified with RNG lucky numbers paying up to 500x.", arabAppeal: "Combines traditional table gaming with modern high-payout potential." },
    { id: 6, title: "Sugar Rush", provider: "Pragmatic Play", category: ["Slots", "Popular"], desc: "Cluster pays system with multiplier spots that double up to 128x.", arabAppeal: "Fast-paced action and the ability to build massive multipliers in the base game." },
    { id: 7, title: "Book of Dead", provider: "Play'n GO", category: ["Slots", "Popular"], desc: "Join Rich Wilde in this classic Egyptian adventure with expanding symbols.", arabAppeal: "The Egyptian theme is culturally relevant and visually appealing." },
    { id: 8, title: "Infinite Blackjack", provider: "Evolution", category: ["Live Casino", "Table Games", "Blackjack"], desc: "Scalable blackjack where unlimited players can sit at one table.", arabAppeal: "Always a seat available, perfect for quick sessions." },
    { id: 9, title: "San Quentin", provider: "Nolimit City", category: ["Slots", "High Volatility"], desc: "Insane volatility with xWays, xNudge, and a max win of 150,000x.", arabAppeal: "For the true thrill-seekers chasing life-changing wins." },
    { id: 10, title: "Money Train 2", provider: "Relax Gaming", category: ["Slots", "High Volatility"], desc: "Steampunk heists with the famous Money Cart bonus round.", arabAppeal: "The 'hold and win' mechanic is extremely popular." },
    { id: 11, title: "Fruit Party", provider: "Pragmatic Play", category: ["Slots"], desc: "Simple fruit grid slot with random multipliers in the clusters.", arabAppeal: "Easy to understand, relaxing, yet capable of huge payouts." },
    { id: 12, title: "Monopoly Big Baller", provider: "Evolution", category: ["Live Casino", "Game Shows"], desc: "Bingo style game show with a Monopoly bonus round.", arabAppeal: "Nostalgic and entertaining with a slow-reveal excitement." },
    { id: 13, title: "Razor Shark", provider: "Push Gaming", category: ["Slots", "High Volatility"], desc: "Deep sea adventure with mystery stacks and infinite multiplier potential.", arabAppeal: "Known for its 'surprise' massive hits during mystery reveals." },
    { id: 14, title: "Mental", provider: "Nolimit City", category: ["Slots", "High Volatility", "New Releases"], desc: "Dark theme with extremely complex mechanics and massive potential.", arabAppeal: "Cult following among serious slot enthusiasts." },
    { id: 15, title: "Big Bass Bonanza", provider: "Reel Kingdom", category: ["Slots", "Popular"], desc: "The definitive fishing slot. Reel in cash fish during free spins.", arabAppeal: "Simple, rewarding mechanics that are easy to follow." },
    { id: 16, title: "Chaos Crew", provider: "Hacksaw Gaming", category: ["Slots", "High Volatility"], desc: "Quirky punk theme with a multiplier-focused bonus game.", arabAppeal: "Unique visual style and 'all or nothing' volatility." }
  ],
  ar: [
    { id: 1, title: "Sweet Bonanza", provider: "Pragmatic Play", category: ["سلوتس", "شائع", "تقلب عالي"], desc: "سلوت ملونة بطابع الحلوى مع تقلب عالي. تشتهر بآليات التساقط والمضاعفات الهائلة في جولة المكافأة.", arabAppeal: "التقلب العالي يجذب اللاعبين الباحثين عن مكاسب كبيرة. الألوان الزاهية والآليات البسيطة تجعلها مفضلة." },
    { id: 2, title: "Gates of Olympus", provider: "Pragmatic Play", category: ["سلوتس", "شائع", "تقلب عالي"], desc: "زيوس يفتح البوابات لمكاسب ضخمة مع كرات مضاعفة تصل إلى 500x. تدفع في أي مكان على الشاشة.", arabAppeal: "الموضوع الأسطوري يتردد صداه جيدًا، وإمكانية الفوز القصوى العالية تتماشى مع كبار المقامرين." },
    { id: 3, title: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", category: ["سلوتس", "إصدارات جديدة", "تقلب عالي"], desc: "موضوع غربي جريء مع ثلاث ميزات مكافأة فريدة.", arabAppeal: "لعب مليء بالإثارة مع خيارات شراء مكافأة مميزة شائعة بين لاعبي الاستراتيجية." },
    { id: 4, title: "Crazy Time", provider: "Evolution", category: ["كازينو مباشر", "عروض ألعاب", "شائع"], desc: "برنامج الألعاب المباشر الأكثر شعبية في العالم يتميز بعجلة نقود وأربع ألعاب مكافأة.", arabAppeal: "التفاعل الاجتماعي وإثارة الأحداث المباشرة تجعل هذا خيارًا ممتازًا." },
    { id: 5, title: "Lightning Roulette", provider: "Evolution", category: ["كازينو مباشر", "ألعاب الطاولة", "روليت"], desc: "روليت كلاسيكية مكهربة بأرقام حظ عشوائية تدفع ما يصل إلى 500x.", arabAppeal: "تجمع بين ألعاب الطاولة التقليدية وإمكانية الدفع العالية الحديثة." },
    { id: 6, title: "Sugar Rush", provider: "Pragmatic Play", category: ["سلوتس", "شائع"], desc: "نظام دفع عنقودي مع نقاط مضاعفة تتضاعف حتى 128x.", arabAppeal: "حركة سريعة والقدرة على بناء مضاعفات ضخمة في اللعبة الأساسية." },
    { id: 7, title: "Book of Dead", provider: "Play'n GO", category: ["سلوتس", "شائع"], desc: "انضم إلى ريتش وايلد في هذه المغامرة المصرية الكلاسيكية مع الرموز المتوسعة.", arabAppeal: "الموضوع المصري ذو صلة ثقافيًا وجذاب بصريًا." },
    { id: 8, title: "Infinite Blackjack", provider: "Evolution", category: ["كازينو مباشر", "ألعاب الطاولة", "بلاك جاك"], desc: "بلاك جاك قابلة للتطوير حيث يمكن لعدد غير محدود من اللاعبين الجلوس على طاولة واحدة.", arabAppeal: "مقعد متاح دائمًا، مثالي للجلسات السريعة." },
    { id: 9, title: "San Quentin", provider: "Nolimit City", category: ["سلوتس", "تقلب عالي"], desc: "تقلب جنوني مع xWays و xNudge وفوز أقصى قدره 150,000x.", arabAppeal: "للباحثين الحقيقيين عن الإثارة الذين يطاردون مكاسب تغير الحياة." },
    { id: 10, title: "Money Train 2", provider: "Relax Gaming", category: ["سلوتس", "تقلب عالي"], desc: "سرقات بأسلوب ستيم بانك مع جولة مكافأة عربة المال الشهيرة.", arabAppeal: "آلية 'الاحتفاظ والفوز' شائعة للغاية." },
    { id: 11, title: "Fruit Party", provider: "Pragmatic Play", category: ["سلوتس"], desc: "سلوت فواكه بسيطة مع مضاعفات عشوائية في المجموعات.", arabAppeal: "سهلة الفهم، مريحة، ومع ذلك قادرة على تحقيق دفعات ضخمة." },
    { id: 12, title: "Monopoly Big Baller", provider: "Evolution", category: ["كازينو مباشر", "عروض ألعاب"], desc: "برنامج ألعاب بأسلوب بينغو مع جولة مكافأة مونوبولي.", arabAppeal: "مثير للحنين ومسلي مع إثارة الكشف البطيء." },
    { id: 13, title: "Razor Shark", provider: "Push Gaming", category: ["سلوتس", "تقلب عالي"], desc: "مغامرة في أعماق البحار مع أكوام غامضة وإمكانية مضاعفة لا نهائية.", arabAppeal: "معروفة بضرباتها الهائلة 'المفاجئة' أثناء الكشف الغامض." },
    { id: 14, title: "Mental", provider: "Nolimit City", category: ["سلوتس", "تقلب عالي", "إصدارات جديدة"], desc: "موضوع مظلم مع آليات معقدة للغاية وإمكانيات هائلة.", arabAppeal: "متابعة قوية بين عشاق السلوت الجادين." },
    { id: 15, title: "Big Bass Bonanza", provider: "Reel Kingdom", category: ["سلوتس", "شائع"], desc: "سلوت الصيد النهائية. بكرة في الأسماك النقدية أثناء الدورات المجانية.", arabAppeal: "آليات بسيطة ومجزية يسهل متابعتها." },
    { id: 16, title: "Chaos Crew", provider: "Hacksaw Gaming", category: ["سلوتس", "تقلب عالي"], desc: "موضوع بانك غريب مع لعبة مكافأة تركز على المضاعف.", arabAppeal: "أسلوب بصري فريد وتقلب 'الكل أو لا شيء'." }
  ]
};

export const CRYPTO_USERNAMES = ["CryptoKing", "BtcWhale", "SatoshiFan", "EthTrader", "MoonBoi", "Hodler", "DiamondHands", "AltcoinHero", "WhaleAlert", "BullRun", "BagHolder", "ToTheMoon"];

export const AVIATOR_RISK_STRATEGIES = {
  en: [
    { name: "Conservative", risk: "Low", desc: "Cash out at 1.20x to 1.50x consistently. This strategy aims for small, frequent wins to build the bankroll slowly but safely." },
    { name: "Balanced", risk: "Medium", desc: "Aim for 2.00x to 3.00x with moderate bets. You will lose some rounds, but the wins are significant enough to cover losses." },
    { name: "High Roller", risk: "High", desc: "Wait for 10x+ multipliers for massive payouts. Requires a large bankroll to sustain losing streaks before the big hit." }
  ],
  ar: [
    { name: "محافظ", risk: "منخفض", desc: "اسحب عند 1.20x إلى 1.50x باستمرار. تهدف هذه الاستراتيجية إلى تحقيق مكاسب صغيرة ومتكررة لبناء الرصيد ببطء ولكن بأمان." },
    { name: "متوازن", risk: "متوسط", desc: "استهدف 2.00x إلى 3.00x برهانات معتدلة. ستخسر بعض الجولات، لكن المكاسب كبيرة بما يكفي لتغطية الخسائر." },
    { name: "مغامر", risk: "مرتفع", desc: "انتظر مضاعفات 10x+ للحصول على دفعات ضخمة. يتطلب رصيدًا كبيرًا لتحمل سلاسل الخسائر قبل الضربة الكبيرة." }
  ]
};

export const PLINKO_STRATEGIES = [
  { name: "Safe", risk: "Low", desc: "Play on Low Risk with 16 rows. You will hit 0.5x often, but big losses are rare. Good for wagering." },
  { name: "The Spike", risk: "High", desc: "High Risk, 16 Rows. You are chasing the 1000x multiplier. Expect long streaks of losses." },
  { name: "Balanced", risk: "Medium", desc: "Medium Risk, 12 Rows. A good balance between hit frequency and payout size." }
];

export const COMPARISON_DATA = {
  features: ["Bonus", "Rakeback", "Support"],
  competitors: [{ name: "Competitor A", bonus: "Low", rakeback: "None", support: "Slow" }]
};

export const PROMO_LONG_COPY = {
  en: {
    intro: "Using the right promo code can significantly boost your starting bankroll and long-term returns. Stake.com offers one of the most comprehensive VIP programs in the industry, and using code PLAY971 is your fast-track ticket into this exclusive club.",
    sections: [
      { title: "Immediate Rakeback", body: "Rakeback is a benefit usually reserved for high-level VIPs. However, with PLAY971, you unlock this instantly. It means you get a percentage of the house edge back on every single bet you place, win or lose. It's effectively a constant rebate on your turnover." },
      { title: "Monthly Bonuses", body: "Based on your wager amount and VIP level, you receive a no-strings-attached monthly bonus. This is calculated based on your recent activity and luck. If you've had a bad month, the bonus is often higher to compensate." },
      { title: "Global Sponsorships", body: "Stake partners with the biggest names in the world, including the UFC, Drake, and the Alfa Romeo F1 Team. This ensures the platform is here to stay, fully liquid, and trustworthy." },
      { title: "The Vault", body: "A unique feature to Stake is the 'Vault'. It allows you to siphon off profits into a separate wallet within your account that you can't play with. It's the ultimate tool for responsible gambling and locking in wins." },
      { title: "Community", body: "Join the active chat rooms and forums. Stake has a massive community where you can share wins, strategies, and even receive 'rain' (free crypto distributions) just for being active." }
    ]
  },
  ar: {
    intro: "استخدام الكود الترويجي المناسب يمكن أن يعزز بشكل كبير رصيدك الأولي وعوائدك طويلة الأجل. تقدم Stake.com واحدًا من أكثر برامج VIP شمولاً في الصناعة، واستخدام الكود PLAY971 هو تذكرتك السريعة إلى هذا النادي الحصري.",
    sections: [
      { title: "رايك باك فوري", body: "الرايك باك هو ميزة عادة ما تكون مخصصة لكبار الشخصيات. ومع ذلك، مع PLAY971، يمكنك فتح هذه الميزة فورًا. هذا يعني أنك تستعيد نسبة من ميزة الكازينو على كل رهان تضعه، سواء ربحت أو خسرت. إنه خصم ثابت فعال على حجم تداولاتك." },
      { title: "مكافآت شهرية", body: "بناءً على مبلغ الرهان ومستوى VIP الخاص بك، تتلقى مكافأة شهرية غير مشروطة. يتم حساب ذلك بناءً على نشاطك الأخير وحظك. إذا كان شهرك سيئًا، غالبًا ما تكون المكافأة أعلى للتعويض." },
      { title: "رعايات عالمية", body: "تتعاون Stake مع أكبر الأسماء في العالم، بما في ذلك UFC و Drake وفريق Alfa Romeo F1. وهذا يضمن أن المنصة موجودة لتبقى، وتتمتع بسيولة كاملة، وجديرة بالثقة." },
      { title: "الخزنة", body: "ميزة فريدة لـ Stake هي 'الخزنة'. تسمح لك بتحويل الأرباح إلى محفظة منفصلة داخل حسابك لا يمكنك اللعب بها. إنها الأداة النهائية للمقامرة المسؤولة وتأمين المكاسب." },
      { title: "المجتمع", body: "انضم إلى غرف الدردشة والمنتديات النشطة. لدى Stake مجتمع ضخم حيث يمكنك مشاركة الانتصارات والاستراتيجيات وحتى تلقي 'المطر' (توزيعات عملات مشفرة مجانية) لمجرد كونك نشطًا." }
    ]
  }
};

export const PROMO_TESTIMONIALS_DATA = {
  en: [
    { badge: "Verified VIP", quote: "I moved from Bet365 because of the instant crypto withdrawals. No more waiting 3 days for bank transfers to Dubai.", name: "Ahmed Al-Maktoum", country: "UAE" },
    { badge: "Platinum IV", quote: "The rakeback using code PLAY971 is significantly higher than my previous account. It covers the fees on my USDT transfers easily.", name: "Fahad K.", country: "Saudi Arabia" },
    { badge: "High Roller", quote: "Finally, a site that respects privacy. The VIP host for Kuwaiti players is very professional and speaks native Arabic.", name: "Yousef", country: "Kuwait" },
    { badge: "Sports Bettor", quote: "Best odds on the Egyptian Premier League and English Premier League. The bet builder feature is unmatched.", name: "Mahmoud E.", country: "Egypt" },
    { badge: "Poker Pro", quote: "The traffic on cash tables is great during GCC peak hours. Soft games and quick cashouts.", name: "Hassan", country: "Qatar" },
    { badge: "Verified", quote: "Support helped me verify my account in minutes. Very friendly service for Arabic speakers.", name: "Layla", country: "Jordan" },
    { badge: "VIP Gold", quote: "I won $5k on Aviator and withdrew it to my wallet in 2 minutes. Stake is the real deal.", name: "Omar", country: "Bahrain" },
    { badge: "Loyal Player", quote: "The weekly and monthly bonuses are generous. Much better than the deposit bonuses elsewhere that lock your funds.", name: "Karim", country: "Morocco" }
  ],
  ar: [
    { badge: "VIP تم التحقق منه", quote: "انتقلت من Bet365 بسبب السحوبات الفورية للعملات المشفرة. لا مزيد من الانتظار لمدة 3 أيام للتحويلات البنكية إلى دبي.", name: "أحمد آل مكتوم", country: "الإمارات" },
    { badge: "بلاتينيوم IV", quote: "الرايك باك باستخدام كود PLAY971 أعلى بكثير من حسابي السابق. يغطي رسوم تحويلات USDT الخاصة بي بسهولة.", name: "فهد ك.", country: "السعودية" },
    { badge: "لاعب رهان عالي", quote: "أخيراً، موقع يحترم الخصوصية. مضيف VIP للاعبين الكويتيين محترف للغاية ويتحدث العربية بطلاقة.", name: "يوسف", country: "الكويت" },
    { badge: "مراهن رياضي", quote: "أفضل الاحتمالات للدوري المصري والدوري الإنجليزي. ميزة بناء الرهان لا مثيل لها.", name: "محمود إ.", country: "مصر" },
    { badge: "محترف بوكر", quote: "حركة المرور على الطاولات النقدية رائعة خلال ساعات الذروة في دول مجلس التعاون الخليجي. ألعاب سهلة وسحوبات سريعة.", name: "حسن", country: "قطر" },
    { badge: "تم التحقق", quote: "ساعدني الدعم في التحقق من حسابي في دقائق. خدمة ودودة للغاية للمتحدثين بالعربية.", name: "ليلى", country: "الأردن" },
    { badge: "VIP ذهبي", quote: "ربحت 5 آلاف دولار في Aviator وسحبتها إلى محفظتي في دقيقتين. Stake هي الصفقة الحقيقية.", name: "عمر", country: "البحرين" },
    { badge: "لاعب وفي", quote: "المكافآت الأسبوعية والشهرية سخية. أفضل بكثير من مكافآت الإيداع في أماكن أخرى التي تقفل أموالك.", name: "كريم", country: "المغرب" }
  ]
};

export const PROMO_VALUE_ANALYSIS = {
  en: {
    title: "Value Analysis",
    intro: "Here is why using the promo code is mathematically superior to signing up without one.",
    sections: [
      { title: "Bankroll Management", body: "Starting with a bigger bankroll (200% deposit match) allows for better variance handling. You can weather the downswings of high volatility slots while waiting for the bonus rounds." },
      { title: "Long Term Value", body: "Rakeback provides a consistent return stream regardless of game outcomes. Over thousands of bets, this 5% edge reduction is the difference between a winning and losing month." }
    ]
  },
  ar: {
    title: "تحليل القيمة",
    intro: "إليك السبب في أن استخدام الكود الترويجي متفوق رياضيًا على التسجيل بدونه.",
    sections: [
      { title: "إدارة الرصيد", body: "البدء برصيد أكبر (مطابقة إيداع 200%) يسمح بتعامل أفضل مع التباين. يمكنك تحمل التقلبات في السلوتس عالية التقلب أثناء انتظار جولات المكافأة." },
      { title: "قيمة طويلة الأجل", body: "يوفر الرايك باك تدفق عائد ثابت بغض النظر عن نتائج اللعبة. عبر آلاف الرهانات، يعد هذا التخفيض في الحافة بنسبة 5% هو الفرق بين شهر رابح وخاسر." }
    ]
  }
};

export const PROMO_COUNTRY_CONTEXT = {
  en: [
    { country: "UAE", text: "Popular among expats and locals for privacy and VIP treatment." },
    { country: "Saudi Arabia", text: "High interest in sports betting, especially the Saudi Pro League." },
    { country: "Kuwait", text: "Focus on high stakes VIP tables and privacy." },
    { country: "Egypt", text: "Growing community of crypto enthusiasts and low-stakes fun." }
  ],
  ar: [
    { country: "الإمارات", text: "شائع بين المقيمين والمواطنين للخصوصية ومعاملة VIP." },
    { country: "السعودية", text: "اهتمام كبير بالمراهنات الرياضية، وخاصة الدوري السعودي للمحترفين." },
    { country: "الكويت", text: "التركيز على طاولات VIP ذات الرهانات العالية والخصوصية." },
    { country: "مصر", text: "مجتمع متنامي من عشاق الكريبتو والمرح برهانات منخفضة." }
  ]
};

export const PROMO_TCS_TEXT = {
  en: "Claim the maximum new Stake.com bonus offer now when you join with promo code PLAY971. Up to $3,000 free bet. Deposit up to $1,500 get 200% bonus up to $3,000. Over 18s only. 35x wager requirement. Max Deposit $1,500. Level 3 KYC Verification required. Contact live support after deposit to claim.",
  ar: "طالب بأقصى عرض مكافأة جديد من Stake.com الآن عند الانضمام باستخدام الرمز الترويجي PLAY971. رهان مجاني يصل إلى 3000 دولار. قم بإيداع ما يصل إلى 1500 دولار واحصل على مكافأة بنسبة 200% تصل إلى 3000 دولار. للأشخاص الذين تزيد أعمارهم عن 18 عامًا فقط. متطلبات الرهان 35x. الحد الأقصى للإيداع 1500 دولار. مطلوب التحقق من المستوى 3 (KYC). اتصل بالدعم المباشر بعد الإيداع للمطالبة."
};

export const PROMO_GLOBAL_TABLE = {
  en: [
    { country: "Global / Generic", code: "PLAY971", benefit: "200% Deposit Match + 10% Rakeback", rating: "9.9" },
    { country: "UAE", code: "PLAY971", benefit: "VIP Status Fast Track + Instant Rakeback", rating: "9.9" },
    { country: "Saudi Arabia", code: "PLAY971", benefit: "Exclusive Sportsbook Boosts", rating: "9.8" },
    { country: "Kuwait", code: "PLAY971", benefit: "High Roller Limits Unlocked", rating: "9.8" },
    { country: "Qatar", code: "PLAY971", benefit: "World Cup & Football Specials", rating: "9.7" },
    { country: "Bahrain", code: "PLAY971", benefit: "Crypto Deposit Bonus", rating: "9.7" },
    { country: "Egypt", code: "PLAY971", benefit: "Low Min Deposit Entry", rating: "9.6" },
    { country: "Lebanon", code: "PLAY971", benefit: "Dollar Pegged Account Protection", rating: "9.6" },
    { country: "Jordan", code: "PLAY971", benefit: "Access to Full Casino Library", rating: "9.6" },
    { country: "Morocco", code: "PLAY971", benefit: "French/Arabic Support Priority", rating: "9.5" }
  ],
  ar: [
    { country: "عالمي / عام", code: "PLAY971", benefit: "مطابقة إيداع 200% + 10% رايك باك", rating: "9.9" },
    { country: "الإمارات", code: "PLAY971", benefit: "مسار سريع لحالة VIP + رايك باك فوري", rating: "9.9" },
    { country: "السعودية", code: "PLAY971", benefit: "تعزيزات حصرية للمراهنات الرياضية", rating: "9.8" },
    { country: "الكويت", code: "PLAY971", benefit: "فتح حدود الرهان العالي", rating: "9.8" },
    { country: "قطر", code: "PLAY971", benefit: "عروض كأس العالم وكرة القدم", rating: "9.7" },
    { country: "البحرين", code: "PLAY971", benefit: "مكافأة إيداع الكريبتو", rating: "9.7" },
    { country: "مصر", code: "PLAY971", benefit: "دخول بحد أدنى منخفض للإيداع", rating: "9.6" },
    { country: "لبنان", code: "PLAY971", benefit: "حماية حساب مرتبطة بالدولار", rating: "9.6" },
    { country: "الأردن", code: "PLAY971", benefit: "الوصول إلى مكتبة الكازينو الكاملة", rating: "9.6" },
    { country: "المغرب", code: "PLAY971", benefit: "أولوية الدعم الفرنسي/العربي", rating: "9.5" }
  ]
};

export const PROMO_PAYMENT_METHODS = {
  en: [
    { name: "Bitcoin (BTC)", desc: "The gold standard. High limits, maximum security." },
    { name: "Ethereum (ETH)", desc: "Fast and widely supported smart contract capability." },
    { name: "Litecoin (LTC)", desc: "Low fees and fast block times. Perfect for smaller deposits." },
    { name: "Tether (USDT)", desc: "Stablecoin pegged to USD. Supports ERC20, TRC20, BEP20. Best for avoiding volatility." },
    { name: "Dogecoin (DOGE)", desc: "Community favorite with low fees." },
    { name: "Ripple (XRP)", desc: "Near-instant settlement speeds." },
    { name: "Tron (TRX)", desc: "Extremely low transaction fees." },
    { name: "Bitcoin Cash (BCH)", desc: "Faster and cheaper than BTC." },
    { name: "USD Coin (USDC)", desc: "Regulated stablecoin, fully backed by US dollars." },
    { name: "Binance Coin (BNB)", desc: "Low gas fees, popular in MENA region." },
    { name: "EOS", desc: "Feeless transactions, ideal for frequent micro-deposits." }
  ],
  ar: [
    { name: "Bitcoin (BTC)", desc: "المعيار الذهبي. حدود عالية، أقصى درجات الأمان." },
    { name: "Ethereum (ETH)", desc: "سريع ومدعوم على نطاق واسع بقدرات العقود الذكية." },
    { name: "Litecoin (LTC)", desc: "رسوم منخفضة وأوقات كتل سريعة. مثالي للإيداعات الصغيرة." },
    { name: "Tether (USDT)", desc: "عملة مستقرة مرتبطة بالدولار. تدعم ERC20 و TRC20. الأفضل لتجنب التقلبات." },
    { name: "Dogecoin (DOGE)", desc: "مفضل المجتمع برسوم منخفضة." },
    { name: "Ripple (XRP)", desc: "سرعات تسوية شبه فورية." },
    { name: "Tron (TRX)", desc: "رسوم معاملات منخفضة للغاية." },
    { name: "Bitcoin Cash (BCH)", desc: "أسرع وأرخص من BTC." },
    { name: "USD Coin (USDC)", desc: "عملة مستقرة منظمة، مدعومة بالكامل بالدولار الأمريكي." },
    { name: "Binance Coin (BNB)", desc: "رسوم غاز منخفضة، شائعة في منطقة الشرق الأوسط وشمال أفريقيا." },
    { name: "EOS", desc: "معاملات بدون رسوم، مثالية للإيداعات الصغيرة المتكررة." }
  ]
};

export const PROMO_CRYPTO_GAMES_LIST = {
  en: [
    { name: "Plinko", desc: "Drop the ball and watch it bounce to multipliers up to 1000x." },
    { name: "Crash", desc: "The original curve game. Cash out before the rocket crashes." },
    { name: "Mines", desc: "Uncover gems and avoid bombs to multiply your payout." },
    { name: "Limbo", desc: "Target a multiplier and win if the result is higher." },
    { name: "Dice", desc: "Set your win chance and roll over or under." },
    { name: "Hilo", desc: "Guess if the next card will be higher or lower." }
  ],
  ar: [
    { name: "Plinko", desc: "أسقط الكرة وشاهدها ترتد إلى مضاعفات تصل إلى 1000x." },
    { name: "Crash", desc: "لعبة المنحنى الأصلية. اسحب قبل تحطم الصاروخ." },
    { name: "Mines", desc: "اكتشف الجواهر وتجنب القنابل لمضاعفة مدفوعاتك." },
    { name: "Limbo", desc: "استهدف مضاعفًا واربح إذا كانت النتيجة أعلى." },
    { name: "Dice", desc: "حدد فرصة فوزك وتدحرج فوق أو تحت." },
    { name: "Hilo", desc: "خمن ما إذا كانت البطاقة التالية ستكون أعلى أم أقل." }
  ]
};

export const STAKE_HISTORY_INFO = {
  en: {
    founders: "Ed Craven and Bijan Tehrani",
    founded: "2017",
    origin: "Stake evolved from Primedice, one of the earliest and most respected Bitcoin dice sites established in 2013.",
    mission: "To create a transparent, community-driven betting platform that embraces the freedom of cryptocurrency. Known for being the first 'Provably Fair' casino to go mainstream.",
    quotes: [
      { author: "Ed Craven", text: "We wanted to build a casino that we would want to play at ourselves. It's about community, transparency, and giving power back to the player through crypto." },
      { author: "Bijan Tehrani", text: "Crypto allows us to offer a level of fairness and speed that traditional fiat casinos simply cannot match. We are building for the future of entertainment." }
    ]
  },
  ar: {
    founders: "إد كرافن وبيجان طهراني",
    founded: "2017",
    origin: "تطورت Stake من Primedice، واحدة من أقدم وأكثر مواقع نرد البيتكوين احترامًا والتي تأسست في عام 2013.",
    mission: "لإنشاء منصة مراهنة شفافة يقودها المجتمع وتتبنى حرية العملة المشفرة. معروفة بكونها أول كازينو 'عادل بشكل مثبت' يصبح سائدًا.",
    quotes: [
      { author: "إد كرافن", text: "أردنا بناء كازينو نرغب في اللعب فيه بأنفسنا. الأمر يتعلق بالمجتمع والشفافية وإعادة القوة للاعب من خلال الكريبتو." },
      { author: "بيجان طهراني", text: "تسمح لنا العملات المشفرة بتقديم مستوى من العدالة والسرعة لا يمكن للكازينوهات التقليدية مضاهاته ببساطة. نحن نبني لمستقبل الترفيه." }
    ]
  }
};

export const SPORTS_MARKETS_GUIDE = {
  en: [
    { title: "Moneyline (Match Winner)", desc: "The simplest bet. Pick who will win the match. In football (soccer), there is also the option for a Draw.", example: "Real Madrid to beat Barcelona" },
    { title: "Totals (Over/Under)", desc: "Bet on the total number of goals, points, or runs scored in a game by both teams combined.", example: "Over 2.5 Goals in Man City vs Liverpool" },
    { title: "Handicap (Spread)", desc: "Giving a virtual advantage or disadvantage to a team to level the playing field.", example: "Al Hilal -1.5 Goals" },
    { title: "Player Props", desc: "Bet on individual player performance rather than the match result.", example: "Mo Salah to score anytime" },
    { title: "Parlays (Accumulators)", desc: "Combine multiple bets into one for massive odds. All selections must win.", example: "Arsenal, PSG, and Bayern all to win" },
    { title: "Double Chance", desc: "Cover two outcomes in one bet (e.g., Win or Draw) for safer, lower odds.", example: "Saudi Arabia to Win or Draw" }
  ],
  ar: [
    { title: "الفائز بالمباراة (Moneyline)", desc: "أبسط رهان. اختر من سيفوز بالمباراة. في كرة القدم، هناك أيضًا خيار للتعادل.", example: "ريال مدريد للفوز على برشلونة" },
    { title: "المجموع (فوق/تحت)", desc: "راهن على العدد الإجمالي للأهداف أو النقاط المسجلة في لعبة من قبل كلا الفريقين مجتمعين.", example: "أكثر من 2.5 هدف في مان سيتي ضد ليفربول" },
    { title: "الإعاقة (Handicap)", desc: "إعطاء ميزة أو عيب افتراضي لفريق لتسوية الملعب.", example: "الهلال -1.5 هدف" },
    { title: "رهانات اللاعبين", desc: "راهن على أداء اللاعب الفردي بدلاً من نتيجة المباراة.", example: "محمد صلاح يسجل في أي وقت" },
    { title: "المراكمات (Parlays)", desc: "اجمع بين رهانات متعددة في رهان واحد لاحتمالات ضخمة. يجب أن تفوز جميع الاختيارات.", example: "فوز أرسنال وباريس سان جيرمان وبايرن ميونيخ" },
    { title: "فرصة مزدوجة", desc: "غطِ نتيجتين في رهان واحد (مثل الفوز أو التعادل) لاحتمالات أكثر أمانًا ولكن أقل.", example: "السعودية للفوز أو التعادل" }
  ]
};

export const SPORTS_BETTING_TIPS = {
  en: [
    { icon: "Target", title: "Focus on One League", body: "Don't try to bet on everything. Become an expert in one league (e.g., Premier League) and know the team news inside out." },
    { icon: "Activity", title: "Watch Live", body: "In-play betting offers great opportunities if you are watching the game. You can spot momentum shifts before the odds change." },
    { icon: "HeartOff", title: "Bet with Your Head", body: "Never bet on your favorite team just because you support them. Be objective about their chances." },
    { icon: "Percent", title: "Shop for Lines", body: "Even a small difference in odds (e.g. 1.95 vs 1.90) adds up massively over the long run." },
    { icon: "Wallet", title: "Bankroll Management", body: "Never bet on more than 1-5% of your total bankroll on a single game. Chase value, not losses." }
  ],
  ar: [
    { icon: "Target", title: "ركز على دوري واحد", body: "لا تحاول المراهنة على كل شيء. كن خبيرًا في دوري واحد (مثل الدوري الإنجليزي الممتاز) واعرف أخبار الفرق من الداخل والخارج." },
    { icon: "Activity", title: "شاهد البث المباشر", body: "توفر المراهنة أثناء اللعب فرصًا رائعة إذا كنت تشاهد المباراة. يمكنك اكتشاف تحولات الزخم قبل تغير الاحتمالات." },
    { icon: "HeartOff", title: "راهن بعقلك", body: "لا تراهن أبدًا على فريقك المفضل لمجرد أنك تدعمه. كن موضوعيًا بشأن فرصهم." },
    { icon: "Percent", title: "قارن الاحتمالات", body: "حتى الفرق الصغير في الاحتمالات (مثل 1.95 مقابل 1.90) يضيف بشكل كبير على المدى الطويل." },
    { icon: "Wallet", title: "إدارة الرصيد", body: "لا تراهن بأكثر من 1-5% من إجمالي رصيدك في لعبة واحدة. طارد القيمة، وليس الخسائر." }
  ]
};

export const SPORTS_HEADLINES = {
  en: [
    { title: "Real Madrid eyes Mbappe hat-trick in upcoming El Clasico", category: "Football", time: "2h ago" },
    { title: "Verstappen secures pole position for Saudi Arabian GP", category: "F1", time: "4h ago" },
    { title: "Fury vs Usyk: The undisputed clash set for Riyadh Season", category: "Boxing", time: "6h ago" },
    { title: "Al Hilal breaks world record for consecutive wins in SPL", category: "Football", time: "8h ago" },
    { title: "Djokovic aiming for another Grand Slam title in Paris", category: "Tennis", time: "12h ago" }
  ],
  ar: [
    { title: "ريال مدريد يتطلع لهاتريك مبابي في الكلاسيكو القادم", category: "كرة القدم", time: "منذ ساعتين" },
    { title: "فيرستابن يضمن مركز الانطلاق لسباق الجائزة الكبرى السعودي", category: "فورمولا 1", time: "منذ 4 ساعات" },
    { title: "فيوري ضد أوسيك: النزال الحاسم في موسم الرياض", category: "ملاكمة", time: "منذ 6 ساعات" },
    { title: "الهلال يحطم الرقم القياسي العالمي للانتصارات المتتالية", category: "كرة القدم", time: "منذ 8 ساعات" },
    { title: "ديوكوفيتش يهدف للقب جراند سلام آخر في باريس", category: "تنس", time: "منذ 12 ساعة" }
  ]
};

export const CASINO_STRATEGY_GUIDE = {
  en: {
    volatility: { title: "Volatility Explained", body: "Volatility refers to how risky a game is. High volatility games (like 'Wanted Dead or a Wild') pay out less often, but the wins can be massive. Low volatility games pay out frequently but smaller amounts. Choose based on your bankroll and patience." },
    houseEdge: { title: "The House Edge", body: "Every casino game has a built-in mathematical advantage for the house. Blackjack has a very low edge (<1%) if played perfectly, while some slots can be 4-5%. Knowing the edge helps you pick the right game." },
    bankroll: { title: "Bankroll Management", body: "This is the golden rule. Set a budget before you start. Divide it into session limits. If you lose your session limit, stop. Never chase losses with money you can't afford to lose." }
  },
  ar: {
    volatility: { title: "شرح التقلب", body: "يشير التقلب إلى مدى خطورة اللعبة. الألعاب عالية التقلب (مثل 'Wanted Dead or a Wild') تدفع بشكل أقل تكرارًا، لكن المكاسب يمكن أن تكون ضخمة. الألعاب منخفضة التقلب تدفع بشكل متكرر ولكن بمبالغ أصغر. اختر بناءً على رصيدك وصبرك." },
    houseEdge: { title: "ميزة الكازينو", body: "كل لعبة كازينو لها ميزة رياضية مدمجة للمنزل. البلاك جاك لها ميزة منخفضة جدًا (<1%) إذا تم لعبها بشكل مثالي، بينما قد تكون بعض السلوتس 4-5%. معرفة الميزة تساعدك في اختيار اللعبة المناسبة." },
    bankroll: { title: "إدارة الرصيد", body: "هذه هي القاعدة الذهبية. حدد ميزانية قبل البدء. قسّمها إلى حدود جلسة. إذا خسرت حد جلستك، توقف. لا تطارد الخسائر أبدًا بأموال لا يمكنك تحمل خسارتها." }
  }
};

export const POKER_EMOTION_TEXT = {
  en: {
    title: "The Thrill of the Bluff",
    body: "Poker is not just about the cards, it is about the people playing them. The tension of a 3-bet bluff, the rush of hitting your flush on the river, and the psychology of reading your opponent's soul. Experience the raw emotion of true competition."
  },
  ar: {
    title: "إثارة الخداع",
    body: "البوكر ليست مجرد بطاقات، إنها تتعلق بالأشخاص الذين يلعبونها. توتر الخداع برهان ثلاثي، اندفاع الأدرينالين عند تحقيق الفلاش في الريفر، وعلم نفس قراءة خصمك. جرب المشاعر الخام للمنافسة الحقيقية."
  }
};

export const POKER_WSOP_CONTENT = {
  en: {
    title: "Road to WSOP",
    body: "Qualify for the World Series of Poker through online satellites on Stake. Turn a small buy-in into a seat at the Main Event in Las Vegas.",
    stats: [
      { label: "Satellites Running", value: "Daily" },
      { label: "Prize Packages", value: "$12,000+" },
      { label: "Seats Won", value: "100+" }
    ]
  },
  ar: {
    title: "الطريق إلى WSOP",
    body: "تأهل لبطولة العالم للبوكر من خلال الأقمار الصناعية عبر الإنترنت على Stake. حول اشتراكًا صغيرًا إلى مقعد في الحدث الرئيسي في لاس فيغاس.",
    stats: [
      { label: "الأقمار الصناعية", value: "يوميا" },
      { label: "باقات الجوائز", value: "$12,000+" },
      { label: "مقاعد تم الفوز بها", value: "100+" }
    ]
  }
};

export const POKER_TERMS_GLOSSARY = {
  en: [
    { term: "Ante", def: "A small forced bet that everyone must pay before the hand starts." },
    { term: "Bluff", def: "Betting with a weak hand to make your opponents fold better hands." },
    { term: "Call", def: "Matching the current bet amount." },
    { term: "Check", def: "Passing the action to the next player without betting (if no bet has been made)." },
    { term: "Fold", def: "Discarding your hand and forfeiting interest in the pot." },
    { term: "Flop", def: "The first three community cards dealt face up." },
    { term: "Turn", def: "The fourth community card." },
    { term: "River", def: "The fifth and final community card." },
    { term: "All-in", def: "Betting all of your remaining chips." },
    { term: "Bad Beat", def: "Losing a hand where you were the statistical favorite." },
    { term: "Pot Odds", def: "The ratio of the current pot size to the cost of a contemplated call." }
  ],
  ar: [
    { term: "أنتي (Ante)", def: "رهان إجباري صغير يجب على الجميع دفعه قبل بدء اليد." },
    { term: "بلوف (Bluff)", def: "الرهان بيد ضعيفة لجعل خصومك يطوون أيادٍ أفضل." },
    { term: "كول (Call)", def: "مطابقة مبلغ الرهان الحالي." },
    { term: "تشيك (Check)", def: "تمرير الإجراء للاعب التالي دون الرهان (إذا لم يتم إجراء رهان)." },
    { term: "فولد (Fold)", def: "رمي يدك والتنازل عن الاهتمام بالوعاء." },
    { term: "فلوب (Flop)", def: "أول ثلاث بطاقات مجتمعية يتم توزيعها مكشوفة." },
    { term: "تيرن (Turn)", def: "البطاقة المجتمعية الرابعة." },
    { term: "ريفر (River)", def: "البطاقة المجتمعية الخامسة والأخيرة." },
    { term: "أول إن (All-in)", def: "الرهان بجميع رقائقك المتبقية." },
    { term: "باد بيت (Bad Beat)", def: "خسارة يد حيث كنت المفضل إحصائيًا." },
    { term: "احتمالات الوعاء", def: "نسبة حجم الوعاء الحالي إلى تكلفة المكالمة المحتملة." }
  ]
};

export const POKER_HAND_RANKINGS_DETAILED = {
  en: [
    { name: "Royal Flush", desc: "A, K, Q, J, 10, all the same suit.", rank: 1, cards: ["A", "K", "Q", "J", "10"], color: "text-brand-accent" },
    { name: "Straight Flush", desc: "Five cards in a sequence, all in the same suit.", rank: 2, cards: ["9", "8", "7", "6", "5"], color: "text-white" },
    { name: "Four of a Kind", desc: "All four cards of the same rank.", rank: 3, cards: ["A", "A", "A", "A", "K"], color: "text-white" },
    { name: "Full House", desc: "Three of a kind with a pair.", rank: 4, cards: ["K", "K", "K", "Q", "Q"], color: "text-white" },
    { name: "Flush", desc: "Any five cards of the same suit, but not in a sequence.", rank: 5, cards: ["J", "9", "4", "3", "2"], color: "text-white" },
    { name: "Straight", desc: "Five cards in a sequence, but not of the same suit.", rank: 6, cards: ["10", "9", "8", "7", "6"], color: "text-white" },
    { name: "Three of a Kind", desc: "Three cards of the same rank.", rank: 7, cards: ["Q", "Q", "Q", "J", "4"], color: "text-white" },
    { name: "Two Pair", desc: "Two different pairs.", rank: 8, cards: ["J", "J", "8", "8", "2"], color: "text-white" },
    { name: "Pair", desc: "Two cards of the same rank.", rank: 9, cards: ["10", "10", "K", "4", "3"], color: "text-white" },
    { name: "High Card", desc: "When you haven't made any of the hands above, the highest card plays.", rank: 10, cards: ["A", "J", "9", "5", "3"], color: "text-white" }
  ],
  ar: [
    { name: "رويال فلاش", desc: "A, K, Q, J, 10، كلها من نفس النوع.", rank: 1, cards: ["A", "K", "Q", "J", "10"], color: "text-brand-accent" },
    { name: "ستريت فلاش", desc: "خمس بطاقات متتالية، كلها من نفس النوع.", rank: 2, cards: ["9", "8", "7", "6", "5"], color: "text-white" },
    { name: "أربعة من نفس النوع", desc: "أربع بطاقات من نفس الرتبة.", rank: 3, cards: ["A", "A", "A", "A", "K"], color: "text-white" },
    { name: "فل هاوس", desc: "ثلاثة من نوع واحد مع زوج.", rank: 4, cards: ["K", "K", "K", "Q", "Q"], color: "text-white" },
    { name: "فلاش", desc: "أي خمس بطاقات من نفس النوع، ولكن ليست متتالية.", rank: 5, cards: ["J", "9", "4", "3", "2"], color: "text-white" },
    { name: "ستريت", desc: "خمس بطاقات متتالية، ولكن ليست من نفس النوع.", rank: 6, cards: ["10", "9", "8", "7", "6"], color: "text-white" },
    { name: "ثلاثة من نفس النوع", desc: "ثلاث بطاقات من نفس الرتبة.", rank: 7, cards: ["Q", "Q", "Q", "J", "4"], color: "text-white" },
    { name: "زوجان", desc: "زوجان مختلفان.", rank: 8, cards: ["J", "J", "8", "8", "2"], color: "text-white" },
    { name: "زوج", desc: "بطاقتان من نفس الرتبة.", rank: 9, cards: ["10", "10", "K", "4", "3"], color: "text-white" },
    { name: "بطاقة عالية", desc: "عندما لا تحقق أيًا من الأيدي أعلاه، تلعب أعلى بطاقة.", rank: 10, cards: ["A", "J", "9", "5", "3"], color: "text-white" }
  ]
};

export const FOOTER_DISCLAIMER_LONG = {
  en: "Gambling involves risk and should be considered a form of entertainment, not a way to earn money. Please gamble responsibly. This site is an independent affiliate partner and does not offer gambling services directly. Access to online gambling may be restricted in your jurisdiction; it is your responsibility to ensure you are complying with local laws. We do not accept liability for any losses incurred. If you or someone you know has a gambling problem, please seek help.",
  ar: "تنطوي المقامرة على مخاطر ويجب اعتبارها شكلاً من أشكال الترفيه، وليست وسيلة لكسب المال. يرجى المقامرة بمسؤولية. هذا الموقع هو شريك تابع مستقل ولا يقدم خدمات المقامرة مباشرة. قد يتم تقييد الوصول إلى المقامرة عبر الإنترنت في ولايتك القضائية؛ تقع على عاتقك مسؤولية التأكد من امتثالك للقوانين المحلية. نحن لا نتحمل أي مسؤولية عن أي خسائر متكبدة. إذا كنت أنت أو أي شخص تعرفه يعاني من مشكلة مقامرة، فيرجى طلب المساعدة."
};

export const NEWS_STORIES = [
  { id: 1, title: "Crypto Market Bull Run Continues", date: "Dec 15, 2024", body: "Bitcoin hits new all-time high as institutional adoption grows. This surge is driving massive volume in crypto casinos as player bankrolls increase in value.", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80" },
  { id: 2, title: "Pragmatic Play Releases 'Sugar Rush 1000'", date: "Dec 10, 2024", body: "The popular provider has released a sequel to their hit game, featuring even higher volatility and max wins up to 25,000x the bet.", image: "https://images.unsplash.com/photo-1581553632367-271032170327?auto=format&fit=crop&q=80" },
  { id: 3, title: "Stake.com Signs New UFC Partnership", date: "Dec 05, 2024", body: "Stake deepens its ties with the UFC, offering exclusive betting markets and VIP experiences for major fight cards in Abu Dhabi.", image: "https://images.unsplash.com/photo-1552072092-801b9f0fdc60?auto=format&fit=crop&q=80" }
];

export const LEGAL_TEXT = {
  en: {
    terms: "Welcome to Play971. By accessing this website we assume you accept these terms and conditions. We are an affiliate marketing website. We do not accept deposits or facilitate gambling. All gambling services are provided by third-party operators who are responsible for their own licensing and compliance. You must be at least 18 years of age to use this site. Users are responsible for checking local laws regarding online gambling in their jurisdiction. Content on this site is for informational purposes only.",
    privacy: "Your privacy is important to us. It is Play971's policy to respect your privacy regarding any information we may collect from you across our website. We do not store personal data such as names or payment details. We use cookies for analytics and affiliate tracking purposes to ensure you receive the bonuses promised. We do not sell or share your data with third parties unless required by law.",
    cookie: "We use cookies to improve your experience on our site. By using our site, you consent to cookies. These cookies track your referral to Stake.com to ensure you receive the Play971 promo code benefits (Rakeback and Deposit Bonus)."
  },
  ar: {
    terms: "مرحبًا بك في Play971. من خلال الوصول إلى هذا الموقع، نفترض أنك تقبل هذه الشروط والأحكام. نحن موقع تسويق بالعمولة. نحن لا نقبل الودائع أو نسهل المقامرة. يتم توفير جميع خدمات المقامرة من قبل مشغلين خارجيين مسؤولين عن تراخيصهم وامتثالهم. يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام هذا الموقع. المستخدمون مسؤولون عن التحقق من القوانين المحلية المتعلقة بالمقامرة عبر الإنترنت في ولايتهم القضائية. المحتوى الموجود على هذا الموقع هو لأغراض إعلامية فقط.",
    privacy: "خصوصيتك مهمة بالنسبة لنا. إن سياسة Play971 هي احترام خصوصيتك فيما يتعلق بأي معلومات قد نجمعها منك عبر موقعنا. نحن لا نخزن البيانات الشخصية مثل الأسماء أو تفاصيل الدفع. نحن نستخدم ملفات تعريف الارتباط لأغراض التحليلات وتتبع الإحالة لضمان حصولك على المكافآت الموعودة. نحن لا نبيع أو نشارك بياناتك مع أطراف ثالثة ما لم يقتض القانون ذلك.",
    cookie: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدام موقعنا، فإنك توافق على ملفات تعريف الارتباط. تتبع ملفات تعريف الارتباط هذه إحالتك إلى Stake.com لضمان حصولك على مزايا كود Play971 (الرايك باك ومكافأة الإيداع)."
  }
};

export const COUNTRY_DATA = [
  { code: "AE", name: "UAE", flag: "🇦🇪", desc: "Top choice for VIP players in Dubai and Abu Dhabi. Privacy is key." },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", desc: "Growing community of crypto betting enthusiasts. Huge football market." },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", desc: "High stakes sports betting market for VIPs." },
  { code: "QA", name: "Qatar", flag: "🇶🇦", desc: "Focused on major football events and luxury gaming." },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", desc: "Access to premier casino games and easy crypto on-ramps." },
  { code: "EG", name: "Egypt", flag: "🇪🇬", desc: "Massive sports betting community, especially for EPL." },
  { code: "LB", name: "Lebanon", flag: "🇱🇧", desc: "Sophisticated casino players and poker enthusiasts." },
  { code: "JO", name: "Jordan", flag: "🇯🇴", desc: "Emerging market for safe, crypto-based gambling." },
  { code: "MA", name: "Morocco", flag: "🇲🇦", desc: "Bridge between European and Arab betting culture." },
  { code: "OM", name: "Oman", flag: "🇴🇲", desc: "Private and secure betting for discerning players." }
];

export const STAKE_REVIEW_COPY = {
  en: {
    longFormArticle: {
      title: "Comprehensive Stake Review 2025: The King of Crypto Casinos",
      p1: "Stake has established itself as the premier crypto gambling destination, dominating the market with its sleek interface, incredible VIP program, and instant payouts. Founded in 2017, it has grown from a niche crypto site to a global powerhouse sponsoring F1 teams and Premier League clubs.",
      p2: "With sponsorships in F1 (Alfa Romeo/Kick Sauber) and the Premier League (Everton), their reputation is solid. They aren't a fly-by-night operation; they are a regulated, massive entity that processes billions in wagers.",
      p3: "The welcome offer includes a generous 200% deposit match and instant rakeback when you use code PLAY971. This effectively lowers the house edge and gives you a much better chance of winning in the long run.",
      p4: "Withdrawals are instant and support multiple cryptocurrencies including Bitcoin, Ethereum, USDT, and Litecoin. There are no withdrawal limits, meaning if you hit a million-dollar jackpot, you can cash it out immediately.",
      p5: "Customer support is available 24/7 in multiple languages, including Arabic. The live chat is responsive, helpful, and typically answers within seconds."
    },
    sections: [
      { title: "Game Selection", rating: "9.5", body: "Thousands of slots from top providers like Pragmatic Play, Hacksaw, and NoLimit City. Plus, their 'Stake Originals' (Plinko, Dice, Crash) offer the best RTP in the industry (99%)." },
      { title: "Bonuses & VIP", rating: "9.8", body: "Unbeatable VIP program. As you level up from Bronze to Diamond, you unlock weekly boosts, monthly bonuses, and a dedicated VIP host. The rakeback feature is a game-changer." },
      { title: "Payment Methods", rating: "9.0", body: "Crypto-only means privacy and speed. Deposits are credited after 1 confirmation, and withdrawals are automated and instant. You can buy crypto directly on the site via MoonPay if you don't have any." }
    ],
    verdict: "Stake is the gold standard for crypto gambling. If you are serious about betting with crypto, there is no better place."
  },
  ar: {
    longFormArticle: {
      title: "مراجعة شاملة لـ Stake 2025: ملك كازينوهات الكريبتو",
      p1: "رسخت Stake نفسها كوجهة أولى للمقامرة بالعملات المشفرة، حيث تهيمن على السوق بواجهتها الأنيقة وبرنامج VIP المذهل والدفعات الفورية. تأسست في عام 2017، ونمت من موقع كريبتو متخصص إلى قوة عالمية ترعى فرق F1 وأندية الدوري الإنجليزي الممتاز.",
      p2: "مع الرعاية في F1 (Alfa Romeo/Kick Sauber) والدوري الإنجليزي الممتاز (Everton)، سمعتهم قوية. إنهم ليسوا عملية عابرة؛ إنهم كيان منظم وضخم يعالج مليارات الرهانات.",
      p3: "يشمل عرض الترحيب مطابقة إيداع سخية بنسبة 200% ورايك باك فوري عند استخدام الرمز PLAY971. هذا يقلل بشكل فعال من ميزة المنزل ويمنحك فرصة أفضل بكثير للفوز على المدى الطويل.",
      p4: "السحوبات فورية وتدعم العديد من العملات المشفرة بما في ذلك Bitcoin و Ethereum و USDT و Litecoin. لا توجد حدود للسحب، مما يعني أنه إذا ربحت جائزة كبرى بمليون دولار، يمكنك صرفها فورًا.",
      p5: "دعم العملاء متاح 24/7 بلغات متعددة، بما في ذلك العربية. الدردشة المباشرة سريعة الاستجابة ومفيدة وعادة ما تجيب في غضون ثوانٍ."
    },
    sections: [
      { title: "اختيار الألعاب", rating: "9.5", body: "الآلاف من السلوتس من أفضل المزودين مثل Pragmatic Play و Hacksaw و NoLimit City. بالإضافة إلى ذلك، تقدم 'Stake Originals' (Plinko, Dice, Crash) أفضل RTP في الصناعة (99%)." },
      { title: "المكافآت و VIP", rating: "9.8", body: "برنامج VIP لا يهزم. مع تقدمك من البرونزي إلى الماسي، تفتح تعزيزات أسبوعية ومكافآت شهرية ومضيف VIP مخصص. ميزة الرايك باك تغير قواعد اللعبة." },
      { title: "طرق الدفع", rating: "9.0", body: "الكريبتو فقط يعني الخصوصية والسرعة. يتم إيداع الودائع بعد تأكيد واحد، والسحوبات آلية وفورية. يمكنك شراء الكريبتو مباشرة على الموقع عبر MoonPay إذا لم يكن لديك أي منها." }
    ],
    verdict: "Stake هي المعيار الذهبي لمقامرة الكريبتو. إذا كنت جادًا بشأن المراهنة بالكريبتو، فلا يوجد مكان أفضل."
  }
};

export const STAKE_REVIEW_COUNTRY_TABLE = {
  en: [
    { country: "United Arab Emirates", code: "PLAY971", detail: "Instant VIP Bronze Status + Rakeback", countryCode: "AE" },
    { country: "Saudi Arabia", code: "PLAY971", detail: "5% Rakeback on all Sports Bets", countryCode: "SA" },
    { country: "Kuwait", code: "PLAY971", detail: "200% Deposit Match up to $3000", countryCode: "KW" },
    { country: "Qatar", code: "PLAY971", detail: "Exclusive World Cup Promos", countryCode: "QA" },
    { country: "Bahrain", code: "PLAY971", detail: "Instant Withdrawals Enabled", countryCode: "BH" },
    { country: "Egypt", code: "PLAY971", detail: "Low Minimum Deposit Entry", countryCode: "EG" },
    { country: "Lebanon", code: "PLAY971", detail: "USD Pegged Accounts Available", countryCode: "LB" },
    { country: "Jordan", code: "PLAY971", detail: "Full Casino Access", countryCode: "JO" },
    { country: "Morocco", code: "PLAY971", detail: "French Support Available", countryCode: "MA" },
    { country: "Oman", code: "PLAY971", detail: "Privacy First Accounts", countryCode: "OM" }
  ],
  ar: [
    { country: "الإمارات العربية المتحدة", code: "PLAY971", detail: "حالة VIP برونزية فورية + رايك باك", countryCode: "AE" },
    { country: "المملكة العربية السعودية", code: "PLAY971", detail: "رايك باك 5% على جميع الرهانات الرياضية", countryCode: "SA" },
    { country: "الكويت", code: "PLAY971", detail: "مطابقة إيداع 200% تصل إلى 3000$", countryCode: "KW" },
    { country: "قطر", code: "PLAY971", detail: "عروض كأس العالم الحصرية", countryCode: "QA" },
    { country: "البحرين", code: "PLAY971", detail: "تمكين السحوبات الفورية", countryCode: "BH" },
    { country: "مصر", code: "PLAY971", detail: "دخول بحد أدنى منخفض للإيداع", countryCode: "EG" },
    { country: "لبنان", code: "PLAY971", detail: "حسابات مرتبطة بالدولار متاحة", countryCode: "LB" },
    { country: "الأردن", code: "PLAY971", detail: "وصول كامل للكازينو", countryCode: "JO" },
    { country: "المغرب", code: "PLAY971", detail: "الدعم الفرنسي متاح", countryCode: "MA" },
    { country: "عمان", code: "PLAY971", detail: "حسابات الخصوصية أولاً", countryCode: "OM" }
  ]
};

export const QUIZ_DATA: QuizTopic[] = [
  {
    id: 'crypto',
    title: 'Crypto Basics',
    description: 'Learn the fundamentals of blockchain and cryptocurrency.',
    icon: 'Bitcoin',
    questions: [
      { id: 1, question: 'What is the first cryptocurrency?', options: ['Ethereum', 'Bitcoin', 'Dogecoin', 'Tether'], correct: 1 },
      { id: 2, question: 'What technology underpins cryptocurrencies?', options: ['Cloud Computing', 'Blockchain', 'AI', 'IoT'], correct: 1 },
      { id: 3, question: 'What does HODL mean?', options: ['Hold On for Dear Life', 'High Order Digital Ledger', 'Hold On Does Last', 'Have One Dollar Left'], correct: 0 }
    ]
  },
  {
    id: 'staking',
    title: 'Gambling Strategy',
    description: 'Test your knowledge on bankroll management and odds.',
    icon: 'Shield',
    questions: [
      { id: 1, question: 'What is "House Edge"?', options: ['The casino advantage', 'A specific slot game', 'A VIP bonus', 'The edge of the table'], correct: 0 },
      { id: 2, question: 'What is RTP?', options: ['Ready To Play', 'Return To Player', 'Real Time Payout', 'Random Transaction Protocol'], correct: 1 },
      { id: 3, question: 'What is the safest betting strategy?', options: ['Martingale', 'All-in', 'Bankroll Management', 'Chasing Losses'], correct: 2 }
    ]
  },
  {
    id: 'stake',
    title: 'Stake.com Trivia',
    description: 'How well do you know the platform?',
    icon: 'Zap',
    questions: [
      { id: 1, question: 'When was Stake founded?', options: ['2015', '2017', '2020', '2010'], correct: 1 },
      { id: 2, question: 'Which F1 team does Stake sponsor?', options: ['Ferrari', 'Red Bull', 'Kick Sauber', 'Mercedes'], correct: 2 },
      { id: 3, question: 'What is the top VIP rank?', options: ['Diamond', 'Platinum', 'Obsidian', 'Gold'], correct: 2 } 
    ]
  },
  {
    id: 'casino_games',
    title: 'Crypto Casinos',
    description: 'Test your knowledge on crypto slots and live games.',
    icon: 'Zap',
    questions: [
      { id: 1, question: 'Which game is famous for the 1000x ball drop?', options: ['Crash', 'Plinko', 'Blackjack', 'Poker'], correct: 1 },
      { id: 2, question: 'What does "Provably Fair" mean?', options: ['The casino always wins', 'You can verify the result on blockchain', 'The game is licensed', 'It pays out 100%'], correct: 1 },
      { id: 3, question: 'Which provider made "Sweet Bonanza"?', options: ['Evolution', 'Hacksaw', 'Pragmatic Play', 'NoLimit'], correct: 2 }
    ]
  },
  {
    id: 'poker_quiz',
    title: 'Crypto Poker',
    description: 'Know your hands?',
    icon: 'Shield',
    questions: [
      { id: 1, question: 'Which hand beats a Full House?', options: ['Flush', 'Straight', 'Four of a Kind', 'Three of a Kind'], correct: 2 },
      { id: 2, question: 'What is the "River"?', options: ['The first card', 'The last community card', 'The dealer', 'A bad beat'], correct: 1 },
      { id: 3, question: 'In Omaha, how many hole cards do you get?', options: ['2', '4', '5', '3'], correct: 1 }
    ]
  },
  {
    id: 'sports_quiz',
    title: 'Crypto Sports Betting',
    description: 'Odds and Markets.',
    icon: 'Bitcoin',
    questions: [
      { id: 1, question: 'What does "Over 2.5 Goals" mean?', options: ['2 goals or less', 'Exactly 2 goals', '3 goals or more', 'Match draw'], correct: 2 },
      { id: 2, question: 'What is a "Parlay"?', options: ['A single bet', 'A combined bet of multiple legs', 'A live bet', 'A cashout'], correct: 1 },
      { id: 3, question: 'Which format is standard for crypto odds?', options: ['Fractional', 'Decimal', 'American', 'Hong Kong'], correct: 1 }
    ]
  }
];

export const COUNTRY_DETAILS: Record<Language, Record<string, CountryDetail>> = {
  en: {
    'AE': {
      code: 'AE',
      name: 'UAE',
      flag: '🇦🇪',
      introTitle: 'Best Stake Promo Code for UAE',
      introBody: 'Players in Dubai and Abu Dhabi choose Stake for its privacy and high limits. Use code PLAY971 to unlock VIP status instantly.',
      cryptoBenefits: ['Zero Tax on Winnings', 'Instant AED to Crypto Ramps', 'Private Banking Alternative'],
      pros: ['High Limits', 'VIP Events in Dubai', 'No KYC for Crypto'],
      cons: ['VPN might be needed for some ISPs', 'No Local Bank Transfer'],
      popularSports: [{ name: 'Football', desc: 'Premier League & Champions League' }, { name: 'Cricket', desc: 'IPL & World Cup' }],
      paymentMethods: [{ name: 'USDT', desc: 'Most popular stablecoin' }, { name: 'Bitcoin', desc: 'For large transactions' }],
      bestCodeTitle: 'Why PLAY971 is the best code for UAE',
      bestCodeBody: 'UAE players are often high rollers who value privacy and high return rates. The PLAY971 code activates instant rakeback, meaning you get a rebate on every single bet, win or lose. This is crucial for high-volume players in Dubai and Abu Dhabi who want to maximize their edge against the house. Additionally, it fast-tracks your account for VIP host consideration.',
      articleContent: [
        { title: 'Legal Landscape in UAE', paragraphs: ['Gambling is strictly regulated in the UAE. However, online crypto casinos operate in a grey area where enforcement is difficult due to the anonymous nature of blockchain transactions. Stake.com is the preferred choice because it does not require local bank transfers, keeping your financial data private.'] },
        { title: 'Crypto adoption', paragraphs: ['Dubai is a global crypto hub. Buying USDT or BTC via P2P markets on Binance or Bybit using AED is seamless. You can then transfer these funds to Stake instantly.'] }
      ],
      testimonials: [
        { name: 'Ahmed', location: 'Dubai', quote: 'Fast withdrawals to my cold wallet.', rating: 5 },
        { name: 'Faisal', location: 'Abu Dhabi', quote: 'Best VIP host service I have experienced.', rating: 5 },
        { name: 'Rashid', location: 'Sharjah', quote: 'I love the privacy of crypto betting.', rating: 5 },
        { name: 'Omar', location: 'Dubai', quote: 'Great sports odds on IPL.', rating: 4 },
        { name: 'Khalid', location: 'Al Ain', quote: 'Instant rakeback makes a huge difference.', rating: 5 }
      ]
    },
    'SA': {
      code: 'SA',
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      introTitle: 'Best Stake Promo Code for Saudi Arabia',
      introBody: 'With the massive investment in the Saudi Pro League, sports betting interest is exploding. Stake offers the deepest markets and best privacy for Saudi players.',
      cryptoBenefits: ['Complete Anonymity from Banks', 'Access to Global Markets', 'Instant Settlement'],
      pros: ['Deep SPL Markets', 'Arabic Language Support', 'High Betting Limits'],
      cons: ['Strict Local Laws', 'VPN Required'],
      popularSports: [{ name: 'Football', desc: 'Saudi Pro League & EPL' }, { name: 'Horse Racing', desc: 'Saudi Cup & International' }],
      paymentMethods: [{ name: 'USDT (TRC20)', desc: 'Low fees, high speed' }, { name: 'STC Pay (via P2P)', desc: 'Buy crypto easily' }],
      bestCodeTitle: 'Why PLAY971 is the best code for KSA',
      bestCodeBody: 'For Saudi players, discretion is paramount. The PLAY971 code not only unlocks the 200% bonus but ensures your account is tagged for privacy-focused VIP handling. Enjoy the thrill of betting on Al Hilal or Al Nassr without compromising your financial privacy.',
      articleContent: [
        { title: 'The Rise of Betting in the Kingdom', paragraphs: ['The Kingdom\'s investment in sports has created a fervent fan base. While traditional betting is not available locally, the tech-savvy youth are turning to crypto platforms like Stake to engage with their favorite teams. The ability to bet on local heroes in the SPL adds a new layer of excitement to match days.'] },
        { title: 'Why Crypto is Essential', paragraphs: ['Using traditional bank cards for gambling is blocked in KSA. Cryptocurrency solves this by acting as a bridge. You buy USDT on a local exchange using STC Pay or bank transfer, and then deposit that USDT to Stake. This keeps your main bank statement clean and free of any gambling-related transactions.'] }
      ],
      testimonials: [
        { name: 'Saud', location: 'Riyadh', quote: 'Best odds for Al Hilal games.', rating: 5 },
        { name: 'Mohammed', location: 'Jeddah', quote: 'Very safe and private.', rating: 5 },
        { name: 'Fahad', location: 'Dammam', quote: 'Support helped me with my first deposit.', rating: 5 },
        { name: 'Abdullah', location: 'Riyadh', quote: 'Love the VIP rewards.', rating: 5 },
        { name: 'Yasser', location: 'Khobar', quote: 'Great mobile experience.', rating: 4 }
      ]
    },
    'KW': {
      code: 'KW',
      name: 'Kuwait',
      flag: '🇰🇼',
      introTitle: 'Best Stake Promo Code for Kuwait',
      introBody: 'Kuwait is home to some of the biggest VIP players in the region. Stake caters to this elite demographic with high limits and exclusive tables.',
      cryptoBenefits: ['Unlimited Withdrawal Limits', 'VIP Host Access', 'Private Tables'],
      pros: ['High Roller Friendly', 'Exclusive Bombay Club Access', 'Fast Payouts'],
      cons: ['Limited Local Banking Options', 'VPN Essential'],
      popularSports: [{ name: 'Football', desc: 'Premier League' }, { name: 'Tennis', desc: 'Grand Slams' }],
      paymentMethods: [{ name: 'USDT', desc: 'Preferred for large sums' }, { name: 'Bitcoin', desc: 'Secure store of value' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Kuwait',
      bestCodeBody: 'Kuwaiti players are known for high stakes. Code PLAY971 is your key to the VIP fast lane. Depositing over $1000 with this code flags your account for potential VIP host assignment, giving you access to higher limits and personalized bonuses not available to the public.',
      articleContent: [
        { title: 'A Culture of Privacy', paragraphs: ['In Kuwait, privacy is luxury. The "Diwaniya" culture often involves discussing market trends and sports, and crypto betting fits perfectly into this discreet lifestyle. Stake offers a premium, private environment where high net worth individuals can play Baccarat or Blackjack with limits up to $500,000 per hand.'] },
        { title: 'Banking & Payments', paragraphs: ['Since local banks do not process gambling transactions, Kuwaiti players rely heavily on P2P crypto markets. Buying USDT via P2P is safe, reliable, and ensures that your gaming funds are completely segregated from your business or personal banking.'] }
      ],
      testimonials: [
        { name: 'Yousef', location: 'Kuwait City', quote: 'The Bombay Club tables are excellent.', rating: 5 },
        { name: 'Hamad', location: 'Salmiya', quote: 'Instant payouts of 50k+ no problem.', rating: 5 },
        { name: 'Ali', location: 'Hawally', quote: 'Best VIP service in the Gulf.', rating: 5 },
        { name: 'Nasser', location: 'Jahra', quote: 'Secure and discreet.', rating: 5 },
        { name: 'Jaber', location: 'Kuwait City', quote: 'Great selection of slots.', rating: 4 }
      ]
    },
    'QA': {
      code: 'QA',
      name: 'Qatar',
      flag: '🇶🇦',
      introTitle: 'Best Stake Promo Code for Qatar',
      introBody: 'Post-World Cup, the passion for sports in Qatar has never been higher. Stake offers the most comprehensive sportsbook for Qatari fans.',
      cryptoBenefits: ['Access to Global Sports', 'High Speed Transactions', 'Security'],
      pros: ['Massive Football Markets', 'Luxury VIP Gifts', 'Safe Platform'],
      cons: ['Strict ISP Blocking', 'No QAR Direct Deposit'],
      popularSports: [{ name: 'Football', desc: 'QSL & European Leagues' }, { name: 'Horse Racing', desc: 'Global Events' }],
      paymentMethods: [{ name: 'USDT', desc: 'Primary method' }, { name: 'Ethereum', desc: 'Smart contract betting' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Qatar',
      bestCodeBody: 'Qatari players appreciate quality and speed. The PLAY971 code guarantees the maximum welcome offer available. Use it to double your deposit during major football tournaments like the Champions League or the Asian Cup for maximum leverage.',
      articleContent: [
        { title: 'The Legacy of the World Cup', paragraphs: ['Hosting the 2022 World Cup ignited a permanent passion for football analytics and prediction in Qatar. Stake covers every QSL match with deep markets, allowing locals to use their knowledge of local teams like Al Sadd and Al Duhail to find value bets.'] },
        { title: 'Digital Sophistication', paragraphs: ['Qatar has high internet penetration and a tech-savvy population. Crypto betting is seen as the modern, sophisticated way to gamble. Stake\'s sleek interface and mobile-first design appeal perfectly to the modern Qatari user who wants to bet on the go.'] }
      ],
      testimonials: [
        { name: 'Jassim', location: 'Doha', quote: 'Best odds for QSL matches.', rating: 5 },
        { name: 'Mohammed', location: 'Lusail', quote: 'Very easy to use app interface.', rating: 5 },
        { name: 'Khalifa', location: 'Al Rayyan', quote: 'Depositing via Binance P2P is easy.', rating: 5 },
        { name: 'Abdulla', location: 'Doha', quote: 'Good variety of slots.', rating: 4 },
        { name: 'Hamad', location: 'Wakrah', quote: 'Customer service is very polite.', rating: 5 }
      ]
    },
    'BH': {
      code: 'BH',
      name: 'Bahrain',
      flag: '🇧🇭',
      introTitle: 'Best Stake Promo Code for Bahrain',
      introBody: 'As a financial hub with a relaxed atmosphere, Bahrain has a high crypto adoption rate. Stake is the preferred platform for locals and expats alike.',
      cryptoBenefits: ['Easy Fiat On-Ramps', 'F1 Betting Specials', 'Fast KYC'],
      pros: ['Crypto Friendly Banks', 'Good Internet Speeds', 'F1 Focus'],
      cons: ['Some sites blocked', 'Limited local support'],
      popularSports: [{ name: 'F1', desc: 'Bahrain GP Specials' }, { name: 'Football', desc: 'EPL' }],
      paymentMethods: [{ name: 'Rain.bh (Crypto)', desc: 'Local exchange friendly' }, { name: 'USDT', desc: 'Standard' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Bahrain',
      bestCodeBody: 'With Bahrain hosting the F1, Stake (sponsor of Sauber) offers incredible exclusive promos for the Bahrain GP. Using code PLAY971 ensures you are eligible for these race-day specials, including boosted odds and risk-free bets.',
      articleContent: [
        { title: 'A Crypto Friendly Island', paragraphs: ['Bahrain is one of the most crypto-friendly nations in the Gulf, hosting regulated exchanges like Rain. This makes moving money in and out of Stake easier than in neighboring countries. Players can easily convert BHD to crypto and deposit instantly.'] },
        { title: 'Motorsport Central', paragraphs: ['The passion for motorsport runs deep here. Stake\'s deep F1 betting markets are a major draw. Beyond just the race winner, you can bet on lap times, head-to-head driver matchups, and constructor standings, making every race weekend thrilling.'] }
      ],
      testimonials: [
        { name: 'Salman', location: 'Manama', quote: 'I use Rain to deposit, works perfectly.', rating: 5 },
        { name: 'Hassan', location: 'Riffa', quote: 'Love the F1 betting options.', rating: 5 },
        { name: 'Ali', location: 'Muharraq', quote: 'Fastest casino site in Bahrain.', rating: 5 },
        { name: 'Ebrahim', location: 'Manama', quote: 'Good blackjack tables.', rating: 4 },
        { name: 'Khalid', location: 'Isa Town', quote: 'Bonuses are real and fair.', rating: 5 }
      ]
    },
    'EG': {
      code: 'EG',
      name: 'Egypt',
      flag: '🇪🇬',
      introTitle: 'Best Stake Promo Code for Egypt',
      introBody: 'Protect your bankroll from inflation by playing in USD-pegged crypto. Stake is the #1 choice for Egyptian bettors looking for stability.',
      cryptoBenefits: ['Inflation Hedge', 'Low Min Deposits', 'Vodafone Cash P2P'],
      pros: ['Hedge against EGP', 'Massive Community', 'Low Entry Barrier'],
      cons: ['Internet speed variance', 'VPN mandatory'],
      popularSports: [{ name: 'Football', desc: 'EPL (Salah) & Al Ahly' }, { name: 'Handball', desc: 'National Team' }],
      paymentMethods: [{ name: 'USDT', desc: 'Digital Dollar' }, { name: 'Litecoin', desc: 'Low fees for small deposits' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Egypt',
      bestCodeBody: 'For Egyptians, transaction fees and currency value matter. Code PLAY971 gives you rakeback, which helps cover the small fees associated with buying crypto. More importantly, keeping your winnings in USDT protects your purchasing power against local currency fluctuation.',
      articleContent: [
        { title: 'Economic Hedge', paragraphs: ['With the EGP fluctuation, holding your gaming bankroll in USDT (Tether) on Stake is a smart financial move. It preserves your purchasing power while you play. Many Egyptians use Stake not just for fun, but as a way to grow a USD-denominated portfolio.'] },
        { title: 'Payment Gateways', paragraphs: ['Most Egyptians use Vodafone Cash to buy USDT on Binance P2P. This is a smooth, reliable pipeline to fund your Stake account without touching a traditional bank account. It is fast, secure, and widely understood by the local youth.'] }
      ],
      testimonials: [
        { name: 'Mahmoud', location: 'Cairo', quote: 'Keeping my balance in USDT is a lifesaver.', rating: 5 },
        { name: 'Ahmed', location: 'Alexandria', quote: 'Vodafone Cash P2P works great.', rating: 5 },
        { name: 'Mustafa', location: 'Giza', quote: 'Best site for Al Ahly games.', rating: 5 },
        { name: 'Kareem', location: 'Cairo', quote: 'Low fees with Litecoin.', rating: 4 },
        { name: 'Omar', location: 'Mansoura', quote: 'Support helped me learn crypto.', rating: 5 }
      ]
    },
    'LB': {
      code: 'LB',
      name: 'Lebanon',
      flag: '🇱🇧',
      introTitle: 'Best Stake Promo Code for Lebanon',
      introBody: 'In a dollarized economy, crypto is the only reliable banking system. Stake offers a stable platform for Lebanese players to play and win in real value.',
      cryptoBenefits: ['Financial Freedom', 'Dollarized Gaming', 'Uncensored Access'],
      pros: ['Reliable Payouts', 'High Poker Traffic', 'Community Trust'],
      cons: ['Power/Internet stability', 'Banks are restrictive'],
      popularSports: [{ name: 'Basketball', desc: 'Local League & NBA' }, { name: 'Football', desc: 'World Leagues' }],
      paymentMethods: [{ name: 'USDT (TRC20)', desc: 'The standard in Lebanon' }, { name: 'Whish Money (P2P)', desc: 'Local transfer to crypto' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Lebanon',
      bestCodeBody: 'Lebanese players value reliability above all else. Stake has never missed a payout. Using PLAY971 gives you the extra assurance of partner-level support and instant rakeback to keep your chip stack healthy during long poker sessions.',
      articleContent: [
        { title: 'Crypto is Essential', paragraphs: ['Since the banking crisis, crypto has become the de facto banking system. Stake is effectively the national casino of Lebanon due to its seamless USDT integration. It offers a way to access entertainment and potential profit outside the restricted local financial system.'] },
        { title: 'Poker Scene', paragraphs: ['Lebanon has a strong poker culture. Stake\'s tables are full of Lebanese pros grinding cash games and tournaments daily. The ability to play anonymously and cash out instantly to a cold wallet makes it the safest poker room for Lebanese grinders.'] }
      ],
      testimonials: [
        { name: 'Fadi', location: 'Beirut', quote: 'The only place I trust with my money.', rating: 5 },
        { name: 'Charbel', location: 'Jounieh', quote: 'Poker tournaments are great value.', rating: 5 },
        { name: 'Elie', location: 'Byblos', quote: 'USDT transfers are instant.', rating: 5 },
        { name: 'Rami', location: 'Tripoli', quote: 'Good mobile app for betting.', rating: 4 },
        { name: 'George', location: 'Beirut', quote: 'Rakeback covers my transfer fees.', rating: 5 }
      ]
    },
    'JO': {
      code: 'JO',
      name: 'Jordan',
      flag: '🇯🇴',
      introTitle: 'Best Stake Promo Code for Jordan',
      introBody: 'A growing tech hub with a young population embracing crypto betting. Stake offers the best e-sports markets for Jordanian gamers.',
      cryptoBenefits: ['Tech Savvy Support', 'Secure Payments', 'Modern UI'],
      pros: ['Safe Environment', 'E-Sports Markets', 'Good Mobile Support'],
      cons: ['Strict restrictions', 'VPN needed'],
      popularSports: [{ name: 'Football', desc: 'La Liga & EPL' }, { name: 'E-Sports', desc: 'Dota 2 & CS:GO' }],
      paymentMethods: [{ name: 'USDT', desc: 'Primary' }, { name: 'Ethereum', desc: 'Secondary' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Jordan',
      bestCodeBody: 'Jordanian players love the tech aspect of Stake. The code unlocks the Vault feature, allowing smart bankroll management, appealing to the disciplined Jordanian bettor. It also ensures you get the best rakeback rates on high-volume e-sports betting.',
      articleContent: [
        { title: 'Tech Hub of the Levant', paragraphs: ['With many tech startups in Amman, the population understands blockchain well. Stake\'s advanced features like provably fair verification resonate with this crowd. They appreciate the transparency and the ability to verify every roll of the dice or card dealt.'] },
        { title: 'E-Sports Dominance', paragraphs: ['Jordan is a regional leader in E-Sports. Stake offers the deepest markets for CS:GO, League of Legends, and Dota 2. Whether it\'s betting on The International or a local minor, Stake has the lines Jordanian gamers are looking for.'] }
      ],
      testimonials: [
        { name: 'Tareq', location: 'Amman', quote: 'Provably fair system is legit.', rating: 5 },
        { name: 'Yazan', location: 'Irbid', quote: 'Best odds for Real Madrid games.', rating: 5 },
        { name: 'Laith', location: 'Zarqa', quote: 'E-sports betting is next level.', rating: 5 },
        { name: 'Omar', location: 'Amman', quote: 'Smooth deposits.', rating: 4 },
        { name: 'Ahmad', location: 'Aqaba', quote: 'Love the Plinko game.', rating: 5 }
      ]
    },
    'MA': {
      code: 'MA',
      name: 'Morocco',
      flag: '🇲🇦',
      introTitle: 'Best Stake Promo Code for Morocco',
      introBody: 'The gateway between Europe and Africa. Moroccan players love the French support and extensive European sports markets available on Stake.',
      cryptoBenefits: ['French Support', 'Euro-centric Markets', 'Low Fees'],
      pros: ['Multi-language Platform', 'Ligue 1 Focus', 'Card Games'],
      cons: ['Crypto regulations unclear', 'Exchange access'],
      popularSports: [{ name: 'Football', desc: 'Botola & Ligue 1' }, { name: 'Kickboxing', desc: 'Glory & UFC' }],
      paymentMethods: [{ name: 'Binance Pay', desc: 'Popular in Morocco' }, { name: 'Litecoin', desc: 'Low cost' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Morocco',
      bestCodeBody: 'Moroccans often play with tighter bankrolls. The PLAY971 code offers a low minimum deposit entry for the bonus, making it accessible for everyone, not just high rollers. It helps you stretch your Dirhams further.',
      articleContent: [
        { title: 'Football Crazy Nation', paragraphs: ['Following the historic World Cup run, football betting has exploded in Morocco. Stake offers lines on the local Botola Pro league as well as all European majors like Ligue 1 and La Liga, catering to the specific tastes of Moroccan fans.'] },
        { title: 'Language & Accessibility', paragraphs: ['Stake offers full support in French and Arabic, making it perfect for the Moroccan demographic. The platform is intuitive, and the customer support team understands the local nuances, providing a seamless experience.'] }
      ],
      testimonials: [
        { name: 'Mehdi', location: 'Casablanca', quote: 'Support speaks French perfectly.', rating: 5 },
        { name: 'Youssef', location: 'Rabat', quote: 'Best site for Ligue 1 betting.', rating: 5 },
        { name: 'Hamza', location: 'Tangier', quote: 'Fast cashout to Binance.', rating: 5 },
        { name: 'Amine', location: 'Marrakech', quote: 'Good bonuses.', rating: 4 },
        { name: 'Zakaria', location: 'Fes', quote: 'Trustworthy site.', rating: 5 }
      ]
    },
    'OM': {
      code: 'OM',
      name: 'Oman',
      flag: '🇴🇲',
      introTitle: 'Best Stake Promo Code for Oman',
      introBody: 'Discreet, high-quality gaming for the discerning Omani player. Stake provides the privacy and premium service expected.',
      cryptoBenefits: ['Privacy', 'Security', 'Premium Service'],
      pros: ['Quiet & Secure', 'Premium Feel', 'High Odds'],
      cons: ['Small community', 'P2P availability'],
      popularSports: [{ name: 'Football', desc: 'Gulf Cup & EPL' }, { name: 'Cricket', desc: 'T20 Leagues' }],
      paymentMethods: [{ name: 'USDT', desc: 'Standard' }, { name: 'XRP', desc: 'Fastest' }],
      bestCodeTitle: 'Why PLAY971 is the best code for Oman',
      bestCodeBody: 'Omani players value discretion and premium service. The PLAY971 code ensures a private, VIP-tracked account setup that prioritizes security and minimal intrusion, perfect for those who want to play without hassle.',
      articleContent: [
        { title: 'Private Gaming', paragraphs: ['Oman tends to be more conservative. Stake\'s discreet crypto transactions allow players to enjoy entertainment without social stigma. The platform guarantees that your data is encrypted and your financial transactions remain your own business.'] },
        { title: 'Diverse Sports Interests', paragraphs: ['With a large expat population and local interest, the mix of Cricket and Football markets makes Stake ideal for the Omani demographic. Whether it\'s the IPL or the Premier League, Stake covers it all with live streaming and in-play betting.'] }
      ],
      testimonials: [
        { name: 'Said', location: 'Muscat', quote: 'Very private and secure.', rating: 5 },
        { name: 'Mohammed', location: 'Salalah', quote: 'Good cricket odds.', rating: 5 },
        { name: 'Ahmed', location: 'Sohar', quote: 'Withdrawals work every time.', rating: 5 },
        { name: 'Ali', location: 'Nizwa', quote: 'Clean design.', rating: 4 },
        { name: 'Salem', location: 'Muscat', quote: 'Best option in Oman.', rating: 5 }
      ]
    }
  },
  ar: {
    'AE': {
      code: 'AE',
      name: 'الإمارات',
      flag: '🇦🇪',
      introTitle: 'أفضل كود خصم ستيك للإمارات',
      introBody: 'يختار اللاعبون في دبي وأبو ظبي ستيك لخصوصيتها وحدودها العالية. استخدم الكود PLAY971 لفتح حالة VIP فوراً.',
      cryptoBenefits: ['بدون ضرائب على الأرباح', 'تحويل فوري من الدرهم للكريبتو', 'بديل بنكي خاص'],
      pros: ['حدود عالية', 'أحداث VIP في دبي', 'لا حاجة لتوثيق الهوية للكريبتو'],
      cons: ['قد تحتاج VPN لبعض مزودي الخدمة', 'لا تحويل بنكي محلي'],
      popularSports: [{ name: 'كرة القدم', desc: 'الدوري الإنجليزي ودوري الأبطال' }, { name: 'كريكت', desc: 'IPL وكأس العالم' }],
      paymentMethods: [{ name: 'USDT', desc: 'العملة المستقرة الأكثر شيوعاً' }, { name: 'بيتكوين', desc: 'للمعاملات الكبيرة' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للإمارات',
      bestCodeBody: 'لاعبو الإمارات غالبًا ما يكونون من ذوي الرهانات العالية الذين يقدرون الخصوصية ومعدلات العائد العالية. يفعل كود PLAY971 الرايك باك الفوري، مما يعني أنك تحصل على خصم على كل رهان، سواء ربحت أو خسرت. هذا أمر بالغ الأهمية للاعبين ذوي الحجم الكبير في دبي وأبو ظبي.',
      articleContent: [
        { title: 'المشهد القانوني في الإمارات', paragraphs: ['المقامرة منظمة بصرامة في الإمارات. ومع ذلك، تعمل كازينوهات الكريبتو عبر الإنترنت في منطقة رمادية حيث يصعب الإنفاذ بسبب الطبيعة المجهولة لمعاملات البلوكتشين. Stake.com هو الخيار المفضل لأنه لا يتطلب تحويلات بنكية محلية، مما يحافظ على خصوصية بياناتك المالية.'] },
        { title: 'اعتماد الكريبتو', paragraphs: ['دبي هي مركز عالمي للكريبتو. شراء USDT أو BTC عبر أسواق P2P على Binance أو Bybit باستخدام الدرهم سلس للغاية. يمكنك بعد ذلك تحويل هذه الأموال إلى Stake فورًا.'] }
      ],
      testimonials: [
        { name: 'أحمد', location: 'دبي', quote: 'سحوبات سريعة لمحفظتي الباردة.', rating: 5 },
        { name: 'فيصل', location: 'أبو ظبي', quote: 'أفضل خدمة مضيف VIP جربتها.', rating: 5 },
        { name: 'راشد', location: 'الشارقة', quote: 'أحب خصوصية مراهنات الكريبتو.', rating: 5 },
        { name: 'عمر', location: 'دبي', quote: 'احتمالات رياضية رائعة على IPL.', rating: 4 },
        { name: 'خالد', location: 'العين', quote: 'الرايك باك الفوري يحدث فرقًا كبيرًا.', rating: 5 }
      ]
    },
    'SA': {
      code: 'SA',
      name: 'السعودية',
      flag: '🇸🇦',
      introTitle: 'أفضل كود خصم ستيك للسعودية',
      introBody: 'مع الاستثمار الهائل في الدوري السعودي للمحترفين، انفجر الاهتمام بالمراهنات الرياضية. تقدم Stake أعمق الأسواق وأفضل خصوصية للاعبين السعوديين.',
      cryptoBenefits: ['سرية تامة بعيدًا عن البنوك', 'الوصول إلى الأسواق العالمية', 'تسوية فورية'],
      pros: ['أسواق عميقة للدوري السعودي', 'دعم باللغة العربية', 'حدود رهان عالية'],
      cons: ['قوانين محلية صارمة', 'VPN مطلوب'],
      popularSports: [{ name: 'كرة القدم', desc: 'الدوري السعودي والإنجليزي' }, { name: 'سباق الخيل', desc: 'كأس السعودية والعالمية' }],
      paymentMethods: [{ name: 'USDT (TRC20)', desc: 'رسوم منخفضة وسرعة عالية' }, { name: 'STC Pay (عبر P2P)', desc: 'شراء الكريبتو بسهولة' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للسعودية',
      bestCodeBody: 'بالنسبة للاعبين السعوديين، التكتم هو الأهم. لا يفتح كود PLAY971 مكافأة 200% فحسب، بل يضمن أيضًا تصنيف حسابك للتعامل بخصوصية VIP. استمتع بإثارة المراهنة على الهلال أو النصر دون المساومة على خصوصيتك المالية.',
      articleContent: [
        { title: 'صعود المراهنات في المملكة', paragraphs: ['خلق استثمار المملكة في الرياضة قاعدة جماهيرية متحمسة. بينما المراهنة التقليدية غير متاحة محليًا، يتجه الشباب الملم بالتكنولوجيا إلى منصات الكريبتو مثل Stake للتفاعل مع فرقهم المفضلة. تضيف القدرة على المراهنة على الأبطال المحليين في الدوري السعودي طبقة جديدة من الإثارة لأيام المباريات.'] },
        { title: 'لماذا الكريبتو ضروري', paragraphs: ['استخدام البطاقات البنكية التقليدية للمقامرة محظور في المملكة. العملات المشفرة تحل هذه المشكلة من خلال العمل كجسر. تشتري USDT من بورصة محلية باستخدام STC Pay أو التحويل البنكي، ثم تودع ذلك USDT في Stake. هذا يبقي كشف حسابك البنكي الرئيسي نظيفًا وخاليًا من أي معاملات متعلقة بالمقامرة.'] }
      ],
      testimonials: [
        { name: 'سعود', location: 'الرياض', quote: 'أفضل الاحتمالات لمباريات الهلال.', rating: 5 },
        { name: 'محمد', location: 'جدة', quote: 'آمن وخاص للغاية.', rating: 5 },
        { name: 'فهد', location: 'الدمام', quote: 'ساعدني الدعم في إيداعي الأول.', rating: 5 },
        { name: 'عبدالله', location: 'الرياض', quote: 'أحب مكافآت VIP.', rating: 5 },
        { name: 'ياسر', location: 'الخبر', quote: 'تجربة هاتف رائعة.', rating: 4 }
      ]
    },
    'KW': {
      code: 'KW',
      name: 'الكويت',
      flag: '🇰🇼',
      introTitle: 'أفضل كود خصم ستيك للكويت',
      introBody: 'الكويت موطن لبعض أكبر لاعبي VIP في المنطقة. تلبي Stake احتياجات هذه الفئة الديموغرافية الراقية بحدود عالية وطاولات حصرية.',
      cryptoBenefits: ['حدود سحب غير محدودة', 'وصول لمضيف VIP', 'طاولات خاصة'],
      pros: ['صديقة لكبار المقامرين', 'وصول حصري لنادي بومباي', 'دفعات سريعة'],
      cons: ['خيارات مصرفية محلية محدودة', 'VPN ضروري'],
      popularSports: [{ name: 'كرة القدم', desc: 'الدوري الإنجليزي' }, { name: 'تنس', desc: 'جراند سلام' }],
      paymentMethods: [{ name: 'USDT', desc: 'مفضل للمبالغ الكبيرة' }, { name: 'Bitcoin', desc: 'مخزن آمن للقيمة' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للكويت',
      bestCodeBody: 'اللاعبون الكويتيون معروفون بالرهانات العالية. كود PLAY971 هو مفتاحك للمسار السريع لـ VIP. الإيداع بأكثر من 1000 دولار باستخدام هذا الكود يميز حسابك لتعيين مضيف VIP محتمل، مما يمنحك الوصول إلى حدود أعلى ومكافآت مخصصة غير متاحة للجمهور.',
      articleContent: [
        { title: 'ثقافة الخصوصية', paragraphs: ['في الكويت، الخصوصية رفاهية. غالبًا ما تتضمن ثقافة "الديوانية" مناقشة اتجاهات السوق والرياضة، وتتناسب مراهنات الكريبتو تمامًا مع نمط الحياة السري هذا. تقدم Stake بيئة متميزة وخاصة حيث يمكن للأفراد ذوي الملاءة المالية العالية لعب الباكارات أو البلاك جاك بحدود تصل إلى 500,000 دولار لكل يد.'] },
        { title: 'المصرفية والدفع', paragraphs: ['نظرًا لأن البنوك المحلية لا تعالج معاملات المقامرة، يعتمد اللاعبون الكويتيون بشكل كبير على أسواق الكريبتو P2P. شراء USDT عبر P2P آمن وموثوق ويضمن أن أموال اللعب الخاصة بك مفصولة تمامًا عن أعمالك أو معاملاتك المصرفية الشخصية.'] }
      ],
      testimonials: [
        { name: 'يوسف', location: 'مدينة الكويت', quote: 'طاولات نادي بومباي ممتازة.', rating: 5 },
        { name: 'حمد', location: 'السالمية', quote: 'دفعات فورية لأكثر من 50 ألف بدون مشاكل.', rating: 5 },
        { name: 'علي', location: 'حولي', quote: 'أفضل خدمة VIP في الخليج.', rating: 5 },
        { name: 'ناصر', location: 'الجهراء', quote: 'آمن وسري.', rating: 5 },
        { name: 'جابر', location: 'مدينة الكويت', quote: 'مجموعة رائعة من السلوتس.', rating: 4 }
      ]
    },
    'QA': {
      code: 'QA',
      name: 'قطر',
      flag: '🇶🇦',
      introTitle: 'أفضل كود خصم ستيك لقطر',
      introBody: 'بعد كأس العالم، أصبح الشغف بالرياضة في قطر أعلى من أي وقت مضى. تقدم Stake أشمل كتاب رياضي للجماهير القطرية.',
      cryptoBenefits: ['الوصول إلى الرياضات العالمية', 'معاملات عالية السرعة', 'الأمان'],
      pros: ['أسواق ضخمة لكرة القدم', 'هدايا VIP فاخرة', 'منصة آمنة'],
      cons: ['حجب صارم من مزودي الخدمة', 'لا إيداع مباشر بالريال القطري'],
      popularSports: [{ name: 'كرة القدم', desc: 'دوري نجوم قطر والدوريات الأوروبية' }, { name: 'سباق الخيل', desc: 'أحداث عالمية' }],
      paymentMethods: [{ name: 'USDT', desc: 'الطريقة الأساسية' }, { name: 'Ethereum', desc: 'مراهنة العقود الذكية' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل لقطر',
      bestCodeBody: 'اللاعبون القطريون يقدرون الجودة والسرعة. يضمن كود PLAY971 أقصى عرض ترحيبي متاح. استخدمه لمضاعفة إيداعك خلال بطولات كرة القدم الكبرى مثل دوري أبطال أوروبا أو كأس آسيا للحصول على أقصى قدر من الرافعة المالية.',
      articleContent: [
        { title: 'إرث كأس العالم', paragraphs: ['أشعلت استضافة كأس العالم 2022 شغفًا دائمًا بتحليلات كرة القدم والتوقعات في قطر. تغطي Stake كل مباراة في دوري نجوم قطر بأسواق عميقة، مما يسمح للسكان المحليين باستخدام معرفتهم بالفرق المحلية مثل السد والدحيل للعثور على رهانات ذات قيمة.'] },
        { title: 'تطور رقمي', paragraphs: ['تتمتع قطر بانتشار عالٍ للإنترنت وسكان ملمّين بالتكنولوجيا. يُنظر إلى مراهنات الكريبتو على أنها الطريقة الحديثة والمتطورة للمقامرة. واجهة Stake الأنيقة والتصميم الأول للهاتف المحمول يجذبان تمامًا المستخدم القطري الحديث الذي يريد المراهنة أثناء التنقل.'] }
      ],
      testimonials: [
        { name: 'جاسم', location: 'الدوحة', quote: 'أفضل الاحتمالات لمباريات دوري النجوم.', rating: 5 },
        { name: 'محمد', location: 'لوسيل', quote: 'واجهة تطبيق سهلة الاستخدام للغاية.', rating: 5 },
        { name: 'خليفة', location: 'الريان', quote: 'الإيداع عبر Binance P2P سهل.', rating: 5 },
        { name: 'عبدالله', location: 'الدوحة', quote: 'تنوع جيد في السلوتس.', rating: 4 },
        { name: 'حمد', location: 'الوكرة', quote: 'خدمة العملاء مهذبة للغاية.', rating: 5 }
      ]
    },
    'BH': {
      code: 'BH',
      name: 'البحرين',
      flag: '🇧🇭',
      introTitle: 'أفضل كود خصم ستيك للبحرين',
      introBody: 'بصفتها مركزًا ماليًا يتمتع بجو مريح، تتمتع البحرين بمعدل اعتماد عالٍ للكريبتو. Stake هي المنصة المفضلة للسكان المحليين والمغتربين على حد سواء.',
      cryptoBenefits: ['سهولة تحويل العملات الورقية', 'عروض خاصة للفورمولا 1', 'تحقق سريع من الهوية'],
      pros: ['بنوك صديقة للكريبتو', 'سرعات إنترنت جيدة', 'تركيز على F1'],
      cons: ['بعض المواقع محظورة', 'دعم محلي محدود'],
      popularSports: [{ name: 'فورمولا 1', desc: 'عروض سباق البحرين' }, { name: 'كرة القدم', desc: 'الدوري الإنجليزي' }],
      paymentMethods: [{ name: 'Rain.bh (كريبتو)', desc: 'بورصة محلية صديقة' }, { name: 'USDT', desc: 'قياسي' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للبحرين',
      bestCodeBody: 'مع استضافة البحرين لسباق F1، تقدم Stake (راعي Sauber) عروضًا ترويجية حصرية مذهلة لسباق الجائزة الكبرى في البحرين. يضمن استخدام كود PLAY971 أنك مؤهل لهذه العروض الخاصة بيوم السباق، بما في ذلك الاحتمالات المعززة والرهانات الخالية من المخاطر.',
      articleContent: [
        { title: 'جزيرة صديقة للكريبتو', paragraphs: ['تعد البحرين واحدة من أكثر الدول صداقة للكريبتو في الخليج، حيث تستضيف بورصات منظمة مثل Rain. هذا يجعل نقل الأموال من وإلى Stake أسهل من الدول المجاورة. يمكن للاعبين بسهولة تحويل الدينار البحريني إلى كريبتو والإيداع فورًا.'] },
        { title: 'مركز رياضة السيارات', paragraphs: ['شغف رياضة السيارات عميق هنا. أسواق مراهنات F1 العميقة في Stake هي عامل جذب رئيسي. أبعد من مجرد الفائز بالسباق، يمكنك المراهنة على أوقات اللفات، والمواجهات المباشرة بين السائقين، وترتيب الصانعين، مما يجعل كل عطلة نهاية أسبوع للسباق مثيرة.'] }
      ],
      testimonials: [
        { name: 'سلمان', location: 'المنامة', quote: 'أستخدم Rain للإيداع، يعمل بامتياز.', rating: 5 },
        { name: 'حسن', location: 'الرفاع', quote: 'أحب خيارات مراهنات F1.', rating: 5 },
        { name: 'علي', location: 'المحرق', quote: 'أسرع موقع كازينو في البحرين.', rating: 5 },
        { name: 'إبراهيم', location: 'المنامة', quote: 'طاولات بلاك جاك جيدة.', rating: 4 },
        { name: 'خالد', location: 'مدينة عيسى', quote: 'المكافآت حقيقية وعادلة.', rating: 5 }
      ]
    },
    'EG': {
      code: 'EG',
      name: 'مصر',
      flag: '🇪🇬',
      introTitle: 'أفضل كود خصم ستيك لمصر',
      introBody: 'احمِ رصيدك من التضخم من خلال اللعب بالكريبتو المرتبط بالدولار. Stake هو الخيار رقم 1 للمراهنين المصريين الباحثين عن الاستقرار.',
      cryptoBenefits: ['تحوط من التضخم', 'إيداعات بحد أدنى منخفض', 'فودافون كاش P2P'],
      pros: ['تحوط ضد الجنيه المصري', 'مجتمع ضخم', 'حاجز دخول منخفض'],
      cons: ['تفاوت سرعة الإنترنت', 'VPN إلزامي'],
      popularSports: [{ name: 'كرة القدم', desc: 'الدوري الإنجليزي (صلاح) والأهلي' }, { name: 'كرة اليد', desc: 'المنتخب الوطني' }],
      paymentMethods: [{ name: 'USDT', desc: 'دولار رقمي' }, { name: 'لايتكوين', desc: 'رسوم منخفضة للإيداعات الصغيرة' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل لمصر',
      bestCodeBody: 'بالنسبة للمصريين، رسوم المعاملات وقيمة العملة تهم. يمنحك كود PLAY971 رايك باك، مما يساعد في تغطية الرسوم الصغيرة المرتبطة بشراء الكريبتو. الأهم من ذلك، الاحتفاظ بأرباحك بـ USDT يحمي قوتك الشرائية ضد تقلب العملة المحلية.',
      articleContent: [
        { title: 'التحوط الاقتصادي', paragraphs: ['مع تقلب الجنيه المصري، يعد الاحتفاظ برصيد الألعاب الخاص بك بـ USDT (تيثر) على Stake خطوة مالية ذكية. إنه يحافظ على قوتك الشرائية أثناء اللعب. يستخدم العديد من المصريين Stake ليس فقط للمتعة، ولكن كوسيلة لتنمية محفظة مقومة بالدولار.'] },
        { title: 'بوابات الدفع', paragraphs: ['يستخدم معظم المصريين فودافون كاش لشراء USDT على Binance P2P. هذا خط أنابيب سلس وموثوق لتمويل حساب Stake الخاص بك دون لمس حساب بنكي تقليدي. إنه سريع وآمن ومفهوم على نطاق واسع من قبل الشباب المحلي.'] }
      ],
      testimonials: [
        { name: 'محمود', location: 'القاهرة', quote: 'الاحتفاظ برصيدي بـ USDT منقذ للحياة.', rating: 5 },
        { name: 'أحمد', location: 'الإسكندرية', quote: 'فودافون كاش P2P يعمل بشكل رائع.', rating: 5 },
        { name: 'مصطفى', location: 'الجيزة', quote: 'أفضل موقع لمباريات الأهلي.', rating: 5 },
        { name: 'كريم', location: 'القاهرة', quote: 'رسوم منخفضة مع لايتكوين.', rating: 4 },
        { name: 'عمر', location: 'المنصورة', quote: 'ساعدني الدعم في تعلم الكريبتو.', rating: 5 }
      ]
    },
    'LB': {
      code: 'LB',
      name: 'لبنان',
      flag: '🇱🇧',
      introTitle: 'أفضل كود خصم ستيك للبنان',
      introBody: 'في اقتصاد مدولر، الكريبتو هو النظام المصرفي الوحيد الموثوق. تقدم Stake منصة مستقرة للاعبين اللبنانيين للعب والفوز بقيمة حقيقية.',
      cryptoBenefits: ['حرية مالية', 'ألعاب مدولرة', 'وصول غير خاضع للرقابة'],
      pros: ['دفعات موثوقة', 'حركة بوكر عالية', 'ثقة المجتمع'],
      cons: ['استقرار الطاقة/الإنترنت', 'البنوك مقيدة'],
      popularSports: [{ name: 'كرة السلة', desc: 'الدوري المحلي و NBA' }, { name: 'كرة القدم', desc: 'الدوريات العالمية' }],
      paymentMethods: [{ name: 'USDT (TRC20)', desc: 'المعيار في لبنان' }, { name: 'Whish Money (P2P)', desc: 'تحويل محلي للكريبتو' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للبنان',
      bestCodeBody: 'يقدر اللاعبون اللبنانيون الموثوقية فوق كل شيء. لم تفوت Stake أي دفعة أبدًا. يمنحك استخدام PLAY971 ضمانًا إضافيًا لدعم مستوى الشريك والرايك باك الفوري للحفاظ على رصيد رقائقك صحيًا خلال جلسات البوكر الطويلة.',
      articleContent: [
        { title: 'الكريبتو ضروري', paragraphs: ['منذ الأزمة المصرفية، أصبح الكريبتو النظام المصرفي الفعلي. تعد Stake فعليًا الكازينو الوطني للبنان بسبب تكامل USDT السلس. إنها توفر وسيلة للوصول إلى الترفيه والربح المحتمل خارج النظام المالي المحلي المقيد.'] },
        { title: 'مشهد البوكر', paragraphs: ['لبنان لديه ثقافة بوكر قوية. طاولات Stake مليئة بالمحترفين اللبنانيين الذين يلعبون الألعاب النقدية والبطولات يوميًا. القدرة على اللعب بجهالة والصرف فورًا إلى محفظة باردة يجعلها غرفة البوكر الأكثر أمانًا للمطاحن اللبنانيين.'] }
      ],
      testimonials: [
        { name: 'فادي', location: 'بيروت', quote: 'المكان الوحيد الذي أثق به بأموالي.', rating: 5 },
        { name: 'شربل', location: 'جونيه', quote: 'بطولات البوكر ذات قيمة كبيرة.', rating: 5 },
        { name: 'إيلي', location: 'جبيل', quote: 'تحويلات USDT فورية.', rating: 5 },
        { name: 'رامي', location: 'طرابلس', quote: 'تطبيق جيد للمراهنة.', rating: 4 },
        { name: 'جورج', location: 'بيروت', quote: 'الرايك باك يغطي رسوم التحويل الخاصة بي.', rating: 5 }
      ]
    },
    'JO': {
      code: 'JO',
      name: 'الأردن',
      flag: '🇯🇴',
      introTitle: 'أفضل كود خصم ستيك للأردن',
      introBody: 'مركز تقني متنامي مع سكان شباب يتبنون مراهنات الكريبتو. تقدم Stake أفضل أسواق الرياضات الإلكترونية للاعبين الأردنيين.',
      cryptoBenefits: ['دعم تقني', 'مدفوعات آمنة', 'واجهة حديثة'],
      pros: ['بيئة آمنة', 'أسواق الرياضات الإلكترونية', 'دعم جيد للهاتف'],
      cons: ['قيود صارمة', 'يحتاج VPN'],
      popularSports: [{ name: 'كرة القدم', desc: 'الدوري الإسباني والإنجليزي' }, { name: 'الرياضات الإلكترونية', desc: 'Dota 2 و CS:GO' }],
      paymentMethods: [{ name: 'USDT', desc: 'أساسي' }, { name: 'إيثريوم', desc: 'ثانوي' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للأردن',
      bestCodeBody: 'يحب اللاعبون الأردنيون الجانب التقني في Stake. يفتح الكود ميزة "الخزنة"، مما يسمح بإدارة ذكية للرصيد، وهو ما يجذب المراهن الأردني المنضبط. كما يضمن حصولك على أفضل معدلات الرايك باك على مراهنات الرياضات الإلكترونية عالية الحجم.',
      articleContent: [
        { title: 'مركز تقني في المشرق', paragraphs: ['مع العديد من الشركات الناشئة التقنية في عمان، يفهم السكان البلوكتشين جيدًا. ميزات Stake المتقدمة مثل التحقق العادل بشكل مثبت تتردد صداها مع هذا الجمهور. إنهم يقدرون الشفافية والقدرة على التحقق من كل رمية نرد أو بطاقة تم توزيعها.'] },
        { title: 'هيمنة الرياضات الإلكترونية', paragraphs: ['الأردن رائدة إقليمية في الرياضات الإلكترونية. تقدم Stake أعمق الأسواق لـ CS:GO و League of Legends و Dota 2. سواء كانت المراهنة على The International أو بطولة محلية، لدى Stake الخطوط التي يبحث عنها اللاعبون الأردنيون.'] }
      ],
      testimonials: [
        { name: 'طارق', location: 'عمان', quote: 'نظام عادل بشكل مثبت شرعي.', rating: 5 },
        { name: 'يزن', location: 'إربد', quote: 'أفضل الاحتمالات لمباريات ريال مدريد.', rating: 5 },
        { name: 'ليث', location: 'الزرقاء', quote: 'مراهنات الرياضات الإلكترونية مستوى آخر.', rating: 5 },
        { name: 'عمر', location: 'عمان', quote: 'إيداعات سلسة.', rating: 4 },
        { name: 'أحمد', location: 'العقبة', quote: 'أحب لعبة بلينكو.', rating: 5 }
      ]
    },
    'MA': {
      code: 'MA',
      name: 'المغرب',
      flag: '🇲🇦',
      introTitle: 'أفضل كود خصم ستيك للمغرب',
      introBody: 'الجسر بين أوروبا وأفريقيا. يحب اللاعبون المغاربة الدعم الفرنسي وأسواق الرياضة الأوروبية الواسعة المتاحة على Stake.',
      cryptoBenefits: ['دعم فرنسي', 'أسواق أوروبية', 'رسوم منخفضة'],
      pros: ['منصة متعددة اللغات', 'تركيز على الدوري الفرنسي', 'ألعاب الورق'],
      cons: ['لوائح الكريبتو غير واضحة', 'وصول البورصة'],
      popularSports: [{ name: 'كرة القدم', desc: 'البطولة الوطنية والدوري الفرنسي' }, { name: 'كيك بوكسينغ', desc: 'Glory و UFC' }],
      paymentMethods: [{ name: 'Binance Pay', desc: 'شائع في المغرب' }, { name: 'لايتكوين', desc: 'تكلفة منخفضة' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل للمغرب',
      bestCodeBody: 'غالبًا ما يلعب المغاربة برصيد محدود. يقدم كود PLAY971 حدًا أدنى منخفضًا للإيداع للمكافأة، مما يجعله في متناول الجميع، وليس فقط كبار الشخصيات. يساعدك على تمديد دراهمك أكثر.',
      articleContent: [
        { title: 'أمة مجنونة بكرة القدم', paragraphs: ['بعد الأداء التاريخي في كأس العالم، انفجرت مراهنات كرة القدم في المغرب. تقدم Stake خطوطًا على البطولة الاحترافية المحلية بالإضافة إلى جميع الدوريات الأوروبية الكبرى مثل الدوري الفرنسي والدوري الإسباني، لتلبية الأذواق المحددة للجماهير المغربية.'] },
        { title: 'اللغة وإمكانية الوصول', paragraphs: ['تقدم Stake دعمًا كاملًا باللغتين الفرنسية والعربية، مما يجعلها مثالية للديموغرافية المغربية. المنصة بديهية، وفريق دعم العملاء يفهم الفروق الدقيقة المحلية، مما يوفر تجربة سلسة.'] }
      ],
      testimonials: [
        { name: 'مهدي', location: 'الدار البيضاء', quote: 'الدعم يتحدث الفرنسية بطلاقة.', rating: 5 },
        { name: 'يوسف', location: 'الرباط', quote: 'أفضل موقع لمراهنات الدوري الفرنسي.', rating: 5 },
        { name: 'حمزة', location: 'طنجة', quote: 'سحب سريع إلى Binance.', rating: 5 },
        { name: 'أمين', location: 'مراكش', quote: 'مكافآت جيدة.', rating: 4 },
        { name: 'زكريا', location: 'فاس', quote: 'موقع جدير بالثقة.', rating: 5 }
      ]
    },
    'OM': {
      code: 'OM',
      name: 'عمان',
      flag: '🇴🇲',
      introTitle: 'أفضل كود خصم ستيك لعمان',
      introBody: 'ألعاب سرية وعالية الجودة للاعب العماني المميز. توفر Stake الخصوصية والخدمة المتميزة المتوقعة.',
      cryptoBenefits: ['الخصوصية', 'الأمان', 'خدمة مميزة'],
      pros: ['هادئ وآمن', 'شعور متميز', 'احتمالات عالية'],
      cons: ['مجتمع صغير', 'توفر P2P'],
      popularSports: [{ name: 'كرة القدم', desc: 'كأس الخليج والدوري الإنجليزي' }, { name: 'كريكت', desc: 'دوريات T20' }],
      paymentMethods: [{ name: 'USDT', desc: 'قياسي' }, { name: 'XRP', desc: 'الأسرع' }],
      bestCodeTitle: 'لماذا PLAY971 هو الأفضل لعمان',
      bestCodeBody: 'يقدر اللاعبون العمانيون التكتم والخدمة المتميزة. يضمن كود PLAY971 إعداد حساب خاص وتتبع VIP يعطي الأولوية للأمان والحد الأدنى من التطفل، وهو مثالي لأولئك الذين يرغبون في اللعب دون متاعب.',
      articleContent: [
        { title: 'ألعاب خاصة', paragraphs: ['تميل عمان إلى أن تكون أكثر محافظة. تسمح معاملات الكريبتو السرية في Stake للاعبين بالاستمتاع بالترفيه دون وصمة عار اجتماعية. تضمن المنصة أن بياناتك مشفرة وأن معاملاتك المالية تظل شأنك الخاص.'] },
        { title: 'اهتمامات رياضية متنوعة', paragraphs: ['مع عدد كبير من السكان الوافدين والاهتمام المحلي، فإن مزيج أسواق الكريكت وكرة القدم يجعل Stake مثالية للديموغرافية العمانية. سواء كان الدوري الهندي الممتاز أو الدوري الإنجليزي الممتاز، تغطي Stake كل ذلك من خلال البث المباشر والمراهنة أثناء اللعب.'] }
      ],
      testimonials: [
        { name: 'سعيد', location: 'مسقط', quote: 'خاص وآمن للغاية.', rating: 5 },
        { name: 'محمد', location: 'صلالة', quote: 'احتمالات كريكت جيدة.', rating: 5 },
        { name: 'أحمد', location: 'صحار', quote: 'السحوبات تعمل في كل مرة.', rating: 5 },
        { name: 'علي', location: 'نزوى', quote: 'تصميم نظيف.', rating: 4 },
        { name: 'سالم', location: 'مسقط', quote: 'أفضل خيار في عمان.', rating: 5 }
      ]
    }
  }
};
