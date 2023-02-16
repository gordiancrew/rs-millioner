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
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("bl")}>BL</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      <SignInUp t={t}/>
    </div>
  );
}
export default Home;
