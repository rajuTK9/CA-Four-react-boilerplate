import "./App.css";
import QuestionBox from "./components/QuestionBox";

import React, { useState } from "react";
import Result from "./components/Result";
import questions from "./questions";

export default function App() {
  const [colorTheme, setTheme] = useState("Dark");
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(0);

  function changeTheme() {
    colorTheme === "Light" ? setTheme("Dark") : setTheme("Light");
    document.getElementsByTagName("body")[0].classList.toggle("dark");
  }

  function next(e) {
    let optionId = e.target.id;
    if (q < 5) {
      if (questions[q].options[optionId].isCorrect) {
        setScore((score) => score + 1);
      }
      setQ((q) => q + 1);
    }
  }

  function restart() {
    setQ((q) => 0);
    setScore((s) => 0);
  }

  let mainComponent =
    q < 5 ? (
      <QuestionBox q={q} next={next} />
    ) : (
      <Result score={score} restart={restart} />
    );

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">React Quiz</h1>
        <button className="darkModeBtn" onClick={changeTheme}>
          {colorTheme}
        </button>
      </nav>
      {mainComponent}
    </div>
  );
}
