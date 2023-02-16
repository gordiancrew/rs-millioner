import { questState } from "../types.ts/iquest-state";
import progressStyle from "../styles/progress.module.scss";
import { useState } from "react";
import st from "../styles/start.module.scss";

interface IProgress {
  level: number;
  setLevel: Function;
  setAnswerShema: Function;
  setTimer: Function;
  setTimeOn: Function;
  t: Function;
}
function ProgressShema(props: IProgress) {
  function progressHundler() {
    props.setAnswerShema(questState.quiz);
    props.setTimer(30);
    props.setTimeOn(true);
  }
  const arr1 = [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
    250000, 500000, 1000000,
  ];
  const arr = arr1.reverse();

  return (
    <div className={progressStyle.progressWrapper}>
      {/* <h1>Progress shema. You level is:{props.level}</h1> */}
      <div
        style={{
          display: props.level !== 5 && props.level !== 10 ? "none" : "",
        }}
        className={progressStyle.circleSum}
      ></div>
      <div
        style={{
          display: props.level !== 5 && props.level !== 10 ? "none" : "",
        }}
        className={progressStyle.circleText}
      >
        {arr1[15 - props.level]}
      </div>
      <div className={progressStyle.progressBox}>
        {arr.map((x, i) => (
          <div
            key={i}
            // style={{color: (i+1)%5===0? 'red':'black'     }}
            // className={st.progress}
            style={{
              backgroundColor: i === 15 - props.level ? "yellow" : "",
              color:
                i === 5 || i === 10 || i === 0
                  ? "white"
                  : 15 - i > props.level
                  ? "#9e9342"
                  : "black",
            }}
          >
            {i > 5 ? "\u00A0\u00A0" : ""}
            {15 - i}
            <span style={{ color: "white" }}> ⬥ </span>
            {arr[i]}
          </div>
        ))}
        <div className={st.button_progress}>
          <button onClick={progressHundler}>{props.t("gameover.nextquestion")}</button>
        </div>
      </div>
    </div>
  );
}
export default ProgressShema;
