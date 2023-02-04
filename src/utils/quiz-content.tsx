import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from "../styles/quiz.module.scss";
import { questState } from "../types.ts/iquest-state";
import { ICase } from "../types.ts/iquestion";


interface IQuiz {
  ask: string;
  ans0: ICase;
  ans1: ICase;
  ans2: ICase;
  ans3: ICase;
  level: number;
  setLevel: Function;
  setTimeOn: Function;
  timer: number;
  setTimer: Function;
  setAnswerShema: Function;
}

export default function QuizContent(props: IQuiz) {
const [rightAnswerStyle, setRightAnswerStyle]=useState({})
  const navi = useNavigate()
  const questHundler = function (checketQuestion: boolean, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let currentElem = e.currentTarget;
    props.setTimeOn(false)
    if (checketQuestion) {
      currentElem.style.backgroundColor = 'yellow';
      setTimeout(() => currentElem.style.backgroundColor = 'green', 2000);
      setTimeout(() => currentElem.style.backgroundColor = 'white', 2100);
      setTimeout(() => currentElem.style.backgroundColor = 'green', 2200);
      setTimeout(() => currentElem.style.backgroundColor = 'white', 2300);
      setTimeout(() => currentElem.style.backgroundColor = 'green', 2400);
      setTimeout(() => currentElem.style.backgroundColor = 'white', 2500);
      setTimeout(() => currentElem.style.backgroundColor = 'green', 2600);
      setTimeout(() => props.setLevel((x: number) => {
        currentElem.style.backgroundColor = 'white';
        if (props.level < 3) {
          props.setAnswerShema(questState.progress);
          return x + 1
        }
        else {
          props.setAnswerShema(questState.end);
          return x
        }
      }
      ), 4000)
    } else {
      currentElem.style.backgroundColor = 'yellow';
      setTimeout(() => currentElem.style.backgroundColor = 'red', 2000);
      setTimeout(() => setRightAnswerStyle({backgroundColor:"blue"}), 2000);
      setTimeout(() => props.setAnswerShema(questState.end), 4000);

    }
  }
  return (
    <section className={cl.quiz_section}>
      <div className={cl.question_wrapper}>
        <div className={cl.question_wrapper__horizontLine}></div>
        <div className={cl.question_wrapper__hexagon}>
          <div className={cl.question_content}
          >
            <h1>{props.ask}</h1>
          </div>
        </div>
        <div className={cl.question_wrapper__horizontLine}></div>
      </div>
      <div className={cl.answer_wrapper}>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div style={props.ans0.check?rightAnswerStyle:{}}
             onClick={(e) => questHundler(props.ans0.check, e)} className={cl.line_hexagon__content}>
              <h4>{props.ans0.content}</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div style={props.ans1.check?rightAnswerStyle:{}}
             onClick={(e) => questHundler(props.ans1.check, e)} className={cl.line_hexagon__content}>
              <h4>{props.ans1.content}</h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div style={props.ans2.check?rightAnswerStyle:{}}
             onClick={(e) => questHundler(props.ans2.check, e)} className={cl.line_hexagon__content}>
              <h4>{props.ans2.content}</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div style={props.ans3.check?rightAnswerStyle:{}}
             onClick={(e) => questHundler(props.ans3.check, e)} className={cl.line_hexagon__content}>
              <h4>{props.ans3.content}</h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
      </div>
    </section>
  );
}
