import PropTypes from 'prop-types';
import { Item, Button } from "./ContactItem.styled"

export const ContactItem = ({ name, number, id, onDeleteClick }) => {
 
    return <Item>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteClick(id)}>Delete</Button>
    </Item>

}

ContactItem.propTypes = {
    onDeleteClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}