import { ContactItem } from "components/ContactItem/ContactItem";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux/es/exports";
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
    const { data, isFetching } = useGetContactsQuery();
    const filterValueFromStore = useSelector(state => state.filter.value);

    let contactsForRender = null;
    
    if (filterValueFromStore !== "") {
        contactsForRender = data.filter(contact => contact.name.toLowerCase().includes(filterValueFromStore));
    } else {
        contactsForRender = data;
    }
    
    return (
        <>
            { isFetching && <Loader/>}
            {data &&
                <ul>
                    {contactsForRender.map(contact =>
                        <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.phone} />)}
                </ul>
            }
            
            {/* {data === undefined && <p>Phonebook is empty</p>} */}
        </>
    )
}
