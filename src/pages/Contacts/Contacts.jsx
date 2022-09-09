import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { ScrollUp } from "components/ScrollUp/ScrollUp";
import { TitleText } from "components/TitleText/TitleText";
import { FormContainer } from "components/Container/Container";

const Contacts = () => {

    return (
        <FormContainer>
            <TitleText text={'Phonebook'}/>
            <ContactForm />
            <TitleText text={'Contacts'}/>
            <Filter />
            <ContactList />
            <ScrollUp />
        </FormContainer>
    )
};

export default Contacts;