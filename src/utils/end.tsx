import style from '../styles/page-end.module.scss';

const congratulations = {
	0: 'Извините, но вы ничего не выиграли.',
	100: 'Нам жаль, но у вас минимальный бал.',
	200: 'Ваш выигрыш очень скромный.',
	300: 'Не плохая игра, попробуйте еще раз.',
	500: '500 баллов - это уже не плохо.',
	1000: 'У вас первый несгораемый выигрыш.',
	2000: 'Не переживайте, у вас все получиться',
	4000: 'Фраза на 4000 баллов',
	8000: 'Фраза на 8000 баллов',
	16000: 'Фраза на 16000 баллов',
	32000: 'Поздравляем, вам не много не хватило да максимального бала.',
	64000: 'Поздравляем, вы очень хороший программист.'
}

function End(props: {totalPoints: number, repeatGame: Function}) {
	const {totalPoints, repeatGame} = props;
	return (
		<div className={style.wrappage}>
            <div>
				<h1>Игра закончена</h1>
				<p>{congratulations[totalPoints as keyof typeof congratulations]}</p>
				<p>Ваш результат <span className={style.win}>{props.totalPoints}</span> баллов</p>
				<button 
					className={style.buttonagain}
					onClick={() => repeatGame()}>Сыграть еще раз</button>
			</div>
		</div>
	);
}
export default End;