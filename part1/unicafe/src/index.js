import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ text }) => <h2>{text}</h2>;
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const Paragraph = ({ text }) => <p>{text}</p>;
const Table = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);
const Row = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ data: { good, neutral, bad } }) => {
  const sum = good + neutral + bad;
  return (
    <>
      <Title text={"Statistics"} />
      {sum ? (
        <Table>
          <Row text={"good"} value={good} />
          <Row text={`neutral`} value={neutral} />
          <Row text={`bad`} value={bad} />
          <Row text={`all`} value={sum} />
          <Row text={`avg`} value={sum / 3} />
          <Row text={`positive`} value={`${good && (good / sum) * 100} %`} />
        </Table>
      ) : (
        <Paragraph text={"No feedback given"} />
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const data = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <>
      <Title text={"Give feedback"} />
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <Statistics data={data} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
