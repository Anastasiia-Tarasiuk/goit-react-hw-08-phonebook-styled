import PropTypes from 'prop-types';
import { Item, Button } from "./ContactItem.styled";
import { useDispatch } from "react-redux/es/exports";
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {

    const dispatch = useDispatch();
    
    return <Item>
        {name}: {number}
        <Button type="button" onClick={() => dispatch(removeContact(id))}>Delete</Button>
    </Item>

}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}