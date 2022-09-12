import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { TitleText } from "components/TitleText/TitleText";
import { FormContainer } from "components/Container/Container";
import { SubtitleText } from "components/SubtitleText/SubtitleText";
import { ButtonElement } from "components/ButtonElement/ButtonElement";

const Register = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
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
        <FormContainer>
            <TitleText text={'Register form'}/>
            <SubtitleText text={'Please, enter the correct information to become a user of Phonebook'}/>
            <Form onSubmit={handleSubmit} className="w-50 d-flex flex-column justify-content-center" style={{marginTop: '20px'}}>
                <FloatingLabel
                    controlId="floatingNameInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control
                        placeholder="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingEmailInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control
                        placeholder="email"
                        type="email"
                        name="email"
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
                <ButtonElement text={'Register'} type={"submit"} />
            </Form>
        </FormContainer>
    )

};

export default Register;
