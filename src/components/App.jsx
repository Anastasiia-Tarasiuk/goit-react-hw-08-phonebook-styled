import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import NotFound from './Not found/Not found';
import Register from 'pages/Register/Register';
import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'auth/authOperations';
import { PrivateRoute } from './PrivateRoute/PravateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export function App() {
   
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
        >

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>} />          
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>}/>
        <Route path="/contacts" element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>}/>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
    </div>
    
    );
}


