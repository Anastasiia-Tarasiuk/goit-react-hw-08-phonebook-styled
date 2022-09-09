import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { TitleText } from "components/TitleText/TitleText";
import { FormContainer } from "components/Container/Container";
import { SubtitleText } from "components/SubtitleText/SubtitleText";
import { ButtonElement } from "components/ButtonElement/ButtonElement";


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
        <FormContainer>    
            <TitleText text={'Login form'}/>
            <SubtitleText text={'Please, sign in'}/>
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
                <ButtonElement text={'Sign in'} type={"submit"} />
            </Form>
        </FormContainer>
        
    )
};

export default Login;