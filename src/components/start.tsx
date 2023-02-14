import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";

function Start() {
  return (
    <div className='startWrapper'>
      <HexagonButton content="Личный кабинет" link="/home" />
      <HexagonButton content="Играть" link="/question" />
    </div>
  );
}
export default Start;
