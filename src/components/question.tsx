import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataQuestion } from "../data/questions";
import { IQuestion } from "../types.ts/iquestion";
import QuestionHeader from "../utils/question-header";
import QuizContent from "../utils/quiz-content";
import Timer from "../utils/timer";

function Question() {
  const [level, setLevel] = useState(0);
  const question: IQuestion = dataQuestion[level][0];
  const navi = useNavigate();

  const questHundler = function (checketQuestion: boolean) {
    if (checketQuestion) {
      setLevel(level + 1)
    } else {
      navi('/');
    }
  }
  return (
    <div>

      <QuestionHeader />
      <Timer />
      <QuizContent
        ask={question.ask}
        ans0={question.ans[0]}
        ans1={question.ans[1]}
        ans2={question.ans[2]}
        ans3={question.ans[3]}
        setLevel={setLevel}
      />
    </div>
  );
}
export default Question;
