import { ContactItem } from "components/ContactItem/ContactItem";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux/es/exports";
import { useGetContactsQuery } from 'redux/contactsSlice';
import { List } from "./ContactList.styled";
import { SubtitleText } from "components/SubtitleText/SubtitleText";

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
                        {contactsForRender.length > 0
                            ? contactsForRender.map(contact => <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} />)
                            : <SubtitleText text={'Here is no such contact in your Phonebook'} />
                        }
                    </List>
                    : <p>Phonebook is empty</p>
                )
                : <Loader/>
            }
        </>
    )
}
