import { createContext, useState } from "react";
import { dataQuestion } from "../data/questions";
import { questState } from "../types.ts/iquest-state";
import { IQuestion } from "../types.ts/iquestion";
import End from "../utils/end";
import HintBoolean from "../utils/hint-boolean";
import ProgressShema from "../utils/progress-shema";
import QuestionHeader from "../utils/question-header";
import QuizContent from "../utils/quiz-content";
import Timer from "../utils/timer";

function Question() {
  const [level, setLevel] = useState(0);
  const [timeOn, setTimeOn] = useState(true);
  const [timer, setTimer] = useState(30);
  const [answerShema, setAnswerShema] = useState(questState.quiz);
  const [rightAnswerStyle, setRightAnswerStyle] = useState({});
  const [fiftyFiftyStyle, setFiftyFiftyStyle]=useState({});
  const [visibleHintBoolean, setVisibleHintBoolean] = useState(false);
  const [itemHintBoolean, setItemHintBoolean] = useState(false);
  const [itemFiftyFifty,setItemFiftyFifty]=useState(false)
  const question: IQuestion = dataQuestion[level][0];

  if (answerShema === questState.quiz) {
    return (
      <div>
        <HintBoolean
          visibleHintBoolean={visibleHintBoolean}
          setVisibleHintBoolean={setVisibleHintBoolean}
          question={question.ans}
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
          ask={question.ask}
          anses={question.ans}
          level={level}
          setLevel={setLevel}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          timer={timer}
          setAnswerShema={setAnswerShema}
          rightAnswerStyle={rightAnswerStyle}
          setRightAnswerStyle={setRightAnswerStyle}
          fiftyFiftyStyle={fiftyFiftyStyle}
          setFiftyFiftyStyle={setFiftyFiftyStyle}
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
      />
    );
  } else {
    return <End />;
  }
}
export default Question;
