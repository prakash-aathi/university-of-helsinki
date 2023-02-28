import { useState } from 'react'
import Button from './components/Button'
import StatisticLine from './components/StatisticLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { 
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const Statistics = () => {
    return(
      <table>
        <tbody>
          <StatisticLine text="good " value ={good} />
          <StatisticLine text="neutral " value ={neutral} />
          <StatisticLine text="bad " value={bad} />
          {good + neutral + bad === 0 ? <tr><td>No feedback given</td></tr> :
          <>
            <StatisticLine text="all " value={good + neutral + bad} />
            <StatisticLine text="average " value={(good - bad) / (good + neutral + bad)} />
            <StatisticLine text="positive " value={`${good / (good + neutral + bad) * 100} %`} />
          </>}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <h1>Statistics</h1>
      <Statistics />
    </div>
  )
}

export default App