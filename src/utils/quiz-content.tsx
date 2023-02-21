import React, { useEffect, useState } from "react";
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
}

export default function QuizContent(props: IQuiz) {
  const [playBadAnswer] = useSound(musicUrlEnum.badAnswer);
  const [playCurrentAnswer] = useSound(musicUrlEnum.currentAnswer);
  const [playNextLevel] = useSound(musicUrlEnum.nextLevel);
  const [playCircleSum] = useSound(musicUrlEnum.circleASum);
  const [stateAnswBtns, setStateAnswBtns] = useState(true);
  let boolFalse = booleanFalse;
  let boolTrue = booleanTrue;
  const {ask, shuffleArr, ...itemProps} = props;
  useEffect(() => {
    shuffleArr(boolFalse);
    shuffleArr(boolTrue);

    if (sessionStorage.getItem("voice") === null || sessionStorage.getItem("voice") === 'true') {
      window.speechSynthesis.cancel();
      let text = ask
      const utterance = new SpeechSynthesisUtterance(text);
      if (localStorage.languagegame === 'ru') {
        utterance.voice = window.speechSynthesis.getVoices()[17]
      } else if (localStorage.languagegame === 'en') {
        utterance.voice = window.speechSynthesis.getVoices()[3]
      } else if (localStorage.languagegame === 'bl') {
        utterance.voice = window.speechSynthesis.getVoices()[17]
      }
      window.speechSynthesis.speak(utterance);
    }
  }, []);

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
      itemProps.setTimeOn(false);
      if (checketQuestion === CheckAnswer.right) {
        currentElem.style.backgroundColor = "yellow";

        setTimeout(() => {
          currentElem.style.backgroundColor = "green";
          itemProps.level !== 4 && itemProps.level !== 9 && itemProps.level !== 14
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
          itemProps.setLevel((x: number) => {
            currentElem.style.backgroundColor = "white";
            if (itemProps.level < 14) {
              itemProps.setFiftyFiftyStyle({});
              itemProps.setBooleanStyle({ display: "none" });
              itemProps.setAnswerShema(questState.progress);
              itemProps.addPoints();
              return x + 1;
            } else {
              itemProps.setAnswerShema(questState.end);
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
          () => itemProps.setRightAnswerStyle({ backgroundColor: "blue" }),
          2000
        );
        setTimeout(() => itemProps.setAnswerShema(questState.end), 4000);
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
            <h1>{ask}</h1>
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
                itemProps.anses[0].check === CheckAnswer.right
                  ? itemProps.rightAnswerStyle
                  : itemProps.anses[0].check === CheckAnswer.falsy
                    ? itemProps.fiftyFiftyStyle
                    : {}
              }
              onClick={(e) => questHundler(itemProps.anses[0].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>A:&nbsp;</span>
                {itemProps.anses[0].content}
              </h4>
              <div style={itemProps.booleanStyle} className={cl.bool}>
                {itemProps.anses[0].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[0]}
              </div>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                itemProps.anses[1].check === CheckAnswer.right
                  ? itemProps.rightAnswerStyle
                  : itemProps.anses[1].check === CheckAnswer.falsy
                    ? itemProps.fiftyFiftyStyle
                    : {}
              }
              onClick={(e) => questHundler(itemProps.anses[1].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>B:&nbsp;</span>
                {itemProps.anses[1].content}
              </h4>
              <div style={itemProps.booleanStyle} className={cl.bool}>
                {itemProps.anses[1].check === CheckAnswer.right
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
                itemProps.anses[2].check === CheckAnswer.right
                  ? itemProps.rightAnswerStyle
                  : itemProps.anses[2].check === CheckAnswer.falsy
                    ? itemProps.fiftyFiftyStyle
                    : {}
              }
              onClick={(e) => questHundler(itemProps.anses[2].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>C:&nbsp;</span>
                {itemProps.anses[2].content}
              </h4>
              <div style={itemProps.booleanStyle} className={cl.bool}>
                {itemProps.anses[2].check === CheckAnswer.right
                  ? boolTrue[0]
                  : boolFalse[2]}
              </div>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div
              style={
                itemProps.anses[3].check === CheckAnswer.right
                  ? itemProps.rightAnswerStyle
                  : itemProps.anses[3].check === CheckAnswer.falsy
                    ? itemProps.fiftyFiftyStyle
                    : {}
              }
              onClick={(e) => questHundler(itemProps.anses[3].check, e)}
              className={cl.line_hexagon__content}
            >
              <h4>
                <span className={cl.optionLetters}>D:&nbsp;</span>
                {itemProps.anses[3].content}
              </h4>
              <div style={itemProps.booleanStyle} className={cl.bool}>
                {itemProps.anses[3].check === CheckAnswer.right
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
