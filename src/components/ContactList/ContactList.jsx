import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        contacts.length > 0 
        ? <ul>          
            {contacts.map(contact =>
                <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDeleteClick={onDeleteClick} />)}                
        </ul>
        : <p>Phonebook is empty</p>
    )

}
