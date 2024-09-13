export default function Greeting({ startQuiz }) {
  return (
    <div>
      <img src="/easy-quiz-react/quiz.png" alt="" />
      <h2>Welcome!</h2>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}
