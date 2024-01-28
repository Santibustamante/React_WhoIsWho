import React from "react";

const Questions = ({ questions , persons, setPersons, randomPer}) => {

  //comprobar 
  const checkPerson = (e, key, option) => {
    //deshabilitar el botón clicado
    e.target.classList.add('disabled');
    //aña
    const newArr = [...persons].map((per) => per[key] !== option ? {...per, isDisabled: true} : per);
    setPersons(newArr);

  }

  return (
    <div className="b-questions">

      {questions.map((que, i) => (
        <div key={i}>
          <h2> {que.title} </h2>
          {que.questions.map((ans, j)=> (
            <button key={j} onClick={(e) => {checkPerson(e, que.key, ans); console.log(ans, 'soy ans')}}> {ans} </button>
          ) )}
        </div>
      ))}

    </div>
  );
};

export default Questions;
