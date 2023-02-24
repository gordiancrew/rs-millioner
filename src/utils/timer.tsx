import { useEffect } from "react";
import timerStyle from "../styles/timer.module.scss";
import { questState } from "../types.ts/iquest-state";
import { musicUrlEnum } from "../types.ts/music-url";
import TimeProgress from "./time-progress";
interface ITimer {
	setTimeOn: Function;
	timeOn: boolean;
	timer: number;
	setTimer: Function;
	setAnswerShema: Function;
	setRightAnswerStyle: Function;
}
let aud = new Audio();
aud.src = musicUrlEnum.badAnswer
function Timer(props: ITimer) {
	useEffect(() => {
		if (props.timer > 0 && props.timeOn) {
			setTimeout(() => props.setTimer((x: number) => x - 1), 1000);
		}
		if (props.timer === 0) {
			setTimeout(
				() => {
					props.setRightAnswerStyle({ backgroundColor: "blue" });
					aud.play()
				},
				2000
			);
			setTimeout(() => props.setAnswerShema(questState.end), 4000);
		}
	});


	return (
		<div className={timerStyle.timerBox}>
			<TimeProgress numb={props.timer} />
			<div className={timerStyle.timerCircle}>{props.timer}</div>
			<TimeProgress numb={props.timer} />
		</div>
	);
}
export default Timer;
