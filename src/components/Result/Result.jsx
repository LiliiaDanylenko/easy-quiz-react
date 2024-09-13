import { questions } from '../utils/constants'
import './Result.css'

export default function Result({ result, tryAgain }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You answered {result} out of {questions.length} questions correctly</h2>
      <button onClick={tryAgain}>Try again</button>
    </div>
  )
}
