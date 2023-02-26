import style from "../styles/profile.module.scss";
import { IGamer } from "../types.ts/iscore";
import HexagonButton from "../utils/hexagon-button";

function Profile() {

        let currentGamer: IGamer;
        let currentGamerObjectString: string | null;
        let games:string='';
        let score;
        currentGamerObjectString = localStorage.getItem(localStorage.currentName)
        if (currentGamerObjectString) {
            currentGamer = JSON.parse(currentGamerObjectString)
            games = currentGamer.games.toString()
            score = currentGamer.score
           
        }
    
    return (
        <div className={style.wrapprofile}>
          
            <h2>{"Суммарный выйгрыш: "+score}  </h2>
            <h2>{"Количество игр: "+games}</h2>
            <HexagonButton content={"В меню"} link="/home" />
        </div>
    );
}
export default Profile;