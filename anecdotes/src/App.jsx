import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const WinnerQuote = (props) => {
  return (
    <div>
      <h1>Winner Quote:</h1>
      <p>{props.text}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [winnerQuote, setWinnerQuote] = useState('')
  console.log(votes)

  const setAnecdoteIndex = () => {
    // I store a random value between 0 and the length of the array into randomIndex
    let randomIndex = (Math.random() * (anecdotes.length))
    console.log(randomIndex)
    // If the random value happens to be 8, in this case the array's length, I'll turn it into 7, because 8 will be out of bounds
    if (randomIndex == anecdotes.length) {
      randomIndex = anecdotes.length - 1
    }
    // Since i need integer indexes, I floor my random value. Since I'm flooring them, I don't care if I get a value over 7 (unless it's 8!)
    randomIndex = Math.floor(randomIndex)
    console.log(randomIndex)
    setSelected(randomIndex)
  }

  const Vote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    //UPDATE WINNER QUOTE
    let maxVotes = Math.max(...newVotes)
    let maxIndex = newVotes.indexOf(maxVotes)
    setWinnerQuote(anecdotes[maxIndex])
  }

  return (
    <div>
      <Button onClick={setAnecdoteIndex} text='Give me another quote!' />
      <Button onClick={Vote} text='Vote!' />
      <p>{anecdotes[selected]}</p>
      <p>Number of votes: {votes[selected]}</p>
      <WinnerQuote text={winnerQuote} />
    </div>
  )
}

export default App