import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({ contacts }) => {
    return (
        contacts.length > 0 
        ? <ul>          
            {contacts.map(contact =>
                <ContactItem key={contact.id} name={contact.name} number={contact.number} />)}                
        </ul>
        : <p>Phonebook is empty</p>
    )

}
