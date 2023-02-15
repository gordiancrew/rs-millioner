import { useEffect, useState } from "react";
import useSound from "use-sound";
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
    const arrNumbers = [0, 9, 8, 7, 1, 2, 3, 5, 4, 6]

    let arrResult: number[] = []
    const [gameOver, setGameOver] = useState(false);
    const [currentBlick, setCurrentBlick] = useState(-1)
    const [display, setDisplay] = useState('Запомните комбинацию цифр!')
    const [playClick] = useSound('https://zvukipro.com/uploads/files/2019-09/1568277966_7ef6b05043704d0.mp3');
    // useEffect(()=>props.shuffleArr(arrNumbers),[])
    function goGame() {
setGameOver(true)
        for (let i = 0; i <= 10; i++) {
            setTimeout(() => {
                // playClick()
                setCurrentBlick(i === 10 ? -1 : arrNumbers[i])
                
            }, (i + 1) * 1000 + 2000);
        }

        setTimeout(() => setDisplay('Повторите увиденную комбинацию!'), 16000)

    }






    function returnQuest() {

        props.setVisibleHintCall(false)
        props.setTimer(30)
        props.setTimeOn(true)
        props.setItemCall(true)
    }

    function setMemo(num: number) {


        arrResult.push(num);
        playClick();

        if (arrResult.length === 10) {
            let answer: string = '';
            props.question.forEach((x, i) => x.check === CheckAnswer.right ?
                answer = arrLeters[i] : '')
            let count = 0;
            for (let i = 0; i < 10; i++) {
                if (arrNumbers[i] === arrResult[i]) {
                    count++;
                }
            }

            let arrPercent = [];

            for (let i = 0; i < 10 - count; i++) {

                arrPercent.push(arrLeters[0] !== answer ? arrLeters[0] : arrLeters[1])

            }
            for (let i = 0; i < count; i++) {

                arrPercent.push(answer)

            }

            props.shuffleArr(arrPercent);


            console.log(arrNumbers)
            console.log(arrResult)


            setDisplay('вероятность ' + count * 10 + '% ответ ' + arrPercent[0])

        }


    }


    return (
        <div style={{ display: props.visibleHintCall ? 'flex' : 'none' }} className={hintStyle.hintWrapper}>
            <div className={hintStyle.hintContainer}>
                {/* <h2>Answer is:{answer}</h2> */}
                <div className={hintStyle.telephoneWrapper}>
                    <div className={hintStyle.telephoneDisplay}>{display}</div>
                    {arrNumbers.map((x: number, i: number) => (
                        <div onClick={() => setMemo(i)}
                            style={{ backgroundColor: (i == currentBlick) ? 'yellow' : '' }}
                            className={hintStyle.telephoneBlock} key={i}> {i == 9 ? 0 : i + 1}


                        </div>


                    ))}


                </div>
                <button
                    style={{ display: gameOver ? 'none' : '' }}
                    onClick={goGame}
                >Начать игру</button>
                <button
                    onClick={returnQuest}
                >Вернуться к вопросу</button>
            </div>

        </div>
    )
}
export default HintCall;