export default function Greeting({ startQuiz }) {
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278997.png" />
      <h2>Welcome!</h2>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}
