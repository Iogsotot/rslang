import { FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Word from '../Audiocall.model';
import { FinishProps } from './Finish.model';
import 'react-tabs/style/react-tabs.css';

const Finish: FC<FinishProps> = ({ correctAnswers, wrongAnswers }) => {
  const wordSoundUrl = (word: Word) => `https://rslang-2020q3.herokuapp.com/${word?.audio}`;
  const playSound = (soundUrl: string) => {
    const wordAudio = new Audio(soundUrl);
    wordAudio.play();
  };

  const finishList = (list: Word[]) => (
    <div>
      {list.map((word: Word) => (
        <div className="finish__words-list__row">
          <button
            onClick={() => playSound(wordSoundUrl(word))}
            key={word.word}
            className="audiocall__volume volume-button"
          >
            <i className="fas fa-volume-up"></i>
          </button>
          <span>{`${word.word.toUpperCase()} - ${word.wordTranslate}`}</span>
        </div>
      ))}
    </div>
  );

  const CorrectList = () => finishList(correctAnswers);

  const WrongList = () => finishList(wrongAnswers);

  return (
    <div className="audiocall">
      <div className="box finish">
        <Tabs>
          <TabList>
            <Tab>
              <i className="fas fa-circle"></i>
            </Tab>
            <Tab>
              <i className="fas fa-circle"></i>
            </Tab>
          </TabList>

          <TabPanel>
            <div>Отличный результат!</div>
            <div>{`${correctAnswers.length} изучено, ${wrongAnswers.length} на изучении`}</div>
          </TabPanel>
          <TabPanel>
            <div className="finish__tab-inner">
              <Scrollbars hideTracksWhenNotNeeded>
                <div className="finish__words-list">
                  <div>
                    <div>
                      <span>Знаю</span>
                      <span className="finish__akcent-number">{correctAnswers.length}</span>
                    </div>
                    <CorrectList />
                  </div>

                  <div>
                    <div>
                      <span>Сложно</span>
                      <span className="finish__akcent-number">{wrongAnswers.length}</span>
                    </div>
                    <WrongList />
                  </div>
                </div>
              </Scrollbars>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default Finish;
