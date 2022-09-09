import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Container, Title, SubTitle } from "./Login.styled";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
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
            <Form onSubmit={handleSubmit} className="w-50 d-flex flex-column justify-content-center">
                <FloatingLabel
                    controlId="floatingEmailInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control
                        placeholder="email"
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingPasswordInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <Button className="mx-auto" variant="primary" type="submit">Sign in</Button>
            </Form>
        </Container>
        
    )
};

export default Login;