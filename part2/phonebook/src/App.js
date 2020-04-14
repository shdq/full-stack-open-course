import React, { useState, useEffect } from "react";
import { Header1, Header2 } from "./components/Headers";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import Filter from "./components/Filter";

import API from "./services/api";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [searchQuery, setSearchQuerty] = useState("");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const list = await API.getAll();
        setPersons(list);
      } catch (err) {
        console.error(err);
      }
    };
    getContacts();
  }, []);

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

    const postData = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    const addNewContact = async () => {
      try {
        const response = await API.create(postData);

        setPersons([
          ...persons,
          { name: response.name, number: response.number, id: response.id },
        ]);
        setNewName("");
        setNewPhone("");
      } catch (err) {
        console.error(err);
      }
    };

    addNewContact();
  };

  let filteredContacts = [];
  if (persons) {
    filteredContacts = persons.filter((person) => {
      return person.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

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
