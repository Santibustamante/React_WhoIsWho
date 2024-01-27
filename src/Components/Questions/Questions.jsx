import React from "react";

const Questions = ({ questions }) => {
  console.log(questions);
  return (
    <div className="b-questions">
      {questions.map((que, i) => (
        <div key={i}>
          <h2> {que.title} </h2>
          {que.questions.map((qu, i)=> (
            <button> {qu} </button>
          ) )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
