import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";

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
        <>        
            <h2>Login form</h2>
            <p>Please, sign in</p>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email" name='email' value={email} onChange={handleChange}/>
                </label>
                <label>Password
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </label>
                <button type="submit">Sign in</button>
            </form>
        </>
        
    )
};

export default Login;