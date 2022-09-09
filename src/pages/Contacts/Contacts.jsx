import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Container, Title } from "./Contacts.styled";
import { ScrollUp } from "components/ScrollUp/ScrollUp";

const Contacts = () => {

    return (
        <Container>
            <Title>Phonebook</Title>
            <ContactForm />
            <Title>Contacts</Title>
            <Filter />
            <ContactList />
            <ScrollUp />
        </Container>
    )
};

export default Contacts;