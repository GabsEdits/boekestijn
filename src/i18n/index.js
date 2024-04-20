import { createI18n } from "vue-i18n";

const messages = {
  en: {
    header: {
      callus: "Call Us",
      quickoffice: "Our Main",
      quickofficebr: "Office",
      locations: "Locations",
      language: "Language",
    },
    mainarea: {
      slogan: {
        before: "Follow your",
        hard: "dream",
        after: "with us",
      },
      intro:
        "The transport company Boekestijn Transport was established in 1994 in Mill, the Netherlands. Initially, the company operated with a fleet of three trucks, but over time, it has experienced remarkable growth, expanding to over 1000 trucks currently in operation. With a rich history spanning over 30 years, we have firmly established ourselves as a prominent player in the international transport and logistics market in Europe. Our extensive presence includes headquarters located in eight countries, supported by a dedicated team of over 1900 highly skilled professionals.",
      joinus: "Join Us",
      scrolldown: "Please Scroll Down",
    },
    testdrive: {
      chisinau: "Chişinău",
      daychisinau: "Monday-Tuesday",
      addresschisinau: "Str. Pietrăriei, 19",
      callnow: "Call Now!",
      varnita: "Varnița",
      daysvarnita: "Tuesday and Thu.",
      addressvarnita: "Str. Tighina, 66",
      balti: "Bălți",
      daysbalti: "Friday",
      addressbalti: "Str. Ștefan cel Mare, 195",
    },
    livetrucks: {
      title: "24/7 Monitoring of trucks",
      desc: "See below how many trucks we have on the road in the current moment",
    },
    benefits: {
      title: "Benefits",
      benefitone: "Official contract in Poland",
      benefitbill: "Attractive Official Salary Calculated daily",
      benefittruck: "New Auto Park Euro: MERCEDES-DAF 2020-2023",
      benefitcogs: "Working conditions 12 weeks, 3-4 weeks leave",
      benefitvan: "Two-way transport on company account",
      benefitglobe:
        "Work under the contract and work visa directly with employer",
      benefitlanguage:
        "Flexible training for new drivers with average experience",
      benefitbook:
        "Company provides English courses to enable drivers communication with clients and administration. English or German language courses to conversational levels",
      benefitcap: "Trainings and courses",
      benefitgift: "Internal bonuses",
      benefitmap:
        "Our entire fleet are monitored and managed by our own TMS. Developed with the main priority to be user friendly for the customer",
      benefitbriefcase: "We provide insurance for all drivers",
      benefitbriefcasetitle: "Insurance",
    },
    vacancies: {
      title: "Check out our vacancies",
      desc: "We have exciting career opportunities for you",
      link: "View vacancies on Rabota.md",
    },
    locations: {
      title: "Location",
      desc: "Find our offices around the country",
      otherone: "Bălți: Str. Nicolae Iorga 30, Republic of Moldova",
      othertwo: "Varnița: Str. Tighina, 66, Republic of Moldova",
      main: "Str. Liviu Deleanu 13 (Floor 4), Chișinău, Republic of Moldova",
    },
    faq: {
      title: "Questions and Answers",
      qone: "Are there crews in pairs?",
      answerone: "Mostly there are single crews.",
      qtwo: "Is there an exchange of pallets?",
      answertwo:
        "Depending on the logistics. Mostly when working with a refrigerator.",
      qthree:
        "Do you have work on a refrigerator / with a container / on an auto transporter?",
      answerthree:
        "We have more than 70 customers that we serve, there are refrigerators, platforms, containers, trawl.",
      qmiss: "In what currency is the salary?",
      answermiss: "In euros, by transfer to a Moldavian bank card.",
      qfour: "Where do the weekly breaks take place?",
      answerfour: "At our bases or in well-maintained parking lots.",
      qfive: "How to get to work?",
      answerfive:
        "The company has its own transport to transport drivers from our offices to trucks. For free.",
      qsix: "Where does the driver exchange take place and how does the truck transfer take place?",
      answersix:
        "The driver exchange takes place in our garages. The truck is handed over to a mechanic.",
      qseven:
        "Is any amount of money blocked for the period in which the driver is on leave?",
      answerseven:
        "We have a full settlement with the drivers on the day of the salary. We do not block any amounts for the guarantee.",
      qeight: "What contract does the company provide?",
      answereight: "We offer employment under the Polish contract.",
    },
    facebook: {
      title: "Follow Us on Facebook",
      desc: "Stay updated with our latest news and updates",
      link: "Visit our Facebook page",
    },
    externallinks: {
      title: "External Links",
      link: "Visit the International Website",
    },
    footer: {
      call: "Call Us",
      special: "Main:",
      chisinau: "Chișinău:",
      balti: "Balți:",
      varnita: "Varnița:",
    },
    form: {
      desc: "Fill up this form to get in touch",
      note: "Required fields are marked with",
      name: "First and last name",
      tel: "Phone number",
      email: "Email",
      exp: "Experience category CE (how many years)",
      about: "About me (optional)",
    },
  },
  ro: {
    header: {
      callus: "Sună-ne",
      quickoffice: "Oficiul nostru",
      quickofficebr: "Central",
      locations: "Locații",
      language: "Limbă",
    },
    mainarea: {
      slogan: {
        before: "Urmează-ți",
        hard: "visul",
        after: "alături de noi",
      },
      intro:
        "Compania de transport Boekestijn Transport a fost lansat în 1994 în Mill, Olanda. În acele zile erau trei camioane Boekestijn pe drum și la moment compania a crescut cu peste 1000 de camioane pe traseu. Suntem o companie cu o istorie de peste 30 de ani pe piata Internaționala de transport si logistică în Europa, cu sediul în 8 țări și cu echipă de peste 1900 de angajați.",
      joinus: "Alătură-te nouă",
      scrolldown: "Vă rugăm derulați în jos",
    },
    testdrive: {
      chisinau: "Chişinău",
      daychisinau: "Luni-Marți",
      addresschisinau: "Str. Pietrăriei, 19",
      callnow: "Sună Acum!",
      varnita: "Varnița",
      daysvarnita: "Marți și Joi",
      addressvarnita: "Str. Tighina, 66",
      balti: "Bălți",
      daysbalti: "Vineri",
      addressbalti: "Str. Ștefan cel Mare, 195",
    },
    livetrucks: {
      title: "24/7 Monitorizarea camioanelor online",
      desc: "Vezi mai jos câte camioanelor circulă la moment",
    },
    benefits: {
      title: "Beneficii",
      benefitone: "Contract ofical din Polonia",
      benefitbill: "Salariu oficial atractiv calculat pe zi",
      benefittruck: "Auto Park Euro Nou: MERCEDES-DAF 2020-2023",
      benefitcogs:
        "Condiții de lucru: 12 săptămânii la lucru, 3-4 săptămânii libere",
      benefitvan: "Transport tur-retur din contul companiei",
      benefitglobe:
        "Lucru în baza contractului și vizei de muncă direct de la angajator",
      benefitlanguage:
        "Instruire flexibilă pentru șoferii noi cu experiență medie",
      benefitbook:
        "Compania oferă cursuri de limbă engleză pentru a permite șoferilor comunicarea cu clienții și administrația. Cursurile de limba engleza sunt gratuite",
      benefitcap: "Instruire și cursuri",
      benefitgift: "Bonusuri interne",
      benefitmap:
        "Întreaga noastră echipă este monitorizată și gestionată de propriul nostru sistem TMS, dezvoltat astfel încât să fie ușor de utilizat de către client",
      benefitbriefcase: "Oferim asigurare pentru toți șoferii",
      benefitbriefcasetitle: "Asigurare",
    },
    vacancies: {
      title: "Consultați pozițiile noastre vacante",
      desc: "Avem oportunități interesante pentru cariera ta",
      link: "Vezi posturile vacante pe Rabota.md",
    },
    locations: {
      title: "Locație",
      desc: "Găsiți birourile noastre pe teritoriul Republicii Moldova",
      otherone: "Bălți: Strada Nicolae Iorga 30, Republica Moldova",
      othertwo: "Varnița: Strada Tighina, 66, Republica Moldova",
      main: "Strada Liviu Deleanu 13 (Et. 4), Chișinău, Republica Moldova",
    },
    faq: {
      title: "Întrebări și răspunsuri",
      qone: "Există echipaje în pereche?",
      answerone: "În cea mai mare parte, sunt echipaje de unul singur.",
      qtwo: "Există schimb de paleți?",
      answertwo:
        "În dependență de logistică. În mare parte atunci când lucrați cu refrigerator.",
      qthree:
        "Este lucru pe refrigerator / cu container / pe un autotransportor?",
      answerthree:
        "Avem peste 70 de clienți pe care îi deservim, există frigidere, platforme, container, traul.",
      qmiss: "În ce valută este salariul?",
      answermiss: "În euro, prin transfer pe un card bancar moldovenesc.",
      qfour: "Unde au loc pauzele săptămînale?",
      answerfour: "La bazele noastre sau în parcări bine dotate.",
      qfive: "Cum ajungem la lucru?",
      answerfive:
        "Compania are propriul transport pentru a transporta șoferii de la birourile noastre la camioane. Gratuit.",
      qsix: "Unde are loc schimbul de șoferi și cum are loc transmiterea camionului?",
      answersix:
        "Schimbul de șoferi are loc în garajele noastre. Camionul este predat unui mecanic.",
      qseven:
        "Este blocata careva suma de bani pentru perioada in care soferul este in concediu?",
      answerseven:
        "Avem o plată integrală șoferilor în ziua salariului. Nu blocăm nicio sumă pentru garanție.",
      qeight: "Ce contract oferă compania?",
      answereight: "Oferim angajarea în baza contractului polonez.",
    },
    facebook: {
      title: "Urmăriți-ne pe Facebook",
      desc: "Fii la curent cu cele mai recente știri și actualizări",
      link: "Vizitați pagina noastră de Facebook",
    },
    externallinks: {
      title: "Link-uri externe",
      link: "Vizitați site-ul internațional",
    },
    footer: {
      call: "Sună-ne",
      special: "Principal:",
      chisinau: "Chișinău:",
      balti: "Balți:",
      varnita: "Varn,ița:",
    },
    form: {
      desc: "Completați acest formular pentru a lua legătura",
      note: "Câmpurile obligatorii sunt marcate cu",
      name: "Numele și prenumele",
      tel: "Număr de telefon",
      email: "E-mail",
      exp: "Categoria de experiență CE (câți ani)",
      about: "Despre mine (opțional)",
    },
  },
  ru: {
    header: {
      callus: "Позвоните нам",
      quickoffice: "Наш главный",
      quickofficebr: "офис",
      locations: "Местонахождение",
      language: "Язык",
    },
    mainarea: {
      slogan: {
        before: "Следуй своей",
        hard: "мечте",
        after: "вместе с нами",
      },
      intro:
        "Транспортная компания Boekestijn Transport была основана в 1994 году в Милле, Нидерланды. В то время на дороге было три грузовика Boekestijn, а на данный момент компания выросла на маршруте более чем на 1000 грузовиков. Мы - компания с более чем 30-летней историей на рынке международных перевозок и логистики в Европе, базирующаяся в 8 странах и имеющая команду из более чем 1900 сотрудников.",
      joinus: "Присоединяйтесь к нам",
      scrolldown: "Пожалуйста, прокрутите вниз",
    },
    testdrive: {
      chisinau: "Кишинэу",
      daychisinau: "Понедельник-Вторник",
      addresschisinau: "ул. Петрэрией 19",
      callnow: "Позвоните нам!",
      varnita: "Варница",
      daysvarnita: "Вторник и Четверг",
      addressvarnita: "ул. Тигина 66",
      balti: "Бэлць",
      daysbalti: "Пятница",
      addressbalti: "ул. Штефан чел Маре 195",
    },
    livetrucks: {
      title: "24/7 Онлайн отслеживание грузовиков",
      desc: "Смотрите ниже, сколько грузовиков работают в данный момент",
    },
    benefits: {
      title: "Преимущества",
      benefitone: "Официальный контракт из Польши",
      benefitbill:
        "Привлекательная официальная заработная плата, рассчитанная за день",
      benefittruck: "Новый авто парк Euro: MERCEDES-DAF 2020-2023",
      benefitcogs: "Условия работы: 12 недель на работе, 3-4 недели в отпуске",
      benefitvan: "Транспорт в обе стороны за счет компании",
      benefitglobe:
        "Работа по контракту и рабочая виза напрямую от работодателя",
      benefitlanguage: "Обучение для новых водителей со средним стажем",
      benefitbook:
        "Компания предлагает курсы английского языка, которые позволят водителям общаться с клиентами и администрацией. Курсы английского языка бесплатны.",
      benefitcap: "Обучение и курсы",
      benefitgift: "Внутренние бонусы",
      benefitmap:
        "Вся наша команда контролируется и управляется нашей собственной системой TMS, разработана для удобства использования заказчиком.",
      benefitbriefcase: "Мы предлагаем страховку для всех водителей",
      benefitbriefcasetitle: "Страховку",
    },
    vacancies: {
      title: "Ознакомьтесь с нашими вакансиями",
      desc: "У нас есть интересные возможности для вашей карьеры",
      link: "Смотрите вакансии на Rabota.md",
    },
    locations: {
      title: "Расположение",
      desc: "Найдите наши офисы на территории Республики Молдова",
      otherone: "Бэлць: ул. Николае Йорга, 30, Республика Молдова",
      othertwo: "Варница: ул. Тигина, 66, Республика Молдова",
      main: "ул. Ливиу Деляну 13 (4-й этаж), Кишинев, Республика Молдова",
    },
    faq: {
      title: "Вопросы и ответы",
      qone: "Есть парные екипажи?",
      answerone: "В основном есть одиночные экипажи.",
      qtwo: "Есть обмен палетов?",
      answertwo:
        "В зависимости от логистики. В основном при работе с холодильником.",
      qthree: "Есть работа на холодильнике / с контейнером / на автовозе ?",
      answerthree:
        "У нас более 70 клиентов которых мы обслуживаем, есть холодильники, термички, штора, платформа, контейнер, трал.",
      qmiss: "В какой валюте зарплата?",
      answermiss: "В евро, перечислением на молдавскую банковскою карту.",
      qfour: "Где проходят еженедельные перерывы?",
      answerfour: "На наших базах или на благоустроенныx парковкax",
      qfive: "Как добираемся до работы?",
      answerfive:
        "Компания имеет свой транспорт для перевозки водителей с наших офисов и до грузовиках. Бесплатно",
      qsix: "Где происходит обмен водителей, и как происходит сдача грузовика?",
      answersix:
        "Обмен водителей проводится в наших гаражах. Грузовик сдается механику.",
      qseven:
        "Блокируется какая нибудь сумма на период пока водитель в отпуске?",
      answerseven:
        "У нас полный расчет с водителями в день зарплаты. Какие либо суммы для гарантии мы не блокируем.",
      qeight: "Какой контракт предостaвляет компания?",
      answereight: "Предлагаем трудоустройство по Польскому контракту.",
    },
    facebook: {
      title: "Следите за нами на Фейсбуке",
      desc: "Оставайтесь в курсе последних новостей и обновлений",
      link: "Посетите нашу страницу на Facebook",
    },
    externallinks: {
      title: "Внешние ссылки",
      link: "Посетите международный сайт",
    },
    footer: {
      call: "Позвоните нам",
      special: "Основной:",
      chisinau: "Кишинэу:",
      balti: "Бэлць:",
      varnita: "Варница:",
    },
    form: {
      desc: "Заполните эту форму, чтобы связаться",
      note: "Обязательные поля отмечены",
      name: "Имя и фамилия",
      tel: "Номер телефона",
      email: "Электронная почта",
      exp: "Опыт работы категории CE (сколько лет)",
      about: "Обо мне (по желанию)",
    },
  },
};

const i18n = createI18n({
  locale: "ru",
  messages,
});

export default i18n;
