import React, { useEffect, useState } from 'react'
import Gallery from '../Gallery/Gallery'
import persons from './persons.js'
import questionsType from './questionsType.js'
import './Game.css'
import Questions from '../Questions/Questions'


const Game = () => {
const [personsb,setPersons] = useState(persons) 
const [questions,setQuestions] = useState(questionsType) 
const [randomPerson, setRandomPerson] = useState()
//seleccionar persona aleatoria al iniciar el programa


//hacer que randomPerson se le asigne valor solo 1 vez
useEffect(() => {
  const randomIndex = Math.floor(Math.random() * persons.length);
  setRandomPerson(persons[randomIndex]);
}, [persons])




  return (
  
    <>
      <Gallery persons={personsb}  />  
      <Questions questions={questions} persons={personsb} setPersons={setPersons} randomPer={randomPerson}/>
    </>
  )
}

export default Game