import React, { useState } from "react";

const Header2 = ({ children }) => <h2>{children}</h2>;

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
      <h1>Phonebook</h1>
      <div>
        Filter contacts:{" "}
        <input onChange={handleFiltering} value={searchQuery} />
      </div>
      <Header2>Add new contact</Header2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handlePhoneChange} value={newPhone} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <Header2>Numbers</Header2>
      {filteredContacts.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  );
};

export default App;
