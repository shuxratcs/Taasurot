export type Language = 'ru' | 'uz';

export const translations = {
  ru: {
    hero: {
      eyebrow: "ДЛЯ ТЕХ, КТО ИЩЕТ ОСОБЕННЫЙ ОТДЫХ",
      title_part1: "Подберём впечатляющее путешествие —",
      title_part2: "а не просто тур из каталога",
      subtitle_part1: "Никаких случайных подборов.",
      subtitle_part2: "План путешествия под ваш стиль, бюджет и цели.",
      btn_know: "Я уже знаю, какой тур хочу",
      btn_help: "Помогите выбрать идеальный отдых",
      badges: {
        b1: "Прямые контакты с отелями и принимающими сторонами",
        b2: "Поддержка клиентов 24/7 даже после тура",
        b3: "Обслужили 1000+ довольных туристов"
      },
      form: {
        title: "Получите персональный подбор тура",
        desc: "Менеджер свяжется с вами и предложит только проверенные варианты.",
        name: "Имя",
        name_ph: "Укажите ваше имя",
        phone: "Телефон",
        dest: "Куда хотите поехать?",
        dest_ph: "Страна или город",
        date: "Когда планируете поездку?",
        date_ph: "Месяц или даты",
        people: "Количество человек?",
        people_ph: "2 взрослых",
        budget: "Примерный бюджет?",
        budget_ph: "$0",
        btn: "Получить подбор тура"
      }
    },
    destinations: {
      title: "Какой отдых вы ищете?",
      subtitle: "БОНУС: Выберите формат путешествия — и получите карту отдыха бесплатно!",
      search: {
        title: "Уже знаете, куда летите? Найдите готовый сценарий для вашего города.",
        ph: "Введите страну или город",
        btn: "Найти мой гайд"
      },
      items: {
        i1: { t: "Отдых у моря и океана", d: "Белый песок, тёплая вода и отели с идеальным сервисом. Подходит для тех, кто хочет полностью отключиться от работы и восстановиться.", b: "Да, я хочу на море" },
        i2: { t: "Горы, природа и чистый воздух", d: "Пейзажи, тишина и места, где можно по-настоящему перезагрузиться. Экскурсии, панорамные виды и отдых вдали от шума городов.", b: "Хочу в горы и природу" },
        i3: { t: "Современные мегаполисы", d: "Дубай, Сингапур, Малайзия и другие города будущего. Технологии, архитектура, шопинг и насыщенная городская жизнь.", b: "Покажите города" },
        i4: { t: "История и цивилизации", d: "Пирамиды, древние города и культурные маршруты. Путешествие, которое расширяет кругозор.", b: "Увижу историю" },
        i5: { t: "Романтическое путешествие", d: "Идеально для медового месяца или отдыха вдвоём. Уединённые отели, красивые закаты и незабываемая атмосфера.", b: "Найти романтический тур" },
        i6: { t: "Отдых с семьёй", d: "Отели, где комфортно взрослым и детям. Анимация, безопасные пляжи и семейные развлечения.", b: "Полетим с семьёй" },
        i7: { t: "Бюджетно и без визы", d: "Лучшие направления, куда можно полететь быстро и без сложной подготовки. Идеально для спонтанных путешествий.", b: "Посмотреть варианты" },
        i8: { t: "Экзотические направления", d: "Места, которые остаются в памяти на всю жизнь. Острова, джунгли и уникальная природа.", b: "Открыть экзотику" }
      }
    },
    guides: {
      title: "Ваш отдых начинается ещё до покупки тура",
      subtitle: "Без ГИДа и поисков. Лучшая гостиница, рестораны, экскурсии и маршруты в одной странице.",
      btn_more: "Посмотреть больше",
      items: {
        i1: { t: "Дубай — как провести идеальную неделю", d: "Отель: Rove La Mer → Завтрак: Boston Lane → Прогулка: Al Seef → Ужин: Eleven Green. Фишка: Инструкция, как попасть на смотровые без очередей.", b: "Получить план на неделю" },
        i2: { t: "Шарм-эль-Шейх — отдых у Красного моря", d: "Отель: Sunrise Arabian Beach → Пляж: Рас-Умм-эль-Сид → Обед: Fares Seafood → Вечер: Farsha Lounge. Фишка: Список мест, где риф сохранился лучше всего.", b: "Посмотреть маршрут" },
        i3: { t: "Пхукет — лучшие пляжи и маршруты", d: "Отель: The Slate → Пляж: Banana Beach → Локация: Пхукет-таун → Еда: Sunday Walking Street. Фишка: Карта инстаграмных локаций без толп.", b: "Открыть гайд" },
        i4: { t: "Стамбул — колорит и гастрономия", d: "Отель: CVK Park Bosphorus → Завтрак: Hafiz Mustafa → Локация: Галата → Ужин: Nusr-Et. Фишка: Как торговаться на Гранд-базаре как местный.", b: "Открыть гайд" }
      }
    },
    reviews: {
      title: "Что говорят клиенты после путешествий",
      sub1: "Мы собираем обратную связь у каждого, сразу после поездки.",
      sub2: "Без минусов отзыв не принимаем )",
      sub3: "Чтобы ваш следующий отдых был лучше.",
      reels: "Instagram Reels Отзыв",
      tg: "Скриншот Telegram"
    },
    whyus: {
      title: "Почему Taasurot",
      subtitle: "Мы не просто продаём туры. Наша задача — чтобы ваш отдых действительно получился таким, как вы ожидали.",
      btn: "Подобрать путешествие",
      items: {
        i1: { t: "Подбор под ваш запрос", d: "Мы не предлагаем десятки случайных вариантов. Сначала понимаем какой отдых вы хотите, ваш бюджет и когда поездка." },
        i2: { t: "Личные контакты с отелями", d: "Работаем напрямую с принимающими компаниями. Можем решить запросы быстрее: день рождения, лучший номер, доп. сервис." },
        i3: { t: "Честная информация", d: "Заранее рассказываем реальные детали: площадь номера, расположение, нюансы сервиса. Без неприятных сюрпризов." },
        i4: { t: "Поддержка во время поездки", d: "Остаёмся на связи даже после того, как вы отдохнули. Поможем быстро решить любую возникшую ситуацию." },
        i5: { t: "Реальные отзывы туристов", d: "После каждой поездки собираем обратную связь. Видео, скриншоты сообщений — честные впечатления без постановок." }
      }
    },
    lead: {
      title: "Заполните форму — подберём лучший тур под ваш запрос",
      subtitle: "Менеджер Taasurot свяжется с вами, уточнит детали и предложит несколько подходящих вариантов отдыха. Бонус: отправим гайд с рекомендациями по выбранному направлению.",
      m1: "Подбор тура под ваш запрос",
      m2: "Честная информация об отелях",
      m3: "Поддержка во время всей поездки",
      form: {
        name: "Имя",
        name_ph: "Укажите ваше имя",
        phone: "Телефон",
        date: "Когда планируете поездку",
        date_ph: "Месяц или даты",
        people: "Количество человек",
        people_ph: "2 взрослых",
        budget: "Примерный бюджет",
        budget_ph: "$0",
        btn: "Подобрать тур"
      },
      footer: {
        rights: "Все права защищены",
        contact: "Связаться напрямую:"
      }
    }
  },
  uz: {
    hero: {
      eyebrow: "MAXSUS HORDIQ SHINAMANDLARI UCHUN",
      title_part1: "Shunchaki katalogdagi turni emas,",
      title_part2: "unutilmas taassurotga boy sayohat tanlab beramiz",
      subtitle_part1: "Tasodifiy tanlovlar yoʻq.",
      subtitle_part2: "Sayohat rejasini sizning budjet va maqsadlaringizga moslab tuzamiz.",
      btn_know: "Qaysi turni xohlashimni bilaman",
      btn_help: "Unutilmas hordiq tanlashga yordam bering",
      badges: {
        b1: "Mehmonxonalar va qabul qiluvchi tomonlar bilan toʻgʻridan-toʻgʻri aloqalar",
        b2: "Sayohatdan keyin ham 24/7 mijozlarni qoʻllab-quvvatlash",
        b3: "1000 dan ortiq mamnun sayohatchilar"
      },
      form: {
        title: "Shaxsiy tur tanloviga ega boʻling",
        desc: "Menejerimiz siz bilan bogʻlanadi va faqat tekshirilgan variantlarni taklif qiladi.",
        name: "Ism",
        name_ph: "Ismingizni kiriting",
        phone: "Telefon",
        dest: "Qayerga borishni xohlaysiz?",
        dest_ph: "Mamlakat yoki shahar",
        date: "Sayohatni qachonga rejalashtiryapsiz?",
        date_ph: "Sayohat vaqti (masalan, Avgust)",
        people: "Necha kishi?",
        people_ph: "2 kishi",
        budget: "Taxminiy budjet?",
        budget_ph: "$0",
        btn: "Taklif olish"
      }
    },
    destinations: {
      title: "Qanday hordiq qidiryapsiz?",
      subtitle: "BONUS: Sayohat formatini tanlang va Tur-xaritasiga ega boʻling!🎁",
      search: {
        title: "Qayerga borishni aniqlab boʻldingizmi? Oʻzingizga mos yoʻnalishni toping.",
        ph: "Mamlakat yoki shaharni kiriting",
        btn: "Yoʻnalishni topish"
      },
      items: {
        i1: { t: "Dengiz va okean boʻyida hordiq", d: "Ishdan uzilib, tiklanishni istaganlar uchun. Oq qum, iliq suv va mukammal servisga ega mehmonxonalar.", b: "Dengizga" },
        i2: { t: "Togʻlar, tabiat va musaffo havo", d: "Manzaralar, sukunat va haqiqiy hordiq maskanlari. Ekskursiyalar, panoramali koʻrinishlar va shahar shovqinidan uzoqda dam olish.", b: "Togʻlarga" },
        i3: { t: "Zamonaviy megapolislar", d: "Dubay, Singapur, Malayziya va kelajakning boshqa shaharlari. Texnologiyalar, arxitektura, shoping va joʻshqin shahar hayoti.", b: "Shaharlarga" },
        i4: { t: "Tarix va qadimiy meros", d: "Piramidalar, qadimiy shaharlar va madaniy marshrutlar. Dunyoqarashni kengaytiruvchi sayohat.", b: "Tarixga" },
        i5: { t: "Romantik sayohat", d: "Asal oyi yoki ikki kishilik hordiq uchun ideal. Ikki kishilik mehmonxonalar, goʻzal quyosh botishi va esda qolarli muhit.", b: "Romantika" },
        i6: { t: "Oilaviy hordiq", d: "Kattalar va bolalar uchun qulay mehmonxonalar. Animatsiya, xavfsiz plajlar va oilaviy oʻyin-kulgilar.", b: "Oila bilan" },
        i7: { t: "Vizasiz budjetli hordiq", d: "Ortiqcha tayyorgarliksiz tez yoʻnalishlar. Kutilmagan sayohatlar uchun ayni muddao.", b: "Vizasiz" },
        i8: { t: "Ekzotik yoʻnalishlar", d: "Butun umr xotirada qoladigan joylar. Orollar, jungli va noyob tabiat.", b: "Ekzotikaga" }
      }
    },
    guides: {
      title: "Hordiq — tur sotib olishdan avval boshlanadi.",
      subtitle: "Gidlar va qidiruvlarsiz. Eng yaxshi mehmonxona, restoranlar, ekskursiyalar va marshrutlar bir sahifada.",
      btn_more: "Ko'proq ko'rish",
      items: {
        i1: { t: "Dubay — mukammal haftani qanday oʻtkazish kerak", d: "Rove La Mer mehmonxonasi → Al Quoz art-kvartalida Boston Lane nonushtasi → Al Seef yashirin koʻchalari → Eleven Green’da kechki ovqat. Fidjka: Navbatlarsiz yoʻriqnoma.", b: "Gaydni ochish" },
        i2: { t: "Sharm-al-Shayx — Qizil dengiz boʻyida hordiq", d: "Sunrise Arabian Beach mehmonxonasi → Ras-Umm-el-Sid buxtasi → Fares Seafood’da tushlik → Farsha Mountain Lounge’da oqshom. Fidjka: Marjon riflari.", b: "Gaydni ochish" },
        i3: { t: "Pxuket — eng yaxshi plyajlar va marshrutlar", d: "The Slate mehmonxonasi → Banana Beach yashirin plyaji → Eski Pxuket shahri → Sunday Walking Street bozoridagi taomlar. Fidjka: 'instagrambop' manzillar xaritasi.", b: "Gaydni ochish" },
        i4: { t: "Istanbul — kolorit va gastronomiya", d: "CVK Park Bosphorus mehmonxonasi → Hafiz Mustafa nonushtasi → Galata minorasi → Nusr-Et’da kechki ovqat. Fidjka: Qanday savdolashish kerak.", b: "Gaydni ochish" }
      }
    },
    reviews: {
      title: "Mijozlarimizning samimiy taassurotlari",
      sub1: "Biz har bir safardan soʻng fikrlarni toʻplaymiz.",
      sub2: "Keyingi hordigʻingiz yanada yaxshiroq boʻlishi uchun",
      sub3: "fikrlarni boricha qabul qilamiz.",
      reels: "Instagram Reels Sharh",
      tg: "Telegram Skrinshoti"
    },
    whyus: {
      title: "Nima uchun Taasurot?",
      subtitle: "Biz shunchaki turlarni sotmaymiz. Bizning vazifamiz — hordigʻingiz siz kutgandek boʻlishini taʼminlashdir.",
      btn: "Sayohatni tanlash",
      items: {
        i1: { t: "Soʻrovingizga mos sayohat tanlimiz", d: "Oʻnlab tasodifiy variantlarni taklif qilmasdan, xohish va talablaringiz asosida tur taklif etamiz." },
        i2: { t: "Toʻgʻridan-toʻgʻri hamkorlik", d: "Yetakchi mehmonxona va xalqaro hamkorlar bilan aloqalarimiz bor. Bu sizga yuqori darajadagi servisni kafolatlaydi! Maxsus soʻrovlaringiz boʻlsa toʻgʻri menedjer orqali xal qilib berolimiz." },
        i3: { t: "Mehmonxonalar haqida aniq maʼlumot", d: "Xona maydoni, joylashuvi, servis kamchilik va yutuqlari – oldindan rost maʼlumot beramiz. Anglashmovchilik kelib chiqmasligi uchun, tajribamizdan kelib chiqib tavsiyalar beramiz." },
        i4: { t: "Turistlarimizni rozi qilamiz", d: "Pastroqda turistlarimizning sharhlarini koʻrishingiz mumkin. Biz kamchiliklar aytilmasa sharh qabul qilmimiz. Yashirmaymiz, aksincha ustimizda ishlaymiz." },
        i5: { t: "Umrbod aloqadamiz", d: "Safar davomida, safardan keyin savollar tugʻilsa albatta yozing, qoʻldan kelgancha tez va toʻgʻri xal qilamiz." }
      }
    },
    lead: {
      title: "Ma'lumot qoldiring — biz sizga eng yaxshi taklifni yuboramiz.",
      subtitle: "Menejerimiz siz bilan 24 soat ichida bogʻlanib, mos variantlarni taklif etadi.",
      m1: "Soʻrovingizga mos turni tanlimiz",
      m2: "Mehmonxonalar haqida sizga aniq maʼlumot beramiz",
      m3: "Sovgʻa sifatida sayohatingiz \"Samarali kun\" gaydni tashlab beramiz. (Ichida Lokatsiya, promokodlar va turistlarimiz fikrlari)",
      form: {
        name: "Ism",
        name_ph: "Ismingizni kiriting",
        phone: "Telefon",
        date: "Qachon borishni rejalashtiryapsiz",
        date_ph: "Sayohat vaqti (masalan, Avgust)",
        people: "Necha kishi",
        people_ph: "2 nafar",
        budget: "Taxminiy budjet",
        budget_ph: "$0",
        btn: "Taklif olish"
      },
      footer: {
        rights: "Barcha huquqlar himoyalangan",
        contact: "Toʻgʻridan-toʻgʻri yozish:"
      }
    }
  }
};
