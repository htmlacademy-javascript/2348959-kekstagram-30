const TOTAL_PHOTOS = 25;
const Likes = {
    MIN: 15,
    MAX: 200
}

const PHOTO_COMMENTS = [    //массив 25 комментариев
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    'Моя бабушка слепая. И умерла. Но всё равно сфотографировала бы котика лучше!',
    'Я просто излучаю негатив и выражаю повсюду своё недовольство, увы, терпите...',
    'Так вот из-за тебя все. Будь добр, сходи в госдуму седня.',
    'А я был пару раз в офисе гугл в Питере. Кто бы мог подумать.',
    'Думать надо было раньше. Или концы рубить или закон соблюдать.',
    'Утонет в слюнях?',
    'Можете начинать весь мир уговаривать пользоваться яндексом.',
    'Ой, а можно конкретнее, а не эти ваши влажные фантазии? Что будет-то?',
    'Кончилась эпоха – сказал мой корешок, Так-то жили плохо, но как-то хорошо.',
    'Всё, получается, как с вирусами) Сначала фейк, а потом антифейк)',
    'Без хрустального шара никак)',
    'Интересно, а как понять, будет ли человек работать на совесть?',
    'Мало конкретики и много оценочных суждений.',
    'А это везде так. Типаж такой, результат достигается давлением.',
    'Возможно, если бы наняли нормального HRD, он бы их уволил',
    'Прямо в самое сердце! Так и есть',
    'Рекрутинг — самый трудный бизнес.',
    'Лайк за борьбу с токсичностью!',
    'ахаха ну естественно это Андрей написал)',
];

const PHOTO_DESCRIPTIONS = [    //массив 25 описаний
    'Описание изображения - это проблема создания понятного человеку текстового описания изображения',
    'Это простая проблема для человека, но очень сложная для машины.',
    'Беглого взгляда достаточно, чтобы человек указал и описал огромное количество деталей о визуальной сцене.',
    'Присвойте изображению метку класса из одного или нескольких сотен известных классов.',
    'Извлеченные особенности являются внутренним представлением изображения, а не чем-то прямо понятным.',
    'Здесь нет готовых фильтров, как в остальных приложениях.',
    'Ограничение на бесплатный сервис составляет 25 изображений!',
    'Для расширенного тарифа в 30 долларов предоставляется 15 часов бесплатной работы',
    'Тестирование можно осуществить через сервис',
    'Затраты на генерацию в DreamStudio представлены кредитами',
    'Нажав на кнопку Draw, вы получите до девяти готовых картинок в течение нескольких минут!',
    'Инженеры ориентированы на создание более продвинутой версии нейросети!',
    'Можно получить всё, от людей и кошек, до кроссовок и звёздного неба',
    'Сегодня расскажем про техники отмывания денег и варианты защиты собственных сбережений.',
    'Злоумышленники не смогут легализовать активы, которые получили преступным путем!',
    'Клиент понимает — все манипуляции с деньгами покупателя и продавца контролирует собачка)',
    'Суть принципа — прежде чем оказывать те или иные услуги, побрейся!',
    'Существует много способов отмыть «грязную» криптовалюту',
    'Монеты и токены всех участников забрасывали в «общий котел»',
    'Вчера я чинил велосипед',
    'Субъективность и тленность своих переживаний и оценки собственного труда осознана.',
    'удовлетворенность заказчика зависит от стоимости работ))',
    'Это была одна из съемок, вряд ли клиент оценивал ее на дистанции!',
    'Я делал сайт, собирал материалы для кейсов, запускал яндекс директ.',
    'Это были крепкие рабочие отношения: я и бутылка односолодового виски'
];

let photos = [];

const getRandomizerFromTo = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const createPublication = (index) => ({
    id: index + 1,
    URL: `photos/${index + 1}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomizerFromTo(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomizerFromTo(Likes.MIN, Likes.MAX),
    comments: PHOTO_COMMENTS[getRandomizerFromTo(0, PHOTO_COMMENTS.length - 1)],
    });

const addComments = []

const addPhotos = () => {
    for (let i = 0; i < TOTAL_PHOTOS; i++) {
        photos.push(createPublication(i));
    }
};
addPhotos();
console.log(photos);