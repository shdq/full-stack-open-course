import React from "react";

const Contacts = ({ list }) => {
  return list.map((contact) => (
    <div key={contact.name}>
      {contact.name} {contact.phone}
    </div>
  ));
};

export default Contacts;
