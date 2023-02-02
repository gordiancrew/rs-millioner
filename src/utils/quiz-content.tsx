import React from "react";
import cl from "../styles/quiz.module.scss";

interface IQuiz {
  ask: string;
  ans0: string;
  ans1: string;
  ans2: string;
  ans3: string;
}

export default function QuizContent(props: IQuiz) {
  return (
    <section className={cl.quiz_section}>
      <div className={cl.question_wrapper}>
        <div className={cl.question_wrapper__horizontLine}></div>
        <div className={cl.question_wrapper__hexagon}>
          <div className={cl.question_content}>
            <h1>{props.ask}</h1>
          </div>
        </div>
        <div className={cl.question_wrapper__horizontLine}></div>
      </div>
      <div className={cl.answer_wrapper}>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div className={cl.line_hexagon__content}>
              <h4>{props.ans0}</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div className={cl.line_hexagon__content}>
              <h4>{props.ans1}</h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
        <div className={cl.answer_wrapper__line}>
          <div className={cl.line}></div>
          <div className={cl.line_hexagon}>
            <div className={cl.line_hexagon__content}>
              <h4>{props.ans2}</h4>
            </div>
          </div>
          <div className={cl.line_middle}></div>
          <div className={cl.line_hexagon}>
            <div className={cl.line_hexagon__content}>
              <h4>{props.ans3}</h4>
            </div>
          </div>
          <div className={cl.line}></div>
        </div>
      </div>
    </section>
  );
}
