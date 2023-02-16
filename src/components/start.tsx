import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";

function Start({t, autorisation}: {t: Function, autorisation: boolean}) {
  return (
    <div className='startWrapper'>
      {
        autorisation ? (
          <HexagonButton content={t("signinup.yourprofile")} link="/profile" />
        ) : null
      }
      <HexagonButton content={t("signinup.play")} link="/question" />
    </div>
  );
}
export default Start;
