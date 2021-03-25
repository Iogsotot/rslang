import React, { useState, useEffect, FC } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import Button from './Button';
import Streak from './Streak';
import { shuffleArray, getRandomBooleanAnswer, randomInteger } from '../../../libs/random';
import { compareAnswer } from '../../../libs/gameLogic';
import { animateBorderColor } from '../../../libs/common';
import { WordsProps, Word } from '../../../models';
import { WordPair } from './Sprint.model';

import './Sprint.scss';

const Sprint: FC<WordsProps> = ({ words }) => {
  const [sprintWords, setSprintWords] = useState(shuffleArray(words));
  const [streak, setStreak] = useState(0);
  const [tick, setTick] = useState(true);
  const [pair, setPair] = useState({
    word: 'null',
    wordTranslate: 'null',
    answer: false,
  });

  const findWordPair = ():WordPair => {
    if (sprintWords.length < 1) {
      // тута запускаем сообщение о конце игры
      return pair;
    }
    const wordsList = sprintWords.slice(0);
    const word = wordsList.pop() as Word;

    setSprintWords(wordsList);

    return getRandomBooleanAnswer() ?
      {
        word: word.word,
        wordTranslate: word.wordTranslate,
        answer: true }
      : {
        word: word.word,
        wordTranslate: sprintWords[randomInteger(sprintWords.length - 2)].wordTranslate,
        answer: false,
      };
  };

  useEffect(() => {
    setPair(findWordPair());
  }, []);

  const handleBtnClick = (arg:boolean):void => {
    if (compareAnswer(arg, pair.answer)) {
      // correct answer
      setStreak((old) => old + 1);
      animateBorderColor('.sprint__box', '141, 71%, 48%');
    } else {
      // wrong answer
      setStreak(0);
      animateBorderColor('.sprint__box', '348, 100%, 61%');
    }
    setPair(findWordPair());
  };

  const { word, wordTranslate } = pair;
  return (
    <div className="sprint">
      <div className="countdown-wrapper">
        <CountdownCircleTimer
          onComplete={() => console.log('помогите, я застрял в коллбеке')}
          size={80}
          strokeWidth={3}
          isPlaying={tick}
          duration={10}
          colors={'#00d1b2'}>
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <button onClick={() => setTick((old) => !old)}>pause</button>
      <div className='box sprint__box'>
        <Streak streak={streak}/>
        <div className="sprint__game-wrapper">
          <div className="title">{word}</div>
          <div className="subtitle">{wordTranslate}</div>
          <div className="buttons">
            <Button className="is-danger" text="Wrong" onBtnClick={handleBtnClick} answer={false}/>
            <Button className="is-success" text="Correct" onBtnClick={handleBtnClick} answer={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
