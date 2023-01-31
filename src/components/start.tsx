import { Link } from "react-router-dom";
import "../styles/start.scss";

function Start() {
  return (
    <div>
      <h1>Start page.</h1>
      <p>
        On this page user enters the game using his login and password or
        registers.
      </p>
      <ul>
        List url:
        <li>url "/" - start page (this page)</li>
        <li>
          url "/home" -<Link to="/home"> home page</Link>
        </li>
        <li>
          url "/question" -<Link to="/question"> page of current question</Link>
        </li>
        <li>
          url "/progress" - <Link to="/progress">page of progress</Link>
        </li>
      </ul>
    </div>
  );
}
export default Start;
