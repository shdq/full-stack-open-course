import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
);
const Title = ({ children }) => <h2>{children}</h2>;
const Anecdote = ({ text, votes }) => (
  <>
    <p>{text}</p>
    <p>It has {votes} votes</p>
  </>
);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const upVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const pickRandom = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1));
    if (selected !== random) {
      setSelected(random);
      return;
    }
    pickRandom();
  };

  // more readable
  const mostVoted = votes.indexOf(Math.max(...votes));

  // or a fancy one
  
  // const mostVoted = votes.reduce(
  //   (max, cur, index, arr) => (cur > arr[max] ? (max = index) : max),
  //   0
  // );

  return (
    <div>
      <Title>Anecdote of the day</Title>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={upVote}>vote</Button>
      <Button handleClick={pickRandom}>next anectode</Button>
      <Title>Anecdote with most votes</Title>
      <Anecdote text={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
