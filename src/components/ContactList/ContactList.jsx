import PropTypes from 'prop-types';
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


ContactList.propTypes = {
    onDeleteClick: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }))
}