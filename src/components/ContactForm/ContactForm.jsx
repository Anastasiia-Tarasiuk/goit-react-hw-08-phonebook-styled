import { useState } from "react";
import Notiflix from "notiflix";
import { Form, Input, Button, Label} from "./ContactForm.styled";
import { useAddContactMutation } from "redux/contactsSlice";
import { useGetContactsQuery } from 'redux/contactsSlice';

export function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [addContact, { isLoading: isAdding }] = useAddContactMutation(); 
    const { data } = useGetContactsQuery();

    let contactsNames = [];
    if (data) {
        contactsNames = data.map(contact => contact.name.toLowerCase());
    } 

    const handleFormSubmit = e => {
        e.preventDefault();

        contactsNames.includes(name.toLowerCase())
            ? Notiflix.Notify.warning('Contact already exists')
            : addContact({ name, number: phone }) && handleFormReset();
    }

    const handleFormReset = () => {
        setName('');
        setPhone('');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
            setName(value);    
                break;
            
            case 'number':
            setPhone(value);    
                break;
        
            default:
                return;
        }
    }

    return (            
        <Form onSubmit={handleFormSubmit}>
            <Label>Name
                <Input
                value={name}
                onChange={handleInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </Label>
            <Label>Number
                <Input
                value={phone}
                onChange={handleInputChange}
                type="phone"
                name="number"              
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </Label>
            <Button type="submit" disabled={isAdding}>{isAdding ? 'Adding contact...' : 'Add contact'}</Button>
        </Form>
    )
} 
