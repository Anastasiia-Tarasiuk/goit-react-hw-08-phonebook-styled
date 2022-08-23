import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async formData => {
    try {
        const { data } = await axios.post('/users/signup', formData);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});


const logIn = createAsyncThunk('auth/login', async formData => {
    try {
        const { data } = await axios.post('/users/login', formData);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const authOperations = {
    register,
    logIn,
}