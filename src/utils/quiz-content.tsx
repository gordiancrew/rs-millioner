import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { booleanFalse, booleanTrue } from "../data/boolean";
import cl from "../styles/quiz.module.scss";
import { CheckAnswer } from "../types.ts/chaeckAnswer";
import { questState } from "../types.ts/iquest-state";
import { ICase } from "../types.ts/iquestion";
import { musicUrlEnum } from "../types.ts/music-url";

interface IQuiz {
  ask: string;
  anses: Array<ICase>;
  level: number;
  setLevel: Function;
  setTimeOn: Function;
  addPoints: Function;
  timer: number;
  setTimer: Function;
  setAnswerShema: Function;
  rightAnswerStyle: Object;
  setRightAnswerStyle: Function;
  fiftyFiftyStyle: Object;
  setFiftyFiftyStyle: Function;
  shuffleArr: Function;
  booleanStyle: object;
  setBooleanStyle: Function;
  // play:Function
}

export default function QuizContent(props: IQuiz) {
  // useEffect(()=>{props.play()},[])

  const [playRightAnswer] = useSound(musicUrlEnum.rightAnswer);
  const [playBadAnswer] = useSound(musicUrlEnum.badAnswer);
  const [playCurrentAnswer] = useSound(musicUrlEnum.currentAnswer);
  const [playNextLevel] = useSound(musicUrlEnum.nextLevel);
  const [playCircleSum] = useSound(musicUrlEnum.circleASum);
  const [stateAnswBtns, setStateAnswBtns] = useState(true);
  let boolFalse = booleanFalse;
  let boolTrue = booleanTrue;
  useEffect(() => {
    props.shuffleArr(boolFalse);
    props.shuffleArr(boolTrue);
  }, []);
  const navi = useNavigate();
  function disableAnswBtns() {
    setStateAnswBtns(!stateAnswBtns);
  }

  const questHundler = function (
    checketQuestion: CheckAnswer,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (stateAnswBtns) {
      playCurrentAnswer();
      let currentElem = e.currentTarget;
      props.setTimeOn(false);
      if (checketQuestion === CheckAnswer.right) {
        currentElem.style.backgroundColor = "yellow";

        setTimeout(() => {
          currentElem.style.backgroundColor = "green";
          props.level !== 4 && props.level !== 9
            ? playNextLevel()
            : playCircleSum();
        }, 2000);
        setTimeout(() => (currentElem.style.backgroundColor = "white"), 2100);
        setTimeout(() => (currentElem.style.backgroundColor = "green"), 2200);
        setTimeout(() => (currentElem.style.backgroundColor = "white"), 2300);
        setTimeout(() => (currentElem.style.backgroundColor = "green"), 2400);
        setTimeout(() => (currentElem.style.backgroundColor = "white"), 2500);
        setTimeout(() => (currentElem.style.backgroundColor = "green"), 2600);
        setTimeout(() => {
          props.setLevel((x: number) => {
            currentElem.style.backgroundColor = "white";
            if (props.level < 12) {
              props.setFiftyFiftyStyle({});
              props.setBooleanStyle({ display: "none" });
              props.setAnswerShema(questState.progress);
              props.addPoints();
              return x + 1;
            } else {
              props.setAnswerShema(questState.end);
              return x;
            }
          });
        }, 4000);
      } else {
        currentElem.style.backgroundColor = "yellow";
        setTimeout(() => {
          currentElem.style.backgroundColor = "red";
          playBadAnswer();
        }, 2000);
        setTimeout(
          () => props.setRightAnswerStyle({ backgroundColor: "blue" }),
          2000
        );
        setTimeout(() => props.setAnswerShema(questState.end), 4000);
      }
      disableAnswBtns();
    }
  };
  return (
    <section className={cl.quiz_section}>
      <div className={cl.question_wrapper}>
        <div className={cl.question_wrapper__horizontLine}></div>
        <div className={cl.question_wrapper__hexagon}>
          <div className={cl.question_content}>
            <h1>{props.ask}</h1>
          </div>
        </div>
        <div className={cl.question_wrapper__horizontLine}></div>
      </div>
      <div className={cl.answer_wrapper}>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                props.anses[0].check === CheckAnswer.right
                  ? props.rightAnswerStyle
                  : props.anses[0].check === CheckAnswer.falsy
                  ? props.fiftyFiftyStyle
                  : {}
              }
              onClick={(e) => questHundler(props.anses[0].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>A:&nbsp;</span>
                {props.anses[0].content}
              </h4>
              <div style={props.booleanStyle} className={cl.bool}>
                {props.anses[0].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[0]}
              </div>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                props.anses[1].check === CheckAnswer.right
                  ? props.rightAnswerStyle
                  : props.anses[1].check === CheckAnswer.falsy
                  ? props.fiftyFiftyStyle
                  : {}
              }
              onClick={(e) => questHundler(props.anses[1].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>B:&nbsp;</span>
                {props.anses[1].content}
              </h4>
              <div style={props.booleanStyle} className={cl.bool}>
                {props.anses[1].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[1]}
              </div>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                props.anses[2].check === CheckAnswer.right
                  ? props.rightAnswerStyle
                  : props.anses[2].check === CheckAnswer.falsy
                  ? props.fiftyFiftyStyle
                  : {}
              }
              onClick={(e) => questHundler(props.anses[2].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>C:&nbsp;</span>
                {props.anses[2].content}
              </h4>
              <div style={props.booleanStyle} className={cl.bool}>
                {props.anses[2].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[2]}
              </div>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                props.anses[3].check === CheckAnswer.right
                  ? props.rightAnswerStyle
                  : props.anses[3].check === CheckAnswer.falsy
                  ? props.fiftyFiftyStyle
                  : {}
              }
              onClick={(e) => questHundler(props.anses[3].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>D:&nbsp;</span>
                {props.anses[3].content}
              </h4>
              <div style={props.booleanStyle} className={cl.bool}>
                {props.anses[3].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[3]}
              </div>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
      </div>
    </section>
  );
}
