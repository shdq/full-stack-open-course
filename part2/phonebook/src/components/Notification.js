import React from "react";

let basicStyles = {
  border: "2px solid",
  borderColor: "green",
  borderRadius: "3px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "green",
  padding: "10px",
  margin: "10px 0",
  width: "200px",
  textAlign: "center",
};

const errorStyles = {
  borderColor: "red",
  color: "red",
};

const Notification = ({ message }) => {
  let styles = basicStyles;
  if (message.error) styles = { ...basicStyles, ...errorStyles };

  return <div style={styles}>{message.text}</div>;
};

export default Notification;
