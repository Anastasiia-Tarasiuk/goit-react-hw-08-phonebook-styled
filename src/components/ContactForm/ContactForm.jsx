import { useState } from "react";
import { Form, Input, Button } from "./ContactForm.styled";
import { useDispatch } from "react-redux/es/exports";
import { addContact } from "redux/contactsSlice";
import { nanoid } from 'nanoid';
import { useSelector } from "react-redux/es/exports";
import Notiflix from 'notiflix';

export function ContactForm() {
 
    const dispatch = useDispatch();
    const stateContacts = useSelector((state) => state.contacts.items);
    const contactsNames = stateContacts.map(contact => contact.name.toLowerCase());
        
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleFormSubmit = e => {
        e.preventDefault();

        contactsNames.includes(name.toLowerCase())
            ? Notiflix.Notify.failure(`${name} is already in contacts`)
            : dispatch(addContact({ id: nanoid(), name, number })) && handleFormReset();
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
            <Button type="submit">Add contact</Button>
        </Form>
    )
} 
