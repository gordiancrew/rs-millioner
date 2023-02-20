import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

import Question from "./components/question";
import Start from "./components/start";
import { useTranslation } from "react-i18next";
import { useState } from "react";



function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("languagegame", language);
  }
  const [selectVoice, setSelectVoice] = useState(false);
  function onOffVoice() {
    setSelectVoice(!selectVoice);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home 
                                  t={t}
                                  changeLng={changeLanguage}
                                  onoffvoice={onOffVoice}
                                 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Start 
                                      changeLng={changeLanguage} 
                                      t={t}
                                      onoffvoice={onOffVoice}
                                    />} />

        <Route path="/question" element={<Question t={t} selectvoice={selectVoice}/>} />
      </Routes>
    </div>
  );
}

export default App;
 