import { Link } from "react-router-dom";
import useSound from "use-sound";
import headerStyle from "../styles/question-header.module.scss";
import { questState } from "../types.ts/iquest-state";
import { musicUrlEnum } from "../types.ts/music-url";
interface IHeaderOptions {
  setVisibleHintBoolean: Function;
  setTimeOn: Function;
  itemHintBoolean: boolean;
  setItemHintBoolean: Function;
  itemFiftyFifty: boolean;
  setItemFiftyFifty: Function;
  setFiftyFiftyStyle: Function;
  setTimer: Function;
  setVisibleHintCall: Function;
  itemHintCall: boolean;
  booleanStyle: object;
  setBooleanStyle: Function;
  setKeepMoney: Function;
  setAnswerShema: Function;
  level:number;
}
function QuestionHeader(props: IHeaderOptions) {
  const [playFiftyFifty] = useSound(musicUrlEnum.fiftyFifty);
  function booleanHundler() {
    props.setItemHintBoolean(true);
    props.setBooleanStyle({ display: "flex" });
    props.setTimeOn(false);
    playFiftyFifty();
  }

  function fiftyFiftyHundler() {
    props.setItemFiftyFifty(true);
    props.setFiftyFiftyStyle({
      display: "none",
    });
    props.setTimeOn(false);
    playFiftyFifty();
  }
  function callHundler() {
    props.setVisibleHintCall(true);
    props.setTimeOn(false);
    playFiftyFifty();
  }
  function keepHundler() {
    props.setKeepMoney(true);
    props.setAnswerShema(questState.end)


  }
  return (
    <div className={headerStyle.headerBox}>
      <div className={headerStyle.headerHints}>
        <div
          onClick={!props.itemHintBoolean ? booleanHundler : () => { }}
          style={{ backgroundColor: props.itemHintBoolean ? "black" : "" }}
          className={headerStyle.headerItem}
        >
          Bool
        </div>
        <div
          onClick={!props.itemFiftyFifty ? fiftyFiftyHundler : () => { }}
          style={{ backgroundColor: props.itemFiftyFifty ? "black" : "" }}
          className={headerStyle.headerItem}
        >
          50:50
        </div>
        <div
          onClick={!props.itemHintCall ? callHundler : () => { }}
          style={{ backgroundColor: props.itemHintCall ? "black" : "" }}
          className={headerStyle.headerItem}
        >
         <img
         className={headerStyle.icon}
         src='https://cdn-icons-png.flaticon.com/512/159/159832.png' alt=""></img>
        </div>
      </div>
      <div className={headerStyle.headerHints}>
        <div
      style={{display:props.level===0?'none':''}}
          onClick={keepHundler}
          className={headerStyle.headerItem}>


<img className={headerStyle.icon}
         src='https://cdn-icons-png.flaticon.com/512/2174/2174616.png' alt=""></img>
          </div>

        <Link to="/home" className={headerStyle.headerItem}>
        <img className={headerStyle.icon}
         src='https://cdn.icon-icons.com/icons2/1769/PNG/512/4115235-exit-logout-sign-out_114030.png' alt=""></img>
        </Link>
      </div>
    </div>
  );
}
export default QuestionHeader;
