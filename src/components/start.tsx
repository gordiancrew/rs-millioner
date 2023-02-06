import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";
import logo from "../components/logo.png"

function Start() {
  return (
    <div className="start">
     <img className="logo" src={logo}></img>
      {/* <HexagonButton content="home" link="/home" />
      <HexagonButton content="progress" link="/progress" /> */}
      <HexagonButton content="question" link="/question" />
    </div>
  );
}
export default Start;
