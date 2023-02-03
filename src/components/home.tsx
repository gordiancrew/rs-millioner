import "../styles/home.module.scss";
import HexagonButton from "../utils/hexagon-button";

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>
        This home-page shows rules of game, your score for previous games, you
        rating, end other things of managering. Example:
        <a href="https://www.mobygames.com/images/shots/l/684797-who-wants-to-be-a-millionaire-junior-windows-screenshot-the.jpg">
          THIS IMAGE
        </a>
      </p>
      <HexagonButton content="правила" link="/" />
      <HexagonButton content="test" link="/" />
      <HexagonButton content="test" link="/" />
    </section>
  );
}
export default Home;
