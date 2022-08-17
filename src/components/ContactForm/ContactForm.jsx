import { useState } from "react";
import toast from 'react-hot-toast';
import { Form, Input, Button } from "./ContactForm.styled";
import { useAddContactMutation } from "redux/contactsSlice";
// import { useDispatch } from "react-redux/es/exports";
// import { addContact } from "redux/contactsSlice";
// import { useSelector } from "react-redux/es/exports";
// import Notiflix from 'notiflix';

export function ContactForm() {

    const [addContact, {isLoading: isAdding}] = useAddContactMutation(); 
 
    // const dispatch = useDispatch();
    // const stateContacts = useSelector(state => state.contactsApi.queries.getContacts());
    // const contactsNames = stateContacts.map(contact => contact.name.toLowerCase());
        
    // .contactsApi.queries
    // console.dir(stateContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleFormSubmit = e => {
        e.preventDefault();
        addContact({ name, number }) && toast.success('Contact was added') && handleFormReset();

        // toast.success('Contact was added');

        // contactsNames.includes(name.toLowerCase())
        //     ? Notiflix.Notify.failure(`${name} is already in contacts`)
        //     : <p>тут контакти</p> && handleFormReset();
        //     // : dispatch(addContact({ id: nanoid(), name, number })) && handleFormReset();
    }

    const handleFormReset = () => {
        setName('');
        setNumber('');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
            setName(value);    
                break;
            
            case 'number':
            setNumber(value);    
                break;
        
            default:
                return;
        }
    }

    return (            
        <Form onSubmit={handleFormSubmit}>
            <label>Name
                <Input
                value={name}
                onChange={handleInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label>Number
                <Input
                value={number}
                onChange={handleInputChange}
                type="text"
                name="number"              
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <Button type="submit" disabled={isAdding}>{isAdding ? 'Adding contact...' : 'Add contact'}</Button>
        </Form>
    )
} 
