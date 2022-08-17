import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export function App() {
   
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
        <h1 style={{ color: 'blue'}}>Phonebook</h1>
        <ContactForm/>
      <h2 style={{ color: 'blue' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
}


