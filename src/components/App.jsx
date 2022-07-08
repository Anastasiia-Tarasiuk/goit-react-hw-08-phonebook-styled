import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  
  handleDataSubmit = (data) => {
    const newContact = { id: nanoid(), name: data.name, number: data.number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],   
    }))
  }
  
  render() {
    const contactsForRender = this.state.contacts;
    const normalizedSearchValue = this.state.filter.toLocaleLowerCase();
    const filteredContacts = contactsForRender.filter(contact => contact.name.toLowerCase().includes(normalizedSearchValue));

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleDataSubmit}/>
        <h2>Contacts</h2>
        <Filter value={normalizedSearchValue} onChange={this.handleInputChange} />
        <ContactList contacts={filteredContacts} />
    </div>
  );
  
}
}

