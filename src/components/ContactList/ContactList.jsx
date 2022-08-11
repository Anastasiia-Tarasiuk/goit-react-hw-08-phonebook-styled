import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";

export const ContactList = () => {

    const contactsFromStore = useSelector(state => state.contacts.items);
    const filterValueFromStore = useSelector(state => state.contacts.filter);

    useEffect(() => {   
        localStorage.setItem('contacts', JSON.stringify(contactsFromStore))
    }, [contactsFromStore]);

    let contactsForRender = null;
    
    if (filterValueFromStore !== "") {
        contactsForRender = contactsFromStore.filter(contact => contact.name.toLowerCase().includes(filterValueFromStore));
    } else {
        contactsForRender = contactsFromStore;
    }
    
    return (
        contactsForRender.length > 0 
        ? <ul>          
            {contactsForRender.map(contact =>
                <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} />)}                
        </ul>
        : <p>Phonebook is empty</p>
    )
}
