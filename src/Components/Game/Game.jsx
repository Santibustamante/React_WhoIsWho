import React, { useState } from 'react'
import Gallery from '../Gallery/Gallery'
import persons from './persons.js'
import questionsType from './questionsType.js'
import './Game.css'
import Questions from '../Questions/Questions'


const Game = () => {
const [personsb,setPersons] = useState(persons) 
const [questions,setQuestions] = useState(questionsType) 

//seleccionar persona aleatoria al iniciar el programa
const randomIndex = Math.floor(Math.random() * personsb.length);
const randomPerson = personsb[randomIndex];





  return (
  
    <>
      <Gallery persons={personsb}  />  
      <Questions questions={questions} persons={personsb} setPersons={setPersons} randomPer={randomPerson}/>
    </>
  )
}

export default Game