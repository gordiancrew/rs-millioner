import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Progress from "./components/progress";
import Question from "./components/question";
import Start from "./components/start";
import { useState } from "react";
import { useTranslation } from "react-i18next";



function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("languagegame", language);
  }
  const [autorisation, setAutorisation] = useState(false);
  function changeAutoris() {
    setAutorisation(!autorisation);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home t={t} changeAutoris={changeAutoris} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Start 
                                      changeLng={changeLanguage} 
                                      t={t} 
                                      autorisation={autorisation}
                                    />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/question" element={<Question t={t}/>} />
      </Routes>
    </div>
  );
}

export default App;
 