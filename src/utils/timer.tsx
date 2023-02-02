import timerStyle from "../styles/timer.module.scss";

function Timer() {
    const arr: any = [];
    arr.length = 10;
    return (

        <div className={timerStyle.timerBox}>
            <div className={timerStyle.timerProgress}>

               


                
            </div>
            <div className={timerStyle.timerCircle}>12</div>
        </div>
    );

}
export default Timer;