import style from '../styles/page-end.module.scss';
import { congratEn, congratBl, congratRu } from '../data/congratulations';

const languageStorage = localStorage.getItem("languagegame");

function End(props: {totalPoints: number, repeatGame: Function, t: Function}) {
	let congratulations = congratRu;
	if (languageStorage) {
		if (languageStorage === "en") congratulations = congratEn;
		if (languageStorage === "bl") congratulations = congratBl;
	  }
	const {totalPoints, repeatGame, t} = props;
	return (
		<div className={style.wrappage}>
            <div>
				<h1>{t("gameover.gameover")}</h1>
				<p>{congratulations[totalPoints as keyof typeof congratulations]}</p>
				<p>{t("gameover.youresult")} <span className={style.win}>{props.totalPoints}</span> {t("gameover.points")}</p>
				<button 
					className={style.buttonagain}
					onClick={() => repeatGame()}>{t("gameover.playagain")}</button>
			</div>
		</div>
	);
}
export default End;