import { SignInUp } from "./signInUp";
// import { useTranslation } from "react-i18next";
import "../styles/home.scss";

function Home({changeLng, t}: {changeLng: Function, t: Function}) {

  /* const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("languagegame", language);
  } */

  return (
    <div className="page">
        <button onClick={() => changeLng("en")}>EN</button>
        <button onClick={() => changeLng("bl")}>BL</button>
        <button onClick={() => changeLng("ru")}>RU</button>
      <SignInUp t={t}/>
    </div>
  );
}
export default Home;
