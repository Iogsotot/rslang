import React, { FC, useState } from 'react';

const Audiocall: FC = () => {
  const [count, setCount] = useState(0);
  const [currentView, setCurrentView] = useState(false);

  const words = [
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a0',
      },
      group: 0,
      page: 0,
      word: 'alcohol',
      image: 'files/01_0002.jpg',
      audio: 'files/01_0002.mp3',
      audioMeaning: 'files/01_0002_meaning.mp3',
      audioExample: 'files/01_0002_example.mp3',
      textMeaning: 'Alcohol is a type of drink that can make people drunk.',
      textExample: 'A person should not drive a car after he or she has been drinking alcohol.',
      transcription: '[ǽlkəhɔ̀ːl]',
      __v: 0,
      textExampleTranslate: 'Человек не должен водить машину после того, как он выпил алкоголь',
      textMeaningTranslate: 'Алкоголь - это тип напитка, который может сделать людей пьяными',
      wordTranslate: 'алкоголь',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a2',
      },
      group: 0,
      page: 0,
      word: 'boat',
      image: 'files/01_0005.jpg',
      audio: 'files/01_0005.mp3',
      audioMeaning: 'files/01_0005_meaning.mp3',
      audioExample: 'files/01_0005_example.mp3',
      textMeaning: 'A boat is a vehicle that moves across water.',
      textExample: 'There is a small boat on the lake.',
      transcription: '[bout]',
      __v: 0,
      textExampleTranslate: 'На озере есть маленькая лодка',
      textMeaningTranslate: 'Лодка - это транспортное средство, которое движется по воде',
      wordTranslate: 'лодка',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a1',
      },
      group: 0,
      page: 0,
      word: 'agree',
      image: 'files/01_0001.jpg',
      audio: 'files/01_0001.mp3',
      audioMeaning: 'files/01_0001_meaning.mp3',
      audioExample: 'files/01_0001_example.mp3',
      textMeaning: 'To agree is to have the same opinion or belief as another person.',
      textExample: 'The students agree they have too much homework.',
      transcription: '[əgríː]',
      __v: 0,
      textExampleTranslate: 'Студенты согласны, что у них слишком много домашней работы',
      textMeaningTranslate: 'Согласиться - значит иметь то же мнение или убеждение, что и другой человек',
      wordTranslate: 'согласна',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a3',
      },
      group: 0,
      page: 0,
      word: 'arrive',
      image: 'files/01_0003.jpg',
      audio: 'files/01_0003.mp3',
      audioMeaning: 'files/01_0003_meaning.mp3',
      audioExample: 'files/01_0003_example.mp3',
      textMeaning: 'To arrive is to get somewhere.',
      textExample: 'They arrived at school at 7 a.m.',
      transcription: '[əráiv]',
      __v: 0,
      textExampleTranslate: 'Они прибыли в школу в 7 часов утра',
      textMeaningTranslate: 'Приехать значит попасть куда-то',
      wordTranslate: 'прибыть',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a4',
      },
      group: 0,
      page: 0,
      word: 'August',
      image: 'files/01_0004.jpg',
      audio: 'files/01_0004.mp3',
      audioMeaning: 'files/01_0004_meaning.mp3',
      audioExample: 'files/01_0004_example.mp3',
      textMeaning: 'August is the eighth month of the year.',
      textExample: 'Is your birthday in August?',
      transcription: '[ɔ́ːgəst]',
      __v: 0,
      textExampleTranslate: 'У тебя день рождения в августе?',
      textMeaningTranslate: 'Август - восьмой месяц года',
      wordTranslate: 'август',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a5',
      },
      group: 0,
      page: 0,
      word: 'breakfast',
      image: 'files/01_0006.jpg',
      audio: 'files/01_0006.mp3',
      audioMeaning: 'files/01_0006_meaning.mp3',
      audioExample: 'files/01_0006_example.mp3',
      textMeaning: 'Breakfast is the morning meal.',
      textExample: 'I ate eggs for breakfast.',
      transcription: '[brekfəst]',
      __v: 0,
      textExampleTranslate: 'Я ел яйца на завтрак',
      textMeaningTranslate: 'Завтрак - это утренняя трапеза',
      wordTranslate: 'завтрак',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a6',
      },
      group: 0,
      page: 0,
      word: 'camera',
      image: 'files/01_0007.jpg',
      audio: 'files/01_0007.mp3',
      audioMeaning: 'files/01_0007_meaning.mp3',
      audioExample: 'files/01_0007_example.mp3',
      textMeaning: 'A camera is a piece of equipment that takes pictures.',
      textExample: 'I brought my camera on my vacation.',
      transcription: '[kǽmərə]',
      __v: 0,
      textExampleTranslate: 'Я принес свою камеру в отпуск',
      textMeaningTranslate: 'Камера - это часть оборудования, которая делает снимки',
      wordTranslate: 'камера',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a7',
      },
      group: 0,
      page: 0,
      word: 'capital',
      image: 'files/01_0008.jpg',
      audio: 'files/01_0008.mp3',
      audioMeaning: 'files/01_0008_meaning.mp3',
      audioExample: 'files/01_0008_example.mp3',
      textMeaning: 'A capital is a city where a country’s government is based.',
      textExample: 'The capital of the United States is Washington, D.C.',
      transcription: '[kæpətl]',
      __v: 0,
      textExampleTranslate: 'Столица Соединенных Штатов - Вашингтон, округ Колумбия',
      textMeaningTranslate: 'Столица - это город, в котором базируется правительство страны',
      wordTranslate: 'столица',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a8',
      },
      group: 0,
      page: 0,
      word: 'catch',
      image: 'files/01_0009.jpg',
      audio: 'files/01_0009.mp3',
      audioMeaning: 'files/01_0009_meaning.mp3',
      audioExample: 'files/01_0009_example.mp3',
      textMeaning: 'To catch is to grab or get something.',
      textExample: 'Did you catch the ball during the baseball game?',
      transcription: '[kætʃ]',
      __v: 0,
      textExampleTranslate: 'Вы поймали мяч во время игры в бейсбол?',
      textMeaningTranslate: 'Поймать - значит схватить или получить что-то',
      wordTranslate: 'поймать',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4a9',
      },
      group: 0,
      page: 0,
      word: 'duck',
      image: 'files/01_0010.jpg',
      audio: 'files/01_0010.mp3',
      audioMeaning: 'files/01_0010_meaning.mp3',
      audioExample: 'files/01_0010_example.mp3',
      textMeaning: 'A duck is a small water bird.',
      textExample: 'People feed ducks at the lake.',
      transcription: '[dʌk]',
      __v: 0,
      textExampleTranslate: 'Люди кормят уток у озера',
      textMeaningTranslate: 'Утка - маленькая водяная птица',
      wordTranslate: 'утка',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4aa',
      },
      group: 0,
      page: 0,
      word: 'enjoy',
      image: 'files/01_0011.jpg',
      audio: 'files/01_0011.mp3',
      audioMeaning: 'files/01_0011_meaning.mp3',
      audioExample: 'files/01_0011_example.mp3',
      textMeaning: 'To enjoy is to like something.',
      textExample: 'The woman enjoys riding her bicycle.',
      transcription: '[indʒɔ́i]',
      __v: 0,
      textExampleTranslate: 'Женщина любит кататься на велосипеде',
      textMeaningTranslate: 'Наслаждаться значит любить что-то',
      wordTranslate: 'наслаждаться',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4ab',
      },
      group: 0,
      page: 0,
      word: 'invite',
      image: 'files/01_0012.jpg',
      audio: 'files/01_0012.mp3',
      audioMeaning: 'files/01_0012_meaning.mp3',
      audioExample: 'files/01_0012_example.mp3',
      textMeaning: 'To invite is to ask someone to come to a place or event.',
      textExample: 'I will invite my friends to my birthday party.',
      transcription: '[inváit]',
      __v: 0,
      textExampleTranslate: 'Я приглашаю своих друзей на мой день рождения',
      textMeaningTranslate: 'Пригласить - это попросить кого-нибудь прийти на место или событие',
      wordTranslate: 'пригласить',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4ac',
      },
      group: 0,
      page: 0,
      word: 'month',
      image: 'files/01_0014.jpg',
      audio: 'files/01_0014.mp3',
      audioMeaning: 'files/01_0014_meaning.mp3',
      audioExample: 'files/01_0014_example.mp3',
      textMeaning: 'A month is one of 12 periods of time in one year.',
      textExample: 'January is the first month of the year.',
      transcription: '[mʌnθ]',
      __v: 0,
      textExampleTranslate: 'январь - первый месяц года',
      textMeaningTranslate: 'Месяц - это один из 12 периодов времени в году',
      wordTranslate: 'месяц',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4ad',
      },
      group: 0,
      page: 0,
      word: 'travel',
      image: 'files/01_0015.jpg',
      audio: 'files/01_0015.mp3',
      audioMeaning: 'files/01_0015_meaning.mp3',
      audioExample: 'files/01_0015_example.mp3',
      textMeaning: 'To travel is to go to a faraway place on vacation or business.',
      textExample: 'They will travel to Argentina this summer.',
      transcription: '[trǽvəl]',
      __v: 0,
      textExampleTranslate: 'Этим летом они отправятся в Аргентину',
      textMeaningTranslate: 'Путешествовать - это отправиться в далекое место на отдых или по делам',
      wordTranslate: 'путешествовать',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4ae',
      },
      group: 0,
      page: 0,
      word: 'love',
      image: 'files/01_0013.jpg',
      audio: 'files/01_0013.mp3',
      audioMeaning: 'files/01_0013_meaning.mp3',
      audioExample: 'files/01_0013_example.mp3',
      textMeaning: 'To love is to like something or someone a lot.',
      textExample: 'I love my family very much.',
      transcription: '[lʌv]',
      __v: 0,
      textExampleTranslate: 'Я очень люблю свою семью',
      textMeaningTranslate: 'Любить значит любить что-то или кого-то много',
      wordTranslate: 'любовь',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4af',
      },
      group: 0,
      page: 0,
      word: 'typical',
      image: 'files/01_0016.jpg',
      audio: 'files/01_0016.mp3',
      audioMeaning: 'files/01_0016_meaning.mp3',
      audioExample: 'files/01_0016_example.mp3',
      textMeaning: 'If something is typical, it is normal, or something that usually happens.',
      textExample: 'My typical breakfast is toast and eggs.',
      transcription: '[típikəl]',
      __v: 0,
      textExampleTranslate: 'Мой типичный завтрак - тост и яйца',
      textMeaningTranslate: 'Если что-то типичное, это нормально, или что-то, что обычно происходит',
      wordTranslate: 'типичный',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4b0',
      },
      group: 0,
      page: 0,
      word: 'visit',
      image: 'files/01_0017.jpg',
      audio: 'files/01_0017.mp3',
      audioMeaning: 'files/01_0017_meaning.mp3',
      audioExample: 'files/01_0017_example.mp3',
      textMeaning: 'To visit is to go and spend time in another place or see another person.',
      textExample: 'She wants to visit her grandmother.',
      transcription: '[vízit]',
      __v: 0,
      textExampleTranslate: 'Она хочет навестить свою бабушку',
      textMeaningTranslate: 'Посетить - значит пойти и провести время в другом месте или увидеть другого человека',
      wordTranslate: 'посещение',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4b1',
      },
      group: 0,
      page: 0,
      word: 'weather',
      image: 'files/01_0018.jpg',
      audio: 'files/01_0018.mp3',
      audioMeaning: 'files/01_0018_meaning.mp3',
      audioExample: 'files/01_0018_example.mp3',
      textMeaning: 'Weather is the temperature and the state of the outdoors.',
      textExample: 'Today’s weather is rainy and cloudy.',
      transcription: '[weðər]',
      __v: 0,
      textExampleTranslate: 'Сегодня погода дождливая и облачная',
      textMeaningTranslate: 'Погода это температура и состояние на улице',
      wordTranslate: 'погода',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4b2',
      },
      group: 0,
      page: 0,
      word: 'wine',
      image: 'files/01_0020.jpg',
      audio: 'files/01_0020.mp3',
      audioMeaning: 'files/01_0020_meaning.mp3',
      audioExample: 'files/01_0020_example.mp3',
      textMeaning: 'Wine is an alcoholic drink made from grapes.',
      textExample: 'The store carried both red and white wine.',
      transcription: '[wain]',
      __v: 0,
      textExampleTranslate: 'В магазине было красное и белое вино',
      textMeaningTranslate: 'Вино - это алкогольный напиток из винограда',
      wordTranslate: 'вино',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4b4',
      },
      group: 0,
      page: 1,
      word: 'adventure',
      image: 'files/02_0021.jpg',
      audio: 'files/02_0021.mp3',
      audioMeaning: 'files/02_0021_meaning.mp3',
      audioExample: 'files/02_0021_example.mp3',
      textMeaning: 'An adventure is a fun or exciting thing that you do.',
      textExample: 'Riding in the rough water was an adventure.',
      transcription: '[ədvéntʃər]',
      __v: 0,
      textExampleTranslate: 'Езда в бурной воде была приключением',
      textMeaningTranslate: 'Приключение - это забавная или захватывающая вещь, которую ты делаешь',
      wordTranslate: 'приключение',
    },
    {
      _id: {
        $oid: '5e9f5ee35eb9e72bc21af4b3',
      },
      group: 0,
      page: 0,
      word: 'week',
      image: 'files/01_0019.jpg',
      audio: 'files/01_0019.mp3',
      audioMeaning: 'files/01_0019_meaning.mp3',
      audioExample: 'files/01_0019_example.mp3',
      textMeaning: 'A week is a period of time that is seven days long.',
      textExample: 'What are you doing next week?',
      transcription: '[wiːk]',
      __v: 0,
      textExampleTranslate: 'Что ты делаешь на следующей неделе?',
      textMeaningTranslate: 'Неделя - это период времени, который длится семь дней',
      wordTranslate: 'неделя',
    },
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const playAudio = () => {
    const wordAudio = new Audio(`https://rslang-2020q3.herokuapp.com/${currentWord.audio}`);
    wordAudio.play();
  };

  const OpenCurrentWord = () => (
    <div>
      <img src={`https://rslang-2020q3.herokuapp.com/${currentWord.image}`} />
      <button onClick={playAudio}>Play</button>
      <div>{currentWord.word}</div>
    </div>
  );
  const CloseCurrentWord = () => (
    <div>
      <button onClick={playAudio}>Play</button>
    </div>
  );
  return (
    <div className="audiocall">
      <div className="current_word__box">
        {currentView && <OpenCurrentWord/>}
        {!currentView && <CloseCurrentWord/>}
      </div>
      <div className="variants">
        <button className="word_button">{currentWord.wordTranslate}</button>
        <button className="word_button">{words[1].wordTranslate}</button>
        <button className="word_button">{words[2].wordTranslate}</button>
        <button className="word_button">{words[3].wordTranslate}</button>
        <button className="word_button">{words[4].wordTranslate}</button>
      </div>
      <button>Я не знаю</button>
    </div>
  );
};

export default Audiocall;
