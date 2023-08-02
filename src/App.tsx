import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// components
import QuestionCard from './components/QuestionCard';
// types
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [useAnswers, setUseAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchedQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));


  const startTrivia = async () => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }

  const nextQuestion = () => {
  }

  return (
    <div className="App">

    <h1>React Quiz</h1>
    <button className="start" onClick={startTrivia}>Start</button>
    <p className="score">Score</p>
    <p>Loading Questions...</p>
    {/* <QuestionCard />
    <button className="next" onclick={nextQuestion}>Next Question</button> */}
    </div>
  );
}

export default App;


// npm i styled-components @types/styled-components