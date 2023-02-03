import { useEffect, useState } from "react";
import timerStyle from "../styles/timer.module.scss";
import TimeProgress from "./time-progress";

function Timer() {
	const [timer, setTimer] = useState(30);
	

	useEffect(() => {
		let timeGo = setInterval(() => {
			setTimer((x) => (x > 0 ? x - 1 : x));
		}, 1000);
	}, []);
	useEffect(() => {
		if (timer === 0) alert("TIME IS OUT");
	}, [timer]);

	return (
		<div className={timerStyle.timerBox}>
			<TimeProgress numb={timer} />
			<div className={timerStyle.timerCircle}>{timer}</div>
			<TimeProgress numb={timer} />
		</div>
	);
}
export default Timer;
