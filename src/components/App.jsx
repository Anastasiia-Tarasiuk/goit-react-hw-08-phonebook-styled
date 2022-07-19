import { useState, useEffect  } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export function App() {

  const [contacts, setContacts] = useState(() =>  JSON.parse(localStorage.getItem('contacts')) ?? [] );
  const [filter, setFilter] = useState('');

  useEffect(() => {   
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const handleDataSubmit = (data) => {

    const newContact = { id: nanoid(), name: data.name, number: data.number };
    const alertMsg = `${newContact.name} is already in contacts`

    const contactNames = contacts.map(contact => contact.name);
    
    contactNames.includes(newContact.name)
      ? alert(alertMsg)
      : setContacts([...contacts, newContact]);
  }

  const handleFilterInputChange = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  }

  const handleContactDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  
  const normalizedSearchValue = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedSearchValue));

  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
        >
          <h1>Phonebook</h1>
          <ContactForm onSubmit={handleDataSubmit}/>
          <h2>Contacts</h2>
          <Filter value={normalizedSearchValue} onChange={handleFilterInputChange} />
        <ContactList contacts={filteredContacts} onDeleteClick={handleContactDelete} />
      </div>
    );
}


