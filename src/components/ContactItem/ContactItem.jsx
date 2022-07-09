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
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}