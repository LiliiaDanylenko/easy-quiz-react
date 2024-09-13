import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting/Greeting';
import Game from './components/Quiz/Quiz';
import Result from './components/Result/Result';

function App() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(0);

  const startQuiz = () => {
    setStep(1);
    setResult(0);
  }
  
  const finishQuiz = (result) => {
    setStep(2);
    setResult(result);
  }

  const tryAgain = () => {
    setStep(0);
    setResult(0);
  }

  return (
    <>
      {step === 0 && (<Greeting startQuiz={startQuiz} />)}
      {step === 1 && (<Game finishQuiz={finishQuiz} />)}
      {step === 2 && (<Result result={result} tryAgain={tryAgain} />)}
    </>
  )
}

export default App
