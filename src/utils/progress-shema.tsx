import { questState } from "../types.ts/iquest-state";

interface IProgress {
  level: number;
  setLevel: Function;
  setAnswerShema: Function;
  setTimer: Function;
  setTimeOn: Function;
}
function ProgressShema(props: IProgress) {
  function progressHundler() {
    props.setAnswerShema(questState.quiz)
    props.setTimer(30)
    props.setTimeOn(true)
  }
  const arr = [100, 200, 300, 400, 500]
  

  return (
    <div>
      <h1>Progress shema. You level is:{props.level}</h1>
      <button onClick={progressHundler}>Next question</button>
      <div >
        {arr.map((x, i) =>
          (<div  style={{backgroundColor: i===props.level?'yellow':'white'}} >{i+1}---{arr[i]}</div>)
        )}
      </div>
    </div>
  );
}
export default ProgressShema;