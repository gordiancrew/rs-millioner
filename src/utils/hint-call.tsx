import { useState } from "react";
import useSound from "use-sound";
import hintStyle from "../styles/hint.module.scss";
import { CheckAnswer } from "../types.ts/chaeckAnswer";
import { ICase } from "../types.ts/iquestion";
interface ICallOptions {
  visibleHintCall: boolean;
  setVisibleHintCall: Function;
  setItemCall: Function;
  question: Array<ICase>;
  setTimeOn: Function;
  setTimer: Function;
  shuffleArr: Function;
  t: Function;
}

function HintCall(props: ICallOptions) {
  const arrLeters = ["A", "B", "C", "D"];
  const arrNumbers = [0, 9, 8, 7, 1, 2, 3, 5, 4, 6];
  const { t } = props;

  let arrResult: number[] = [];
  const [gameOver, setGameOver] = useState(false);
  const [currentBlick, setCurrentBlick] = useState(-1);
  const [display, setDisplay] = useState(t("hint.condition"));
  const [playClick] = useSound(
    "https://zvukipro.com/uploads/files/2019-09/1568277966_7ef6b05043704d0.mp3"
  );

  function goGame() {
    setGameOver(true);
    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        setCurrentBlick(i === 10 ? -1 : arrNumbers[i]);
      }, (i + 1) * 1000 + 2000);
    }

    setTimeout(() => setDisplay(t("hint.requirement")), 16000);
  }

  function returnQuest() {
    props.setVisibleHintCall(false);
    props.setTimer(30);
    props.setTimeOn(true);
    props.setItemCall(true);
  }

  function setMemo(num: number) {
    arrResult.push(num);
    playClick();

    if (arrResult.length === 10) {
      let answer: string = "";
      props.question.forEach((x, i) =>
        x.check === CheckAnswer.right ? (answer = arrLeters[i]) : ""
      );
      let count = 0;
      for (let i = 0; i < 10; i++) {
        if (arrNumbers[i] === arrResult[i]) {
          count++;
        }
      }

      let arrPercent = [];

      for (let i = 0; i < 10 - count; i++) {
        arrPercent.push(arrLeters[0] !== answer ? arrLeters[0] : arrLeters[1]);
      }
      for (let i = 0; i < count; i++) {
        arrPercent.push(answer);
      }

      props.shuffleArr(arrPercent);

      console.log(arrNumbers);
      console.log(arrResult);

      setDisplay(
        `${t("hint.probability")} ${count * 10} % ${t("hint.answer")} ${
          arrPercent[0]
        }`
      );
    }
  }

  return (
    <div
      style={{ display: props.visibleHintCall ? "flex" : "none" }}
      className={hintStyle.hintWrapper}
    >
      <div className={hintStyle.hintContainer}>
        <div className={hintStyle.telephoneWrapper}>
          <div className={hintStyle.telephoneDisplay}>{display}</div>
          {arrNumbers.map((x: number, i: number) => (
            <div
              onClick={() => setMemo(i)}
              style={{ backgroundColor: i === currentBlick ? "yellow" : "" }}
              className={hintStyle.telephoneBlock}
              key={i}
            >
              {" "}
              {i === 9 ? 0 : i + 1}
            </div>
          ))}
        </div>
        <button
          className={hintStyle.button}
          style={{ visibility: gameOver ? "hidden" : "visible" }}
          onClick={goGame}
        >
          {t("signinup.play")}
        </button>
        <button onClick={returnQuest} className={hintStyle.button}>
          {t("hint.backToQuestion")}
        </button>
      </div>
    </div>
  );
}
export default HintCall;
