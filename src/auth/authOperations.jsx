import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
}

const register = createAsyncThunk('auth/register', async formData => {
    try {
        const { data } = await axios.post('/users/signup', formData);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error.message);
        const stutusCode = error.response.request.status;
      
        if (stutusCode === 400 ) {
            ErrorMessage('Such user already exists');
        } else {
            ErrorMessage('Something went wrong');
        }        
    }
});


const logIn = createAsyncThunk('auth/login', async formData => {
    try {
        const { data } = await axios.post('/users/login', formData);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error.message);
        const stutusCode = error.response.request.status;
      
        if (stutusCode === 400 ) {
            ErrorMessage('Such user does not exist');
        } else {
            ErrorMessage('Something went wrong');
        }  
    }
});

const logOut = createAsyncThunk('auth/logout', async formData => {
    try {
        await axios.post('/users/logout', formData);
        token.unset();
    } catch (error) {
        console.log(error.message);
        ErrorMessage('Something went wrong');
    }
});

const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }
        
    token.set(persistedToken);  

    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        console.log(error.message);
        ErrorMessage('Something went wrong');
    }
});

export const authOperations = {
    register,
    logIn,
    logOut,
    getCurrentUser,
}