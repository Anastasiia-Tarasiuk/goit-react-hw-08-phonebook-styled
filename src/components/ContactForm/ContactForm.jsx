import React, { Component } from "react";
import { Form, Input, Button } from "./ContactForm.styled";

export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.handleFormReset();
    }

    handleFormReset = () => {
        this.setState({
        name: '',
        number: ''      
        })
    }

    render() {
        return (            
            <Form onSubmit={this.handleFormSubmit}>
                <label>Name
                    <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>
                <label>Number
                    <Input
                    value={this.state.number}
                    onChange={this.handleInputChange}
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
}