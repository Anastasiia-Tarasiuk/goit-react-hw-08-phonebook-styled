import { Item, Button } from "./ContactItem.styled"

export const ContactItem = ({ name, number, id, onDeleteClick }) => {
 
    return <Item>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteClick(id)}>Delete</Button>
    </Item>

}