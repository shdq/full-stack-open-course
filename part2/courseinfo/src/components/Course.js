import React from "react";

const Title = ({ children }) => <h2>{children}</h2>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <li key={item.id}>
          {item.name} {item.exercises}
        </li>
      ))}
    </>
  );
};
const Total = ({ parts }) => (
  <p>
    <strong>
      Number of exercises {parts.reduce((acc, cur) => acc + cur.exercises, 0)}
    </strong>
  </p>
);

const Course = ({ course }) => {
  return (
    <>
      <Title>{course.name}</Title>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
