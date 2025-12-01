

export type Language = 'en' | 'ar';

export type PageView = 'home' | 'sports' | 'casino' | 'promo' | 'aviator' | 'poker' | 'news' | 'legal' | 'review' | 'quiz' | 'country' | 'plinko';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // index
}

export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: QuizQuestion[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number; // 1-5
}

export interface CountryDetail {
  code: string;
  name: string;
  flag: string;
  introTitle: string;
  introBody: string;
  cryptoBenefits: string[];
  pros: string[];
  cons: string[];
  popularSports: { name: string; desc: string }[];
  paymentMethods: { name: string; desc: string }[];
  bestCodeTitle: string; 
  bestCodeBody: string;  
  articleContent: { title: string; paragraphs: string[] }[];
  testimonials: Testimonial[];
}

export interface SeoConfig {
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    sports: string;
    casino: string;
    promo: string;
    aviator: string;
    poker: string;
    news: string;
    login: string;
    register: string;
    quiz: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    bonus: string;
  };
  home: {
    featuresTitle: string;
    feature1Title: string;
    feature1Body: string;
    feature2Title: string;
    feature2Body: string;
    feature3Title: string;
    feature3Body: string;
    arabTitle: string;
    arabSubtitle: string;
    arabBody1: string;
    arabBody2: string;
    vipTitle: string;
    vipSubtitle: string;
    vipBody: string;
    vipBenefit1: string;
    vipBenefit2: string;
    vipBenefit3: string;
    vipBenefit4: string;
    countriesTitle: string;
    countriesSubtitle: string;
    cryptoTitle: string;
    cryptoSubtitle: string;
  };
  promo: {
    title: string;
    subtitle: string;
    copy: string;
    codeLabel: string;
    claimed: string;
    stepTitle: string;
    step1: string;
    step2: string;
    step3: string;
    benefitsTitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    box1Title: string;
    box1Body: string;
    box2Title: string;
    box2Body: string;
    box3Title: string;
    box3Body: string;
    trustTitle: string;
    compareTitle: string;
    compareSubtitle: string;
    speedTitle: string;
    articleTitle: string;
  };
  aviator: {
    title: string;
    subtitle: string;
    bet: string;
    cashout: string;
    crashed: string;
    playing: string;
    demoBalance: string;
    descTitle: string;
    descBody: string;
    howToTitle: string;
    howToBody: string;
    manual: string;
    auto: string;
    autoCashOut: string;
    startAuto: string;
    stopAuto: string;
    activationReturn: string;
    demoBanner: string;
    statsTitle: string;
    mathTitle: string;
    mathBody: string;
    distLow: string;
    distMid: string;
    distHigh: string;
  };
  poker: {
    heroTitle: string;
    heroSubtitle: string;
    descTitle: string;
    descBody: string;
    holdemTitle: string;
    holdemBody: string;
    omahaTitle: string;
    omahaBody: string;
    tournamentsTitle: string;
    tournamentsBody: string;
    howToPlayTitle: string;
    handRankings: string;
    cryptoPokerTitle: string;
    cryptoPokerBody: string;
  };
  plinko: {
    title: string;
    subtitle: string;
    risk: string;
    rows: string;
    bet: string;
    play: string;
  };
  sports: {
    heroTitle: string;
    heroSubtitle: string;
    descTitle: string;
    descBody: string;
  };
  casino: {
    descTitle: string;
    descBody: string;
    liveTitle: string;
    liveBody: string;
    slotsTitle: string;
    slotsBody: string;
    providersTitle: string;
    providersBody: string;
  };
  news: {
    title: string;
    readMore: string;
    latestUpdates: string;
  };
  legal: {
    termsTitle: string;
    privacyTitle: string;
    cookieTitle: string;
  };
  review: {
    title: string;
    subtitle: string;
    verdict: string;
    pros: string;
    cons: string;
    toc: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    start: string;
    next: string;
    finish: string;
    score: string;
    playAgain: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    legal: string;
    disclaimer: string;
    rights: string;
    sitemap: string;
    stakeReview: string;
    cryptoAcademy: string;
  };
  common: {
    playNow: string;
    viewAll: string;
    popular: string;
    new: string;
    learnMore: string;
  };
  seo: {
    title: string;
    body: string;
    metaTitleHome: string;
    metaTitleSports: string;
    metaTitleCasino: string;
    metaTitleAviator: string;
    metaTitlePoker: string;
    metaTitlePromo: string;
    metaTitleNews: string;
    metaTitleReview: string;
    metaTitleQuiz: string;
  };
}