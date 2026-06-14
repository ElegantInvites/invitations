/**
 * ============================================================
 *  Adam & Farah — Wedding Invitation
 *  Central Configuration & Application Logic
 * ============================================================
 *  Edit the WEDDING_CONFIG object below to customize all content.
 * ============================================================
 */

const WEDDING_CONFIG = {
  /* ---------- Site & SEO ---------- */
  site: {
    title: 'Adam & Farah — Wedding Invitation',
    description: "You're invited to celebrate the wedding of Adam and Farah. Join us for a day of love, joy, and unforgettable memories.",
    keywords: 'wedding, invitation, Adam, Farah, زفاف, دعوة, wedding invitation',
    author: 'Adam & Farah',
    url: '', // Set your GitHub Pages URL e.g. https://username.github.io/adam-farah/
    locale: 'ar_EG',
    lang: 'ar',
    dir: 'rtl' // 'rtl' for Arabic, 'ltr' for English
  },

  /* ---------- Couple Information ---------- */
  couple: {
    groom: {
      name: 'Adam',
      nameAr: 'آدم',
      role: 'العريس',
      description: 'رجل طموح يؤمن بأن الحب الحقيقي يُبنى على الاحترام والصدق. يحلم ببناء أسرة جميلة مع شريك حياته.',
      image: 'assets/groom.jpg',
      imageFallback: 'assets/groom.svg',
      objectPosition: 'center 20%'
    },
    bride: {
      name: 'Farah',
      nameAr: 'فرح',
      role: 'العروس',
      description: 'امرأة رقيقة ذات قلب كبير، تجمع بين الأناقة والدفء. تؤمن بأن كل لحظة مع من تحب هي كنز.',
      image: 'assets/bride.jpg',
      imageFallback: 'assets/bride.svg',
      objectPosition: 'center 20%'
    },
    displayNames: 'Adam & Farah',
    displayNamesAr: 'آدم & فرح'
  },

  /* ---------- Wedding Date & Countdown ---------- */
  wedding: {
    // ISO format: YYYY-MM-DDTHH:mm:ss (local time)
    dateISO: '2026-09-15T18:00:00',
    dateDisplay: '15 سبتمبر 2026',
    dateDisplayEn: 'September 15, 2026',
    time: '6:00 مساءً',
    timeEn: '6:00 PM',
    timezone: 'Africa/Cairo'
  },

  /* ---------- Hero Section ---------- */
  hero: {
    groomName: 'Adam',
    brideName: 'Farah',
    familiesLine: 'Together With Their Families',
    inviteLine: 'We Invite You To Celebrate Our Wedding',
    image: 'assets/hero.jpg',
    imageFallback: 'assets/hero.svg'
  },

  /* ---------- Wedding Day Timeline ---------- */
  weddingTimeline: [
    { icon: 'fa-door-open', title: 'Guests Arrival', time: '5:00 PM', animation: 'fade-right' },
    { icon: 'fa-heart', title: 'Ceremony', time: '6:00 PM', animation: 'fade-up' },
    { icon: 'fa-utensils', title: 'Dinner', time: '7:00 PM', animation: 'fade-left' },
    { icon: 'fa-champagne-glasses', title: 'Celebration', time: '8:00 PM', animation: 'fade-up' }
  ],

  /* ---------- Our Story ---------- */
  ourStory: {
    image: 'assets/gallery2.jpg',
    imageFallback: 'assets/gallery2.svg',
    text: 'From the moment we met, our journey became a beautiful story of love, friendship and unforgettable memories.'
  },

  /* ---------- Section Titles ---------- */
  sections: {
    countdown: {
      label: 'العد التنازلي',
      title: 'ننتظر يومنا الكبير',
      days: 'يوم',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية'
    },
    weddingTimeline: {
      label: 'برنامج الحفل',
      title: 'جدول الزفاف'
    },
    couple: {
      label: 'العروسان',
      title: 'تعرفوا علينا'
    },
    story: {
      label: 'قصتنا',
      title: 'قصتنا'
    },
    details: {
      label: 'تفاصيل الحفل',
      title: 'معلومات المناسبة'
    },
    calendar: {
      title: 'احفظ الموعد',
      subtitle: 'أضف حفل زفافنا إلى تقويمك حتى لا تفوتك المناسبة',
      googleBtn: 'Google Calendar',
      icsBtn: 'تحميل ملف التقويم'
    },
    gallery: {
      label: 'معرض الصور',
      title: 'لحظات لا تُنسى',
      subtitle: 'لمحة رومانسية من قصة حبنا',
      overlays: [
        { icon: '📷', text: 'لحظة زفاف' },
        { icon: '💍', text: 'قصتنا' },
        { icon: '📷', text: 'لحظة زفاف' },
        { icon: '💍', text: 'قصتنا' }
      ]
    },
    map: {
      label: 'الموقع',
      title: 'كيف تصل إلينا'
    },
    rsvp: {
      label: 'تأكيد الحضور',
      title: 'RSVP',
      description: 'نرجو تأكيد حضوركم قبل 1 سبتمبر 2026 حتى نتمكن من استقبالكم بأفضل شكل.',
      guestName: 'الاسم الكامل',
      guestPhone: 'رقم الهاتف',
      guestCount: 'عدد الحضور',
      attendance: 'تأكيد الحضور',
      confirmBtn: 'سأحضر',
      declineBtn: 'لن أتمكن من الحضور',
      guestOptions: ['1', '2', '3', '4', '5+']
    },
    wishes: {
      label: 'تهاني الأحباء',
      title: 'رسائل المحبة'
    },
    faq: {
      label: 'أسئلة شائعة',
      title: 'FAQ'
    }
  },

  /* ---------- Event Details Cards ---------- */
  eventDetails: [
    {
      key: 'date',
      icon: 'fa-calendar-days',
      label: 'التاريخ',
      value: '15 سبتمبر 2026',
      animation: 'fade-right'
    },
    {
      key: 'time',
      icon: 'fa-clock',
      label: 'الوقت',
      value: '6:00 مساءً',
      animation: 'fade-left'
    },
    {
      key: 'venue',
      icon: 'fa-location-dot',
      label: 'المكان',
      value: 'قاعة Royal Palace — التجمع الخامس، القاهرة',
      animation: 'zoom-in'
    },
    {
      key: 'dress',
      icon: 'fa-person-dress',
      label: 'الزي',
      value: 'رسمي / Black Tie Optional',
      animation: 'fade-up'
    }
  ],

  /* ---------- Calendar Event (for .ics & Google) ---------- */
  calendarEvent: {
    title: 'Wedding: Adam & Farah',
    description: "You're invited to the wedding celebration of Adam and Farah.",
    location: 'Royal Palace Hall, Fifth Settlement, Cairo, Egypt',
    startISO: '2026-09-15T18:00:00',
    endISO: '2026-09-15T23:00:00',
    filename: 'adam-farah-wedding.ics'
  },

  /* ---------- Google Maps ---------- */
  map: {
    // Replace with your venue embed URL from Google Maps → Share → Embed
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.789!2d31.4!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMcKwMjQnMDAuMCJF!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg',
    address: 'قاعة Royal Palace — التجمع الخامس، القاهرة، مصر'
  },

  /* ---------- Gallery Images ---------- */
  gallery: [
    { src: 'assets/gallery1.jpg', fallback: 'assets/gallery1.svg', alt: 'Wedding moment 1' },
    { src: 'assets/gallery2.jpg', fallback: 'assets/gallery2.svg', alt: 'Engagement moment' },
    { src: 'assets/gallery3.jpg', fallback: 'assets/gallery3.svg', alt: 'Wedding moment 3' },
    { src: 'assets/gallery4.jpg', fallback: 'assets/gallery4.svg', alt: 'Wedding moment 4' }
  ],

  /* ---------- Testimonials / Wishes ---------- */
  testimonials: [
    {
      quote: 'فرحتكم تضيء القلوب. بارك الله لكما وبارك عليكما وجمع بينكما في خير.',
      author: 'عائلة محمد'
    },
    {
      quote: 'May your love story be as beautiful as the day you say "I do." Congratulations!',
      author: 'Sarah & James'
    },
    {
      quote: 'من أجمل الأزواج الذين نعرفهم. نتمنى لكما حياة مليئة بالسعادة والبركة.',
      author: 'أصدقاء الجامعة'
    },
    {
      quote: 'Wishing you a lifetime of love, laughter, and endless adventures together.',
      author: 'The Anderson Family'
    }
  ],

  /* ---------- FAQ Items ---------- */
  faq: [
    {
      question: 'هل يمكنني إحضار مرافق؟',
      answer: 'نعم، يرجى تحديد عدد المرافقين عند تأكيد الحضور عبر نموذج RSVP.'
    },
    {
      question: 'ما هو dress code المناسب؟',
      answer: 'الزي الرسمي (Formal / Black Tie Optional). نرجو اختيار ملابس أنيقة تناسب حفل زفاف.'
    },
    {
      question: 'هل يوجد موقف سيارات؟',
      answer: 'نعم، تتوفر مواقف مجانية لجميع الضيوف في موقع القاعة.'
    },
    {
      question: 'متى آخر موعد لتأكيد الحضور؟',
      answer: 'نرجو تأكيد حضوركم قبل 1 سبتمبر 2026 عبر نموذج RSVP أو WhatsApp.'
    },
    {
      question: 'Can I bring children?',
      answer: 'We love your little ones! Please include them in your guest count when confirming attendance.'
    }
  ],

  /* ---------- RSVP & WhatsApp ---------- */
  rsvp: {
    whatsappNumber: '201099137799', // Without + or spaces
    whatsappMessageIntro: '🌸 *Wedding RSVP — Adam & Farah*',
    attendanceYes: 'سأحضر ✅',
    attendanceNo: 'لن أتمكن من الحضور ❌'
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline: 'شكراً لكونكم جزءاً من قصة حبنا',
    copyright: '© 2026 Adam & Farah. Made with love.',
    social: [
      { icon: 'fab fa-instagram', url: 'https://instagram.com/', label: 'Instagram' },
      { icon: 'fab fa-facebook-f', url: 'https://facebook.com/', label: 'Facebook' },
      { icon: 'fab fa-whatsapp', url: 'https://wa.me/201099137799', label: 'WhatsApp' }
    ]
  },

  /* ---------- Music ---------- */
  music: {
    src: 'assets/music.mp3',
    enabled: true,
    hintText: 'Tap To Play Our Song ♫'
  },

  /* ---------- Preloader ---------- */
  preloader: {
    text: 'Adam & Farah',
    minDuration: 1800 // Minimum display time in ms
  },

  /* ---------- Cinematic Intro Scene ---------- */
  intro: {
    enabled: true,
    groomName: 'Adam',
    brideName: 'Farah',
    tagline: 'We invite you to celebrate our wedding',
    enterMusicBtn: 'Enter With Music',
    openInvitationBtn: 'Open Invitation',
    animationDuration: 7000
  }
};

/* ============================================================
   BRAND ATTRIBUTION — Elegant Invites
   ============================================================ */
const BRAND = {
  name: 'Elegant Invites',
  tagline: 'Digital Wedding Invitations',
  instagramUrl: 'https://www.instagram.com/elegantinvites2_/',
  ctaText: 'Create Your Invitation'
};

/* ============================================================
   TRANSLATIONS — Edit all page text here
   ============================================================ */
const STORAGE_KEYS = {
  lang: 'wedding-lang',
  theme: 'wedding-theme'
};

const translations = {
  ar: {
    site: {
      title: 'آدم & فرح — دعوة زفاف',
      description: 'ندعوكم لحضور حفل زفاف آدم وفرح. انضموا إلينا في يوم مليء بالحب والفرح وذكريات لا تُنسى.',
      keywords: 'زفاف, دعوة, آدم, فرح, wedding invitation',
      locale: 'ar_EG'
    },
    preloader: { text: 'آدم & فرح' },
    intro: {
      groomName: 'آدم',
      brideName: 'فرح',
      tagline: 'ندعوكم لحضور حفل زفافنا',
      enterMusicBtn: 'ادخل مع الموسيقى',
      openInvitationBtn: 'افتح الدعوة',
      designCredit: 'صُمم بواسطة Elegant Invites'
    },
    hero: {
      groomName: 'آدم',
      brideName: 'فرح',
      familiesLine: 'مع عائلاتهم الكريمة',
      inviteLine: 'ندعوكم لحضور حفل زفافنا'
    },
    wedding: {
      dateDisplay: '15 سبتمبر 2026',
      time: '6:00 مساءً'
    },
    sections: {
      countdown: {
        label: 'العد التنازلي',
        title: 'ننتظر يومنا الكبير',
        days: 'يوم',
        hours: 'ساعة',
        minutes: 'دقيقة',
        seconds: 'ثانية'
      },
      weddingTimeline: {
        label: 'برنامج الحفل',
        title: 'جدول الزفاف'
      },
      couple: { label: 'العروسان', title: 'تعرفوا علينا' },
      story: { label: 'قصتنا', title: 'قصتنا' },
      details: { label: 'تفاصيل الحفل', title: 'معلومات المناسبة' },
      calendar: {
        title: 'احفظ الموعد',
        subtitle: 'أضف حفل زفافنا إلى تقويمك حتى لا تفوتك المناسبة',
        googleBtn: 'Google Calendar',
        icsBtn: 'تحميل ملف التقويم'
      },
      gallery: {
        label: 'معرض الصور',
        title: 'لحظات لا تُنسى',
        subtitle: 'لمحة رومانسية من قصة حبنا',
        overlays: [
          { icon: '📷', text: 'لحظة زفاف' },
          { icon: '💍', text: 'قصتنا' },
          { icon: '📷', text: 'لحظة زفاف' },
          { icon: '💍', text: 'قصتنا' }
        ]
      },
      map: { label: 'الموقع', title: 'كيف تصل إلينا' },
      rsvp: {
        label: 'تأكيد الحضور',
        title: 'RSVP',
        description: 'نرجو تأكيد حضوركم قبل 1 سبتمبر 2026 حتى نتمكن من استقبالكم بأفضل شكل.',
        guestName: 'الاسم الكامل',
        guestPhone: 'رقم الهاتف',
        guestCount: 'عدد الحضور',
        attendance: 'تأكيد الحضور',
        confirmBtn: 'سأحضر',
        declineBtn: 'لن أتمكن من الحضور',
        guestOptions: ['1', '2', '3', '4', '5+']
      },
      wishes: { label: 'تهاني الأحباء', title: 'رسائل المحبة' },
      faq: { label: 'أسئلة شائعة', title: 'الأسئلة الشائعة' }
    },
    couple: {
      groom: {
        name: 'آدم',
        role: 'العريس',
        description: 'رجل طموح يؤمن بأن الحب الحقيقي يُبنى على الاحترام والصدق. يحلم ببناء أسرة جميلة مع شريك حياته.'
      },
      bride: {
        name: 'فرح',
        role: 'العروس',
        description: 'امرأة رقيقة ذات قلب كبير، تجمع بين الأناقة والدفء. تؤمن بأن كل لحظة مع من تحب هي كنز.'
      },
      displayNames: 'آدم & فرح'
    },
    eventDetails: [
      { key: 'date', icon: 'fa-calendar-days', label: 'التاريخ', value: '15 سبتمبر 2026', animation: 'fade-right' },
      { key: 'time', icon: 'fa-clock', label: 'الوقت', value: '6:00 مساءً', animation: 'fade-left' },
      { key: 'venue', icon: 'fa-location-dot', label: 'المكان', value: 'قاعة Royal Palace — التجمع الخامس، القاهرة', animation: 'zoom-in' },
      { key: 'dress', icon: 'fa-person-dress', label: 'الزي', value: 'رسمي / Black Tie Optional', animation: 'fade-up' }
    ],
    weddingTimeline: [
      { icon: 'fa-door-open', title: 'وصول الضيوف', time: '5:00 مساءً', animation: 'fade-right' },
      { icon: 'fa-heart', title: 'المراسم', time: '6:00 مساءً', animation: 'fade-up' },
      { icon: 'fa-utensils', title: 'العشاء', time: '7:00 مساءً', animation: 'fade-left' },
      { icon: 'fa-champagne-glasses', title: 'الاحتفال', time: '8:00 مساءً', animation: 'fade-up' }
    ],
    ourStory: {
      text: 'منذ اللحظة الأولى التي التقينا فيها، أصبحت رحلتنا قصة جميلة من الحب والصداقة وذكريات لا تُنسى.'
    },
    testimonials: [
      { quote: 'فرحتكم تضيء القلوب. بارك الله لكما وبارك عليكما وجمع بينكما في خير.', author: 'عائلة محمد' },
      { quote: 'من أجمل الأزواج الذين نعرفهم. نتمنى لكما حياة مليئة بالسعادة والبركة.', author: 'أصدقاء الجامعة' },
      { quote: 'قصة حبكم ملهمة. نتمنى لكما كل الخير في رحلتكم الجديدة.', author: 'أحمد ونور' },
      { quote: 'يوم زفافكم سيكون رائعاً بقدر ما أنتم رائعون. مبروك!', author: 'عائلة علي' }
    ],
    faq: [
      { question: 'هل يمكنني إحضار مرافق؟', answer: 'نعم، يرجى تحديد عدد المرافقين عند تأكيد الحضور عبر نموذج RSVP.' },
      { question: 'ما هو dress code المناسب؟', answer: 'الزي الرسمي (Formal / Black Tie Optional). نرجو اختيار ملابس أنيقة تناسب حفل زفاف.' },
      { question: 'هل يوجد موقف سيارات؟', answer: 'نعم، تتوفر مواقف مجانية لجميع الضيوف في موقع القاعة.' },
      { question: 'متى آخر موعد لتأكيد الحضور؟', answer: 'نرجو تأكيد حضوركم قبل 1 سبتمبر 2026 عبر نموذج RSVP أو WhatsApp.' },
      { question: 'هل يمكن إحضار الأطفال؟', answer: 'نحب أطفالكم! يرجى تضمينهم في عدد الحضور عند تأكيد الحضور.' }
    ],
    rsvp: {
      whatsappMessageIntro: '🌸 *تأكيد حضور — آدم & فرح*',
      attendanceYes: 'سأحضر ✅',
      attendanceNo: 'لن أتمكن من الحضور ❌'
    },
    footer: {
      tagline: 'شكراً لكونكم جزءاً من قصة حبنا',
      copyright: '© 2026 آدم & فرح. صُنع بحب.'
    },
    map: { address: 'قاعة Royal Palace — التجمع الخامس، القاهرة، مصر' },
    alerts: {
      nameRequired: 'يرجى إدخال الاسم الكامل',
      phoneRequired: 'يرجى إدخال رقم الهاتف'
    },
    whatsapp: {
      floatMessage: 'مرحباً، لدي استفسار بخصوص حفل زفاف آدم & فرح'
    },
    music: { ariaLabel: 'تشغيل الموسيقى', hintText: 'اضغط لتشغيل أغنيتنا ♫' }
  },
  en: {
    site: {
      title: 'Adam & Farah — Wedding Invitation',
      description: "You're invited to celebrate the wedding of Adam and Farah. Join us for a day of love, joy, and unforgettable memories.",
      keywords: 'wedding, invitation, Adam, Farah, wedding invitation',
      locale: 'en_US'
    },
    preloader: { text: 'Adam & Farah' },
    intro: {
      groomName: 'Adam',
      brideName: 'Farah',
      tagline: 'We invite you to celebrate our wedding',
      enterMusicBtn: 'Enter With Music',
      openInvitationBtn: 'Open Invitation',
      designCredit: 'Designed by Elegant Invites'
    },
    hero: {
      groomName: 'Adam',
      brideName: 'Farah',
      familiesLine: 'Together With Their Families',
      inviteLine: 'We Invite You To Celebrate Our Wedding'
    },
    wedding: {
      dateDisplay: 'September 15, 2026',
      time: '6:00 PM'
    },
    sections: {
      countdown: {
        label: 'Countdown',
        title: 'Until Our Big Day',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
      },
      weddingTimeline: {
        label: 'Schedule',
        title: 'Wedding Timeline'
      },
      couple: { label: 'The Couple', title: 'Meet Us' },
      story: { label: 'Our Story', title: 'Our Story' },
      details: { label: 'Event Details', title: 'Wedding Information' },
      calendar: {
        title: 'Save the Date',
        subtitle: 'Add our wedding to your calendar so you never miss the celebration',
        googleBtn: 'Google Calendar',
        icsBtn: 'Download Calendar File'
      },
      gallery: {
        label: 'Photo Gallery',
        title: 'Unforgettable Moments',
        subtitle: 'A romantic glimpse into our love story',
        overlays: [
          { icon: '📷', text: 'Wedding Moment' },
          { icon: '💍', text: 'Our Story' },
          { icon: '📷', text: 'Wedding Moment' },
          { icon: '💍', text: 'Our Story' }
        ]
      },
      map: { label: 'Location', title: 'How to Find Us' },
      rsvp: {
        label: 'RSVP',
        title: 'Confirm Your Attendance',
        description: 'Please confirm your attendance before September 1, 2026 so we can welcome you properly.',
        guestName: 'Full Name',
        guestPhone: 'Phone Number',
        guestCount: 'Number of Guests',
        attendance: 'Attendance',
        confirmBtn: 'I Will Attend',
        declineBtn: 'Cannot Attend',
        guestOptions: ['1', '2', '3', '4', '5+']
      },
      wishes: { label: 'Warm Wishes', title: 'Messages of Love' },
      faq: { label: 'FAQ', title: 'Frequently Asked Questions' }
    },
    couple: {
      groom: {
        name: 'Adam',
        role: 'The Groom',
        description: 'An ambitious man who believes true love is built on respect and honesty. He dreams of building a beautiful family with his partner.'
      },
      bride: {
        name: 'Farah',
        role: 'The Bride',
        description: 'A graceful woman with a big heart, combining elegance and warmth. She believes every moment with loved ones is a treasure.'
      },
      displayNames: 'Adam & Farah'
    },
    eventDetails: [
      { key: 'date', icon: 'fa-calendar-days', label: 'Date', value: 'September 15, 2026', animation: 'fade-right' },
      { key: 'time', icon: 'fa-clock', label: 'Time', value: '6:00 PM', animation: 'fade-left' },
      { key: 'venue', icon: 'fa-location-dot', label: 'Venue', value: 'Royal Palace Hall — Fifth Settlement, Cairo', animation: 'zoom-in' },
      { key: 'dress', icon: 'fa-person-dress', label: 'Dress Code', value: 'Formal / Black Tie Optional', animation: 'fade-up' }
    ],
    ourStory: {
      text: 'From the moment we met, our journey became a beautiful story of love, friendship and unforgettable memories.'
    },
    weddingTimeline: [
      { icon: 'fa-door-open', title: 'Guests Arrival', time: '5:00 PM', animation: 'fade-right' },
      { icon: 'fa-heart', title: 'Ceremony', time: '6:00 PM', animation: 'fade-up' },
      { icon: 'fa-utensils', title: 'Dinner', time: '7:00 PM', animation: 'fade-left' },
      { icon: 'fa-champagne-glasses', title: 'Celebration', time: '8:00 PM', animation: 'fade-up' }
    ],
    testimonials: [
      { quote: 'Your joy lights up hearts. May God bless you both and unite you in goodness.', author: 'The Mohamed Family' },
      { quote: 'May your love story be as beautiful as the day you say "I do." Congratulations!', author: 'Sarah & James' },
      { quote: 'One of the most wonderful couples we know. Wishing you a life full of happiness and blessings.', author: 'University Friends' },
      { quote: 'Wishing you a lifetime of love, laughter, and endless adventures together.', author: 'The Anderson Family' }
    ],
    faq: [
      { question: 'Can I bring a plus-one?', answer: 'Yes, please specify the number of guests when confirming via the RSVP form.' },
      { question: 'What is the dress code?', answer: 'Formal / Black Tie Optional. Please choose elegant attire suitable for a wedding celebration.' },
      { question: 'Is parking available?', answer: 'Yes, free parking is available for all guests at the venue.' },
      { question: 'What is the RSVP deadline?', answer: 'Please confirm your attendance before September 1, 2026 via RSVP or WhatsApp.' },
      { question: 'Can I bring children?', answer: 'We love your little ones! Please include them in your guest count when confirming attendance.' }
    ],
    rsvp: {
      whatsappMessageIntro: '🌸 *Wedding RSVP — Adam & Farah*',
      attendanceYes: 'I Will Attend ✅',
      attendanceNo: 'Cannot Attend ❌'
    },
    footer: {
      tagline: 'Thank you for being part of our love story',
      copyright: '© 2026 Adam & Farah. Made with love.'
    },
    map: { address: 'Royal Palace Hall — Fifth Settlement, Cairo, Egypt' },
    alerts: {
      nameRequired: 'Please enter your full name',
      phoneRequired: 'Please enter your phone number'
    },
    whatsapp: {
      floatMessage: "Hello, I have a question about Adam & Farah's wedding"
    },
    music: { ariaLabel: 'Toggle background music', hintText: 'Tap To Play Our Song ♫' }
  }
};

/* ============================================================
   APPLICATION — Do not edit below unless extending features
   ============================================================ */

(function () {
  'use strict';

  const config = WEDDING_CONFIG;
  let currentLang = 'ar';
  let currentTheme = 'light';
  let galleryImages = [];
  let galleryItemsData = [];
  const GALLERY_ANIMATIONS = ['fade-right', 'zoom-in', 'fade-up', 'fade-left'];
  const GALLERY_PARALLAX_SPEEDS = [0.035, 0.055, 0.045, 0.065];
  let currentLightboxIndex = 0;
  let countdownInterval = null;
  let introParticleFrame = null;
  let introStarted = false;
  let mainSiteRevealed = false;

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initPreferences();
    applySiteMeta();
    populateContent();
    initPreloader();
    initIntroScene();
    initCountdown();
    initMusicPlayer();
    initParallax();
    initGallery();
    initLightbox();
    initCalendar();
    initWhatsAppFloat();
    initImageFallbacks();
    initBrandAttribution();
    /* AOS initializes when main site is revealed */
  }

  /* ---------- Language & Theme Preferences ---------- */
  function getLangPack() {
    return translations[currentLang] || translations.ar;
  }

  function detectBrowserLanguage() {
    const browserLang = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('en')) return 'en';
    return 'ar';
  }

  function initPreferences() {
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    currentLang = savedLang || detectBrowserLanguage();
    currentTheme = savedTheme || 'light';

    applyTheme(currentTheme, false);
    applyLanguage(currentLang, false);
    initControlPanel();
  }

  function initControlPanel() {
    const themeBtn = document.getElementById('theme-toggle');
    const langBtns = document.querySelectorAll('.lang-btn');

    themeBtn?.addEventListener('click', () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== currentLang) setLanguage(lang);
      });
    });

    updateControlPanelUI();
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEYS.lang, lang);
    applyLanguage(lang);
  }

  function applyLanguage(lang, updateContent = true) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    config.site.lang = lang;
    config.site.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (updateContent) {
      applySiteMeta();
      populateContent();
      applyDirection();
      initWhatsAppFloat();
      renderFooterAttribution();
    }

    updateControlPanelUI();
  }

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    applyTheme(theme);
  }

  function applyTheme(theme, updateUI = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (updateUI) updateControlPanelUI();
  }

  function updateControlPanelUI() {
    const themeIcon = document.getElementById('theme-icon');
    const themeBtn = document.getElementById('theme-toggle');

    if (themeIcon) {
      themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /* ---------- SEO & Meta Tags ---------- */
  function applySiteMeta() {
    const t = getLangPack();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.site.title;

    setMeta('description', t.site.description);
    setMeta('keywords', t.site.keywords);
    setMeta('author', config.site.author);
    setMeta('og:title', t.site.title, 'property');
    setMeta('og:description', t.site.description, 'property');
    setMeta('og:image', config.hero.image, 'property');
    setMeta('og:url', config.site.url, 'property');
    setMeta('og:locale', t.site.locale, 'property');
    setMeta('twitter:title', t.site.title);
    setMeta('twitter:description', t.site.description);
    setMeta('twitter:image', config.hero.image);
  }

  function setMeta(name, content, attr = 'name') {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (el) el.setAttribute('content', content);
  }

  function applyDirection() {
    /* Bootstrap carousel RTL fix */
    const carousel = document.getElementById('wishes-carousel');
    if (carousel) {
      carousel.setAttribute('dir', currentLang === 'ar' ? 'ltr' : 'ltr');
    }
  }

  /* ---------- Populate All Content from Translations ---------- */
  function populateContent() {
    const t = getLangPack();

    /* Preloader */
    setText('preloader-text', t.preloader.text);

    /* Hero */
    setText('hero-groom-name', t.hero.groomName);
    setText('hero-bride-name', t.hero.brideName);
    setText('hero-families', t.hero.familiesLine);
    setText('hero-invite', t.hero.inviteLine);
    setText('hero-date', t.wedding.dateDisplay);
    setHeroBackground(config.hero.image);

    /* Countdown labels */
    const cd = t.sections.countdown;
    setText('countdown-label', cd.label);
    setText('countdown-title', cd.title);
    setText('cd-days-label', cd.days);
    setText('cd-hours-label', cd.hours);
    setText('cd-minutes-label', cd.minutes);
    setText('cd-seconds-label', cd.seconds);

    /* Wedding timeline */
    const wt = t.sections.weddingTimeline;
    setText('wedding-timeline-label', wt.label);
    setText('wedding-timeline-title', wt.title);
    renderWeddingTimeline();

    /* Couple section */
    setText('couple-label', t.sections.couple.label);
    setText('couple-title', t.sections.couple.title);
    setCoupleCard('bride', t.couple.bride, config.couple.bride);
    setCoupleCard('groom', t.couple.groom, config.couple.groom);

    /* Story */
    setText('story-label', t.sections.story.label);
    setText('story-title', t.sections.story.title);
    renderOurStory();

    /* Event details */
    setText('details-label', t.sections.details.label);
    setText('details-title', t.sections.details.title);
    renderEventDetails();

    /* Calendar section */
    setText('calendar-title', t.sections.calendar.title);
    setText('calendar-subtitle', t.sections.calendar.subtitle);
    setText('btn-google-text', t.sections.calendar.googleBtn);
    setText('btn-ics-text', t.sections.calendar.icsBtn);

    /* Gallery */
    setText('gallery-label', t.sections.gallery.label);
    setText('gallery-title', t.sections.gallery.title);
    setText('gallery-subtitle', t.sections.gallery.subtitle);
    renderGallery();

    /* Map */
    setText('map-label', t.sections.map.label);
    setText('map-title', t.sections.map.title);
    setText('map-address', t.map.address);
    const mapIframe = document.getElementById('map-iframe');
    if (mapIframe) mapIframe.src = config.map.embedUrl;

    /* Wishes */
    setText('wishes-label', t.sections.wishes.label);
    setText('wishes-title', t.sections.wishes.title);
    renderTestimonials();

    /* FAQ */
    setText('faq-label', t.sections.faq.label);
    setText('faq-title', t.sections.faq.title);
    renderFAQ();

    /* Footer */
    setText('footer-names', t.couple.displayNames);
    setText('footer-date', t.wedding.dateDisplay);
    setText('footer-tagline', t.footer.tagline);
    setText('footer-copy', t.footer.copyright);
    renderFooterSocial();
    renderFooterAttribution();

    /* Intro scene text */
    if (config.intro?.enabled) {
      setText('intro-groom-name', t.intro.groomName);
      setText('intro-bride-name', t.intro.brideName);
      setText('intro-tagline', t.intro.tagline);
      setText('btn-enter-music-text', t.intro.enterMusicBtn);
      setText('intro-open-text', t.intro.openInvitationBtn);
      setText('intro-attribution', t.intro.designCredit);
    }

    /* Music button aria */
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn) musicBtn.setAttribute('aria-label', t.music.ariaLabel);
    setText('music-hint', t.music.hintText);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
  }

  function setHeroBackground(src) {
    const parallax = document.getElementById('hero-parallax');
    if (parallax) {
      parallax.style.backgroundImage = `url('${resolveAssetPath(src)}')`;
    }
  }

  function resolveAssetPath(path) {
    if (!path || /^(https?:|data:|\/\/)/.test(path)) return path;
    const base = document.querySelector('base');
    if (base?.href) {
      try {
        return new URL(path, base.href).href;
      } catch (e) { /* fall through */ }
    }
    try {
      return new URL(path, window.location.href).href;
    } catch (e) {
      return path;
    }
  }

  function bindImageWithFallback(img) {
    if (!img || img.dataset.fallbackBound === 'true') return;
    img.dataset.fallbackBound = 'true';

    const markLoaded = () => {
      img.classList.remove('couple-image--loading');
      img.classList.add('couple-image--loaded');
      if (img.src.includes('.svg')) {
        img.classList.add('couple-image--fallback');
      }
    };

    img.addEventListener('load', markLoaded);
    img.addEventListener('error', function onImageError() {
      const fallback = this.dataset.fallback;
      if (fallback && this.dataset.fallbackUsed !== 'true') {
        this.dataset.fallbackUsed = 'true';
        this.src = resolveAssetPath(fallback);
        this.classList.add('couple-image--fallback');
        return;
      }
      this.classList.add('couple-image--error');
    });

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    }
  }

  function setCoupleCard(type, textData, imageData) {
    const img = document.getElementById(`${type}-image`);
    if (img) {
      const primary = resolveAssetPath(imageData.image);
      const fallback = resolveAssetPath(imageData.imageFallback || '');
      img.alt = textData.name;
      img.dataset.fallback = fallback;
      img.style.setProperty('--couple-img-position', imageData.objectPosition || 'center center');
      bindImageWithFallback(img);
      const currentPath = (img.getAttribute('src') || '').split('?')[0];
      const targetPath = imageData.image;
      if (currentPath !== targetPath && !img.src.endsWith(targetPath)) {
        img.dataset.fallbackUsed = 'false';
        img.classList.remove('couple-image--fallback', 'couple-image--error', 'couple-image--loaded');
        img.classList.add('couple-image--loading');
        img.src = primary;
      }
    }
    setText(`${type}-name`, textData.name);
    setText(`${type}-role`, textData.role);
    setText(`${type}-desc`, textData.description);
  }

  /* ---------- Image Fallback (jpg → svg) ---------- */
  function initImageFallbacks() {
    ['bride-image', 'groom-image'].forEach((id) => {
      bindImageWithFallback(document.getElementById(id));
    });

    document.querySelectorAll('img[data-fallback]:not([data-fallback-bound])').forEach((img) => {
      bindImageWithFallback(img);
    });

    /* Hero background fallback */
    const testImg = new Image();
    testImg.onerror = () => {
      if (config.hero.imageFallback) setHeroBackground(resolveAssetPath(config.hero.imageFallback));
    };
    testImg.src = resolveAssetPath(config.hero.image);
  }

  /* ---------- Wedding Day Timeline ---------- */
  function renderWeddingTimeline() {
    const grid = document.getElementById('wedding-timeline-grid');
    if (!grid) return;
    const t = getLangPack();
    const items = t.weddingTimeline || config.weddingTimeline;

    grid.innerHTML = `
      <div class="wedding-timeline__track" aria-hidden="true">
        <div class="wedding-timeline__line"></div>
      </div>
      <div class="wedding-timeline__items">
        ${items.map((item, i) => `
          <article class="wedding-timeline__card"
                   data-aos="${item.animation || 'fade-up'}"
                   data-aos-delay="${i * 120}"
                   data-aos-duration="700">
            <div class="wedding-timeline__dot" aria-hidden="true"></div>
            <div class="wedding-timeline__icon-wrap">
              <div class="wedding-timeline__icon"><i class="fas ${item.icon}"></i></div>
            </div>
            <div class="wedding-timeline__content">
              <h3 class="wedding-timeline__title">${escapeHtml(item.title)}</h3>
              <p class="wedding-timeline__time">${escapeHtml(item.time)}</p>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }

  /* ---------- Our Story Renderer ---------- */
  function renderOurStory() {
    const container = document.getElementById('our-story-content');
    if (!container) return;
    const t = getLangPack();
    const story = config.ourStory;
    const imageSrc = resolveAssetPath(story.image);
    const fallback = resolveAssetPath(story.imageFallback || '');

    container.innerHTML = `
      <div class="our-story__grid">
        <div class="our-story__image-col" data-aos="fade-right" data-aos-duration="800">
          <div class="our-story__image-wrap">
            <img class="our-story__image" src="${imageSrc}" alt="${escapeHtml(t.sections.story.title)}"
                 loading="lazy" decoding="async" data-fallback="${escapeHtml(fallback)}">
            <div class="our-story__image-overlay" aria-hidden="true"></div>
            <i class="fas fa-leaf our-story__floral our-story__floral--tl" aria-hidden="true"></i>
            <i class="fas fa-leaf our-story__floral our-story__floral--br" aria-hidden="true"></i>
          </div>
        </div>
        <div class="our-story__text-col" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
          <div class="our-story__text-card">
            <i class="fas fa-quote-right our-story__quote-icon" aria-hidden="true"></i>
            <p class="our-story__text">${escapeHtml(t.ourStory.text)}</p>
            <div class="our-story__signature">${escapeHtml(t.couple.displayNames)}</div>
          </div>
        </div>
      </div>
    `;

    const img = container.querySelector('.our-story__image');
    if (img) bindImageWithFallback(img);
  }

  /* ---------- Event Details Grid ---------- */
  function renderEventDetails() {
    const grid = document.getElementById('event-details-grid');
    if (!grid) return;
    const t = getLangPack();
    const animationDurations = [500, 550, 500, 600];

    grid.innerHTML = t.eventDetails.map((item, i) => `
      <div class="details-grid__item"
           data-aos="${item.animation || 'fade-up'}"
           data-aos-duration="${animationDurations[i] || 500}"
           data-aos-delay="${i * 100}">
        <article class="detail-card detail-card--${item.key || 'info'}">
          <div class="detail-card__accent" aria-hidden="true"></div>
          <div class="detail-icon-wrap">
            <div class="detail-icon"><i class="fas ${item.icon}"></i></div>
          </div>
          <p class="detail-label">${escapeHtml(item.label)}</p>
          <p class="detail-value">${escapeHtml(item.value)}</p>
        </article>
      </div>
    `).join('');

    if (typeof AOS !== 'undefined') {
      if (typeof AOS.refreshHard === 'function') {
        AOS.refreshHard();
      } else {
        AOS.refresh();
      }
    }
  }

  /* ---------- Gallery Renderer ---------- */
  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const t = getLangPack();
    galleryImages = [];
    galleryItemsData = [];

    grid.innerHTML = config.gallery.map((item, i) => {
      const overlay = t.sections.gallery.overlays[i] || t.sections.gallery.overlays[i % 2];
      const animation = GALLERY_ANIMATIONS[i] || 'fade-up';
      const src = resolveAssetPath(item.src);

      return `
        <article class="gallery-item gallery-item--loading"
                 data-src="${escapeHtml(src)}"
                 data-alt="${escapeHtml(item.alt)}"
                 data-parallax-speed="${GALLERY_PARALLAX_SPEEDS[i] || 0.05}"
                 data-aos="${animation}"
                 data-aos-duration="550"
                 data-aos-delay="${i * 150}"
                 role="button"
                 tabindex="0"
                 aria-label="${escapeHtml(item.alt)}">
          <div class="gallery-item__frame">
            <span class="gallery-item__corner gallery-item__corner--tl" aria-hidden="true"></span>
            <span class="gallery-item__corner gallery-item__corner--br" aria-hidden="true"></span>
            <img class="gallery-item__img" src="${src}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">
            <div class="gallery-item__overlay">
              <div class="gallery-item__overlay-content">
                <span class="gallery-item__overlay-icon">${overlay.icon}</span>
                <span class="gallery-item__overlay-text">${escapeHtml(overlay.text)}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('.gallery-item').forEach((card) => {
      const img = card.querySelector('.gallery-item__img');
      if (!img) return;

      const reveal = () => {
        card.classList.remove('gallery-item--loading');
        card.classList.add('gallery-item--loaded');
        refreshGalleryState();
      };

      const hide = () => {
        card.remove();
        refreshGalleryState();
      };

      if (img.complete && img.naturalWidth > 0) {
        reveal();
        return;
      }

      img.addEventListener('load', reveal, { once: true });
      img.addEventListener('error', hide, { once: true });
    });

    refreshGalleryState();

    if (typeof AOS !== 'undefined') {
      requestAnimationFrame(() => {
        if (typeof AOS.refreshHard === 'function') {
          AOS.refreshHard();
        } else {
          AOS.refresh();
        }
      });
    }
  }

  function refreshGalleryState() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const loadedItems = [...grid.querySelectorAll('.gallery-item:not(.gallery-item--loading)')];
    const allItems = [...grid.querySelectorAll('.gallery-item')];
    const layoutCount = loadedItems.length || allItems.length;

    galleryImages = [];
    galleryItemsData = [];

    loadedItems.forEach((item, index) => {
      item.dataset.index = String(index);
      galleryImages.push(item.dataset.src);
      galleryItemsData.push({ src: item.dataset.src, alt: item.dataset.alt });
    });

    grid.className = 'gallery-masonry';
    if (layoutCount > 0) {
      grid.classList.add(`gallery-masonry--count-${layoutCount}`);
    }
  }

  /* ---------- Testimonials Carousel ---------- */
  function renderTestimonials() {
    const slides = document.getElementById('wishes-slides');
    const indicators = document.getElementById('wishes-indicators');
    if (!slides || !indicators) return;
    const t = getLangPack();

    slides.innerHTML = t.testimonials.map((item, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="wish-slide">
          <p class="wish-quote">
            <i class="fas fa-quote-right"></i>
            ${escapeHtml(item.quote)}
          </p>
          <p class="wish-author">— ${escapeHtml(item.author)}</p>
        </div>
      </div>
    `).join('');

    indicators.innerHTML = t.testimonials.map((_, i) => `
      <button type="button" data-bs-target="#wishes-carousel" data-bs-slide-to="${i}"
        ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>
    `).join('');
  }

  /* ---------- FAQ Accordion ---------- */
  function renderFAQ() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;
    const t = getLangPack();

    accordion.innerHTML = t.faq.map((item, i) => `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${i !== 0 ? 'collapsed' : ''}" type="button"
            data-bs-toggle="collapse" data-bs-target="#faq-${i}"
            aria-expanded="${i === 0}" aria-controls="faq-${i}">
            ${escapeHtml(item.question)}
          </button>
        </h2>
        <div id="faq-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}"
          data-bs-parent="#faq-accordion">
          <div class="accordion-body">${escapeHtml(item.answer)}</div>
        </div>
      </div>
    `).join('');
  }

  /* ---------- Footer Social Links ---------- */
  function renderFooterSocial() {
    const container = document.getElementById('footer-social');
    if (!container) return;

    container.innerHTML = config.footer.social.map((s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.label)}">
        <i class="${s.icon}"></i>
      </a>
    `).join('');
  }

  /* ---------- Elegant Invites Attribution ---------- */
  function renderFooterAttribution() {
    const container = document.getElementById('footer-attribution');
    if (!container) return;

    container.innerHTML = `
      <div class="footer-attribution-inner">
        <a href="${BRAND.instagramUrl}" class="footer-attribution-brand" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(BRAND.name)}
        </a>
        <a href="${BRAND.instagramUrl}" class="footer-attribution-icon" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(BRAND.name)} on Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p class="footer-attribution-tagline">${escapeHtml(BRAND.tagline)}</p>
      <a href="${BRAND.instagramUrl}" class="footer-cta-btn" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
        <span>${escapeHtml(BRAND.ctaText)}</span>
      </a>
    `;
  }

  function initBrandAttribution() {
    const instagramBtn = document.getElementById('instagram-float');
    if (instagramBtn) {
      instagramBtn.href = BRAND.instagramUrl;
      instagramBtn.setAttribute('aria-label', `${BRAND.name} on Instagram`);
    }
    renderFooterAttribution();
  }

  /* ---------- Preloader ---------- */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) {
      showIntroScene();
      return;
    }

    const hide = () => {
      preloader.classList.add('hidden');
      preloader.setAttribute('aria-hidden', 'true');
      showIntroScene();
    };

    window.addEventListener('load', () => {
      setTimeout(hide, config.preloader.minDuration);
    });

    setTimeout(hide, config.preloader.minDuration + 500);
    setTimeout(showIntroScene, config.preloader.minDuration + 2500);
  }

  /* ---------- Cinematic Intro Scene ---------- */
  function initIntroScene() {
    if (!config.intro?.enabled) {
      enterMainSite(false);
      return;
    }

    const enterBtn = document.getElementById('btn-enter-music');
    const openBtn = document.getElementById('btn-open-invitation');

    enterBtn?.addEventListener('click', startIntroExperience);
    openBtn?.addEventListener('click', () => enterMainSite(true));

    initIntroParticles();
    createIntroSparkles();
  }

  function showIntroScene() {
    if (!config.intro?.enabled || mainSiteRevealed) return;

    const intro = document.getElementById('intro-scene');
    if (!intro) return;

    intro.classList.add('intro-scene--visible', 'intro-scene--idle');
    document.body.classList.add('intro-active');
  }

  function startIntroExperience() {
    if (introStarted) return;
    introStarted = true;

    const intro = document.getElementById('intro-scene');
    const enterBtn = document.getElementById('btn-enter-music');
    const audio = document.getElementById('bg-music');

    enterBtn?.classList.add('btn-enter-music--hidden');

    /* Start music on user interaction */
    if (config.music.enabled && audio) {
      audio.src = config.music.src;
      audio.play().then(() => {
        setMusicPlayingState(true);
      }).catch(() => { /* silent fail */ });
    }

    intro?.classList.remove('intro-scene--idle');
    intro?.classList.add('intro-scene--playing');

    const duration = config.intro.animationDuration || 7000;

    setTimeout(() => {
      intro?.classList.add('intro-scene--ready');
      intro?.classList.remove('intro-scene--playing');
    }, duration);
  }

  function enterMainSite(fromIntro) {
    if (mainSiteRevealed) return;
    mainSiteRevealed = true;

    const intro = document.getElementById('intro-scene');
    const siteWrapper = document.getElementById('site-wrapper');
    const exitDelay = fromIntro ? 1400 : 0;

    intro?.classList.add('intro-scene--exit');
    intro?.classList.remove('intro-scene--visible', 'intro-scene--ready', 'intro-scene--playing', 'intro-scene--idle');

    if (introParticleFrame) {
      cancelAnimationFrame(introParticleFrame);
    }

    setTimeout(() => {
      document.body.classList.remove('intro-active');
      intro?.remove();

      if (siteWrapper) {
        siteWrapper.classList.remove('site-wrapper--hidden');
        siteWrapper.classList.add('site-wrapper--visible');
        siteWrapper.setAttribute('aria-hidden', 'false');
      }

      initAOS();
      if (typeof AOS !== 'undefined') AOS.refresh();
      initHeroReveal();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, exitDelay);
  }

  function initHeroReveal() {
    const hero = document.getElementById('hero');
    const content = hero?.querySelector('.hero-content');
    if (!hero) return;

    const reveal = () => {
      hero.classList.add('hero-section--revealed');
      content?.classList.add('hero-content--visible');
    };

    requestAnimationFrame(reveal);
    setTimeout(reveal, 100);
  }

  /* Canvas floating particles for intro background */
  function initIntroParticles() {
    const canvas = document.getElementById('intro-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = 0;
    let height = 0;
    let intensity = 1;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        pink: Math.random() > 0.4
      };
    }

    function initParticles() {
      const count = Math.min(80, Math.floor(width / 12));
      particles = Array.from({ length: count }, createParticle);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const activeCount = Math.floor(particles.length * intensity);

      for (let i = 0; i < activeCount; i++) {
        const p = particles[i];
        p.y -= p.speedY * intensity;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.pink
          ? `rgba(216, 167, 177, ${p.opacity})`
          : `rgba(255, 255, 255, ${p.opacity * 0.8})`;
        ctx.fill();
      }

      if (!mainSiteRevealed) {
        introParticleFrame = requestAnimationFrame(draw);
      }
    }

    resize();
    initParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    /* Increase particle intensity when intro plays */
    document.getElementById('btn-enter-music')?.addEventListener('click', () => {
      let step = 0;
      const boost = setInterval(() => {
        intensity = Math.min(2.5, intensity + 0.15);
        step++;
        if (step > 20) clearInterval(boost);
      }, 200);
    });
  }

  /* Extra DOM sparkles for romantic effect */
  function createIntroSparkles() {
    const container = document.getElementById('intro-sparkles');
    if (!container) return;

    for (let i = 0; i < 24; i++) {
      const sparkle = document.createElement('span');
      sparkle.className = 'intro-sparkle-dot';
      sparkle.style.cssText = `
        position:absolute;
        width:${Math.random() * 4 + 2}px;
        height:${Math.random() * 4 + 2}px;
        background:${Math.random() > 0.5 ? 'rgba(216,167,177,0.8)' : 'rgba(255,255,255,0.9)'};
        border-radius:50%;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation: sparkleDrift ${4 + Math.random() * 4}s linear infinite;
        animation-delay: ${Math.random() * 4}s;
        box-shadow: 0 0 6px rgba(216,167,177,0.5);
      `;
      container.appendChild(sparkle);
    }
  }

  function setMusicPlayingState(playing) {
    const btn = document.getElementById('music-toggle');
    const icon = document.getElementById('music-icon');
    const hint = document.getElementById('music-hint');
    if (!btn) return;

    if (playing) {
      btn.classList.add('playing');
      if (icon) icon.className = 'fas fa-pause';
      hint?.classList.add('music-hint--hidden');
    } else {
      btn.classList.remove('playing');
      if (icon) icon.className = 'fas fa-music';
    }
  }

  /* ---------- Countdown Timer ---------- */
  function initCountdown() {
    const weddingDate = new Date(config.wedding.dateISO).getTime();

    function updateCountdown() {
      const now = Date.now();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setCountdownValues(0, 0, 0, 0);
        if (countdownInterval) clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdownValues(days, hours, minutes, seconds);
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  function setCountdownValues(days, hours, minutes, seconds) {
    setText('cd-days', pad(days));
    setText('cd-hours', pad(hours));
    setText('cd-minutes', pad(minutes));
    setText('cd-seconds', pad(seconds));
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  /* ---------- Music Player ---------- */
  function initMusicPlayer() {
    if (!config.music.enabled) return;

    const btn = document.getElementById('music-toggle');
    const audio = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (!btn || !audio) return;

    audio.src = config.music.src;

    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().then(() => {
          setMusicPlayingState(true);
        }).catch(() => { /* Autoplay blocked */ });
      } else {
        audio.pause();
        setMusicPlayingState(false);
      }
    });
  }

  /* ---------- Hero Parallax Effect ---------- */
  function initParallax() {
    const parallax = document.getElementById('hero-parallax');
    if (!parallax || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
          if (scrolled < heroHeight) {
            parallax.style.transform = `scale(1.1) translateY(${scrolled * 0.35}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- Gallery Lightbox ---------- */
  function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item || item.classList.contains('gallery-item--loading')) return;
      openLightbox(parseInt(item.dataset.index, 10));
    });

    grid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const item = e.target.closest('.gallery-item');
        if (item && !item.classList.contains('gallery-item--loading')) {
          e.preventDefault();
          openLightbox(parseInt(item.dataset.index, 10));
        }
      }
    });

    initGalleryParallax();
  }

  function initGalleryParallax() {
    const section = document.querySelector('.gallery-section');
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewHeight) {
        ticking = false;
        return;
      }

      const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
      const items = section.querySelectorAll('.gallery-item:not(.gallery-item--loading)');

      items.forEach((item) => {
        const speed = parseFloat(item.dataset.parallaxSpeed || '0.05');
        const offset = (progress - 0.5) * 100 * speed;
        item.style.setProperty('--gallery-parallax-y', `${offset}px`);
      });

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });

    updateParallax();
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', () => navigateLightbox(-1));
    nextBtn?.addEventListener('click', () => navigateLightbox(1));

    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox__backdrop')) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox?.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(currentLang === 'ar' ? 1 : -1);
      if (e.key === 'ArrowRight') navigateLightbox(currentLang === 'ar' ? -1 : 1);
    });
  }

  function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!lightbox || !img || !galleryItemsData.length) return;

    currentLightboxIndex = index;
    const item = galleryItemsData[index];
    if (!item) return;

    const showImage = () => {
      img.src = item.src;
      img.alt = item.alt;
      if (caption) caption.textContent = item.alt;
      img.classList.remove('lightbox-img--changing');
    };

    if (!lightbox.hidden && lightbox.classList.contains('lightbox--open')) {
      img.classList.add('lightbox-img--changing');
      setTimeout(showImage, 220);
    } else {
      showImage();
      lightbox.hidden = false;
      requestAnimationFrame(() => {
        lightbox.classList.add('lightbox--open');
      });
    }

    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('lightbox--open');
    setTimeout(() => {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }, 420);
  }

  function navigateLightbox(direction) {
    if (!galleryImages.length) return;
    currentLightboxIndex = (currentLightboxIndex + direction + galleryImages.length) % galleryImages.length;
    openLightbox(currentLightboxIndex);
  }

  /* ---------- Add to Calendar ---------- */
  function initCalendar() {
    document.getElementById('btn-google-calendar')?.addEventListener('click', openGoogleCalendar);
    document.getElementById('btn-download-ics')?.addEventListener('click', downloadICS);
  }

  function formatGoogleDate(isoString) {
    const d = new Date(isoString);
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  }

  function openGoogleCalendar() {
    const ev = config.calendarEvent;
    const start = formatGoogleDate(ev.startISO);
    const end = formatGoogleDate(ev.endISO);

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: ev.title,
      dates: `${start}/${end}`,
      details: ev.description,
      location: ev.location
    });

    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank', 'noopener,noreferrer');
  }

  function downloadICS() {
    const ev = config.calendarEvent;
    const icsContent = generateICS(ev);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = ev.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Generates RFC 5545 compliant .ics calendar file content
   */
  function generateICS(event) {
    const uid = `wedding-${Date.now()}@adam-farah`;
    const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const dtStart = formatGoogleDate(event.startISO);
    const dtEnd = formatGoogleDate(event.endISO);

    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Adam Farah Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${now}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeICS(event.title)}`,
      `DESCRIPTION:${escapeICS(event.description)}`,
      `LOCATION:${escapeICS(event.location)}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    return lines.join('\r\n');
  }

  function escapeICS(text) {
    return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }

  /* ---------- Floating WhatsApp Button ---------- */
  function initWhatsAppFloat() {
    const btn = document.getElementById('whatsapp-float');
    if (!btn) return;
    const t = getLangPack();

    btn.href = `https://wa.me/${config.rsvp.whatsappNumber}?text=${encodeURIComponent(t.whatsapp.floatMessage)}`;
  }

  /* ---------- AOS Initialization ---------- */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 900,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        mirror: false,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'true' : false
      });
    }
  }

  /* ---------- Utility: HTML Escape ---------- */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
