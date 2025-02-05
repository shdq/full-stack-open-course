import React, { useState, useEffect } from "react";
import { Header1, Header2 } from "./components/Headers";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import API from "./services/api";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const [searchQuery, setSearchQuerty] = useState("");

  const [notification, setNotification] = useState({
    error: false,
    text: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setNotification({
        error: false,
        text: "",
      });
    }, 5000);
  }, [notification]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const list = await API.getAll();
        setPersons(list);
      } catch (err) {
        setNotification({
          error: true,
          text: err.message,
        });
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
      setNotification({
        error: true,
        text: `Name or phone field is empty`,
      });
      return;
    }

    const indexOfExistingPerson = persons.findIndex(
      (person) => person.name === newName
    );
    if (indexOfExistingPerson > -1) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the existing number?`
        )
      ) {
        try {
          const updatedContact = {
            ...persons[indexOfExistingPerson],
            number: newPhone,
          };
          updateContact(updatedContact);
        } catch (err) {
          setNotification({
            error: true,
            text: err.message,
          });
          console.error(err);
        }
      }
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
        setNotification({
          error: false,
          text: `${response.name} added`,
        });
      } catch (err) {
        setNotification({
          error: true,
          text: err.message,
        });
        console.error(err);
      }
    };

    addNewContact();
  };

  const removeContact = async (id) => {
    try {
      await API.remove(id);
      setPersons(persons.filter((contact) => contact.id !== id));
      setNotification({
        error: false,
        text: `Contact removed`,
      });
    } catch (err) {
      setNotification({
        error: true,
        text: err.message,
      });
      console.error(err);
    }
  };

  const updateContact = async (contact) => {
    try {
      const response = await API.update(contact);
      setPersons(
        persons.map((contact) =>
          contact.id === response.id ? response : contact
        )
      );
      setNewName("");
      setNewPhone("");
      setNotification({
        error: false,
        text: `${response.name} phone number updated`,
      });
    } catch (err) {
      setNotification({
        error: true,
        text: err.message,
      });
      console.error(err);
    }
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
      {notification.text !== "" && <Notification message={notification} />}
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
      <Contacts list={filteredContacts} handleRemove={removeContact} />
    </div>
  );
};

export default App;
