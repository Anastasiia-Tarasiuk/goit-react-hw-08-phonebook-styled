import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Form, Input, Button, Container, Title, SubTitle, Label} from "./Register.styled";

const Register = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        handleFormReset();
    }
  
    const handleFormReset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
            setName(value);    
                break;
            
            case 'email':
            setEmail(value);    
                break;
            
            case 'password':
            setPassword(value);    
                break;
        
            default:
                return;
        }
    }

  
    return (
        <Container>
            <Title>Register form</Title> 
            <SubTitle>Please, enter the correct information to become a user of Phonebook</SubTitle>
            <Form onSubmit={handleSubmit}>
                <Label>Name
                    <Input type="text" name='name' value={name} onChange={handleChange} required/>
                </Label>
                <Label>Email
                    <Input type="email" name='email' value={email} onChange={handleChange} required/>
                </Label>
                <Label>Password
                    <Input type="password" name='password' value={password} onChange={handleChange} required/>
                </Label>
            <Button type="submit">Register</Button>
            </Form>
        </Container>

    )

};

export default Register;
