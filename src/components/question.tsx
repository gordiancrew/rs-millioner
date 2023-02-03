import { createContext, useState } from "react";
import { dataQuestion } from "../data/questions";
import { IQuestion } from "../types.ts/iquestion";
import ProgressShema from "../utils/progress-shema";
import QuestionHeader from "../utils/question-header";
import QuizContent from "../utils/quiz-content";
import Timer from "../utils/timer";


function Question() {
  const [level, setLevel] = useState(0);
  const [timeOn, setTimeOn] = useState(true);
  const [timer, setTimer] = useState(30);
  const [answerShema, setAnswerShema] = useState(true);
  const question: IQuestion = dataQuestion[level][0];

  if (answerShema) {
    return (
      <div>

        <QuestionHeader />

        <Timer
          setTimeOn={setTimeOn}
          timeOn={timeOn}
          setTimer={setTimer}
          timer={timer}
        />
        <QuizContent
          ask={question.ask}
          ans0={question.ans[0]}
          ans1={question.ans[1]}
          ans2={question.ans[2]}
          ans3={question.ans[3]}
          setLevel={setLevel}
          setTimeOn={setTimeOn}
          setTimer={setTimer}
          timer={timer}
          setAnswerShema={setAnswerShema}
        />
      </div>
    );
  } else {
    return (

      <ProgressShema
        level={level}
        setLevel={setLevel}
        setAnswerShema={setAnswerShema}
        setTimer={setTimer}
        setTimeOn={setTimeOn}
      />
    )
  }
}
export default Question;
