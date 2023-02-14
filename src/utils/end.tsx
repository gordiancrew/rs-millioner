import { Link, useNavigation } from 'react-router-dom';
import style from '../styles/page-end.module.scss';
import st from "../styles/start.module.scss";


interface IEnd {
	level: number
}

function End(props: IEnd) {
	// const navi = useNavigation()
	let winnerSum;

	if (props.level < 5) {
		winnerSum = 0
	} else if (props.level < 10) {
		winnerSum = 1000
	}
	else if (props.level < 15) {
		winnerSum = 32000
	}
	else {
		winnerSum = 1000000
	}
	return (

		<div className={style.wrappage}>
			
			<h2 className={style.wrapperHeaderWin}>Игра окончена!</h2>
			<h1 className={style.wrapperWin}>Ваш выйгрыш:<br /> {winnerSum}</h1>

			<Link to='/home'
				className={style.buttonagain}
			>Выход в меню</Link>
		</div>
	);
}
export default End;