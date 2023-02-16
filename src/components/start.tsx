import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";

function Start({t}: {t: Function}) {
  return (
    <div className='startWrapper'>
      <HexagonButton content={t("signinup.yourprofile")} link="/home" />
      <HexagonButton content={t("signinup.play")} link="/question" />
    </div>
  );
}
export default Start;
