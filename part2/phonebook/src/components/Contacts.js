import React from "react";

const Contacts = ({ list }) => {
  return list.map((contact) => (
    <div key={contact.id}>
      {contact.name} {contact.phone}
    </div>
  ));
};

export default Contacts;
