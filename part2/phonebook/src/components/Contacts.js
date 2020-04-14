import React from "react";

const Contacts = ({ list }) => {
  return list.map((contact) => (
    <div key={contact.id}>
      {contact.name} {contact.number}
    </div>
  ));
};

export default Contacts;
