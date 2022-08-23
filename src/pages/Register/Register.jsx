import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";

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
        <>
            <h2>Register form</h2> 
            <p>Please, enter the correct information to become a user of Phonebook</p>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name='name' value={name} onChange={handleChange} />
                </label>
                <label>Email
                    <input type="email" name='email' value={email} onChange={handleChange}/>
                </label>
                <label>Password
                    <input type="password" name='password' value={password} onChange={handleChange}/>
                </label>
            <button type="submit">Register</button>
            </form>
        </>

    )

};

export default Register;
