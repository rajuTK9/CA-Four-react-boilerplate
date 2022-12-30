import React from "react";
import questions from "../questions";

export default function RenderQuestions({ q, next }) {
  function highlight() {
    document.getElementsByClassName("question")[0].classList.add("secondary");
  }

  function rmHighlight() {
    document
      .getElementsByClassName("question")[0]
      .classList.remove("secondary");
  }
  return (
    <>
      <main className="main questionContainer">
        <h5 className="questoinCount">{q + 1} out of 5</h5>
        <h3 className="question">{questions[q].text}</h3>
        <div className="optionsContainer">
          <button className="option btn" id="0" onClick={next}>
            {questions[q].options[0].text}
          </button>
          <button className="option btn" id="1" onClick={next}>
            {questions[q].options[1].text}
          </button>
          <button className="option btn" id="2" onClick={next}>
            {questions[q].options[2].text}
          </button>
          <button className="option btn" id="3" onClick={next}>
            {questions[q].options[3].text}
          </button>
        </div>
      </main>
      <div className="highLightBtnContainer">
        <button className="highlightBtn" onClick={highlight}>
          Highlight
        </button>
        <button className="highlightBtn" onClick={rmHighlight}>
          Remove Highlight
        </button>
      </div>
    </>
  );
}
