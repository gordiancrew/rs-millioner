import { Link } from "react-router-dom";
import "../styles/start.scss";
import Hexagon from "../utils/hexagon";

function Start() {
  return (
    <div>
      <h1>Start page.</h1>
      <p>
        On this page user enters the game using his login and password or
        registers.
      </p>
      <Hexagon
        content={
          <Link to="/home">
            <h2>home page</h2>{" "}
          </Link>
        }
      />
      <Hexagon
        content={
          <Link to="/question">
            <h2>page of current question</h2>{" "}
          </Link>
        }
      />
      <Hexagon
        content={
          <Link to="/progress">
            <h2>page of progress</h2>
          </Link>
        }
      />
    </div>
  );
}
export default Start;
