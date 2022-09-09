import { ContactItem } from "components/ContactItem/ContactItem";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux/es/exports";
import { useGetContactsQuery } from 'redux/contactsSlice';
import { List } from "./ContactList.styled";

export const ContactList = () => {
    const { data, isFetching} = useGetContactsQuery();
    const filterValueFromStore = useSelector(state => state.filter.value);

    let contactsForRender = null;
    
    if (filterValueFromStore !== "") {
        contactsForRender = data.filter(contact => contact.name.toLowerCase().includes(filterValueFromStore));
    } else {
        contactsForRender = data;
    }
    
    return (
        <>
            {!isFetching ?
                (data.length > 0 ?
                    <List>
                    {contactsForRender.map(contact =>
                        <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} />)}
                    </List>
                    : <p>Phonebook is empty</p>
                )
                : <Loader/>
            }
        </>
    )
}
