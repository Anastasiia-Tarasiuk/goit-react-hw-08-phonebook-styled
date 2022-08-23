import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

const Contacts = () => {

    return (
        <>
            <h1 style={{ color: 'blue' }}>Phonebook</h1>
            <ContactForm />
            <h2 style={{ color: 'blue' }}>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
};

export default Contacts;