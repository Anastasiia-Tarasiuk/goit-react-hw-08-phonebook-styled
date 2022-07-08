import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState(() => {
      this.state.contacts.push({ id: nanoid(), name: this.state.name, number: this.state.number });      
    })
    this.handleFormReset();
  }

  handleFormReset = () => {
    this.setState({
      name: '',
      number: ''      
    })
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
        {/* <ContactForm onSubmit={this.handleFormSubmit} contacts={contactsForRender} /> */}
        <form onSubmit={this.handleFormSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <label>Name
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <input
              value={this.state.number}
              onChange={this.handleInputChange}
              type="text"
              name="number"              
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
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

