/* ============================================================
   APON NGO — app.js
   All content data (BN/EN) + rendering + interactions
   ============================================================ */

'use strict';

/* ── SVG Icons Library ── */
const IC = {
  mission:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/></svg>`,
  vision:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  values:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  education:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  women:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="6" r="4"/><path d="M12 10v6M9 14h6"/><path d="M9 20h6"/></svg>`,
  health:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  livelihood:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  child:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="5" r="3"/><path d="M6 22v-2a6 6 0 0 1 12 0v2"/><path d="M12 8v5"/></svg>`,
  environment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 8C8 10 5.9 16.17 3.82 19.82A2 2 0 0 0 5.5 22.5C10 22 14 19 17 15c1.36-1.59 2.29-3.49 2.57-5.5C20 6.5 17 2 12 2c-5 0-9 4-9 9"/></svg>`,
  volunteer:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  donate:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  partner:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  people:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  student:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  women2:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="8" r="4"/><path d="M12 12v4M10 18h4"/></svg>`,
  project:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  org:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  year:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mappin:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>`,
  mail:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  arrow:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  cal:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  zoom:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
};

/* ── Gallery Images ── */
const GALLERY_IMGS = [
  { src: 'public/assets/activity1.jpg', captionBn: 'শিক্ষা কার্যক্রম', captionEn: 'Education Program' },
  { src: 'public/assets/activity2.jpg', captionBn: 'স্বাস্থ্য সেবা শিবির',   captionEn: 'Health Camp' },
  { src: 'public/assets/activity3.jpg', captionBn: 'নারী ক্ষমতায়ন',         captionEn: 'Women Empowerment' },
  { src: 'public/assets/activity4.jpg', captionBn: 'জীবিকায়ন প্রশিক্ষণ',   captionEn: 'Livelihood Training' },
  { src: 'public/assets/activity5.jpg', captionBn: 'শিশু কল্যাণ',            captionEn: 'Child Welfare' },
  { src: 'public/assets/activity6.jpg', captionBn: 'কমিউনিটি কার্যক্রম',    captionEn: 'Community Program' },
];

/* ══════════════════════════════════════════════════════════════
   CONTENT DATA — Bengali & English
   ══════════════════════════════════════════════════════════════ */
const CONTENT = {

  bn: {
    nav: {
      home: 'হোম', about: 'আমাদের সম্পর্কে', programs: 'কার্যক্রম',
      impact: 'প্রভাব', gallery: 'গ্যালারি', news: 'সংবাদ',
      contact: 'যোগাযোগ', donate: 'দান করুন', langSwitch: 'EN',
    },

    hero: {
      slides: [
        { img: 'public/assets/banners/banner1.jpg',
          eyebrow: 'চাঁপাইনবাবগঞ্জ, বাংলাদেশ',
          title: 'মানুষের পাশে,\nসবসময়',
          sub: 'সুবিধাবঞ্চিত মানুষের জীবনমান উন্নয়নে আমরা প্রতিশ্রুতিবদ্ধ',
          btn1: 'আমাদের জানুন', btn1href: '#about',
          btn2: 'সহায়তা করুন', btn2href: '#contact' },
        { img: 'public/assets/banners/banner2.jpg',
          eyebrow: 'শিক্ষা কার্যক্রম',
          title: 'শিক্ষাই আলো,\nশিক্ষাই পথ',
          sub: 'প্রতিটি শিশুর স্বপ্ন পূরণে আমরা কাজ করছি নিরলসভাবে',
          btn1: 'কার্যক্রম দেখুন', btn1href: '#programs',
          btn2: 'স্বেচ্ছাসেবক হন', btn2href: '#involved' },
        { img: 'public/assets/banners/banner3.jpg',
          eyebrow: 'নারী ক্ষমতায়ন',
          title: 'স্বনির্ভর নারী,\nসুন্দর সমাজ',
          sub: 'নারীর ক্ষমতায়নের মাধ্যমে ন্যায়ভিত্তিক সমাজ গড়ার প্রত্যয়',
          btn1: 'কার্যক্রম দেখুন', btn1href: '#programs',
          btn2: 'যোগ দিন', btn2href: '#involved' },
        { img: 'public/assets/banners/banner4.jpg',
          eyebrow: 'একসাথে এগিয়ে যাই',
          title: 'একসাথে গড়ি\nসুন্দর আগামী',
          sub: 'সমাজের প্রতিটি স্তরে ইতিবাচক পরিবর্তন আনতে আমরা একতাবদ্ধ',
          btn1: 'গ্যালারি দেখুন', btn1href: '#gallery',
          btn2: 'দান করুন', btn2href: '#contact' },
      ],
    },

    about: {
      sectionLabel: 'আমাদের সম্পর্কে',
      title: 'আমরা কারা?',
      desc1: '"আপন" চাঁপাইনবাবগঞ্জ ভিত্তিক একটি অলাভজনক স্বেচ্ছাসেবী সংগঠন। ২০১০ সালে প্রতিষ্ঠিত এই সংগঠনটি সমাজের সুবিধাবঞ্চিত মানুষদের, বিশেষত নারী, শিশু ও প্রান্তিক জনগোষ্ঠীর জীবনমান উন্নয়নে নিরলসভাবে কাজ করে আসছে।',
      desc2: 'শিক্ষা, স্বাস্থ্য, নারী ক্ষমতায়ন ও জীবিকায়নের মাধ্যমে "আপন" একটি সমৃদ্ধ ও ন্যায়ভিত্তিক সমাজ গড়ার স্বপ্ন দেখে। আমাদের লক্ষ্য প্রতিটি মানুষকে তার নিজস্ব সম্ভাবনা উপলব্ধি করতে এবং সমাজে সম্মানজনকভাবে বাঁচতে সাহায্য করা।',
      readMore: 'কার্যক্রম জানুন',
      stats: [
        { num: 12500, sfx: '+', label: 'উপকারভোগী' },
        { num: 65,    sfx: '+', label: 'সফল প্রকল্প' },
        { num: 15,    sfx: '+', label: 'বছরের সেবা' },
        { num: 250,   sfx: '+', label: 'স্বেচ্ছাসেবক' },
      ],
    },

    mvv: {
      sectionLabel: 'আমাদের মূলনীতি',
      title: 'লক্ষ্য, দৃষ্টিভঙ্গি ও মূল্যবোধ',
      items: [
        { icon: 'mission', title: 'আমাদের লক্ষ্য',
          desc: 'চাঁপাইনবাবগঞ্জ জেলার সুবিধাবঞ্চিত মানুষদের জীবনমান উন্নয়নে শিক্ষা, স্বাস্থ্য ও অর্থনৈতিক সক্ষমতা বৃদ্ধির মাধ্যমে একটি সমতাভিত্তিক সমাজ গড়ে তোলা।' },
        { icon: 'vision', title: 'আমাদের দৃষ্টিভঙ্গি',
          desc: 'এমন একটি সমাজ যেখানে প্রতিটি মানুষ তার মৌলিক অধিকার ভোগ করে, নারী-পুরুষ সমান সুযোগ পায় এবং কোনো শিশু শিক্ষা ও পুষ্টি থেকে বঞ্চিত হয় না।' },
        { icon: 'values', title: 'আমাদের মূল্যবোধ',
          desc: 'স্বচ্ছতা, জবাবদিহিতা, সমতা, অংশগ্রহণমূলক উন্নয়ন এবং মানবিক মর্যাদার প্রতি সম্মান আমাদের কাজের মূল ভিত্তি।' },
      ],
    },

    programs: {
      sectionLabel: 'আমাদের কার্যক্রম',
      title: 'আমরা কীভাবে কাজ করি',
      subtitle: 'পাঁচটি মূল ক্ষেত্রে আমরা সমন্বিতভাবে কাজ করে সমাজে ইতিবাচক পরিবর্তন আনছি',
      items: [
        { icon: 'education', accent: false, title: 'শিক্ষা কার্যক্রম',
          desc: 'ঝরে পড়া শিক্ষার্থীদের পুনরায় শিক্ষায় ফেরানো, বৃত্তি প্রদান, লাইব্রেরি স্থাপন ও শিক্ষা উপকরণ সরবরাহের মাধ্যমে শিক্ষার মান উন্নয়নে কাজ করছি।' },
        { icon: 'women', accent: true, title: 'নারী ক্ষমতায়ন',
          desc: 'দক্ষতা উন্নয়ন প্রশিক্ষণ, ক্ষুদ্রঋণ, সেলাই ও হস্তশিল্প প্রশিক্ষণের মাধ্যমে নারীদের স্বনির্ভর করে গড়ে তোলা হচ্ছে।' },
        { icon: 'health', accent: false, title: 'স্বাস্থ্য সেবা',
          desc: 'বিনামূল্যে চিকিৎসা শিবির, মাতৃস্বাস্থ্য সেবা, পুষ্টি সচেতনতা ও স্বাস্থ্যবিধি শিক্ষার মাধ্যমে সুস্বাস্থ্য নিশ্চিত করা হচ্ছে।' },
        { icon: 'livelihood', accent: true, title: 'জীবিকায়ন উন্নয়ন',
          desc: 'বৃত্তিমূলক প্রশিক্ষণ, কৃষি সহায়তা ও উদ্যোক্তা উন্নয়নের মাধ্যমে পরিবারগুলোর আয় বৃদ্ধিতে সহায়তা করা হচ্ছে।' },
        { icon: 'child', accent: false, title: 'শিশু কল্যাণ',
          desc: 'শিশু পুষ্টি, শিশু শ্রম প্রতিরোধ, শিশু অধিকার সংরক্ষণ ও শিশুর মানসিক বিকাশে সহায়তামূলক কার্যক্রম পরিচালনা করা হচ্ছে।' },
        { icon: 'environment', accent: true, title: 'পরিবেশ সংরক্ষণ',
          desc: 'বৃক্ষরোপণ, জলবায়ু পরিবর্তন মোকাবিলা, পরিবেশ সচেতনতা ও টেকসই কৃষি পদ্ধতি বাস্তবায়নে কাজ করছি।' },
      ],
    },

    impact: {
      sectionLabel: 'আমাদের প্রভাব',
      title: 'সংখ্যায় আপনের অর্জন',
      subtitle: 'গত ১৫ বছরে আমাদের কার্যক্রম সারা জেলায় লক্ষণীয় পরিবর্তন এনেছে',
      stats: [
        { icon: 'people',   num: 12500, sfx: '+', label: 'সরাসরি উপকারভোগী' },
        { icon: 'student',  num: 3200,  sfx: '+', label: 'শিক্ষার্থী সহায়তা' },
        { icon: 'women2',   num: 850,   sfx: '+', label: 'নারী উদ্যোক্তা' },
        { icon: 'project',  num: 65,    sfx: '+', label: 'সফল প্রকল্প' },
        { icon: 'org',      num: 48,    sfx: '',  label: 'অংশীদার সংস্থা' },
        { icon: 'year',     num: 15,    sfx: '+', label: 'বছরের সেবা' },
      ],
    },

    gallery: {
      sectionLabel: 'গ্যালারি',
      title: 'আমাদের কার্যক্রমের ছবি',
      subtitle: 'মাঠ পর্যায়ে আমাদের কাজের কিছু মুহূর্ত',
    },

    news: {
      sectionLabel: 'সংবাদ ও আপডেট',
      title: 'সর্বশেষ খবর',
      subtitle: 'আমাদের সাম্প্রতিক কার্যক্রম ও উদ্যোগ সম্পর্কে জানুন',
      readMore: 'আরও পড়ুন',
      viewAll: 'সব সংবাদ',
      items: [
        { date: '১২ মার্চ ২০২৬', cat: 'শিক্ষা', img: 'public/assets/activity1.jpg',
          title: 'চাঁপাইনবাবগঞ্জে ২০০ শিক্ষার্থীকে বৃত্তি প্রদান',
          excerpt: 'আপন সংস্থার বার্ষিক বৃত্তি প্রদান অনুষ্ঠানে এ বছর মেধাবী ও দরিদ্র ২০০ জন শিক্ষার্থীকে বৃত্তি প্রদান করা হয়েছে।' },
        { date: '২৮ ফেব্রুয়ারি ২০২৬', cat: 'স্বাস্থ্য', img: 'public/assets/activity2.jpg',
          title: 'শিবগঞ্জে বিনামূল্যে চিকিৎসা শিবির সম্পন্ন',
          excerpt: 'শিবগঞ্জ উপজেলায় দুই দিনব্যাপী বিনামূল্যে চিকিৎসা শিবিরে ৫০০ রোগীকে সেবা প্রদান করা হয়েছে।' },
        { date: '১৫ ফেব্রুয়ারি ২০২৬', cat: 'নারী', img: 'public/assets/activity3.jpg',
          title: 'নারী উদ্যোক্তা প্রশিক্ষণ ব্যাচ শুরু',
          excerpt: '৫০ জন নারীকে হস্তশিল্প ও সেলাই প্রশিক্ষণ দিয়ে স্বনির্ভর করে গড়ে তোলার নতুন ব্যাচ শুরু হয়েছে।' },
      ],
    },

    involved: {
      sectionLabel: 'যোগ দিন',
      title: 'পরিবর্তনের অংশ হন',
      subtitle: 'আপনার ছোট একটি পদক্ষেপ অনেকের জীবন বদলে দিতে পারে',
      items: [
        { icon: 'volunteer', style: 'green', title: 'স্বেচ্ছাসেবক হন',
          desc: 'আপনার সময় ও দক্ষতা দিয়ে আমাদের কার্যক্রমে অংশ নিন। মাঠ পর্যায় থেকে অফিস পর্যন্ত স্বেচ্ছাসেবকদের প্রয়োজন আমাদের সর্বত্র।',
          btn: 'নিবন্ধন করুন', href: '#contact', btnCls: 'inv-btn-g' },
        { icon: 'donate', style: 'mustard', title: 'দান করুন',
          desc: 'আপনার দানের অর্থ সরাসরি সুবিধাবঞ্চিত মানুষদের কাছে পৌঁছায়। ১০০% স্বচ্ছতার সাথে প্রতিটি টাকার হিসাব রাখা হয়।',
          btn: 'এখনই দান করুন', href: '#contact', btnCls: 'inv-btn-m' },
        { icon: 'partner', style: 'outline', title: 'অংশীদার হন',
          desc: 'কর্পোরেট সামাজিক দায়বদ্ধতা (CSR) বা প্রতিষ্ঠানিক অংশীদারিত্বের মাধ্যমে আমাদের সাথে বৃহত্তর পরিবর্তনে অবদান রাখুন।',
          btn: 'আলোচনা করুন', href: '#contact', btnCls: 'inv-btn-o' },
      ],
    },

    contact: {
      sectionLabel: 'যোগাযোগ',
      title: 'আমাদের সাথে কথা বলুন',
      subtitle: 'যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য নির্দ্বিধায় যোগাযোগ করুন',
      info: [
        { icon: 'mappin', label: 'ঠিকানা', value: 'আপন সংস্থা, চাঁপাইনবাবগঞ্জ সদর\nচাঁপাইনবাবগঞ্জ — ৬৩০০', link: null },
        { icon: 'phone',  label: 'ফোন',   value: '+৮৮০ ১XXX-XXXXXX', link: 'tel:+8801000000000' },
        { icon: 'mail',   label: 'ইমেইল', value: 'info@aponngo.org',   link: 'mailto:info@aponngo.org' },
        { icon: 'clock',  label: 'কার্যালয়ের সময়', value: 'রবি – বৃহস্পতি: সকাল ৯টা – বিকাল ৫টা', link: null },
      ],
      form: {
        name: 'আপনার নাম', email: 'ইমেইল ঠিকানা',
        subject: 'বিষয়', message: 'আপনার বার্তা লিখুন...',
        submit: 'বার্তা পাঠান',
        success: '✓ আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।',
      },
    },

    footer: {
      tagline: 'মানুষের পাশে, সবসময়',
      about: 'চাঁপাইনবাবগঞ্জের মানুষের জীবনমান উন্নয়নে শিক্ষা, স্বাস্থ্য, নারী ক্ষমতায়ন ও জীবিকায়নে কাজ করে যাচ্ছে আপন।',
      quickLinks: 'দ্রুত লিঙ্ক',
      programsLabel: 'কার্যক্রম',
      contactLabel: 'যোগাযোগ তথ্য',
      copy: '© ২০২৬ আপন। সর্বস্বত্ব সংরক্ষিত।',
      newsletter: { title: 'নিউজলেটার', sub: 'সর্বশেষ সংবাদ পেতে সাবস্ক্রাইব করুন', placeholder: 'আপনার ইমেইল', btn: 'সাবস্ক্রাইব' },
      navLinks: [
        { label: 'হোম', href: '#home' }, { label: 'আমাদের সম্পর্কে', href: '#about' },
        { label: 'কার্যক্রম', href: '#programs' }, { label: 'গ্যালারি', href: '#gallery' },
        { label: 'সংবাদ', href: '#news' }, { label: 'যোগাযোগ', href: '#contact' },
      ],
      progLinks: ['শিক্ষা কার্যক্রম', 'নারী ক্ষমতায়ন', 'স্বাস্থ্য সেবা', 'জীবিকায়ন উন্নয়ন', 'শিশু কল্যাণ', 'পরিবেশ সংরক্ষণ'],
      contactInfo: [
        { icon: 'mappin', text: 'চাঁপাইনবাবগঞ্জ সদর — ৬৩০০' },
        { icon: 'phone',  text: '+৮৮০ ১XXX-XXXXXX' },
        { icon: 'mail',   text: 'info@aponngo.org' },
      ],
    },
  },

  /* ────────────────── ENGLISH ────────────────── */
  en: {
    nav: {
      home: 'Home', about: 'About Us', programs: 'Programs',
      impact: 'Impact', gallery: 'Gallery', news: 'News',
      contact: 'Contact', donate: 'Donate', langSwitch: 'বাং',
    },

    hero: {
      slides: [
        { img: 'public/assets/banners/banner1.jpg',
          eyebrow: 'Chapainawabganj, Bangladesh',
          title: 'Always by\nYour Side',
          sub: 'Committed to improving the lives of underprivileged people in Chapainawabganj',
          btn1: 'Learn About Us', btn1href: '#about',
          btn2: 'Support Us', btn2href: '#contact' },
        { img: 'public/assets/banners/banner2.jpg',
          eyebrow: 'Education Program',
          title: 'Education is Light,\nEducation is the Way',
          sub: 'We work tirelessly to fulfill the dreams of every child',
          btn1: 'Our Programs', btn1href: '#programs',
          btn2: 'Volunteer', btn2href: '#involved' },
        { img: 'public/assets/banners/banner3.jpg',
          eyebrow: 'Women Empowerment',
          title: 'Empowered Women,\nBetter Society',
          sub: 'Standing firm in our commitment to build a just society through empowering women',
          btn1: 'Our Programs', btn1href: '#programs',
          btn2: 'Join Us', btn2href: '#involved' },
        { img: 'public/assets/banners/banner4.jpg',
          eyebrow: 'Moving Forward Together',
          title: 'Together We Build\na Better Tomorrow',
          sub: 'United in bringing positive change at every level of society',
          btn1: 'View Gallery', btn1href: '#gallery',
          btn2: 'Donate Now', btn2href: '#contact' },
      ],
    },

    about: {
      sectionLabel: 'About Us',
      title: 'Who Are We?',
      desc1: '"Apon" is a non-profit voluntary organization based in Chapainawabganj. Founded in 2010, we have been tirelessly working to improve the livelihoods of underprivileged people in society — particularly women, children, and marginalized communities.',
      desc2: 'Through education, health, women\'s empowerment, and livelihood development, "Apon" envisions building a prosperous and just society. Our goal is to help every person realize their potential and live with dignity.',
      readMore: 'Explore Programs',
      stats: [
        { num: 12500, sfx: '+', label: 'Beneficiaries' },
        { num: 65,    sfx: '+', label: 'Projects Done' },
        { num: 15,    sfx: '+', label: 'Years of Service' },
        { num: 250,   sfx: '+', label: 'Volunteers' },
      ],
    },

    mvv: {
      sectionLabel: 'Our Principles',
      title: 'Mission, Vision & Values',
      items: [
        { icon: 'mission', title: 'Our Mission',
          desc: 'To build an equitable society by improving the livelihoods of disadvantaged people in Chapainawabganj through education, health, and economic empowerment.' },
        { icon: 'vision', title: 'Our Vision',
          desc: 'A society where every person enjoys their fundamental rights, men and women have equal opportunities, and no child is deprived of education and nutrition.' },
        { icon: 'values', title: 'Our Values',
          desc: 'Transparency, accountability, equality, participatory development, and respect for human dignity are the core foundations of our work.' },
      ],
    },

    programs: {
      sectionLabel: 'Our Programs',
      title: 'How We Work',
      subtitle: 'We bring positive change to society through coordinated work in six key areas',
      items: [
        { icon: 'education', accent: false, title: 'Education Program',
          desc: 'We work to improve educational quality through re-enrolling dropouts, providing scholarships, establishing libraries, and supplying educational materials.' },
        { icon: 'women', accent: true, title: 'Women Empowerment',
          desc: 'Women are being made self-reliant through skills development training, micro-credit, sewing and handicraft training.' },
        { icon: 'health', accent: false, title: 'Health Services',
          desc: 'Good health is being ensured through free medical camps, maternal health services, nutrition awareness, and health education.' },
        { icon: 'livelihood', accent: true, title: 'Livelihood Development',
          desc: 'Families are being helped to increase income through vocational training, agricultural support, and entrepreneurship development.' },
        { icon: 'child', accent: false, title: 'Child Welfare',
          desc: 'Programs are conducted to support child nutrition, prevent child labor, protect children\'s rights, and assist in mental development.' },
        { icon: 'environment', accent: true, title: 'Environmental Protection',
          desc: 'We work on tree plantation, climate change mitigation, environmental awareness, and implementing sustainable agricultural methods.' },
      ],
    },

    impact: {
      sectionLabel: 'Our Impact',
      title: "Apon's Achievements in Numbers",
      subtitle: 'Over the past 15 years, our programs have brought remarkable changes across the district',
      stats: [
        { icon: 'people',  num: 12500, sfx: '+', label: 'Direct Beneficiaries' },
        { icon: 'student', num: 3200,  sfx: '+', label: 'Students Supported' },
        { icon: 'women2',  num: 850,   sfx: '+', label: 'Women Entrepreneurs' },
        { icon: 'project', num: 65,    sfx: '+', label: 'Successful Projects' },
        { icon: 'org',     num: 48,    sfx: '',  label: 'Partner Organizations' },
        { icon: 'year',    num: 15,    sfx: '+', label: 'Years of Service' },
      ],
    },

    gallery: {
      sectionLabel: 'Gallery',
      title: 'Photos from Our Activities',
      subtitle: 'Moments from our work at the field level',
    },

    news: {
      sectionLabel: 'News & Updates',
      title: 'Latest News',
      subtitle: 'Learn about our recent activities and initiatives',
      readMore: 'Read More',
      viewAll: 'All News',
      items: [
        { date: 'March 12, 2026', cat: 'Education', img: 'public/assets/activity1.jpg',
          title: '200 Students Awarded Scholarships in Chapainawabganj',
          excerpt: 'At Apon\'s annual scholarship ceremony, 200 meritorious and needy students were awarded scholarships this year.' },
        { date: 'Feb 28, 2026', cat: 'Health', img: 'public/assets/activity2.jpg',
          title: 'Free Medical Camp Successfully Completed in Shibganj',
          excerpt: 'At a two-day free medical camp in Shibganj Upazila, 500 patients received comprehensive medical services.' },
        { date: 'Feb 15, 2026', cat: 'Women', img: 'public/assets/activity3.jpg',
          title: 'New Women Entrepreneur Training Batch Begins',
          excerpt: 'A new batch has started to train 50 women in handicrafts and sewing to help them become self-reliant.' },
      ],
    },

    involved: {
      sectionLabel: 'Get Involved',
      title: 'Be Part of the Change',
      subtitle: 'Your small step can change the lives of many',
      items: [
        { icon: 'volunteer', style: 'green', title: 'Volunteer',
          desc: 'Participate in our activities with your time and skills. We need volunteers everywhere, from fieldwork to office support.',
          btn: 'Register Now', href: '#contact', btnCls: 'inv-btn-g' },
        { icon: 'donate', style: 'mustard', title: 'Donate',
          desc: 'Your donation reaches underprivileged people directly. Every penny is accounted for with 100% transparency.',
          btn: 'Donate Now', href: '#contact', btnCls: 'inv-btn-m' },
        { icon: 'partner', style: 'outline', title: 'Partner With Us',
          desc: 'Contribute to greater change through Corporate Social Responsibility (CSR) or institutional partnerships.',
          btn: 'Let\'s Talk', href: '#contact', btnCls: 'inv-btn-o' },
      ],
    },

    contact: {
      sectionLabel: 'Contact',
      title: 'Talk to Us',
      subtitle: 'Feel free to reach out for any questions, suggestions, or collaboration',
      info: [
        { icon: 'mappin', label: 'Address', value: 'Apon NGO, Chapainawabganj Sadar\nChapainawabganj — 6300', link: null },
        { icon: 'phone',  label: 'Phone',   value: '+880 1XXX-XXXXXX', link: 'tel:+8801000000000' },
        { icon: 'mail',   label: 'Email',   value: 'info@aponngo.org',  link: 'mailto:info@aponngo.org' },
        { icon: 'clock',  label: 'Office Hours', value: 'Sun – Thu: 9:00 AM – 5:00 PM', link: null },
      ],
      form: {
        name: 'Your Name', email: 'Email Address',
        subject: 'Subject', message: 'Write your message...',
        submit: 'Send Message',
        success: '✓ Your message has been sent successfully! We\'ll get back to you soon.',
      },
    },

    footer: {
      tagline: 'Always by Your Side',
      about: 'Apon works in education, health, women\'s empowerment, and livelihood to improve lives in Chapainawabganj, Bangladesh.',
      quickLinks: 'Quick Links',
      programsLabel: 'Programs',
      contactLabel: 'Contact Info',
      copy: '© 2026 Apon. All Rights Reserved.',
      newsletter: { title: 'Newsletter', sub: 'Subscribe to receive our latest news', placeholder: 'Your email', btn: 'Subscribe' },
      navLinks: [
        { label: 'Home', href: '#home' }, { label: 'About Us', href: '#about' },
        { label: 'Programs', href: '#programs' }, { label: 'Gallery', href: '#gallery' },
        { label: 'News', href: '#news' }, { label: 'Contact', href: '#contact' },
      ],
      progLinks: ['Education Program', 'Women Empowerment', 'Health Services', 'Livelihood Development', 'Child Welfare', 'Environment'],
      contactInfo: [
        { icon: 'mappin', text: 'Chapainawabganj Sadar — 6300' },
        { icon: 'phone',  text: '+880 1XXX-XXXXXX' },
        { icon: 'mail',   text: 'info@aponngo.org' },
      ],
    },
  },
};

/* ══════════════════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════════════════ */
let currentLang  = localStorage.getItem('apon-lang') || 'bn';
let sliderIndex  = 0;
let sliderTimer  = null;
let lightboxIndex = 0;
let countersDone = false;

/* ── Helpers ── */
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}
function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════════════════════════════
   RENDER — Text & Dynamic Sections
   ══════════════════════════════════════════════════════════════ */
function render(lang) {
  const C = CONTENT[lang];
  currentLang = lang;

  /* html lang + body class */
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  document.body.classList.toggle('lang-bn', lang === 'bn');
  document.body.classList.toggle('lang-en', lang === 'en');

  /* data-key text nodes */
  $$('[data-key]').forEach(el => {
    const val = get(C, el.dataset.key);
    if (val !== undefined && typeof val === 'string') el.textContent = val;
  });

  /* data-placeholder-key */
  $$('[data-placeholder-key]').forEach(el => {
    const val = get(C, el.dataset.placeholderKey);
    if (val !== undefined) el.placeholder = val;
  });

  /* dynamic sections */
  buildSlider(C);
  buildMiniStats(C);
  buildMVV(C);
  buildPrograms(C);
  buildImpact(C);
  buildGallery(lang);
  buildNews(C);
  buildInvolved(C);
  buildContactInfo(C);
  buildFooter(C);
  buildFormPlaceholders(C);

  /* Re-attach reveal observers */
  observeReveal();
}

/* ── SLIDER ── */
function buildSlider(C) {
  const track = $('sliderTrack');
  const dots  = $('sliderDots');
  if (!track || !dots) return;

  const slides = C.hero.slides;
  track.innerHTML = slides.map((s, i) =>
    `<div class="slide" role="group" aria-label="Slide ${i+1}" aria-roledescription="slide">
      <img class="slide-img" src="${esc(s.img)}" alt="${esc(s.eyebrow)}" ${i===0 ? 'fetchpriority="high"' : 'loading="lazy"'} />
      <div class="slide-overlay"></div>
      <div class="slide-content container">
        <p class="slide-eyebrow">${esc(s.eyebrow)}</p>
        <h1 class="slide-title">${s.title.replace(/\n/g,'<br>')}</h1>
        <p class="slide-subtitle">${esc(s.sub)}</p>
        <div class="slide-btns">
          <a href="${esc(s.btn1href)}" class="slide-btn-p">${esc(s.btn1)}</a>
          <a href="${esc(s.btn2href)}" class="slide-btn-s">${esc(s.btn2)}</a>
        </div>
      </div>
    </div>`
  ).join('');

  dots.innerHTML = slides.map((_, i) =>
    `<button class="dot${i===0?' active':''}" aria-label="Go to slide ${i+1}" data-slide="${i}" role="tab" aria-selected="${i===0}"></button>`
  ).join('');

  dots.querySelectorAll('.dot').forEach(btn => {
    btn.addEventListener('click', () => goSlide(+btn.dataset.slide));
  });

  goSlide(0, false);
}

function goSlide(idx, animate = true) {
  const slides = CONTENT[currentLang].hero.slides;
  sliderIndex = (idx + slides.length) % slides.length;
  const track = $('sliderTrack');
  if (track) track.style.transform = `translateX(-${sliderIndex * 100}%)`;

  $$('#sliderDots .dot').forEach((d, i) => {
    d.classList.toggle('active', i === sliderIndex);
    d.setAttribute('aria-selected', i === sliderIndex);
  });
}

function startSlider() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => goSlide(sliderIndex + 1), 5000);
}

/* ── MINI STATS ── */
function buildMiniStats(C) {
  const el = $('miniStats');
  if (!el) return;
  el.innerHTML = C.about.stats.map(s => `
    <div class="mini-stat reveal">
      <div class="mini-stat-num">
        <span class="counter" data-target="${s.num}">${currentLang==='bn' ? toBn(s.num) : s.num.toLocaleString()}</span><sup>${esc(s.sfx)}</sup>
      </div>
      <div class="mini-stat-label">${esc(s.label)}</div>
    </div>`
  ).join('');
}

/* ── MVV ── */
function buildMVV(C) {
  const el = $('mvvGrid');
  if (!el) return;
  el.innerHTML = C.mvv.items.map(item => `
    <div class="mvv-card reveal">
      <div class="mvv-icon">${IC[item.icon] || ''}</div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </div>`
  ).join('');
}

/* ── PROGRAMS ── */
function buildPrograms(C) {
  const el = $('programsGrid');
  if (!el) return;
  el.innerHTML = C.programs.items.map((item, i) => `
    <div class="prog-card${item.accent ? ' accent' : ''} reveal" style="transition-delay:${(i%3)*.08}s">
      <div class="prog-icon">${IC[item.icon] || ''}</div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </div>`
  ).join('');
}

/* ── IMPACT ── */
function buildImpact(C) {
  const el = $('impactGrid');
  if (!el) return;
  el.innerHTML = C.impact.stats.map((s, i) => `
    <div class="impact-card reveal" style="transition-delay:${i*.07}s">
      <div class="impact-icon">${IC[s.icon] || ''}</div>
      <div class="impact-num">
        <span class="counter" data-target="${s.num}">${currentLang==='bn' ? toBn(s.num) : s.num.toLocaleString()}</span><span class="impact-num-suffix">${esc(s.sfx)}</span>
      </div>
      <div class="impact-label">${esc(s.label)}</div>
    </div>`
  ).join('');
  countersDone = false; /* reset so re-animation triggers on lang switch */
}

/* ── GALLERY ── */
function buildGallery(lang) {
  const el = $('galleryGrid');
  if (!el) return;
  el.innerHTML = GALLERY_IMGS.map((img, i) => `
    <div class="gallery-item reveal" data-index="${i}" role="button" tabindex="0" aria-label="${lang==='bn' ? img.captionBn : img.captionEn}">
      <img src="${esc(img.src)}" alt="${lang==='bn' ? esc(img.captionBn) : esc(img.captionEn)}" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-caption">${lang==='bn' ? esc(img.captionBn) : esc(img.captionEn)}</span>
      </div>
      <span class="gallery-zoom" aria-hidden="true">${IC.zoom}</span>
    </div>`
  ).join('');

  el.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(+item.dataset.index));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(+item.dataset.index); } });
  });
}

/* ── NEWS ── */
function buildNews(C) {
  const el = $('newsGrid');
  if (!el) return;
  el.innerHTML = C.news.items.map((item, i) => `
    <article class="news-card reveal" style="transition-delay:${i*.09}s">
      <div class="news-img-wrap">
        <img src="${esc(item.img)}" alt="${esc(item.title)}" loading="lazy" />
        <span class="news-cat">${esc(item.cat)}</span>
      </div>
      <div class="news-body">
        <div class="news-date">${IC.cal}<span>${esc(item.date)}</span></div>
        <h3>${esc(item.title)}</h3>
        <p class="news-excerpt">${esc(item.excerpt)}</p>
        <a href="#" class="news-read-more">${esc(C.news.readMore)} ${IC.arrow}</a>
      </div>
    </article>`
  ).join('');
}

/* ── GET INVOLVED ── */
function buildInvolved(C) {
  const el = $('involvedGrid');
  if (!el) return;
  el.innerHTML = C.involved.items.map((item, i) => `
    <div class="inv-card reveal" style="transition-delay:${i*.09}s">
      <div class="inv-icon ${item.style}">${IC[item.icon] || ''}</div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
      <a href="${esc(item.href)}" class="${esc(item.btnCls)}">${esc(item.btn)}</a>
    </div>`
  ).join('');
}

/* ── CONTACT INFO ── */
function buildContactInfo(C) {
  const el = $('contactInfoCol');
  if (!el) return;
  el.innerHTML = `
    ${C.contact.info.map(row => `
      <div class="ci-item">
        <div class="ci-icon">${IC[row.icon] || ''}</div>
        <div>
          <div class="ci-label">${esc(row.label)}</div>
          <div class="ci-value">${
            row.link
              ? `<a href="${esc(row.link)}">${esc(row.value)}</a>`
              : row.value.replace(/\n/g,'<br>')
          }</div>
        </div>
      </div>`
    ).join('')}`;

  /* Form labels & placeholders */
  const form = C.contact.form;
  const labels = { fName: form.name, fEmail: form.email, fSubject: form.subject, fMsg: form.message };
  Object.entries(labels).forEach(([id, text]) => {
    const lbl = document.querySelector(`label[for="${id}"]`);
    const inp = $(id);
    if (lbl) lbl.textContent = text;
    if (inp) inp.placeholder = text;
  });

  const submitBtn = document.querySelector('.btn-submit');
  if (submitBtn) submitBtn.textContent = form.submit;
  const successEl = $('formSuccess');
  if (successEl) successEl.textContent = form.success;
}

/* ── FORM PLACEHOLDERS ── */
function buildFormPlaceholders(C) {
  const nlInput = $('nlEmail');
  if (nlInput) nlInput.placeholder = C.footer.newsletter.placeholder;
  const nlBtn = document.querySelector('.nl-form button');
  if (nlBtn) nlBtn.textContent = C.footer.newsletter.btn;
}

/* ── FOOTER ── */
function buildFooter(C) {
  /* tagline & desc */
  const ftTagline = document.querySelector('.footer-tagline');
  if (ftTagline) ftTagline.textContent = C.footer.tagline;
  const ftDesc = document.querySelector('.footer-desc');
  if (ftDesc) ftDesc.textContent = C.footer.about;

  /* nav links */
  const navList = $('footerNavLinks');
  if (navList) navList.innerHTML = C.footer.navLinks.map(l =>
    `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`
  ).join('');

  /* program links */
  const progList = $('footerProgLinks');
  if (progList) progList.innerHTML = C.footer.progLinks.map(l =>
    `<li><a href="#programs">${esc(l)}</a></li>`
  ).join('');

  /* contact info */
  const ciEl = $('footerContactInfo');
  if (ciEl) ciEl.innerHTML = C.footer.contactInfo.map(r =>
    `<div class="fci-row">${IC[r.icon] || ''}<span>${esc(r.text)}</span></div>`
  ).join('');

  /* newsletter */
  const nlTitle = document.querySelector('.nl-title');
  if (nlTitle) nlTitle.textContent = C.footer.newsletter.title;
  const nlSub = document.querySelector('.nl-sub');
  if (nlSub) nlSub.textContent = C.footer.newsletter.sub;

  /* copyright */
  const copy = document.querySelector('.footer-bottom p');
  if (copy) copy.textContent = C.footer.copy;

  /* headings */
  const fh = { footerNavLinks: C.footer.quickLinks, footerProgLinks: C.footer.programsLabel, footerContactInfo: C.footer.contactLabel };
  ['footer-nav','footer-programs-col','footer-contact-col'].forEach((cls, i) => {
    const h4 = document.querySelector(`.${cls} h4`);
    const val = [C.footer.quickLinks, C.footer.programsLabel, C.footer.contactLabel][i];
    if (h4 && val) h4.textContent = val;
  });
}

/* ══════════════════════════════════════════════════════════════
   COUNTERS (IntersectionObserver)
   ══════════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = performance.now();
  const ease = t => t < .5 ? 2*t*t : -1+(4-2*t)*t;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const val = Math.floor(ease(progress) * target);
    el.textContent = currentLang === 'bn' ? toBn(val) : val.toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = currentLang === 'bn' ? toBn(target) : target.toLocaleString();
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const section = document.querySelector('.impact-section');
  if (!section) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersDone) {
      countersDone = true;
      $$('.counter').forEach(animateCounter);
    }
  }, { threshold: 0.3 });
  obs.observe(section);
}

/* ══════════════════════════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════════════════════════ */
function openLightbox(idx) {
  lightboxIndex = idx;
  const lb = $('lightbox');
  lb.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  updateLightbox();
  $('lbClose').focus();
}
function closeLightbox() {
  $('lightbox').setAttribute('hidden', '');
  document.body.style.overflow = '';
}
function updateLightbox() {
  const img  = GALLERY_IMGS[lightboxIndex];
  const lang = currentLang;
  const lbImg = $('lbImg');
  const lbCap = $('lbCaption');
  lbImg.src = img.src;
  lbImg.alt = lang === 'bn' ? img.captionBn : img.captionEn;
  lbCap.textContent = lang === 'bn' ? img.captionBn : img.captionEn;
}
function prevLbImg() {
  lightboxIndex = (lightboxIndex - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length;
  updateLightbox();
}
function nextLbImg() {
  lightboxIndex = (lightboxIndex + 1) % GALLERY_IMGS.length;
  updateLightbox();
}

/* ══════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════════ */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => { el.classList.remove('visible'); obs.observe(el); });
}

/* ══════════════════════════════════════════════════════════════
   ACTIVE NAV ON SCROLL
   ══════════════════════════════════════════════════════════════ */
function initActiveNav() {
  const sections = $$('section[id], main > section[id]');
  const navLinks = $$('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55%' });
  sections.forEach(s => obs.observe(s));
}

/* ══════════════════════════════════════════════════════════════
   UTILITY — Bengali numerals
   ══════════════════════════════════════════════════════════════ */
function toBn(n) {
  return String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}

/* ══════════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Language toggle ── */
  $('langToggle').addEventListener('click', () => {
    const next = currentLang === 'bn' ? 'en' : 'bn';
    localStorage.setItem('apon-lang', next);
    render(next);
    initCounters(); /* re-init after DOM rebuild */
  });

  /* ── Slider ── */
  $('sliderPrev').addEventListener('click', () => { goSlide(sliderIndex - 1); startSlider(); });
  $('sliderNext').addEventListener('click', () => { goSlide(sliderIndex + 1); startSlider(); });

  /* Pause on hover */
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearInterval(sliderTimer));
  hero.addEventListener('mouseleave', startSlider);

  /* Touch swipe on slider */
  let touchStartX = 0;
  hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { goSlide(sliderIndex + (dx < 0 ? 1 : -1)); startSlider(); }
  }, { passive: true });

  /* ── Hamburger / Mobile menu ── */
  const hamburger = $('hamburger');
  const mobileMenu = $('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  });
  $$('.mob-link').forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', true);
  }));

  /* ── Sticky header shadow ── */
  const header = $('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    $('backTop').classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Back to top ── */
  $('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Lightbox ── */
  $('lbClose').addEventListener('click', closeLightbox);
  $('lbPrev').addEventListener('click', prevLbImg);
  $('lbNext').addEventListener('click', nextLbImg);
  $('lightbox').addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if ($('lightbox').hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLbImg();
    if (e.key === 'ArrowRight') nextLbImg();
  });

  /* ── Contact form ── */
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = currentLang === 'bn' ? 'পাঠানো হচ্ছে…' : 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      $('formSuccess').removeAttribute('hidden');
      e.target.reset();
      btn.textContent = CONTENT[currentLang].contact.form.submit;
      btn.disabled = false;
      setTimeout(() => $('formSuccess').setAttribute('hidden', ''), 5000);
    }, 1200);
  });

  /* ── Newsletter form ── */
  $('nlForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const orig = btn.textContent;
    btn.textContent = '✓';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 2500);
  });

  /* ── Initial render ── */
  render(currentLang);
  startSlider();
  initCounters();
  initActiveNav();
});
