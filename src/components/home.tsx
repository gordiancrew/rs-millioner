import { SignInUp } from "./signInUp";
import { useTranslation } from "react-i18next";
import "../styles/home.scss";

function Home() {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("languagegame", language);
  }

  return (
    <div className="page">
      {/* <h1>Home</h1>
			<p>This home-page shows rules of game, your score for previous games,
                you rating, end other things of managering.
                Example: 
                <a href="https://www.mobygames.com/images/shots/l/684797-who-wants-to-be-a-millionaire-junior-windows-screenshot-the.jpg">
                    THIS IMAGE
                </a>
            </p> */}
              <button onClick={() => changeLanguage("en")}>EN</button>
              <button onClick={() => changeLanguage("bl")}>BL</button>
              <button onClick={() => changeLanguage("ru")}>RU</button>
      <SignInUp t={t}/>
    </div>
  );
}
export default Home;
