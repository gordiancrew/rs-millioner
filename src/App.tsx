import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./components/authorization";
import Home from "./components/home";
import Progress from "./components/progress";
import Question from "./components/question";
import Start from "./components/start";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/question" element={<Question />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;
