import { Link } from "react-router-dom";
import style from "../styles/page-end.module.scss";
import st from "../styles/start.module.scss";
import { IGamer } from "../types.ts/iscore";

interface IEnd {
  totalPoints: number;
  repeatGame: Function;
  level: number;
  keepMoney: boolean;
  t: Function;
}

const win = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

function End(props: IEnd) {
  let currentGamer: IGamer;
  let currentGamerObjectString: string | null;
  let games;
  let score;

  currentGamerObjectString = localStorage.getItem(localStorage.currentName)
  let winnerSum: number;
  if (props.keepMoney) {
    winnerSum = win[props.level - 1];
  } else if (props.level < 5) {
    winnerSum = 0;
  } else if (props.level < 10) {
    winnerSum = 1000;
  } else if (props.level < 14) {
    winnerSum = 32000;
  } else {
    winnerSum = 1000000;
  }
  const { t } = props;


  function updateScore() {
    if (currentGamerObjectString) {
      currentGamer = JSON.parse(currentGamerObjectString)
      games = +currentGamer.games + 1;
      score = +currentGamer.score + winnerSum;
      currentGamer.games = games;
      currentGamer.score = score;
      localStorage.setItem(localStorage.currentName, JSON.stringify(currentGamer))
    }
  }
  return (
    <div className={style.wrappage}>
      <h1>{games}</h1>
      <h2 className={style.wrapperHeaderWin}>{t("gameover.gameover")}</h2>
      <h1 className={style.wrapperWin}>
        {t("gameover.youresult")}
        <br /> {winnerSum}
      </h1>
      <Link to="/home">
        <button
          onClick={updateScore}

          className={st.button_endPage}>{t("gameover.exitmenu")}</button>
      </Link>
    </div>
  );
}
export default End;
