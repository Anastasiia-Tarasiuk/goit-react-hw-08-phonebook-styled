import { ContactItem } from "components/ContactItem/ContactItem";
import { Loader } from "components/Loader/Loader";
// import { useSelector } from "react-redux/es/exports";
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
    const { data, isFetching } = useGetContactsQuery();
   

    // const contactsFromStore = useSelector(state => state.contacts.items);
    // const filterValueFromStore = useSelector(state => state.contacts.filter);

    // let contactsForRender = null;
    
    // if (filterValueFromStore !== "") {
    //     contactsForRender = contactsFromStore.filter(contact => contact.name.toLowerCase().includes(filterValueFromStore));
    // } else {
    //     contactsForRender = contactsFromStore;
    // }
    
    return (
        <>
            { isFetching && <Loader/>}
            {data &&
                <ul>
                    {data.map(contact =>
                        <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.phone} />)}
                </ul>
            }
            {/* {data.length <0 && <p>Phonebook is empty</p>} */}
        </>
    )
}
