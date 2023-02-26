import { useState } from "react";
import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";
import LangButtons from "../utils/lang-buttons";
import Footer from "./footer";

interface IStart {
  changeLng: Function;
  t: Function;
}

function Start({ changeLng, t }: IStart) {
  const [login, setLogin] = useState("");
  function logout() {
    localStorage.removeItem("currentName");
    setLogin(login + "1");
  }

  return (
    <div className="startWrapper">
      {localStorage.currentName ? (
        <div className="autorName">{`${t("signinup.autorised")} "${
          localStorage.currentName
        }"`}</div>
      ) : null}
      <LangButtons changeLng={changeLng} />
      {localStorage.currentName ? (
        <HexagonButton content={t("signinup.yourprofile")} link="/profile" />
      ) : null}
      {localStorage.currentName ? (
        <div onClick={logout} style={{ display: "contents" }}>
          <HexagonButton content={t("signinup.logout")} link="/home" />
        </div>
      ) : null}
      {!localStorage.currentName ? (
        <HexagonButton content={t("signinup.login")} link="/" />
      ) : null}
      <HexagonButton content={t("signinup.play")} link="/question" />
      <HexagonButton content={t("signinup.rules")} link="/rules" />
      <Footer />
    </div>
  );
}
export default Start;
