import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";
import LangButtons from "../utils/lang-buttons";

interface IStart {
  changeLng: Function;
  t: Function;
  autorisation: boolean;
}

function Start({changeLng, t, autorisation}: IStart) {
  
  return (
    <div className='startWrapper'>
      <LangButtons changeLng={changeLng} />
      {
        autorisation ? (
          <HexagonButton content={t("signinup.yourprofile")} link="/profile" />
        ) : null
      }
      <HexagonButton content={t("signinup.play")} link="/question" />
      <HexagonButton content={t("signinup.rules")} link="/home" />
    </div>
  );
}
export default Start;
