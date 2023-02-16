import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";

function Start({changeLng, t, autorisation}: {changeLng: Function, t: Function, autorisation: boolean}) {
  return (
    <div className='startWrapper'>
      <div>
        <button className="btnlngselect" onClick={() => changeLng("en")}>EN</button>
        <button className="btnlngselect" onClick={() => changeLng("bl")}>BL</button>
        <button className="Start" onClick={() => changeLng("ru")}>RU</button>
      </div>
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
