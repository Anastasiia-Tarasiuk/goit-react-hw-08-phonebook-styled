import PropTypes from 'prop-types';
import { Item, Button } from "./ContactItem.styled";
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {

    const [deleteContact, { isLoading: isDeleting}] = useDeleteContactMutation();
    
    return <Item>
        {name}: {number}
        <Button type="button" disabled={isDeleting} onClick={() => deleteContact(id)}>{isDeleting ? 'Deleting...' : 'Delete'}</Button>
    </Item>

}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}