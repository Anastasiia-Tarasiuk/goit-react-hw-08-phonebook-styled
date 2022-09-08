import { useState } from "react";
import Notiflix from "notiflix";
import { useAddContactMutation } from "redux/contactsSlice";
import { useGetContactsQuery } from 'redux/contactsSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
        <Form onSubmit={handleFormSubmit} className="mb-5 w-50 d-flex flex-column justify-content-center" >
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    placeholder="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Number"
                className="mb-3"
            >
                <Form.Control
                    placeholder="number"
                    autoComplete="off"
                    value={phone}
                    onChange={handleInputChange}
                    type="phone"
                    name="number"              
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </FloatingLabel>   
            <Button className="mx-auto" variant="primary" type="submit" disabled={isAdding}>{isAdding ? 'Adding contact...' : 'Add contact'}</Button>
        </Form>
    )
} 
