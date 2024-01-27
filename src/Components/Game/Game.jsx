import React, { useState } from 'react'
import Gallery from '../Gallery/Gallery'
import persons from './persons.js'
import questionsType from './questionsType.js'
import './Game.css'
import Questions from '../Questions/Questions'


const Game = () => {
const [personsb,setPersons] = useState(persons) 
const [questions,setQuestions] = useState(questionsType) 


  return (
  
    <>
      <Gallery persons={personsb}  />  
      <Questions questions={questions} />
    </>
  )
}

export default Game
