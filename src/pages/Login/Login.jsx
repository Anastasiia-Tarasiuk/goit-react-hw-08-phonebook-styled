import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Form, Input, Button, Container, Title, SubTitle, Label} from "./Login.styled";

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        handleFormReset();
    }
  
    const handleFormReset = () => {
        setEmail('');
        setPassword('');
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {          
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
            <Title>Login form</Title>
            <SubTitle>Please, sign in</SubTitle>
            <Form onSubmit={handleSubmit}>
                <Label>Email
                    <Input type="email" name='email' value={email} onChange={handleChange} required/>
                </Label>
                <Label>Password
                    <Input type="password" name="password" value={password} onChange={handleChange} required/>
                </Label>
                <Button type="submit">Sign in</Button>
            </Form>
        </Container>
        
    )
};

export default Login;