import React, { useState } from "react";
import { Header1, Header2 } from "./components/Headers";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [searchQuery, setSearchQuerty] = useState("");

  const handleFiltering = (e) => {
    setSearchQuerty(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName === "" || newPhone === "") {
      alert(`Name or phone field is empty`);
      return;
    }

    if (persons.findIndex((person) => person.name === newName) > -1) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([...persons, { name: newName, phone: newPhone }]);
    setNewName("");
    setNewPhone("");
  };

  const filteredContacts = persons.filter((person) => {
    return person.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
  });

  return (
    <div>
      <Header1>Phonebook</Header1>
      <Filter queryValue={searchQuery} onFilterUpdate={handleFiltering} />
      <Header2>Add new contact</Header2>
      <ContactsForm
        nameValue={newName}
        onNameUpdate={handleNameChange}
        phoneValue={newPhone}
        onPhoneUpdate={handlePhoneChange}
        onSubmit={handleSubmit}
      />
      <Header2>Numbers</Header2>
      <Contacts list={filteredContacts} />
    </div>
  );
};

export default App;
