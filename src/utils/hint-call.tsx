import { useEffect, useState } from "react";
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
    shuffleArr: Function;
    
}

function HintCall(props: ICallOptions) {
    const arrLeters = ['A', 'B', 'C', 'D']
    const arrNumbers = [0,9,8,7,1,2,3,5,4,6]



    let arrResult: number[] = []
    const [currentBlick, setCurrentBlick] = useState(-1)
    const [display, setDisplay] = useState('Запомните комбинацию цифр!')
    useEffect(()=>props.shuffleArr(arrNumbers),[])
    useEffect(() => {

        for (let i = 0; i <= 10; i++) {
            setTimeout(() => setCurrentBlick(i === 10 ? -1 : arrNumbers[i]), (i + 1) * 1000 + 4000);
        }

        setTimeout(() => setDisplay('Повторите увиденную комбинацию!'), 16000)

    }, []


    )
    function returnQuest() {

        props.setVisibleHintCall(false)
        props.setTimer(30)
        props.setTimeOn(true)
        props.setItemCall(true)
    }
    function setMemo(num: number) {

        arrResult.push(num)
        
        if (arrResult.length === 10) {
            let count = 0;
            for (let i = 0; i < 10; i++) {
                if (arrNumbers[i] === arrResult[i]) {
                    count++;
                }
            }
            console.log(arrNumbers)
            console.log(arrResult)
            setDisplay('вероятность ' + count)

        }


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
                    <div className={hintStyle.telephoneDisplay}>{display}</div>
                    {arrNumbers.map((x, i) => (
                        <div onClick={() => setMemo( i )}
                            style={{ backgroundColor: (i == currentBlick) ? 'yellow' : '' }}
                            className={hintStyle.telephoneBlock} key={i}> {i == 9 ? 0 : i + 1}


                        </div>


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