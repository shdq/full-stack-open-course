import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course: { name } }) => <h1>{name}</h1>;
const Part = ({ data: { name, exercises } }) => (
  <p>
    {name} {exercises}
  </p>
);
const Content = ({ course: { parts } }) => {
  return (
    <>
      <Part data={parts[0]} />
      <Part data={parts[1]} />
      <Part data={parts[2]} />
    </>
  );
};
const Total = ({ course: { parts } }) => (
  <p>
    Number of exercises {parts.reduce((acc, cur) => acc + cur.exercises, 0)}
  </p>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
