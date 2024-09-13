import { useState } from 'react';
import './Quiz.css';
import { questions } from '../utils/constants';
import { shuffleArray } from '../utils/utils';

export default function Quiz({ finishQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const question = questions[currentQuestion];

  const handleAnswer = (variant) => {
    if (currentQuestion === questions.length - 1) {
      if (question.correctAnswer === variant) {
        finishQuiz(result + 1);
      } else {
        finishQuiz(result);
      }
    } else {
      setCurrentQuestion(result => result += 1);
      if (question.correctAnswer === variant) {
        setResult(result => result += 1);
      }
    }
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: Math.round((currentQuestion) / questions.length * 100) + '%' }} className="progress__inner"></div>
      </div>
      <div key={question.title}>
        <h1>{question.title}</h1>
        <ul>
          {shuffleArray(question.variants).map((variant) => (
            <li key={variant} onClick={() => handleAnswer(variant)}>{variant}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
