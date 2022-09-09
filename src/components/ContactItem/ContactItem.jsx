import PropTypes from 'prop-types';
import { Item, Name, Number } from "./ContactItem.styled";
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Button from 'react-bootstrap/Button';

export const ContactItem = ({ name, number, id }) => {

    const [deleteContact, { isLoading: isDeleting}] = useDeleteContactMutation();
    
    return <Item>
        <Name>{name}:</Name> 
        <Number>{number}</Number>
        
        <Button
            style={{marginLeft: '10px'}}
            variant="primary"
            type="button"
            disabled={isDeleting}
            onClick={() => deleteContact(id)}>
            {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
    </Item>

}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}