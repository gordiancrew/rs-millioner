import { useEffect, useState } from "react";
import { shuffleArr } from "../data/functionss";
import {

  dataQuestionBl,
  dataQuestionEn,
  dataQuestionRu,
} from "../data/questions";
import { questState } from "../types.ts/iquest-state";

import End from "../utils/end";
import HintBoolean from "../utils/hint-boolean";
import HintCall from "../utils/hint-call";
import ProgressShema from "../utils/progress-shema";
import QuestionHeader from "../utils/question-header";
import QuizContent from "../utils/quiz-content";
import Timer from "../utils/timer";

function Question({ t }: { t: Function }) {
  const [level, setLevel] = useState(0);
  let [totalPoints, setTotalPoints] = useState(0);
  const [timeOn, setTimeOn] = useState(true);
  const [timer, setTimer] = useState(30);
  const [answerShema, setAnswerShema] = useState(questState.quiz);
  const [rightAnswerStyle, setRightAnswerStyle] = useState({});
  const [fiftyFiftyStyle, setFiftyFiftyStyle] = useState({});
  const [booleanStyle, setBooleanStyle] = useState({});
  const [visibleHintBoolean, setVisibleHintBoolean] = useState(false);
  const [visibleHintCall, setVisibleHintCall] = useState(false);
  const [itemHintBoolean, setItemHintBoolean] = useState(false);
  const [itemFiftyFifty, setItemFiftyFifty] = useState(false);
  const [itemCall, setItemCall] = useState(false);
  const [keepMoney, setKeepMoney] = useState(false);

  function addPoints() {
    setTotalPoints(totalPoints + 100);
  }
  function repeatGame() {
    window.location.reload();
  }

  useEffect(() => {
    if (localStorage.languagegame === 'ru') {
      shuffleArr(dataQuestionRu[level]);
      shuffleArr(dataQuestionRu[level][0].ans);
    } else if (localStorage.languagegame === 'en') {
      shuffleArr(dataQuestionEn[level]);
      shuffleArr(dataQuestionEn[level][0].ans);
    } else if (localStorage.languagegame === 'bl') {
      shuffleArr(dataQuestionBl[level]);
      shuffleArr(dataQuestionBl[level][0].ans);
    }else{
      shuffleArr(dataQuestionRu[level]);
      shuffleArr(dataQuestionRu[level][0].ans);
    }
  }, [level]);


  if (answerShema === questState.quiz) {
    return (
      <div>
        <HintCall
          visibleHintCall={visibleHintCall}
          setVisibleHintCall={setVisibleHintCall}
          setItemCall={setItemCall}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          question={
            localStorage.languagegame === 'en' ? dataQuestionEn[level][0].ans :
              localStorage.languagegame === 'bl' ? dataQuestionBl[level][0].ans :
                dataQuestionRu[level][0].ans
          }
          shuffleArr={shuffleArr}
          t={t}
        />
        <HintBoolean
          visibleHintBoolean={visibleHintBoolean}
          setVisibleHintBoolean={setVisibleHintBoolean}
          question={
            localStorage.languagegame === 'en' ? dataQuestionEn[level][0].ans :
              localStorage.languagegame === 'bl' ? dataQuestionBl[level][0].ans :
                dataQuestionRu[level][0].ans
          }
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          setItemHintBoolean={setItemHintBoolean}
        />

        <QuestionHeader
          setVisibleHintBoolean={setVisibleHintBoolean}
          setTimeOn={setTimeOn}
          itemHintBoolean={itemHintBoolean}
          setItemHintBoolean={setItemHintBoolean}
          itemFiftyFifty={itemFiftyFifty}
          setItemFiftyFifty={setItemFiftyFifty}
          setFiftyFiftyStyle={setFiftyFiftyStyle}
          setTimer={setTimer}
          setVisibleHintCall={setVisibleHintCall}
          itemHintCall={itemCall}
          booleanStyle={booleanStyle}
          setBooleanStyle={setBooleanStyle}
          setKeepMoney={setKeepMoney}
          setAnswerShema={setAnswerShema}
          level={level}
        />

        <Timer
          setTimeOn={setTimeOn}
          timeOn={timeOn}
          setTimer={setTimer}
          setAnswerShema={setAnswerShema}
          timer={timer}
          setRightAnswerStyle={setRightAnswerStyle}
        />
        <QuizContent
          ask={
            localStorage.languagegame === 'en' ? dataQuestionEn[level][0].ask :
            localStorage.languagegame === 'bl' ? dataQuestionBl[level][0].ask :
              dataQuestionRu[level][0].ask
          }
          anses={
            localStorage.languagegame === 'en' ? dataQuestionEn[level][0].ans :
            localStorage.languagegame === 'bl' ? dataQuestionBl[level][0].ans :
              dataQuestionRu[level][0].ans
          }
          level={level}
          setLevel={setLevel}
          addPoints={addPoints}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          timer={timer}
          setAnswerShema={setAnswerShema}
          rightAnswerStyle={rightAnswerStyle}
          setRightAnswerStyle={setRightAnswerStyle}
          fiftyFiftyStyle={fiftyFiftyStyle}
          setFiftyFiftyStyle={setFiftyFiftyStyle}
          booleanStyle={booleanStyle}
          setBooleanStyle={setBooleanStyle}
        // play={play}
        />
      </div>
    );
  } else if (answerShema === questState.progress) {
    return (
      <ProgressShema
        level={level}
        setLevel={setLevel}
        setAnswerShema={setAnswerShema}
        setTimer={setTimer}
        setTimeOn={setTimeOn}
        t={t}
      />
    );
  } else {
    return (
      <End
        totalPoints={totalPoints}
        repeatGame={repeatGame}
        level={level}
        keepMoney={keepMoney}
        t={t}
      />
    );
  }
}
export default Question;
