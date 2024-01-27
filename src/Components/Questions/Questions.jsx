import React from "react";

const Questions = ({ questions , persons, setPersons, randomPer}) => {

  //comprobar 
  const checkPerson = (key, option) => {
    const newArr = [...persons].map(per => {
      if(per.key !== option) {
        per.img = '';
        return per;
      }
      return per;
    })

    setPersons(newArr);
  }

  return (
    <div className="b-questions">

      {questions.map((que, i) => (
        <div key={i}>
          <h2> {que.title} </h2>
          {que.questions.map((qu, j)=> (
            <button key={j} onClick={() => checkPerson(que.key, que.qu)}> {qu} </button>
          ) )}
        </div>
      ))}

    </div>
  );
};

export default Questions;
