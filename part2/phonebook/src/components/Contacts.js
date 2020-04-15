import React from "react";

const Contacts = ({ list, handleRemove }) => {
  return list.map((contact) => (
    <div key={contact.id}>
      {contact.name} {contact.number}{" "}
      <button
        onClick={() => {
          handleRemove(contact.id);
        }}
      >
        delete
      </button>
    </div>
  ));
};

export default Contacts;
