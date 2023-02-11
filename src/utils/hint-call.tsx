import Question from "../components/question";
import hintStyle from "../styles/hint.module.scss";
import { CheckAnswer } from "../types.ts/chaeckAnswer";
import { ICase, IQuestion } from "../types.ts/iquestion";
interface ICallOptions {
    visibleHintCall: boolean
    setVisibleHintCall: Function
    setItemCall: Function
    question: Array<ICase>;
    setTimeOn: Function;
    setTimer: Function;
    shuffleArr:Function;
}

function HintCall(props: ICallOptions) {
    const arrLeters = ['A', 'B', 'C', 'D']
    const arrNumbers=[1,2,3,4,5,6,7,8,9,0]
    function returnQuest() {
        props.setVisibleHintCall(false)
        props.setTimer(30)
        props.setTimeOn(true)
        props.setItemCall(true)
    }
    let answer;
    props.question.forEach((x, i) => x.check === CheckAnswer.right ?
        answer = arrLeters[i] : '')

    return (
        <div style={{ display: props.visibleHintCall ? 'flex' : 'none' }} className={hintStyle.hintWrapper}>
            <div className={hintStyle.hintContainer}> Hint boolean
                
                {/* {props.question.map((x, i) =>
                    (<div key={i}>{arrLeters[i]}--{x.check ? 'TRUEE' : 'FALSEE'}</div>)
                )} */}
                <h1>Здесь будет игра CALL</h1>
                <h2>Answer is:{answer}</h2>
<div className={hintStyle.telephoneWrapper}>
    <div className={hintStyle.telephoneDisplay}></div>
{arrNumbers.map((x,i)=>(
<div className={hintStyle.telephoneBlock} key={i}> {i==9?0:i+1}  </div>


))}


</div>

                <button
                    onClick={returnQuest}
                >Вернуться к вопросу</button>
            </div>

        </div>
    )
}
export default HintCall;