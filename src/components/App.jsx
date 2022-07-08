import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  
  handleDataSubmit = (data) => {
    this.setState(() => {
      this.state.contacts.push({ id: nanoid(), name: data.name, number: data.number });      
    })
    console.log(this.state.contacts);
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
        <label>Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.handleInputChange}
            name="filter"
          />
        </label>
        <ul>
          {contactsForRender.length > 0
            ? filteredContacts.map(contact => <li key={contact.id}>{contact.name}:{contact.number}</li>)
            : <p>Contacts list is empty</p>
          }
        </ul>
    </div>
  );
  
}
}

