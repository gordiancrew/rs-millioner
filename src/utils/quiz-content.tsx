import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from "../styles/quiz.module.scss";
import { CheckAnswer } from "../types.ts/chaeckAnswer";
import { questState } from "../types.ts/iquest-state";
import { ICase } from "../types.ts/iquestion";


interface IQuiz {
  ask: string;
  anses: Array<ICase>;
  level: number;
  setLevel: Function;
  setTimeOn: Function;
  timer: number;
  setTimer: Function;
  setAnswerShema: Function;
  rightAnswerStyle: Object;
  setRightAnswerStyle: Function
  fiftyFiftyStyle: Object;
  setFiftyFiftyStyle: Function;
}

export default function QuizContent(props: IQuiz) {

  const navi = useNavigate()
  const questHundler = function (checketQuestion: CheckAnswer, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let currentElem = e.currentTarget;
    props.setTimeOn(false)
    if (checketQuestion === CheckAnswer.right) {
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
        if (props.level < 4) {
          props.setFiftyFiftyStyle({})
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
      setTimeout(() => props.setRightAnswerStyle({ backgroundColor: "blue" }), 2000);
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
            <div style={props.anses[0].check === CheckAnswer.right ? props.rightAnswerStyle :
              props.anses[0].check == CheckAnswer.falsy ? props.fiftyFiftyStyle : {}

            }
              onClick={(e) => questHundler(props.anses[0].check, e)} className={cl.line_hexagon__content}>
              <h4>{props.anses[0].content}
              {props.anses[0].check==CheckAnswer.right ?'+':'' }</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div style={props.anses[1].check === CheckAnswer.right ? props.rightAnswerStyle :
              props.anses[1].check == CheckAnswer.falsy ? props.fiftyFiftyStyle : {}}
              onClick={(e) => questHundler(props.anses[1].check, e)} className={cl.line_hexagon__content}>
              <h4>{props.anses[1].content}
              {props.anses[1].check==CheckAnswer.right ?'+':'' }</h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div style={props.anses[2].check === CheckAnswer.right ? props.rightAnswerStyle :
              props.anses[2].check == CheckAnswer.falsy ? props.fiftyFiftyStyle : {}}
              onClick={(e) => questHundler(props.anses[2].check, e)} className={cl.line_hexagon__content}>
              <h4>{props.anses[2].content}
              {props.anses[2].check==CheckAnswer.right ?'+':'' }</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div style={props.anses[3].check === CheckAnswer.right ? props.rightAnswerStyle :
              props.anses[3].check == CheckAnswer.falsy ? props.fiftyFiftyStyle : {}
            }
              onClick={(e) => questHundler(props.anses[3].check, e)} className={cl.line_hexagon__content}>
              <h4>{props.anses[3].content}
              {props.anses[3].check==CheckAnswer.right ?'+':'' }
              </h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
      </div>
    </section>
  );
}
