import { useState } from 'react'

const Title = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}: {value}</td>
    </tr>
  )
}

const Stats = ({ good, neutral, bad, clicks, goodClicks }) => {
  let totalFeedback = good + neutral + bad
  let totalScore = good * 1 + neutral * 0 + bad * (-1)
  let average = totalScore / clicks
  let percentage = 100 * goodClicks / clicks + '%'

  if (totalFeedback === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text='Good' value={good} />
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />
          <StatisticsLine text='Total Feedback' value={totalFeedback} />
          <StatisticsLine text='Average' value={average} />
          <StatisticsLine text='% of Good Feedback' value={percentage} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [goodClicks, setGoodClicks] = useState(0)

  const badFeedback = () => {
    setBad(bad + 1)
    setClicks(clicks + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setClicks(clicks + 1)
  }

  const goodFeedback = () => {
    setGood(good + 1)
    setClicks(clicks + 1)
    setGoodClicks(goodClicks + 1)
  }

  return (
    <div>
      <Title />
      <Button onClick={badFeedback} text='bad' />
      <Button onClick={neutralFeedback} text='neutral' />
      <Button onClick={goodFeedback} text='good' />
      <Stats good={good} neutral={neutral} bad={bad} clicks={clicks} goodClicks={goodClicks} />
    </div>
  )
}

export default App