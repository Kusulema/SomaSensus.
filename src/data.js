export const translations = {
  en: {
    nav: { about: "ABOUT", services: "SERVICES", contact: "CONTACT", booking: "PRICES" },
    hero: { welcome: "WELCOME TO", title: "SOMASENSUS.", subtitle: "Balance. Recovery. Awareness.", quote: "“Recovery begins with feeling.”" },
    aboutYana: {
      title: "Yana Belova",
      intro: "Yana Belova is a professional massage therapist dedicated to helping clients achieve physical relief and relaxation.",
      roleLabel: "Massage Therapist",
      roles: ["Massage Therapist", "Bodywork Therapist", "Recovery Specialist"],
      skillsTitle: "Skills",
      skills: ["Deep tissue techniques", "Trigger point therapy", "Muscular assessment"]
    },
    booking: {
      title: "PRICING & BOOKING",
      locations: [
        {
          name: "Pelgulinna Tervisemaja",
          schedule: "(Mon-Fri, 17:30 - 20:00)",
          subtitle: "MEDICAL MASSAGE ROOM",
          address: "Pelgulinna Tervisemaja, Adala 1, Pro Melauks Clinic OU"
        },
        {
          name: "Linnamae 37a",
          schedule: "(Sat, 10:00 - 17:00)",
          subtitle: "SPECIALIZED MASSAGE CENTER ROOM",
          address: "Linnamae 37a, Lasnamae"
        }
      ],
      infoTitle: "Detailed Information",
      infoLines: [
        "All procedures are by prior booking.",
        "Session time includes preparation and completion of the procedure (5-10 min).",
        "At the first visit, a brief consultation is held to assess your condition and choose a suitable massage or the service selected on the website.",
        "If there are contraindications, the procedure is not performed.",
        "The specialist reserves the right to adjust the type and duration of the procedure depending on the client's condition.",
        "Before your visit, it is recommended not to eat 45-60 minutes before the session.",
        "After the procedure, it is recommended to drink water and avoid intense physical activity."
      ],
      extraSunday: "Extra Sunday time can be arranged via email.",
      payment: "Payment: cash, card, or Stebby.",
      firstVisitPromo: "First massage visit -10% discount",
      priceTitle: "PRICE LIST",
      priceList: [
        { name: "Classic massage", price: "45m 40€ | 60m 45€ | 90m 55€" },
        { name: "Sports massage", price: "45m 50€ | 60m 55€ | 90m 65€" },
        { name: "Therapeutic massage", price: "45m 45€ | 60m 50€ | 90m 60€" },
        { name: "Manual lymphatic drainage massage", price: "45m 50€ | 60m 55€ | 90m 65€" },
        { name: "Facial massage", price: "45m 55€ | 60m 65€" }
      ],
      nbTitle: "NB! Important",
      nbLines: [
        "Cancellation under 12 hours - 50% of service price."
      ],
      form: { name: "Name", email: "Email", service: "Service", btn: "Book Now" }
    },
    welcomeSpace: {
      title: "Welcome to SomaSensus Space",
      text: "My goal is simple — to make you feel cared for and completely at ease, just like you would in your own home.",
      text2: "Each session is tailored to your current state: we ease tension, improve mobility, and bring lightness back to your back and neck. After your visit, you leave with a sense of calm, clarity, and gentle energy for the whole day.",
      videoPlaceholder: "Soma Sensus"
    },
    offers: {
      title: "Massage Services",
      details: "Details →", 
      priceLabel: "Price",
      items: [
        { id: 1, name: "Classic massage", price: "45m 40€ | 60m 45€ | 90m 55€", icon: "", color: "purple", desc: "Relaxes muscles and improves overall well-being.", benefits: ["Stress reduction", "Better circulation", "General wellness", "Improved sleep quality"] },
        { id: 2, name: "Therapeutic massage", price: "45m 45€ | 60m 50€ | 90m 60€", icon: "", color: "purple", desc: "Aimed at recovery and treatment of problem areas of the body.", benefits: ["Pain relief", "Improved posture", "Muscle recovery", "Increased joint mobility"] },
        { id: 3, name: "Sports massage", price: "45m 50€ | 60m 55€ | 90m 65€", icon: "", color: "purple", desc: "Prepares muscles for load and accelerates recovery after physical activity.", benefits: ["Injury prevention", "Flexibility", "Fast recovery", "Lactic acid removal"] },
        { id: 4, name: "Trigger-Point Massage", price: "50/60€", icon: "", color: "green", desc: "Focuses on releasing tight knots within the muscles.", benefits: ["Releases knots", "Reduces referred pain", "Deep relief", "Restores muscle function"] },
        { id: 5, name: "Lymphatic drainage massage", price: "45m 50€ | 60m 55€ | 90m 65€", icon: "", color: "green", desc: "Stimulates lymph flow and reduces swelling.", benefits: ["Detox", "Immune support", "Reduced swelling", "Metabolism boost"] },
        { id: 6, name: "Facial massage", price: "45m 55€ | 60m 65€", icon: "", color: "green", desc: "Improves skin tone and works on deep facial muscles.", benefits: ["Skin glow", "Tension release", "Natural lift", "Lymphatic drainage of face"] }
      ]
    },
    feedback: { 
      title: "TESTIMONIALS", 
      reviews: [
        { text: "Yana is a true professional! After a few sessions, the back pain that bothered me for years is gone.", author: "Anna S." },
        { text: "Amazing sports massage. My muscles recover much faster, which is crucial for my competition prep.", author: "Max V." },
        { text: "The perfect place for relaxation. I come here to rest not only my body but my soul. Magic hands!", author: "Elena K." }
      ]
    },
    contact: { 
      title: "CONTACTS",
      locationTitle: "Location",
      hoursTitle: "Working Hours",
      socialTitle: "Get Social",
      sharePrompt: "Tag us in your photos!",
      photoText: "THE MASSAGE PHOTO", 
      btnClose: "Close",
      locations: ["Tallinn, Estonia", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["Mon - Fri: 10:00 - 20:00", "Saturday: 10:00 - 18:00", "Sunday: Closed"]
    }
  },
  ru: {
    nav: { about: "О НАС", services: "УСЛУГИ", contact: "КОНТАКТЫ", booking: "ЦЕНЫ" },
    hero: { welcome: "ДОБРО ПОЖАЛОВАТЬ В", title: "SOMASENSUS.", subtitle: "Баланс. Восстановление. Ощущение.", quote: "«Восстановление начинается с чувствования»." },
    aboutYana: {
      title: "Яна Белова",
      intro: "Яна Белова — массажист, который помогает снять напряжение, вернуть телу легкость и восстановить внутренний баланс.",
      roleLabel: "Массажист",
      roles: ["Массажист", "Телесный терапевт", "Специалист по восстановлению"],
      skillsTitle: "Навыки",
      skills: ["Глубокий массаж тканей", "Триггерные точки", "Мягкая работа с зажимами"]
    },
    booking: {
      title: "ЦЕНЫ И ЗАПИСЬ",
      locations: [
        {
          name: "Pelgulinna Tervisemaja",
          schedule: "(Пн-Пт, 17:30 - 20:00)",
          subtitle: "МЕДИЦИНСКИЙ МАССАЖНЫЙ КАБИНЕТ",
          address: "Pelgulinna Tervisemaja, Adala 1, Kliinikus Pro Melauks OU"
        },
        {
          name: "Linnamae 37a",
          schedule: "(Сб, 10:00 - 17:00)",
          subtitle: "СПЕЦИАЛИЗИРОВАННЫЙ КАБИНЕТ МАССАЖНОГО ЦЕНТРА",
          address: "Linnamae 37a, Lasnamae"
        }
      ],
      infoTitle: "Подробная информация",
      infoLines: [
        "Все процедуры проводятся по предварительной записи.",
        "Время сеанса: подготовка и завершение процедуры (5-10 минут).",
        "Первый визит включает краткую консультацию и подбор подходящей услуги.",
        "При наличии противопоказаний процедура не проводится.",
        "Специалист может корректировать вид и длительность процедуры по состоянию клиента.",
        "Перед посещением рекомендуется не принимать пищу за 45-60 минут до сеанса.",
        "После процедуры рекомендуется пить воду и избегать интенсивных физических нагрузок."
      ],
      extraSunday: "Дополнительное время в воскресенье можно согласовать по почте.",
      payment: "Оплата: наличные, карта или Stebby.",
      firstVisitPromo: "Первый визит на массаж - скидка 10%",
      priceTitle: "ПРАЙС-ЛИСТ",
      priceList: [
        { name: "Классический массаж", price: "45м 40€ | 60м 45€ | 90м 55€" },
        { name: "Спортивный массаж", price: "45м 50€ | 60м 55€ | 90м 65€" },
        { name: "Терапевтический массаж", price: "45м 45€ | 60м 50€ | 90м 60€" },
        { name: "Лимфодренажный массаж", price: "45м 50€ | 60м 55€ | 90м 65€" },
        { name: "Массаж лица", price: "45м 55€ | 60м 65€" }
      ],
      nbTitle: "NB! Важно знать",
      nbLines: [
        "Отмена менее чем за 12 часов - 50% стоимости услуги."
      ],
      form: { name: "Имя", email: "Email", service: "Услуга", btn: "Записаться" }
    },
    welcomeSpace: {
      title: "Пространство SomaSensus",
      text: "Моя цель — чтобы вы чувствовали заботу и уют, как дома.",
      text2: "Каждый сеанс подстраивается под ваше состояние: снимаем напряжение, улучшаем подвижность, возвращаем легкость в спине и шее. После визита остается ощущение внутреннего покоя, ясности и приятной энергии на весь день.",
      videoPlaceholder: "Soma Sensus"
    },
    offers: {
      title: "Виды массажа",
      details: "Подробнее →", 
      priceLabel: "Цена",
      items: [
        { id: 1, name: "Классический массаж", price: "45м 40€ | 60м 45€ | 90м 55€", icon: "", color: "purple", desc: "Расслабляет мышцы и улучшает общее самочувствие.", benefits: ["Снятие стресса", "Кровообращение", "Общее благополучие", "Улучшение качества сна"] },
        { id: 2, name: "Терапевтический массаж", price: "45м 45€ | 60м 50€ | 90м 60€", icon: "", color: "purple", desc: "Направлен на восстановление и лечение проблемных зон тела.", benefits: ["Снятие боли", "Осанка", "Восстановление", "Подвижность суставов"] },
        { id: 3, name: "Спортивный массаж", price: "45м 50€ | 60м 55€ | 90м 65€", icon: "", color: "purple", desc: "Подготавливает мышцы к нагрузке, ускоряет восстановление после физической нагрузки.", benefits: ["Профилактика травм", "Гибкость", "Энергия", "Вывод молочной кислоты"] },
        { id: 4, name: "Триггерный массаж", price: "50/60€", icon: "", color: "green", desc: "Устранение мышечных узлов и зажимов через точечное давление.", benefits: ["Устранение узлов", "Снятие боли", "Глубокое облегчение", "Восстановление функций мышц"] },
        { id: 5, name: "Лимфодренажный массаж", price: "45м 50€ | 60м 55€ | 90м 65€", icon: "", color: "green", desc: "Стимулирует лимфоток и снижает отечность.", benefits: ["Детокс", "Иммунитет", "Против отеков", "Ускорение метаболизма"] },
        { id: 6, name: "Массаж лица", price: "45м 55€ | 60м 65€", icon: "", color: "green", desc: "Улучшает тонус кожи и прорабатывает глубокие мышцы лица.", benefits: ["Сияние", "Релакс", "Лифтинг-эффект", "Снятие мимических зажимов"] }
      ]
    },
    feedback: { 
      title: "ОТЗЫВЫ", 
      reviews: [
        { text: "Яна — настоящий профессионал! После курса массажа ушли боли в спине, которые мучили меня годами.", author: "Анна С." },
        { text: "Потрясающий спортивный массаж. Мышцы восстанавливаются в разы быстрее, что очень важно.", author: "Максим В." },
        { text: "Идеальное место для релаксации. Прихожу сюда отдохнуть не только телом, но и душой. Волшебные руки!", author: "Елена К." }
      ]
    },
    contact: { 
      title: "КОНТАКТЫ",
      locationTitle: "Адрес",
      hoursTitle: "График работы",
      socialTitle: "Мы в соцсетях",
      sharePrompt: "Отмечайте нас на ваших фото!",
      photoText: "ФОТО ТЕРАПИИ", 
      btnClose: "Закрыть",
      locations: ["Таллинн, Эстония", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["Пн - Пт: 10:00 - 20:00", "Суббота: 10:00 - 18:00", "Воскресенье: Выходной"]
    }
  },
  et: {
    nav: { about: "MEIST", services: "TEENUSED", contact: "KONTAKT", booking: "HINNAD" },
    hero: { welcome: "TERE TULEMAST", title: "SOMASENSUS.", subtitle: "Tasakaal. Taastumine. Tunnetus.", quote: "„Taastumine algab tunnetamisest.”" },
    aboutYana: { title: "Yana Belova", intro: "Yana Belova on massöör, kes aitab pinget leevendada, tuua kehasse kergust ja taastada tasakaalu.", roleLabel: "Massöör", roles: ["Massöör", "Keha terapeut", "Taastumise spetsialist"], skillsTitle: "Oskused", skills: ["Süvakoemassaaž", "Trigerpunktid", "Pehme töö pingetega"] },
    booking: {
      title: "HINNAKIRI & BRONEERING",
      locations: [
        {
          name: "Pelgulinna Tervisemaja",
          schedule: "(E-R, 17:30 - 20:00)",
          subtitle: "MEDITSIINILINE MASSAAŽIKABINET",
          address: "Pelgulinna Tervisemaja, Adala 1, kliinikus Pro Melauks OU"
        },
        {
          name: "Linnamae 37a",
          schedule: "(L, 10:00 - 17:00)",
          subtitle: "SPETSIALISEERITUD MASSAAŽIKESKUSE KABINET",
          address: "Linnamae 37a, Lasnamae"
        }
      ],
      infoTitle: "Täpsem info",
      infoLines: [
        "Kõik protseduurid toimuvad eelbroneeringu alusel.",
        "Seansi aeg sisaldab ettevalmistust ja protseduuri lõpetamist (5-10 minutit).",
        "Esimesel visiidil tehakse lühike konsultatsioon kliendi seisundi hindamiseks ja sobiva massaaži või veebis valitud teenuse täpsustamiseks.",
        "Vastunäidustuste korral protseduuri ei teostata.",
        "Spetsialist jätab endale õiguse kohandada protseduuri liiki ja kestust vastavalt kliendi seisundile.",
        "Enne külastust on soovitatav mitte süüa 45-60 minutit enne seanssi.",
        "Pärast protseduuri on soovitatav juua vett ja vältida intensiivset füüsilist koormust."
      ],
      extraSunday: "Pühapäevane lisaaeg on kokkuleppel e-posti teel.",
      payment: "Tasumine: sularaha, kaart või Stebby.",
      firstVisitPromo: "Esimene massaažikülastus -10% soodustus",
      priceTitle: "HINNAKIRI",
      priceList: [
        { name: "Klassikaline massaaž", price: "45m 40€ | 60m 45€ | 90m 55€" },
        { name: "Spordimassaaž", price: "45m 50€ | 60m 55€ | 90m 65€" },
        { name: "Terapeutiline (raviv) massaaž", price: "45m 45€ | 60m 50€ | 90m 60€" },
        { name: "Lümfidrenaažimassaaž (käsitsi)", price: "45m 50€ | 60m 55€ | 90m 65€" },
        { name: "Näomassaaž", price: "45m 55€ | 60m 65€" }
      ],
      nbTitle: "NB! Oluline teada",
      nbLines: [
        "Tühistamine alla 12 tunni - 50% teenuse hinnast."
      ],
      form: { name: "Nimi", email: "E-post", service: "Teenus", btn: "Broneeri" }
    },
    welcomeSpace: {
      title: "SomaSensus Ruum",
      text: "Minu eesmärk on, et tunneksid end hoolitsetuna ja mugavalt nagu kodus.",
      text2: "Iga seanss kohandatakse sinu hetkeseisundile: vabastame pingeid, parandame liikuvust ning toome selga ja kaela tagasi kerguse. Pärast külastust jääb alles sisemise rahu, selguse ja meeldiva energia tunne terveks päevaks.",
      videoPlaceholder: "Soma Sensus"
    },
    offers: {
      title: "Massaaži teenused",
      details: "Lähemalt →", 
      priceLabel: "Hind",
      items: [
        { id: 1, name: "Klassikaline massaaž", price: "45m 40€ | 60m 45€ | 90m 55€", icon: "", color: "purple", desc: "Lõdvestab lihaseid ja parandab üldist enesetunnet.", benefits: ["Stressi vähenemine", "Vereringe", "Heaolu", "Parem unekvaliteet"] },
        { id: 2, name: "Terapeutiline", price: "45m 45€ | 60m 50€ | 90m 60€", icon: " ", color: "purple", desc: "Suunatud probleemsete kehapiirkondade taastamisele ja ravile.", benefits: ["Valu leevendamine", "Rüht", "Taastumine", "Liigeste liikuvus"] },
        { id: 3, name: "Spordimassaaž", price: "45m 50€ | 60m 55€ | 90m 65€", icon: "", color: "purple", desc: "Valmistab lihased koormuseks ette ja kiirendab taastumist pärast füüsilist pingutust.", benefits: ["Vigastuste ennetamine", "Paindlikkus", "Kiire taastumine", "Piimhappe eemaldamine"] },
        { id: 4, name: "Trigerpunktide massaaž", price: "50/60€", icon: "", color: "green", desc: "Keskendub lihasknottide vabastamisele kontrollitud surve abil.", benefits: ["Pingete vabastamine", "Valu vähendamine", "Sügav leevendus", "Lihasfunktsiooni taastamine"] },
        { id: 5, name: "Lümfidrenaažimassaaž", price: "45m 50€ | 60m 55€ | 90m 65€", icon: "", color: "green", desc: "Stimuleerib lümfivoolu ja vähendab turseid.", benefits: ["Detoks", "Immuunsus", "Tursete vähenemine", "Ainevahetuse kiirendamine"] },
        { id: 6, name: "Näomassaaž", price: "45m 55€ | 60m 65€", icon: "", color: "green", desc: "Parandab naha toonust ja mõjutab sügavaid näolihaseid.", benefits: ["Naha sära", "Lõõgastus", "Loomulik lift", "Näo lümfidrenaaž"] }
      ]
    },
    feedback: { 
      title: "TAGASISIDE", 
      reviews: [
        { text: "Yana on tõeline professionaal! Pärast seansse on aastatepikkune seljavalu kadunud.", author: "Anna S." },
        { text: "Hämmastav spordimassaaž. Lihased taastuvad palju kiiremini.", author: "Max V." },
        { text: "Ideaalne koht lõõgastumiseks. Tulen siia puhkama nii keha kui vaimuga.", author: "Elena K." }
      ]
    },
    contact: { 
      title: "KONTAKT",
      locationTitle: "Asukoht",
      hoursTitle: "Lahtiolekuajad",
      socialTitle: "Sotsiaalmeedia",
      sharePrompt: "Märgi meid oma fotodel!",
      photoText: "MASSAAŽI FOTO", 
      btnClose: "Sulge",
      locations: ["Tallinn, Eesti", "Pelgulinna Tervisemaja", "Linnamäe 37a"],
      hours: ["E - R: 10:00 - 20:00", "Laupäev: 10:00 - 18:00", "Pühapäev: Suletud"]
    }
  }
};