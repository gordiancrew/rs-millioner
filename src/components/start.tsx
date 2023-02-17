import { useState } from "react";
import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";
import LangButtons from "../utils/lang-buttons";

interface IStart {
  changeLng: Function;
  t: Function;
  autorisation: boolean;
}

function Start({changeLng, t, autorisation}: IStart) {
  const[login,setLogin]=useState('')
  function logout(){
    localStorage.removeItem('currentName')
    setLogin('1')
  }
  
  return (
    <div className='startWrapper'>
       {
        localStorage.currentName ? (
         <div className="autorName">{"Вы авторизированы как \""+localStorage.currentName+"\""}</div>
        ) : null
      }
      <LangButtons changeLng={changeLng} />
      {
        localStorage.currentName ? (
          <HexagonButton content={t("signinup.yourprofile")} link="/profile" />
        ) : null
      }
       {
        localStorage.currentName ? (
          <div onClick={logout}>
          <HexagonButton content={"Разлогинится"} link="/home" />
          </div>
        ) : null
      }
       {
        !localStorage.currentName? (
          <HexagonButton content={"авторизироваться"} link="/" />
        ) : null
      }
      <HexagonButton content={t("signinup.play")} link="/question" />
      <HexagonButton content={t("signinup.rules")} link="/home" />
    </div>
  );
}
export default Start;
